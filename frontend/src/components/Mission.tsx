import { Placeholder } from './Placeholder'
import { Reveal } from './Reveal'

export function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="container mission__inner">
        <Reveal>
          <p className="section__eyebrow">Our mission</p>
          <blockquote className="mission__quote">
            Your comfort is Our Pride at Blaize Luxe Apartments.
          </blockquote>
        </Reveal>

        <Reveal delay={1}>
          <p className="mission__body">
            Placeholder — share the founding story, values, and the standard of care that
            defines every Blaize Luxe Homes residence.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <Placeholder
            label="Brand / community lifestyle placeholder"
            className="mission__media"
          />
        </Reveal>
      </div>
    </section>
  )
}
