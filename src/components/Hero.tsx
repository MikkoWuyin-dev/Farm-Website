import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from '../data/content';
import { IMG } from '../data/assets';
import { Icon } from './Icon';
import { Button, Img } from './ui';

const LIGHT_SLIDES = new Set(['organic-vegetables']);

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [video, setVideo] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || video) return;
    timer.current = window.setTimeout(() => go(index + 1), 7000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, paused, video, go]);

  useEffect(() => {
    document.body.style.overflow = video ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setVideo(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [video]);

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="Agrarium highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={[
            'hero__slide',
            i === index ? 'is-active' : '',
            LIGHT_SLIDES.has(slide.id) ? 'hero__slide--light' : 'hero__slide--dark-text',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden={i !== index}
        >
          <div className="hero__bg" style={{ backgroundImage: `url("${slide.image}")` }} />
          <div className="hero__overlay" />
          <div className="hero__inner container">
            <div className={`hero__content hero__content--${slide.align}`}>
              {i === 0 ? (
                <h1 className={`hero__title hero__title--${slide.variant}`}>{slide.title}</h1>
              ) : (
                <h2 className={`hero__title hero__title--${slide.variant}`}>{slide.title}</h2>
              )}
              <p className="hero__promo">{slide.text}</p>
              <div className="hero__cta">
                <Button href={slide.cta.href} wide arrow>
                  {slide.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="hero__video" type="button" onClick={() => setVideo(true)}>
        <span className="play-dot">
          <Icon name="play" size={18} />
        </span>
        <span>Watch Our Video</span>
      </button>

      <div className="hero-slide-num" role="tablist" aria-label="Slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            className={`hero-slide-num__btn${i === index ? ' is-active' : ''}`}
            onClick={() => go(i)}
          >
            0{i + 1} <span>/ 0{SLIDES.length}</span>
          </button>
        ))}
      </div>

      <div className="hero__side">
        <a className="hero__side-link" href="#about">
          Scroll To
        </a>
        <span className="hero__side-line" />
      </div>

      <div className={`lightbox${video ? ' is-open' : ''}`} onClick={() => setVideo(false)}>
        <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox__close icon-btn" type="button" onClick={() => setVideo(false)} aria-label="Close video">
            <Icon name="close" size={26} />
          </button>
          <Img src={IMG.heroField} alt="Agrarium farm video preview" eager />
          <div className="lightbox__caption">
            This preview build ships without the theme&rsquo;s MP4 (media binaries are hosted on the Agrarium
            CDN). Drop your own video into <code>public/media/</code> to play it here.
          </div>
        </div>
      </div>
    </section>
  );
}
