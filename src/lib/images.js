// Curated, freely-licensed Unsplash photography (unsplash.com/license — free for commercial use).
// Centralised here so URLs/params are easy to swap later for real Karvi Care team/participant photos.
const unsplash = (id, params = 'auto=format&fit=crop&w=1600&q=80') =>
  `https://images.unsplash.com/${id}?${params}`

export const images = {
  homeHero: unsplash('photo-1732194439368-4655fd0ea955'),
  aboutDailyLiving: unsplash('photo-1732194438396-394d2b7c2436'),
  servicePersonalCare: unsplash('photo-1762955911431-4c44c7c3f408'),
  serviceCommunity: unsplash('photo-1732194438700-c7eb8cc16cb6'),
  serviceHousehold: unsplash('photo-1633466159898-6f5b1a7b5a79'),
  serviceSil: unsplash('photo-1543333995-a78aea2eee50'),
  missionUnity: unsplash('photo-1630068846062-3ffe78aa5049'),
  trustCircle: unsplash('photo-1745962979027-c5e51183cf40'),
  contactHero: unsplash('photo-1723433892471-62f113c8c9a0'),
  aboutTeam: unsplash('photo-1709127347878-bd27e64d1e3e'),
}
