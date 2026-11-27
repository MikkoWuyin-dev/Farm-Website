import { ABOUT, BANNERS, CLIENTS, GIANT_TEXT } from '../../data/content';
import { IMG } from '../../data/assets';
import { Button, Img, Reveal, SectionHeading } from '../ui';
import { Icon } from '../Icon';

/* ------------------------------------------------------------------ */
export function Clients() {
  return (
    <section className="clients-section">
      <div className="container">
        <Reveal className="clients">
          <ul className="clients__row">
            {CLIENTS.map((logo, i) => (
              <li key={logo}>
                <Img src={logo} alt={`Agrarium partner logo ${i + 1}`} className="clients__logo" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal>
            <div className="about__media">
              <Img src={IMG.aboutMain} alt="Farmer holding a basket of freshly harvested apples" className="about__media-main" />
              <Img src={IMG.aboutSmall} alt="Agrarium harvest" className="about__media-small" />
              <div className="about__badge">
                100%
                <br />
                Organic
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about__body">
              <SectionHeading sub={ABOUT.sub} title={ABOUT.heading} align="left" />
              <p className="about__lead">{ABOUT.lead}</p>
              <p className="about__text">{ABOUT.text}</p>

              <div className="about__sign">
                <Img src={IMG.signature} alt="Agrarium founder signature" />
                <div className="about__author">
                  {ABOUT.author}
                  <span>Founder &amp; CEO</span>
                </div>
              </div>

              <div className="about__cta">
                <Button href={ABOUT.cta.href} arrow>
                  {ABOUT.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function GiantBanner() {
  return (
    <section
      className="giant"
      aria-label="Agrarium fields"
      style={{ backgroundImage: `url("${IMG.giantBanner}")` }}
    >
      <div className="giant__text">{GIANT_TEXT}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function Banners() {
  return (
    <section className="banners" aria-label="Categories">
      <div className="container container--wide">
        <div className="banners__grid">
          {BANNERS.map((banner, i) => (
            <Reveal key={banner.title} delay={i * 90}>
              <a className="banner" href="#products">
                <Img src={banner.image} alt={banner.title} className="banner__bg" />
                <span className="banner__overlay" />
                <span className="banner__content">
                  <span className="banner__title">{banner.title}</span>
                  <span className="banner__more">
                    Explore <Icon name="arrow-right" size={15} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
