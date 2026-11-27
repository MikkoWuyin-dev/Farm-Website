import type { SVGProps } from 'react';

export type IconName =
  | 'pin'
  | 'phone'
  | 'mail'
  | 'twitter'
  | 'facebook'
  | 'youtube'
  | 'instagram'
  | 'cart'
  | 'heart'
  | 'search'
  | 'user'
  | 'chevron-down'
  | 'chevron-right'
  | 'arrow-right'
  | 'arrow-up'
  | 'play'
  | 'close'
  | 'menu'
  | 'cereals'
  | 'wheat'
  | 'gardening'
  | 'livestock'
  | 'veggies'
  | 'tractor'
  | 'calendar'
  | 'leaf';

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const PATHS: Record<IconName, JSX.Element> = {
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: (
    <path d="M5 3h3l2 5-2.2 1.5a12 12 0 0 0 5.7 5.7L15 13l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  twitter: (
    <path d="M21 5.9a7.2 7.2 0 0 1-2 .6 3.5 3.5 0 0 0 1.5-1.9c-.7.4-1.5.7-2.3.9a3.5 3.5 0 0 0-6 3.2A9.9 9.9 0 0 1 4.3 4.9a3.5 3.5 0 0 0 1.1 4.7 3.4 3.4 0 0 1-1.6-.5 3.5 3.5 0 0 0 2.8 3.4c-.5.2-1 .2-1.6.1a3.5 3.5 0 0 0 3.3 2.4A10 10 0 0 1 3 16.7a14 14 0 0 0 7.6 2.2c9 0 14-7.5 14-14v-.6A9.9 9.9 0 0 0 21 5.9Z" />
  ),
  facebook: <path d="M14.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6A21 21 0 0 0 15.5 3c-2.4 0-4 1.4-4 4.1v2.8H9v3.1h2.5v8Z" />,
  youtube: (
    <>
      <rect x="2.6" y="6" width="18.8" height="12" rx="4" />
      <path d="m10.4 9.6 5 2.4-5 2.4Z" fill="currentColor" stroke="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.4 11.2A2 2 0 0 0 9.5 17h8.6a2 2 0 0 0 1.9-1.4L21.5 8H6" />
      <circle cx="10" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3C19.5 15.4 12 20 12 20Z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.4" />
      <path d="m16 16 4.4 4.4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.4" r="3.6" />
      <path d="M4.8 20.4a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  'chevron-down': <path d="m6 9.5 6 6 6-6" />,
  'chevron-right': <path d="m9.5 6 6 6-6 6" />,
  'arrow-right': (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  'arrow-up': (
    <>
      <path d="M12 20V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  play: <path d="M9 6.5 18 12l-9 5.5Z" fill="currentColor" stroke="none" />,
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h11" />
    </>
  ),
  /* ---- agriculture glyphs (theme-style line art) ---- */
  cereals: (
    <>
      <path d="M12 21V9" />
      <path d="M12 9c0-2.2 1.6-4 3.6-4 0 2.2-1.6 4-3.6 4Z" />
      <path d="M12 9c0-2.2-1.6-4-3.6-4 0 2.2 1.6 4 3.6 4Z" />
      <path d="M12 14c0-2.2 1.6-4 3.6-4 0 2.2-1.6 4-3.6 4Z" />
      <path d="M12 14c0-2.2-1.6-4-3.6-4 0 2.2 1.6 4 3.6 4Z" />
      <path d="M12 19c0-2.2 1.6-4 3.6-4 0 2.2-1.6 4-3.6 4Z" />
      <path d="M12 19c0-2.2-1.6-4-3.6-4 0 2.2 1.6 4 3.6 4Z" />
      <path d="M12 9V4" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 21V8" />
      <path d="M12 8C10 8 8.4 6.4 8.4 4.4c2 0 3.6 1.6 3.6 3.6Z" />
      <path d="M12 8c2 0 3.6-1.6 3.6-3.6C13.6 4.4 12 6 12 8Z" />
      <path d="M12 13c-2 0-3.6-1.6-3.6-3.6 2 0 3.6 1.6 3.6 3.6Z" />
      <path d="M12 13c2 0 3.6-1.6 3.6-3.6-2 0-3.6 1.6-3.6 3.6Z" />
      <path d="M12 18c-2 0-3.6-1.6-3.6-3.6 2 0 3.6 1.6 3.6 3.6Z" />
      <path d="M12 18c2 0 3.6-1.6 3.6-3.6-2 0-3.6 1.6-3.6 3.6Z" />
    </>
  ),
  gardening: (
    <>
      <path d="M5 20c0-6 4.6-11 11-11 0 6-4.6 11-11 11Z" />
      <path d="M5 20c4-1.6 6.6-4.6 8-8" />
      <path d="M16 4v5" />
      <circle cx="16" cy="3" r="1.4" />
    </>
  ),
  livestock: (
    <>
      <path d="M6 10c0-2 1.8-3.6 4-3.6h4c2.2 0 4 1.6 4 3.6v5.4c0 1-.8 1.8-1.8 1.8H7.8C6.8 17.2 6 16.4 6 15.4Z" />
      <path d="M10 6.4V4.2M14 6.4V4.2" />
      <circle cx="10" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <path d="M10.6 14.4h2.8" />
      <path d="M6 19.6v1.6M18 19.6v1.6" />
    </>
  ),
  veggies: (
    <>
      <path d="M12 20c-3.4 0-6-2.6-6-5.8C6 10.6 9 8 12 8s6 2.6 6 6.2C18 17.4 15.4 20 12 20Z" />
      <path d="M12 8V5" />
      <path d="M12 5c-1.8 0-3.2-1.4-3.2-3.2C10.6 1.8 12 3.2 12 5Z" />
      <path d="M12 5c1.8 0 3.2-1.4 3.2-3.2C13.4 1.8 12 3.2 12 5Z" />
    </>
  ),
  tractor: (
    <>
      <circle cx="8" cy="16.6" r="3.6" />
      <circle cx="18.4" cy="17.4" r="2.4" />
      <path d="M4 10.4h6.4l1.6 5" />
      <path d="M11 8h5.2l1.4 6.2" />
      <path d="M4 10.4V8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2" />
      <path d="M3.6 10h16.8M8.4 3.6v3.6M15.6 3.6v3.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-8 0-14 4.4-14 10.4 0 2 .8 3.8 2 5.1C9.6 12.6 13.8 9.4 20 8.6" />
      <path d="M20 4c0 8-4.4 14-10.4 14" />
    </>
  ),
};

export function Icon({ name, size = 20, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
