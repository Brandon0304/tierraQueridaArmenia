"use client";

import { useState, useEffect, useRef } from 'react';
import { sedesData } from '../sedesData';
import { MapPin, Building2, Phone, Clock, Globe } from 'lucide-react';
import '../App.css';

// Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // radios of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function SedesPage() {
    const [locations, setLocations] = useState(sedesData);
    const [searchQuery, setSearchQuery] = useState('');
    const [userLocation, setUserLocation] = useState(null);

    const sectionsRef = useRef([]);

    useEffect(() => {
        let filtered = sedesData.filter(sede =>
            sede.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sede.city.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (userLocation) {
            filtered = filtered.map(sede => ({
                ...sede,
                distance: calculateDistance(userLocation.lat, userLocation.lng, sede.lat, sede.lng)
            })).sort((a, b) => a.distance - b.distance);
        }

        setLocations(filtered);
    }, [searchQuery, userLocation]);

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

    const handleGeolocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    alert("No pudimos obtener tu ubicación. Por favor, asegúrate de haber otorgado los permisos necesarios en tu navegador.");
                }
            );
        } else {
            alert("La geolocalización no es compatible con este navegador.");
        }
    };

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className="navbar">
                <a href="/" style={{ textDecoration: 'none' }}><div className="nav-logo">Tierra Querida</div></a>
                <div className="nav-links">
                    <a href="/#menu" className="nav-link">Menú</a>
                    <a href="/#about" className="nav-link">Nosotros</a>
                    <a href="/sedes" className="nav-link" style={{ color: '#fff', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>Sedes</a>
                    <a href="/#contact" className="nav-link">Contacto</a>
                    <a href="/pedir"><button className="nav-cta">Pedir Ahora</button></a>
                </div>
            </nav>

            <section className="sedes-container fade-in-load" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="sedes-header">
                    <h1 className="ecommerce-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Sedes <span className="text-neon-red">Tierra Querida</span></h1>
                    <p className="hero-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Encuentra la sede más cercana y vive la experiencia donde estés.</p>

                    <div className="sedes-controls">
                        <input
                            type="text"
                            className="sedes-searchbar"
                            placeholder="Buscar por ciudad o nombre de la sede... (Ej. Medellín)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="sedes-geo-btn" onClick={handleGeolocation}>
                            <MapPin size={20} style={{ marginRight: '8px' }} /> Encuentra tu sede más cercana
                        </button>
                    </div>
                </div>

                <div className="location-card-grid">
                    {locations.length > 0 ? (
                        locations.map((sede) => (
                            <div key={sede.id} className="location-card">
                                <h3 className="location-title">{sede.name}</h3>
                                <div className="location-info">
                                    <p><strong><MapPin size={16} style={{ verticalAlign: 'text-bottom', marginRight: '4px' }} /> Dirección:</strong> {sede.address}</p>
                                    <p><strong><Building2 size={16} style={{ verticalAlign: 'text-bottom', marginRight: '4px' }} /> Ciudad:</strong> {sede.city}</p>
                                    <p><strong><Phone size={16} style={{ verticalAlign: 'text-bottom', marginRight: '4px' }} /> Teléfono:</strong> {sede.phone}</p>
                                    <p><strong><Clock size={16} style={{ verticalAlign: 'text-bottom', marginRight: '4px' }} /> Horario:</strong> {sede.schedule.split(' | ').map((line, idx) => (
                                        <span key={idx}><br />{line}</span>
                                    ))}</p>
                                    {sede.distance !== undefined && (
                                        <div className="location-distance"><Globe size={18} style={{ verticalAlign: 'text-bottom', marginRight: '4px' }} /> A {sede.distance.toFixed(1)} km de ti</div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="hero-subtitle" style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1' }}>No se encontraron sedes. Intenta con otra búsqueda.</p>
                    )}
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
            <footer id="contact" className="footer fade-in-section" ref={(el) => (sectionsRef.current[1] = el)}>
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
    );
}
