import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-brand-cream pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="font-serif text-2xl mb-6">Eventify</h3>
                        <p className="text-brand-cream/60 leading-relaxed mb-6">
                            Crafting unforgettable moments with elegance and precision.
                            Your dream wedding, perfectly orchestrated.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6 text-brand-gold">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-brand-cream/60 hover:text-brand-gold transition">Services</Link></li>

                            <li><Link to="/contact" className="text-brand-cream/60 hover:text-brand-gold transition">Contact Us</Link></li>
                            <li><Link to="/auth" className="text-brand-cream/60 hover:text-brand-gold transition">Client Portal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6 text-brand-gold">Contact</h4>
                        <ul className="space-y-4 text-brand-cream/60">
                            <li>Lovely Professional University</li>
                            <li>India</li>
                            <li>Eventify@gmail.com</li>
                            <li>+91</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-gold/20 pt-8 text-center text-sm text-brand-cream/40">
                    <p>&copy; {new Date().getFullYear()} Aurora Atelier. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
