/**
 * Asset map.
 *
 * The original demo ships its photography through the theme's CDN
 * (8ded8880.rocketcdn.me). Binary downloads are not permitted from this build
 * sandbox, so every photographic asset is referenced from that CDN with
 * `referrerPolicy="no-referrer"` (see <Img />) and an on-error fallback.
 *
 * To make the build fully self-contained, run `node tools/download-assets.mjs`
 * from a machine with internet access — it mirrors every URL below into
 * `public/media/` and rewrites `CDN` to `''` via the generated manifest.
 */

export const CDN = 'https://8ded8880.rocketcdn.me/themes/agrarium/wp-content';

/**
 * Set to `true` (or run `npm run assets:local`) after mirroring the media with
 * `node tools/download-assets.mjs`, which writes everything into `public/media`.
 */
const useLocalMedia = false;
const LOCAL_MEDIA = '/media';

const u = (path: string) => `${useLocalMedia ? LOCAL_MEDIA : CDN}/${path}`;

export const IMG = {
  // Brand
  logoLight: u('uploads/2021/09/%D0%A1%D0%BB%D0%BE%D0%B9-1.png'),
  logoDark: u('uploads/2024/08/logo_2-%D1%85.png'),

  // Hero slider (backgrounds come straight from the Elementor page CSS)
  heroSven: u('uploads/2026/11/sven-wilhelm-2cRXSWyMHA8-unsplash-scaled-2.jpg'),
  heroOrganic: u('uploads/2021/10/ezgif.com-gif-maker.jpg'),
  heroField: u('uploads/2021/10/Layer-593.jpg'),

  // About
  aboutMain: u(
    'uploads/2024/07/man-with-showing-harvest-holding-basket-full-red-delicious-apples_7502-1231-e1628495888683.jpg',
  ),
  aboutSmall: u('uploads/2021/10/Layer-562.png'),
  signature: u('uploads/2021/08/signature.png'),

  // Decorative shapes
  shape4: u('uploads/2021/08/Shape-4.png'),
  shape4b: u('uploads/2021/08/Shape-4-1.png'),
  shapeWheat: u('uploads/2021/08/Vector-Smart-Object.png'),

  // Wide "Agrarium" banner + 4-up banner grid
  giantBanner: u('uploads/2021/10/Layer-648.jpg'),
  bannerVege: u('uploads/2021/10/Layer-5-min.png'),
  bannerFruit: u('uploads/2021/10/Layer-6-min.png'),
  bannerFarm: u('uploads/2021/10/Layer-26-min.png'),
  bannerDairy: u('uploads/2021/10/Layer-11-min.png'),

  // Dark services block
  darkMain: u('uploads/2021/10/Layer-731-1.jpg'),
  darkSmall: u('uploads/2021/10/Layer-636.jpg'),

  // Benefits / "creative things"
  benefitsBg: u('uploads/2021/08/Layer-3-copy.png'),
  benefitsPhoto: u('uploads/2021/10/6004.jpg'),

  // Products
  p1: u('uploads/2021/10/Layer-566.jpg'),
  p2: u('uploads/2021/10/Layer-687.jpg'),
  p3: u('uploads/2021/10/Image-1-1.jpg'),
  p4: u('uploads/2021/10/Image-2-1.jpg'),
  p5: u('uploads/2021/10/Layer-652.jpg'),
  p6: u('uploads/2021/10/Image-5.jpg'),
  p7: u('uploads/2021/10/pina-messina-Oc3fP0FXJbU-unsplash.jpg'),
  p8: u('uploads/2021/10/kristaps-ungurs-CDjqENI2XZE-unsplash.jpg-scaled.jpg'),

  // "Best products" illustrations
  vegBroccoli: u('uploads/2021/08/Vector-Smart-Object-1.png'),
  vegCabbage: u('uploads/2021/08/Vector-Smart-Object-2.png'),
  vegTomato: u('uploads/2021/08/Vector-Smart-Object-3.png'),
  vegPumpkin: u('uploads/2021/08/Vector-Smart-Object-4.png'),
  vegCorn: u('uploads/2021/08/Vector-Smart-Object-5.png'),
  vegPotato: u('uploads/2021/08/Vector-Smart-Object-6.png'),

  // Gallery
  g1: u('uploads/2021/10/Layer-731-1.jpg'),
  g2: u('uploads/2021/10/Layer-636.jpg'),
  g3: u('uploads/2021/10/Layer-566.jpg'),
  g4: u('uploads/2021/10/Image-1-1.jpg'),
  g5: u('uploads/2021/10/Layer-687.jpg'),
  g6: u('uploads/2021/10/Image-2-1.jpg'),

  // Testimonials
  avatarA: u('uploads/2021/10/Layer-561-min.png'),
  avatarB: u('uploads/2024/07/Layer-543.png'),

  // Blog
  post1: u('uploads/2021/08/timothy-eberly-XemjjFd_4qE-unsplash-scaled-600x470.jpg'),
  post2: u('uploads/2021/08/3-scaled-600x470.jpg'),
  post3: u('uploads/2021/08/christian-widell-vrT3Z9UKFEg-unsplash-scaled-600x470.jpg'),

  // Client / partner logos
  client1: u('uploads/2021/06/client-logo-1.png'),
  client2: u('uploads/2021/06/client-logo-2.png'),
  client3: u('uploads/2021/06/client-logo-3.png'),
  client4: u('uploads/2021/06/client-logo-4.png'),
  client5: u('uploads/2021/06/client-logo-5.png'),
  client6: u('uploads/2021/07/Logo.png'),

  // Page title decoration used by the contacts block
  titleDeco: u('uploads/2022/01/page-title-icon.png'),
} as const;

/** Neutral placeholder used when a CDN asset is unreachable. */
export const PLACEHOLDER =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EFE7D8"/><stop offset="1" stop-color="#DCCDB4"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><g fill="none" stroke="#B9A98D" stroke-width="3" opacity=".6"><path d="M300 380c0-60 45-105 100-105s100 45 100 105"/><path d="M400 275v-40"/><path d="M400 235c-30 0-52-22-52-52 30 0 52 22 52 52Z"/><path d="M400 235c30 0 52-22 52-52-30 0-52 22-52 52Z"/></g></svg>`,
  );
