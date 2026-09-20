import { Placeholder } from './Placeholder'
import { Reveal } from './Reveal'

const residences = [
  {
    name: 'The Skyline Suite',
    meta: 'Placeholder — 3 bed · 2,400 sq ft · Upper floors',
    label: 'Residence photo placeholder — Skyline Suite',
  },
  {
    name: 'Garden Residence',
    meta: 'Placeholder — 2 bed · 1,650 sq ft · Terrace access',
    label: 'Residence photo placeholder — Garden Residence',
  },
  {
    name: 'Penthouse Atelier',
    meta: 'Placeholder — 4 bed · 3,100 sq ft · Private lounge',
    label: 'Residence photo placeholder — Penthouse Atelier',
  },
]

export function Residences() {
  return (
    <section className="section" id="residences">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Residences</p>
          <h2 className="section__title">Spaces designed around how you live.</h2>
          <p className="section__lead">
            Replace each card with photography and floor plans for your featured
            apartments.
          </p>
        </Reveal>

        <div className="residences__grid">
          {residences.map((item, index) => (
            <Reveal key={item.name} delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}>
              <article className="residence">
                <Placeholder label={item.label} className="residence__media" />
                <div>
                  <h3 className="residence__name">{item.name}</h3>
                  <p className="residence__meta">{item.meta}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
