import { Placeholder } from './Placeholder'
import { Reveal } from './Reveal'

const nearby = [
  'Placeholder — Fine dining district',
  'Placeholder — Cultural venues',
  'Placeholder — Green parks & trails',
  'Placeholder — Business corridor',
]

export function Neighborhood() {
  return (
    <section className="section" id="neighborhood">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Neighborhood</p>
          <h2 className="section__title">An address with presence.</h2>
          <p className="section__lead">
            Swap this map and list for your real location story and local highlights.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <Placeholder
            label="Neighborhood map / aerial placeholder"
            className="neighborhood__media"
          />
        </Reveal>

        <Reveal delay={2}>
          <ul className="neighborhood__chips">
            {nearby.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
