import './App.css'

export default function Home() {
  return (
    <div className="app-container">
      {/* Navbar Minimalist */}
      <nav className="navbar">
        <div className="nav-logo">Tierra Querida</div>
        <div className="nav-links">
          <a href="#menu" className="nav-link">Menú</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Pure CSS Neon Logo to match requirements */}
          <div className="css-logo">
            <div className="burger-top"></div>
            <div className="burger-cheese"></div>
            <div className="brand-text-container">
              <span className="brand-tierra flicker">Tierra</span>
              <span className="brand-querida">Querida</span>
            </div>
            <div className="burger-lettuce"></div>
            <div className="burger-bottom"></div>
          </div>

          <h1 className="tagline">¡Déjate tentar!</h1>
          <button className="cta-button">Ver el Menú</button>
        </div>
      </section>

      {/* Detailed Menu Catalog Section */}
      <section id="menu" className="menu-catalog-section">

        {/* Main Burger Header */}
        <div className="catalog-header">
          <h2 className="catalog-title-small">LA MEJOR HAMBURGUESA</h2>
          <h2 className="catalog-title-large">DE TODO EL PAIS</h2>
        </div>

        {/* Burger Tiers */}
        <div className="burger-tiers-grid">
          {/* Sencilla */}
          <div className="tier-col">
            <h3 className="tier-name">SENCILLA</h3>
            <div className="tier-price-box">$16.900</div>
          </div>
          {/* Doble */}
          <div className="tier-col tier-col-center">
            <h3 className="tier-name">DOBLE</h3>
            <div className="tier-price-box">$24.900</div>
          </div>
          {/* Triple */}
          <div className="tier-col">
            <h3 className="tier-name">TRIPLE</h3>
            <div className="tier-price-box">$29.900</div>
          </div>
        </div>

        {/* Ingredients Box */}
        <div className="ingredients-box">
          <div className="ing-title">TODAS NUESTRAS<br />HAMBURGUESAS<br />VIENEN CON:</div>
          <div className="ing-col">
            <span className="ing-item">TOCINETA</span>
            <span className="ing-item">QUESO<br />AMERICANO</span>
          </div>
          <div className="ing-col">
            <span className="ing-item">LECHUGA</span>
            <span className="ing-item">PEPINOS<br />CARAMELIZADOS</span>
          </div>
          <div className="ing-col">
            <span className="ing-item">TOMATE</span>
            <span className="ing-item">QUESO<br />CHEDDAR</span>
          </div>
        </div>

        {/* Additions Section */}
        <div className="section-banner-row">
          <div className="banner-title banner-red">ADICIONES</div>
          <div className="banner-line"></div>
          <div className="banner-price">$3.000</div>
        </div>
        <div className="additions-list">
          JALAPEÑOS - QUESO CHEDDAR<br />TOCINETA - QUESO AMERICANO
        </div>

        {/* Fries Section */}
        <div className="section-banner-row">
          <div className="banner-title banner-red">PAPAS QUERIDAS</div>
          <div className="banner-line"></div>
          <div className="banner-price">$5.900</div>
        </div>

        <div className="fries-grid">
          <div className="fries-col fries-left">
            <div className="fry-item">NATURAL</div>
            <div className="fry-item">LIMÓN</div>
            <div className="fry-item">POLLO</div>
            <div className="fry-item">BBQ<br />PICANTE</div>
          </div>
          <div className="fries-center-image">
            {/* Placeholder for fries cone image */}
            <div className="fry-cone-placeholder">🍟</div>
          </div>
          <div className="fries-col fries-right">
            <div className="fry-item">TOCINETA</div>
            <div className="fry-item">QUESO</div>
            <div className="fry-item">JALAPEÑOS</div>
            <div className="fry-item">BBQ<br />DULCE</div>
          </div>
        </div>

        {/* Catalog Footer Notes */}
        <div className="catalog-legal">
          *Todos nuestros productos incluyen impoconsumo. *La carta es solo para uso informativo.<br />
          *Los pedidos se realizan únicamente a través de nuestra página web o del WhatsApp oficial de cada sede.
        </div>
      </section>

      {/* Professional Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-logo">Tierra Querida</div>
            <p className="footer-slogan">El mejor sabor siempre te espera.</p>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-heading">Contacto y Ubicación</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span> Cra. 14 #15 Norte-39, Armenia, Quindío
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span> 300 643 0637
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tierra Querida. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
