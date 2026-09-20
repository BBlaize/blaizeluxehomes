import { Placeholder } from './Placeholder'
import { Reveal } from './Reveal'

const amenities = [
  {
    title: 'Concierge & arrival',
    body: 'Placeholder copy — describe 24/7 concierge, valet, and seamless check-in.',
  },
  {
    title: 'Wellness suite',
    body: 'Placeholder copy — spa, fitness studio, and recovery spaces for daily ritual.',
  },
  {
    title: 'Resident lounge',
    body: 'Placeholder copy — private dining, coworking nooks, and evening hospitality.',
  },
  {
    title: 'Sky terrace',
    body: 'Placeholder copy — open-air decks with city views and outdoor kitchens.',
  },
]

export function Experience() {
  return (
    <section className="section section--dark" id="experience">
      <div className="container experience__layout">
        <Reveal>
          <Placeholder
            label="Amenity lifestyle placeholder — lounge or terrace"
            className="experience__media"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="section__eyebrow">The experience</p>
            <h2 className="section__title">Every detail in service of comfort.</h2>
            <p className="section__lead">
              Highlight the lifestyle amenities that set Blaize Luxe Apartments apart.
            </p>
          </Reveal>

          <ul className="experience__list">
            {amenities.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}>
                <li className="experience__item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
