import type { FormEvent } from 'react'
import { Placeholder } from './Placeholder'
import { Reveal } from './Reveal'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Visit</p>
          <h2 className="section__title">Schedule a private tour.</h2>
          <p className="section__lead">
            Placeholder form — connect this to your CRM or email workflow when ready.
          </p>
        </Reveal>

        <div className="contact__panel">
          <Reveal delay={1}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="field">
                <label htmlFor="interest">Interest</label>
                <select id="interest" name="interest" defaultValue="">
                  <option value="" disabled>
                    Select a residence type
                  </option>
                  <option>Skyline Suite</option>
                  <option>Garden Residence</option>
                  <option>Penthouse Atelier</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us when you’d like to visit…"
                />
              </div>
              <button type="submit" className="btn btn--dark">
                Request a tour
              </button>
            </form>
          </Reveal>

          <Reveal delay={2}>
            <aside className="contact__aside">
              <Placeholder
                label="Sales gallery / lobby placeholder"
                className="contact__media"
              />
              <p className="contact__detail">
                <strong>Sales gallery</strong>
                Placeholder address — 100 Luxury Lane, Suite 1
                <br />
                Placeholder hours — Daily by appointment
                <br />
                Placeholder phone — +1 (000) 000-0000
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
