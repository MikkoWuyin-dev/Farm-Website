import { useEffect, useState } from 'react';
import { CLIENTS, POSTS, PROMOS, TESTIMONIALS } from '../../data/content';
import { IMG } from '../../data/assets';
import { Button, Img, Reveal, SectionHeading } from '../ui';
import { Icon } from '../Icon';

/* ------------------------------------------------------------------ */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  useEffect(() => {
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 9000);
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <section className="testimonials" id="testimonials">
      <Img src={IMG.shape4} alt="" className="testimonials__shape" />
      <div className="container">
        <div className="testimonials__inner">
          <Reveal>
            <SectionHeading sub="Testimonials" title="People says about Agrarium" />
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="testimonials__quote">{active.quote}</blockquote>

            <div className="testimonials__author">
              <Img src={active.avatar} alt={active.author} className="testimonials__avatar" />
              <div className="testimonials__name">
                {active.author}
                <span className="testimonials__role">{active.role}</span>
              </div>
            </div>

            <div className="slider-dots" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.author + i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  className={i === index ? 'is-active' : ''}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog__head">
          <Reveal>
            <SectionHeading sub="Blog & News" title="From the Blog" align="left" />
          </Reveal>
          <Reveal delay={100}>
            <Button href="#blog" variant="outline" arrow>
              More posts
            </Button>
          </Reveal>
        </div>

        <div className="blog__grid">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <article className="post-card">
                <a className="post-card__media" href="#blog" aria-label={post.title}>
                  <Img src={post.image} alt={post.title} />
                  <span className="post-card__cat">{post.category}</span>
                </a>
                <div className="post-card__body">
                  <div className="post-card__meta">
                    <span>
                      <Icon name="calendar" size={15} /> {post.date}
                    </span>
                    <span>
                      <Icon name="user" size={15} /> by {post.author}
                    </span>
                  </div>
                  <h3 className="post-card__title">
                    <a href="#blog">{post.title}</a>
                  </h3>
                  <a className="post-card__more" href="#blog">
                    Read more <Icon name="arrow-right" size={15} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function Promos() {
  return (
    <section className="promos">
      <div className="container">
        <div className="promos__grid">
          {PROMOS.map((promo, i) => (
            <Reveal key={promo.heading} delay={i * 110}>
              <article className="promo">
                <Img src={promo.image} alt="" className="promo__bg" />
                <span className="promo__sub">{promo.sub}</span>
                <h3 className="promo__title">{promo.heading}</h3>
                <p className="promo__text">{promo.text}</p>
                <div className="promo__cta">
                  <Button href={promo.cta.href} variant="ghost" arrow>
                    {promo.cta.label}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function Partners() {
  return (
    <section className="partners" id="partners">
      <Img src={IMG.shape4b} alt="" className="partners__shape" />
      <div className="container">
        <Reveal>
          <SectionHeading sub="Partners & Clients" title="People Who Trust us" />
        </Reveal>

        <Reveal delay={100}>
          <ul className="partners__row">
            {CLIENTS.map((logo, i) => (
              <li key={logo}>
                <Img src={logo} alt={`Partner logo ${i + 1}`} className="partners__logo" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
