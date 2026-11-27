import { BENEFITS, BENEFITS_TWO, DARK_SECTION } from '../../data/content';
import { IMG } from '../../data/assets';
import { Button, Img, Reveal, SectionHeading, useCountUp } from '../ui';
import { Icon } from '../Icon';

/* ------------------------------------------------------------------ */
export function DarkSection() {
  return (
    <section className="dark-section" id="services">
      <div className="container">
        <div className="dark-section__grid">
          <Reveal>
            <div className="dark-section__media">
              <Img src={IMG.darkMain} alt="Agrarium wheat field" className="dark-section__media-main" />
              <Img src={IMG.darkSmall} alt="Agrarium greenhouse" className="dark-section__media-small" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <SectionHeading sub={DARK_SECTION.sub} title={DARK_SECTION.heading} text={DARK_SECTION.text} align="left" />

              <ul className="feature-list">
                {DARK_SECTION.items.map((item) => (
                  <li className="feature" key={item.label}>
                    <span className="feature__icon">
                      <Icon name={item.icon} size={30} />
                    </span>
                    <span>
                      <span className="feature__label">{item.label}</span>
                      <span className="feature__meta">Farm production</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="dark-section__cta">
                <Button href={DARK_SECTION.cta.href} variant="ghost" arrow>
                  {DARK_SECTION.cta.label}
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
export function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <div className="benefits__grid">
          <Reveal>
            <div>
              <SectionHeading sub={BENEFITS.sub} title={BENEFITS.heading} text={BENEFITS.text} align="left" />
              <div className="benefits__cta">
                <Button href={BENEFITS.cta.href} arrow>
                  {BENEFITS.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="benefits__items">
              {BENEFITS.items.map((item) => (
                <li className="benefit-card" key={item.label}>
                  <span className="benefit-card__icon">
                    <Icon name={item.icon} size={32} />
                  </span>
                  <span className="benefit-card__title">{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function YearsBadge({ years }: { years: number }) {
  const { ref, display } = useCountUp<HTMLSpanElement>(years);
  return (
    <div className="years">
      <span className="years__num" ref={ref}>
        {display}
      </span>
      <span className="years__label">Years of experience</span>
    </div>
  );
}

export function BenefitsTwo() {
  return (
    <section className="benefits-two" aria-labelledby="benefits-two-title">
      <div className="container">
        <div className="benefits-two__grid">
          <Reveal>
            <div>
              <SectionHeading
                sub={BENEFITS_TWO.sub}
                title={<span id="benefits-two-title">{BENEFITS_TWO.heading}</span>}
                text={BENEFITS_TWO.text}
                align="left"
              />

              <ul className="checklist">
                {BENEFITS_TWO.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="about__cta">
                <Button href={BENEFITS_TWO.cta.href} arrow>
                  {BENEFITS_TWO.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="benefits-two__media">
              <Img src={BENEFITS_TWO.image} alt="Agrarium crew in the field" className="benefits-two__photo" />
              <YearsBadge years={BENEFITS_TWO.years} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
