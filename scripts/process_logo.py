from PIL import Image

SRC = "karvi-care-logo.png"
im = Image.open(SRC).convert("RGBA")
w, h = im.size
px = im.load()

def is_near_white(r, g, b, tol=18):
    return r > 255 - tol and g > 255 - tol and b > 255 - tol

# 1) Full lockup with background removed (white -> transparent), light edge feather
out = Image.new("RGBA", (w, h))
opx = out.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if is_near_white(r, g, b):
            opx[x, y] = (r, g, b, 0)
        else:
            opx[x, y] = (r, g, b, 255)
out.save("public/logo-full.png")
print("saved public/logo-full.png", out.size)

# 2) Find bounding box of the icon mark (search left ~28% of width for non-white pixels)
icon_search_w = 520
min_x, min_y, max_x, max_y = icon_search_w, h, 0, 0
for y in range(h):
    for x in range(icon_search_w):
        r, g, b, a = px[x, y]
        if not is_near_white(r, g, b):
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

pad = 10
min_x = max(0, min_x - pad)
min_y = max(0, min_y - pad)
max_x = min(icon_search_w, max_x + pad)
max_y = min(h, max_y + pad)
icon = out.crop((min_x, min_y, max_x, max_y))
print("icon bbox:", (min_x, min_y, max_x, max_y), "size:", icon.size)

# pad icon to a square canvas so it isn't distorted when used as a square mark/favicon
iw, ih = icon.size
side = max(iw, ih)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(icon, ((side - iw) // 2, (side - ih) // 2), icon)
square.save("public/logo-icon.png")
print("saved public/logo-icon.png", square.size)

# 3) Favicon-sized PNGs from the square icon
for size in (32, 180, 512):
    fav = square.resize((size, size), Image.LANCZOS)
    fav.save(f"public/favicon-{size}.png")
print("saved favicons")
