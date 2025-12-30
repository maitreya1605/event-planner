import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../common/RevealOnScroll';

const heroImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

import Feedback from '../Feedback';

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in relative">
            {/* Feedback Widget */}
            <button
                onClick={() => setIsFeedbackOpen(true)}
                className="fixed bottom-8 right-8 z-40 bg-brand-gold text-white p-4 rounded-full shadow-lg hover:bg-brand-navy hover:scale-110 transition-all duration-300 group"
                aria-label="Give Feedback"
            >
                <span className="text-2xl">💬</span>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-navy text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Feedback
                </span>
            </button>

            <Feedback isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />

            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url('${image}')` }}
                    >
                        <div className="absolute inset-0 bg-brand-navy/40 backdrop-blur-[2px]"></div>
                    </div>
                ))}

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <p className="text-brand-gold uppercase tracking-[0.3em] mb-4 font-medium">Exquisite Event Planning</p>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                        Creating Moments That <br /> Last a Lifetime
                    </h1>
                    <p className="text-brand-cream/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                        We specialize in crafting bespoke weddings and events that reflect your unique love story and style.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            to="/services"
                            className="bg-brand-gold text-brand-navy px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300"
                        >
                            Start Planning
                        </Link>

                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-brand-cream">
                <RevealOnScroll>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/30"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
                                    alt="Wedding setup"
                                    className="relative z-10 shadow-xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div>
                                <h2 className="font-serif text-4xl text-brand-navy mb-6">Curating Your Perfect Day</h2>
                                <p className="text-brand-charcoal/80 mb-6 leading-relaxed">
                                    At Eventify, we believe that every wedding should be a masterpiece. Our team of dedicated planners and designers work tirelessly to bring your vision to life, ensuring that every detail is executed with precision and grace.
                                </p>
                                <p className="text-brand-charcoal/80 mb-8 leading-relaxed">
                                    From intimate gatherings to grand celebrations, we handle everything from venue selection and vendor management to design and day-of coordination, allowing you to relax and cherish every moment.
                                </p>
                                <Link to="/about" className="text-brand-gold uppercase tracking-widest text-sm border-b border-brand-gold pb-1 hover:text-brand-navy hover:border-brand-navy transition-colors">
                                    Read Our Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-white">
                <RevealOnScroll>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">What We Do</span>
                        <h2 className="font-serif text-4xl text-brand-navy mt-3 mb-16">Our Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Event Management',
                                    desc: 'Comprehensive tools to organize every detail of your event, from guest lists to schedules.',
                                    icon: '📅'
                                },
                                {
                                    title: 'Budget Management',
                                    desc: 'Keep your finances on track with our intuitive budget planning and expense tracking tools.',
                                    icon: '💰'
                                },
                                {
                                    title: 'Vendor Management',
                                    desc: 'Easily manage and coordinate with all your vendors in one centralized place.',
                                    icon: '🤝'
                                }
                            ].map((service, index) => (
                                <div key={index} className="p-8 border border-brand-gold/10 hover:border-brand-gold/50 transition-colors duration-300 group">
                                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="font-serif text-xl text-brand-navy mb-4">{service.title}</h3>
                                    <p className="text-brand-charcoal/70 leading-relaxed mb-6">{service.desc}</p>
                                    <Link to="/services" className="text-brand-gold text-sm uppercase tracking-wider hover:text-brand-navy">Learn More</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
}
