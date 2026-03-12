"use client";

import { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, ChevronLeft } from 'lucide-react';
import { menuCategories } from './menuData';
import '../App.css';

export default function PedirPage() {
    const [cart, setCart] = useState([]);
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

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQ = item.quantity + delta;
                return newQ > 0 ? { ...item, quantity: newQ } : item;
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="app-container">
            {/* Minimal Navbar for checkout */}
            <nav className="navbar" style={{ justifyContent: 'space-between', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, overflow: 'hidden' }}>
                    <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
                        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.1rem' }}>
                            <ChevronLeft size={20} /> Volver al Inicio
                        </div>
                    </a>
                    <div className="nav-links" style={{ overflowX: 'auto', whiteSpace: 'nowrap', gap: '1.5rem', justifyContent: 'flex-start', flex: 1, paddingBottom: '2px' }}>
                        {menuCategories.map(cat => (
                            <a
                                key={`nav-${cat.title}`}
                                href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="nav-link"
                                style={{ fontSize: '1rem', padding: '0.5rem 0' }}
                            >
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="nav-logo" style={{ fontSize: '1.5rem', flexShrink: 0 }}>
                    Tierra Querida
                </div>
            </nav>

            <section className="cart-page-split fade-in-load" ref={(el) => (sectionsRef.current[0] = el)}>

                {/* Left Side: The Menu */}
                <div className="cart-menu-side">
                    <h1 className="ecommerce-title" style={{ marginBottom: '2rem' }}>Arma tu <span className="text-neon-red">Orden</span></h1>

                    <div className="cart-categories-container">
                        {menuCategories.map(category => (
                            <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="cart-category-section">
                                <h2 className="cart-category-title">{category.title}</h2>
                                <div className="cart-menu-grid">
                                    {category.items.map(item => (
                                        <div key={item.id} className="cart-menu-item">
                                            {item.img && <img src={item.img} alt={item.name} className="cart-item-img" />}
                                            <div className="cart-item-info">
                                                <h3 className="cart-item-title">{item.name}</h3>
                                                {item.desc && <p className="cart-item-desc" style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>}
                                                <div className="cart-item-action">
                                                    <span className="cart-item-price">$ {item.price.toLocaleString('es-CO')}</span>
                                                    <button className="add-to-cart-btn btn-small" onClick={() => addToCart(item)}>Añadir</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: The Cart Summary */}
                <div className="cart-summary-side">
                    <div className="cart-summary-box">
                        <div className="cart-summary-header">
                            <h2><ShoppingCart size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />Tu Carrito</h2>
                            <span className="cart-badge">{cart.reduce((a, c) => a + c.quantity, 0)}</span>
                        </div>

                        {cart.length === 0 ? (
                            <div className="cart-empty-state">
                                <div className="empty-icon">🍔</div>
                                <p>Tu carrito está vacío.</p>
                                <span>¡Añade nuestras deliciosas hamburguesas para empezar!</span>
                            </div>
                        ) : (
                            <div className="cart-items-list">
                                {cart.map(item => (
                                    <div key={item.id} className="cart-summary-item">
                                        <div className="cart-summary-details">
                                            <h4>{item.name}</h4>
                                            <span className="cart-summary-price">$ {(item.price * item.quantity).toLocaleString('es-CO')}</span>
                                        </div>
                                        <div className="cart-quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                                            <button className="remove-item-btn" onClick={() => removeItem(item.id)}><Trash2 size={16} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="cart-total-section">
                            <div className="cart-total-row">
                                <span>Subtotal</span>
                                <span>$ {totalAmount.toLocaleString('es-CO')}</span>
                            </div>
                            <div className="cart-total-row total-highlight">
                                <span>Total a Pagar</span>
                                <span>$ {totalAmount.toLocaleString('es-CO')}</span>
                            </div>
                            <button className="primary-btn checkout-btn" disabled={cart.length === 0} style={{ width: '100%', marginTop: '1.5rem', opacity: cart.length === 0 ? 0.5 : 1 }}>
                                Continuar con el pago
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
