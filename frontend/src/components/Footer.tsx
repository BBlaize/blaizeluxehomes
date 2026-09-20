export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand">Blaize Luxe Homes</p>
            <p className="footer__tagline">
              Your comfort is Our Pride at Blaize Luxe Apartments.
            </p>
          </div>

          <div className="footer__cols">
            <div>
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#residences">Residences</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#neighborhood">Neighborhood</a>
                </li>
                <li>
                  <a href="#mission">Mission</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>
                <li>Placeholder address</li>
                <li>Placeholder city</li>
                <li>
                  <a href="#contact">Contact sales</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">Instagram placeholder</a>
                </li>
                <li>
                  <a href="#">LinkedIn placeholder</a>
                </li>
                <li>
                  <a href="mailto:hello@placeholder.com">Email placeholder</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Blaize Luxe Homes. All rights reserved.</p>
          <p>Privacy · Terms — placeholder links</p>
        </div>
      </div>
    </footer>
  )
}
