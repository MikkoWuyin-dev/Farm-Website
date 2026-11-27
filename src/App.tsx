import { Header, TopBar } from './components/Header';
import { Hero } from './components/Hero';
import { About, Banners, Clients, GiantBanner } from './components/sections/Story';
import { Benefits, BenefitsTwo, DarkSection } from './components/sections/Services';
import { BestProducts, Gallery, Products } from './components/sections/Shop';
import { Blog, Partners, Promos, Testimonials } from './components/sections/Social';
import { Contacts, Footer, ScrollTop } from './components/sections/ContactFooter';

export default function App() {
  return (
    <>
      <a className="visually-hidden" href="#main">
        Skip to content
      </a>

      <TopBar />
      <Header />

      <main id="main">
        <Hero />
        <Clients />
        <About />
        <GiantBanner />
        <Banners />
        <DarkSection />
        <Benefits />
        <BenefitsTwo />
        <Products />
        <BestProducts />
        <Gallery />
        <Testimonials />
        <Blog />
        <Promos />
        <Partners />
        <Contacts />
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
