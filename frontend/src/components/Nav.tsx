import { useEffect, useState } from 'react'

const links = [
  { href: '#residences', label: 'Residences' },
  { href: '#experience', label: 'Experience' },
  { href: '#neighborhood', label: 'Neighborhood' },
  { href: '#mission', label: 'Mission' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setOverDark(window.scrollY < window.innerHeight * 0.85)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`nav${scrolled ? ' is-scrolled' : ''}${overDark ? ' is-over-dark' : ''}`}
      >
        <div className="nav__inner">
          <a href="#top" className="nav__brand" onClick={close}>
            Blaize Luxe Homes
          </a>

          <nav className="nav__links" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav__cta" href="#contact">
            Schedule a tour
          </a>

          <button
            type="button"
            className={`nav__toggle${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`nav__drawer${open ? ' is-open' : ''}`} id="mobile-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="nav__cta" href="#contact" onClick={close}>
          Schedule a tour
        </a>
      </div>
    </>
  )
}
