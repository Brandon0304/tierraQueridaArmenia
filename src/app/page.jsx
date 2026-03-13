"use client";

import { useEffect, useRef } from 'react';
import { MapPin, Phone } from 'lucide-react';
import './App.css';

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* E-commerce Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Tierra Querida</div>
        <div className="nav-links">
          <a href="#menu" className="nav-link">Menú</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="/sedes" className="nav-link">Sedes</a>
          <a href="#contact" className="nav-link">Contacto</a>
          <a href="/pedir"><button className="nav-cta">Pedir Ahora</button></a>
        </div>
      </nav>

      {/* Dynamic Hero Section */}
      <section className="hero-split fade-in-section" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="hero-left">
          <div className="hero-text-content">
            <h1 className="hero-title">El sabor que<br /><span className="text-neon-red">enciende</span> tu<br />noche.</h1>
            <p className="hero-subtitle">¡Déjate tentar! Descubre la mejor hamburguesa artesanal de la ciudad preparada bajo tus reglas.</p>
            <div className="hero-buttons">
              <button className="primary-btn">Inicia tu orden</button>
              <button className="secondary-btn">Restaurantes</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          {/* Pure CSS Neon Logo to match requirements */}
          <div className="css-logo hero-css-logo">
            <div className="burger-top"></div>
            <div className="burger-cheese"></div>
            <div className="brand-text-container">
              <span className="brand-tierra flicker">Tierra</span>
              <span className="brand-querida">Querida</span>
            </div>
            <div className="burger-lettuce"></div>
            <div className="burger-bottom"></div>
          </div>
        </div>
      </section>

      {/* E-Commerce Product Cards Section */}
      <section id="menu" className="ecommerce-section fade-in-section" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="section-header-row">
          <h2 className="ecommerce-title">NUESTRO MENÚ</h2>
        </div>
        <div className="product-grid">
          {/* Product Card 1: Sencilla */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="/images/hamburguesaSencilla.webp" alt="Hamburguesa Sencilla" className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Hamburguesa Sencilla</h3>
              <p className="product-desc">150g de carne de res artesanal, queso, tocineta, vegetales frescos y salsas de la casa.</p>
              <div className="product-action-row">
                <span className="product-price">$ 16.900</span>
                <button className="add-to-cart-btn">Añadir</button>
              </div>
            </div>
          </div>
          {/* Product Card 2: Doble */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="/images/hamburguesaDobleCarne.webp" alt="Hamburguesa Doble Carne" className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Hamburguesa Doble Carne</h3>
              <p className="product-desc">Doble porción de carne (300g), doble capa de queso, tocineta extra crujiente y vegetales frescos.</p>
              <div className="product-action-row">
                <span className="product-price">$ 24.900</span>
                <button className="add-to-cart-btn">Añadir</button>
              </div>
            </div>
          </div>
          {/* Product Card 3: Triple */}
          <div className="product-card">
            <div className="product-image-container">
              <img src="/images/hamburguesaTripleCarne.webp" alt="Hamburguesa Triple Carne" className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Hamburguesa Triple Carne</h3>
              <p className="product-desc">Para los verdaderamente insaciables: ¡450g de carne!, queso derretido en cada capa, explosión de tocino y salsas.</p>
              <div className="product-action-row">
                <span className="product-price">$ 29.900</span>
                <button className="add-to-cart-btn">Añadir</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section fade-in-section" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="about-container">
          <div className="about-text-content">
            <h2 className="section-title">¿Quiénes <span className="text-neon-red">Somos?</span></h2>
            <div className="about-paragraphs">
              <p>Hace 5 años, comenzaba en una cocina oculta… el sueño de servir algo más que comida.</p>
              <p>Sin letreros, sin mesas, sin filas. Solo una plancha caliente y 4 emprendedores con ganas de conquistar el corazón de los colombianos.</p>
              <p>Desde un rincón escondido, empezamos a llegar a casas, a oficinas, a reuniones. No nos conocían por el nombre… pero sí por el sabor. Y así, mordida tras mordida, fuimos creciendo, porque ahora el sueño se había convertido en llegar a cada rincón de esta <span className="brand-highlight">Tierra Querida</span>.</p>
              <p className="about-highlight">Hoy somos 100 sedes a nivel nacional y la misión no para.</p>
            </div>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img src="/images/hamburguesaDobleCarne.webp" alt="Nuestra historia" className="about-image" />
          </div>
        </div>
      </section>

      {/* Fixed Social Sidebar */}
      <div className="social-sidebar">
        <a href="https://www.instagram.com/tierraquerida20?igsh=N2szNGpvcHRweXNh" className="social-sidebar-link instagram" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="https://wa.me/573006430637" className="social-sidebar-link whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      {/* Professional Footer */}
      <footer id="contact" className="footer fade-in-section" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-logo-container">
              <img src="/images/logoTierraQuerida.webp" alt="Tierra Querida Logo" className="footer-logo-img" />
            </div>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-heading">Contacto y Ubicación</h4>
            <div className="contact-item">
              <span className="contact-icon"><MapPin size={18} /></span> Cra. 14 #15 Norte-39, Armenia, Quindío
            </div>
            <div className="contact-item">
              <span className="contact-icon"><Phone size={18} /></span> 300 643 0637
            </div>
            <div className="contact-item mt-3">
              <a href="https://www.instagram.com/tierraquerida20?igsh=N2szNGpvcHRweXNh" target="_blank" rel="noopener noreferrer" className="social-link instagram-footer" aria-label="Visit our Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="social-text ms-2">Síguenos en Instagram</span>
              </a>
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
