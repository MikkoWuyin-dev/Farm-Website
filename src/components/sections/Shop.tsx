import { BEST_PRODUCTS, COUNTERS, GALLERY, PRODUCTS } from '../../data/content';
import { IMG } from '../../data/assets';
import { Button, Counter, Img, Reveal, SectionHeading } from '../ui';

/* ------------------------------------------------------------------ */
export function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__head">
          <Reveal>
            <SectionHeading
              sub="What we grow"
              title={
                <>
                  Agrarium Awesome
                  <br />&amp; Fresh Products
                </>
              }
              align="left"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="counters">
              {COUNTERS.map((counter) => (
                <Counter key={counter.label} value={counter.value} suffix={counter.suffix} label={counter.label} />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="products__grid">
          {PRODUCTS.map((product, i) => (
            <Reveal key={`${product.title}-${i}`} delay={(i % 4) * 80} as="div">
              <article className="product-card">
                <a className="product-card__media" href="#products" aria-label={product.title}>
                  <Img src={product.image} alt={product.title} />
                  <span className="product-card__cat">{product.category}</span>
                </a>
                <div className="product-card__body">
                  <h3 className="product-card__title">
                    <a href="#products">{product.title}</a>
                  </h3>
                  <p className="product-card__text">{product.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="products__cta">
          <Button href="#products" arrow>
            All Products
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function BestProducts() {
  return (
    <section className="section best" id="best">
      <div className="container">
        <Reveal>
          <SectionHeading
            sub="We grow for you"
            title="Best Products in the World"
            text="Organic vegetables harvested on our own fields, delivered to your table the same day."
          />
        </Reveal>

        <div className="best__grid">
          {BEST_PRODUCTS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <article className="best-card">
                <Img src={item.image} alt={item.title} className="best-card__img" />
                <div>
                  <h3 className="best-card__title">{item.title}</h3>
                  <p className="best-card__text">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="best__cta">
          <Button href="#products" arrow>
            All Products
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <Img src={IMG.shapeWheat} alt="" className="gallery__shape" />
      <div className="container">
        <Reveal>
          <SectionHeading sub="Awesome Gallery" title="Gallery of our Products" />
        </Reveal>

        <div className="gallery__grid">
          {GALLERY.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={(i % 3) * 90}>
              <a className="gallery-card" href="#gallery">
                <Img src={item.image} alt={item.title} />
                <span className="gallery-card__overlay">
                  <span className="gallery-card__cat">{item.category}</span>
                  <span className="gallery-card__title">{item.title}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="gallery__cta">
          <Button href="#gallery" variant="outline" arrow>
            See gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
