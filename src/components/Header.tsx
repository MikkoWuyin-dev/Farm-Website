import { useEffect, useState } from 'react';
import { NAV, TOPBAR } from '../data/content';
import { Icon } from './Icon';
import { Button, Socials } from './ui';

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo${light ? ' logo--light' : ''}`} href="#home" aria-label="Agrarium — home">
      <span className="logo__mark">
        <Icon name="wheat" size={24} />
      </span>
      <span>Agrarium</span>
    </a>
  );
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <ul className="topbar__list">
          <li className="topbar__item">
            <Icon name="pin" size={16} />
            <span className="topbar__label">Location</span>
            <span>{TOPBAR.location.value}</span>
          </li>
          <li className="topbar__item">
            <Icon name="phone" size={16} />
            <span className="topbar__label">Phone</span>
            <a href={TOPBAR.phone.href}>{TOPBAR.phone.value}</a>
          </li>
          <li className="topbar__item">
            <Icon name="mail" size={16} />
            <span className="topbar__label">Email</span>
            <a href={TOPBAR.email.href}>{TOPBAR.email.value}</a>
          </li>
        </ul>

        <div className="topbar__right">
          <Socials items={TOPBAR.socials} />
          <Button href="#contacts" className="topbar__cta">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 260);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawer(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <div className="container header__inner">
          <Logo />

          <nav className="nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <div
                key={item.label}
                className={`nav__item${openMenu === item.label ? ' is-open' : ''}`}
                onMouseEnter={() => item.children.length && setOpenMenu(item.label)}
                onMouseLeave={() => item.children.length && setOpenMenu(null)}
              >
                <a
                  className="nav__link"
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  aria-haspopup={item.children.length ? 'true' : undefined}
                  aria-expanded={item.children.length ? openMenu === item.label : undefined}
                >
                  {item.label}
                  {item.children.length > 0 && <Icon name="chevron-down" size={15} />}
                </a>

                {item.children.length > 0 && (
                  <div className="nav__dropdown" role="menu">
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href} role="menuitem" onClick={() => setOpenMenu(null)}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header__actions">
            <a className="icon-btn icon-btn--search" href="#products" aria-label="Search">
              <Icon name="search" size={19} />
            </a>
            <a className="icon-btn" href="#products" aria-label="Wishlist">
              <Icon name="heart" size={19} />
            </a>
            <a className="icon-btn" href="#products" aria-label="Cart, 2 items">
              <Icon name="cart" size={19} />
              <span className="icon-btn__badge">2</span>
            </a>
            <button className="burger" type="button" onClick={() => setDrawer(true)} aria-label="Open menu">
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${drawer ? ' is-open' : ''}`} onClick={() => setDrawer(false)}>
        <div className="drawer__panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
          <div className="drawer__head">
            <Logo />
            <button className="icon-btn" type="button" onClick={() => setDrawer(false)} aria-label="Close menu">
              <Icon name="close" size={22} />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            {NAV.map((item) => (
              <div key={item.label}>
                <a className="drawer__link" href={item.href} onClick={() => setDrawer(false)}>
                  {item.label}
                </a>
                {item.children.map((child) => (
                  <a key={child.label} className="drawer__sub" href={child.href} onClick={() => setDrawer(false)}>
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <div className="drawer__foot">
            <a href={TOPBAR.phone.href}>{TOPBAR.phone.value}</a>
            <a href={TOPBAR.email.href}>{TOPBAR.email.value}</a>
            <Socials items={TOPBAR.socials} />
          </div>
        </div>
      </div>
    </>
  );
}
