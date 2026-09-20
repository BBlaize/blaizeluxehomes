import { Placeholder } from './Placeholder'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media">
        <Placeholder label="Hero image placeholder — luxury residence exterior" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__brand">
          Blaize Luxe
          <span>Homes</span>
        </h1>
        <p className="hero__headline">Elevated living, crafted for calm.</p>
        <p className="hero__support">
          Your comfort is Our Pride at Blaize Luxe Apartments.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#residences">
            Explore residences
          </a>
          <a className="btn btn--ghost" href="#contact">
            Book a private tour
          </a>
        </div>
      </div>
    </section>
  )
}
