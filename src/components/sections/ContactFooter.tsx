import { useEffect, useState } from 'react';
import { CONTACTS, FOOTER, NAV, TOPBAR } from '../../data/content';
import { Icon } from '../Icon';
import { Reveal, SectionHeading, Socials } from '../ui';

/* ------------------------------------------------------------------ */
export function Contacts() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__grid">
          <Reveal>
            <div>
              <SectionHeading sub={CONTACTS.sub} title={CONTACTS.heading} text={CONTACTS.text} align="left" />

              <ul className="contacts__info">
                {CONTACTS.info.map((item) => (
                  <li className="contact-info" key={item.label}>
                    <span className="contact-info__icon">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <div>
                      <div className="contact-info__label">{item.label}</div>
                      {item.lines.map((line) => (
                        <div className="contact-info__value" key={line}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setForm({ name: '', email: '', subject: '', message: '' });
              }}
            >
              <div className="form__row">
                <label className="field">
                  <span className="visually-hidden">Your name</span>
                  <input type="text" required placeholder="Your name" value={form.name} onChange={update('name')} />
                </label>
                <label className="field">
                  <span className="visually-hidden">Your email</span>
                  <input type="email" required placeholder="Your email" value={form.email} onChange={update('email')} />
                </label>
              </div>

              <label className="field">
                <span className="visually-hidden">Subject</span>
                <input type="text" placeholder="Subject" value={form.subject} onChange={update('subject')} />
              </label>

              <label className="field">
                <span className="visually-hidden">Message</span>
                <textarea placeholder="Your message" value={form.message} onChange={update('message')} />
              </label>

              {sent && (
                <p className="form__success" role="status">
                  Thanks — your message has been captured. This demo build has no mail server attached.
                </p>
              )}

              <button className="btn form__submit" type="submit">
                <span>Send Message</span>
                <span className="btn__arrow">
                  <Icon name="arrow-right" size={17} />
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a className="logo logo--light" href="#home">
              <span className="logo__mark">
                <Icon name="wheat" size={24} />
              </span>
              <span>Agrarium</span>
            </a>
            <p className="footer__about">{FOOTER.about}</p>
            <div style={{ marginTop: 24 }}>
              <Socials items={TOPBAR.socials} />
            </div>
          </div>

          {FOOTER.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h4 className="footer__title">{column.title}</h4>
              <ul className="footer__links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer__newsletter">
            <h4 className="footer__title">Newsletter</h4>
            <p>Subscribe to get fresh offers, seasonal recipes and harvest news.</p>
            <form
              className="footer__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail('');
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn" type="submit">
                <span>Join</span>
              </button>
            </form>
            {subscribed && (
              <p style={{ marginTop: 12, fontSize: 14, color: 'var(--c-accent)' }} role="status">
                You are on the list — welcome to Agrarium!
              </p>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {FOOTER.copyright}
          </span>
          <ul className="footer__links" style={{ display: 'flex', gap: 24 }}>
            {NAV.slice(0, 4).map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrow-up" size={20} />
    </button>
  );
}
