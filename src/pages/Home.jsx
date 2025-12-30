import React, { useState, useEffect } from 'react'
import {
  Heart,
  Calendar,
  Camera,
  Music,
  Utensils,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  Star,
  CheckCircle2,
} from 'lucide-react'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1519225468359-2996bc01c083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
]

const SERVICES = [
  {
    icon: <Calendar className="h-8 w-8 text-rose-500" />,
    title: 'Full Service Planning',
    description:
      "From 'Yes' to 'I Do', we handle every single detail including budget management, vendor sourcing, and design execution.",
    price: 'Starting at $5,000',
  },
  {
    icon: <Camera className="h-8 w-8 text-rose-500" />,
    title: 'Design & Styling',
    description:
      'Focusing purely on the aesthetics. We create a cohesive look, sourcing decor, florals, and lighting to match your mood board.',
    price: 'Starting at $3,500',
  },
  {
    icon: <Music className="h-8 w-8 text-rose-500" />,
    title: 'Month-of Coordination',
    description:
      'Perfect for couples who planned it all but need a professional to execute the timeline and manage vendors on the big day.',
    price: 'Starting at $2,000',
  },
  {
    icon: <Utensils className="h-8 w-8 text-rose-500" />,
    title: 'Vendor Management',
    description:
      'We curate a team of the best photographers, caterers, and entertainers that fit your specific style and budget.',
    price: 'Custom Quote',
  },
]

const PORTFOLIO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cat: 'Ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cat: 'Reception',
  },
  {
    src: 'https://images.unsplash.com/photo-1507504031981-a2368c67e5f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cat: 'Floral',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cat: 'Moments',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cat: 'Details',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cat: 'Outdoor',
  },
]

const TESTIMONIALS = [
  {
    name: 'Sarah & James',
    text: 'Hiring EverAfter was the best decision we made. The team understood our vision perfectly and executed it flawlessly. It was truly the best day of our lives.',
    date: 'June 2024',
  },
  {
    name: 'Emily & Michael',
    text: 'I was so stressed about planning, but they made the process fun and easy. The design was breathtaking and exactly what we wanted.',
    date: 'August 2023',
  },
  {
    name: 'Jessica & Robert',
    text: 'Professional, creative, and incredibly organized. Our guests are still talking about how beautiful everything was!',
    date: 'October 2023',
  },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Heart
            className={`h-6 w-6 mr-2 ${isScrolled ? 'text-rose-500' : 'text-white'}`}
            fill={isScrolled ? 'currentColor' : 'white'}
          />
          <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>EverAfter</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-rose-400 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium hover:text-rose-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img src={img} alt={`Wedding background ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-rose-200 font-serif italic text-xl md:text-2xl mb-4 tracking-wide">Creating Moments, Crafting Memories</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Your Dream Wedding <br /> Starts Here
        </h1>
        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
          We specialize in designing bespoke weddings that reflect your unique love story. From intimate elopements to grand
          celebrations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Planning
          </a>
          <a
            href="#portfolio"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

const About = () => (
  <section id="about" className="py-20 bg-rose-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-rose-200 rounded-lg" />
          <img
            src="https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Planner arranging flowers"
            className="relative rounded-lg shadow-xl w-full object-cover h-[500px]"
          />
        </div>
        <div>
          <h2 className="text-rose-500 font-medium tracking-widest uppercase mb-2">About Us</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">We Bring Your Vision to Life</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At EverAfter, we believe that every couple deserves a wedding day that is as unique as their love story. With over 10 years of
            experience in the industry, our team of dedicated planners and designers work tirelessly to ensure every detail is perfect.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We handle the stress so you can enjoy the moment. From vendor selection to day-of coordination, we are your partners in
            creating a seamless and unforgettable celebration.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Expert Planning</h4>
                <p className="text-sm text-gray-500">Certified professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Custom Design</h4>
                <p className="text-sm text-gray-500">Tailored to your style</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-rose-500 font-medium tracking-widest uppercase mb-2">Our Services</h2>
        <h3 className="text-4xl font-serif font-bold text-gray-900">Tailored For You</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="p-8 bg-white border border-gray-100 rounded-xl hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="mb-6 p-4 bg-rose-50 rounded-full w-max group-hover:bg-rose-100 transition-colors">{service.icon}</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
            <p className="text-rose-500 font-medium text-sm">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-rose-500 font-medium tracking-widest uppercase mb-2">Portfolio</h2>
        <h3 className="text-4xl font-serif font-bold text-gray-900">Real Weddings</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_IMAGES.map((img) => (
          <div key={img.src} className="group relative overflow-hidden rounded-lg cursor-pointer">
            <img
              src={img.src}
              alt={img.cat}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-xl tracking-wider border-b-2 border-white pb-1">{img.cat}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-rose-500 hover:border-rose-500 transition-colors">
          View Full Gallery
        </button>
      </div>
        </div>
      </section>
)

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-rose-500 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Star className="h-8 w-8 mx-auto mb-4 text-yellow-300 fill-current" />
        <h2 className="text-white/80 font-medium tracking-widest uppercase mb-2">Kind Words</h2>
        <h3 className="text-4xl font-serif font-bold">Love Letters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.name} className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <p className="text-lg italic mb-6 font-serif leading-relaxed">"{testimonial.text}"</p>
            <h4 className="font-bold text-xl">{testimonial.name}</h4>
            <span className="text-sm text-rose-200">{testimonial.date}</span>
          </div>
        ))}
      </div>
    </div>
      </section>
)

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thank you for your message! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
            <h2 className="text-rose-500 font-medium tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">Let's Plan Your Day</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We take a limited number of weddings each year to ensure every couple gets our full attention. Fill out the form or contact us
              directly to schedule your consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium text-gray-900">hello@everafter.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-medium text-gray-900">123 Wedding Lane, New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  placeholder="Jane"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Date (Approx)</label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                placeholder="Tell us about your dream wedding..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-rose-500 mr-2" fill="currentColor" />
            <span className="font-serif text-2xl font-bold">EverAfter</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting timeless weddings and unforgettable moments for couples worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-rose-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-rose-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-rose-500 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-rose-500 transition-colors">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Full Planning</li>
            <li>Partial Planning</li>
            <li>Day-of Coordination</li>
            <li>Event Design</li>
            </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} EverAfter Weddings. All rights reserved.</p>
        <div className="flex space-x-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
)

const Home = () => (
  <div className="font-sans text-gray-900 bg-white">
    <Navigation />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  )

export default Home

