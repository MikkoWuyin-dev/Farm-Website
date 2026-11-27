import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { PLACEHOLDER } from '../data/assets';
import { Icon } from './Icon';

/* ------------------------------------------------------------------ *
 * Img — CDN image with graceful fallback + no referrer
 * ------------------------------------------------------------------ */
type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  eager?: boolean;
  style?: React.CSSProperties;
};

export function Img({ src, alt, className, width, height, eager, style }: ImgProps) {
  const [source, setSource] = useState(src);

  useEffect(() => setSource(src), [src]);

  return (
    <img
      src={source}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setSource(PLACEHOLDER)}
    />
  );
}

/* ------------------------------------------------------------------ *
 * Reveal — scroll-in animation wrapper
 * ------------------------------------------------------------------ */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'span';
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ *
 * Button — anchor styled like the theme's .agrarium-button
 * ------------------------------------------------------------------ */
export function Button({
  children,
  href = '#',
  variant = 'primary',
  wide,
  arrow,
  className = '',
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  wide?: boolean;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const classes = [
    'btn',
    variant !== 'primary' ? `btn--${variant}` : '',
    wide ? 'btn--wide' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={classes} href={href} onClick={onClick}>
      <span>{children}</span>
      {arrow && (
        <span className="btn__arrow">
          <Icon name="arrow-right" size={17} />
        </span>
      )}
    </a>
  );
}

/* ------------------------------------------------------------------ *
 * SectionHeading
 * ------------------------------------------------------------------ */
export function SectionHeading({
  sub,
  title,
  text,
  align = 'center',
  level = 2,
  className = '',
}: {
  sub?: string;
  title: ReactNode;
  text?: string;
  align?: 'center' | 'left';
  level?: 2 | 3;
  className?: string;
}) {
  const Tag = level === 2 ? 'h2' : 'h3';
  return (
    <div className={`heading heading--${align}${className ? ` ${className}` : ''}`}>
      {sub && <span className="heading__sub">{sub}</span>}
      <Tag className="heading__title">{title}</Tag>
      {text && <p className="heading__text">{text}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * useCountUp — animates 0 → target once the element is on screen
 * ------------------------------------------------------------------ */
export function useCountUp<T extends HTMLElement>(value: number) {
  const ref = useRef<T | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  const run = useCallback(() => {
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            run();
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [run]);

  return { ref, display };
}

/* ------------------------------------------------------------------ *
 * Counter — the theme's elementor-counter
 * ------------------------------------------------------------------ */
export function Counter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const { ref, display } = useCountUp<HTMLDivElement>(value);

  return (
    <div ref={ref} className="counter">
      <div className="counter__num">
        {display}
        {suffix}
      </div>
      <div className="counter__label">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Socials
 * ------------------------------------------------------------------ */
export function Socials({ items }: { items: { label: string; href: string }[] }) {
  const map: Record<string, 'twitter' | 'facebook' | 'youtube' | 'instagram'> = {
    Twitter: 'twitter',
    Facebook: 'facebook',
    Youtube: 'youtube',
    Instagram: 'instagram',
  };

  return (
    <ul className="socials">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.label}>
            <Icon name={map[item.label] ?? 'twitter'} size={17} />
          </a>
        </li>
      ))}
    </ul>
  );
}
