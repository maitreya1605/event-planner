import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },

    { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const isHome = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isProfileOpen && !event.target.closest('.profile-dropdown-container')) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isProfileOpen]);

    const handleLogout = async () => {
        await logout();
        navigate('/auth');
        setIsProfileOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHome && !isScrolled
            ? 'bg-transparent border-transparent'
            : 'bg-brand-white/90 backdrop-blur-md border-b border-brand-gold/20 shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0 flex flex-col items-start gap-0">
                            <span className="font-serif text-2xl font-bold text-brand-navy tracking-wide">Eventify</span>
                            <span className="text-[10px] text-brand-gold tracking-wider">Lovely Professional University, India</span>
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-sm uppercase tracking-widest transition-colors duration-300 ${isActive
                                        ? 'text-brand-gold font-semibold'
                                        : 'text-brand-charcoal hover:text-brand-gold'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        {user ? (
                            <div
                                className="relative profile-dropdown-container"
                                onMouseEnter={() => setIsProfileOpen(true)}
                                onMouseLeave={() => setIsProfileOpen(false)}
                            >
                                <button
                                    onClick={() => navigate('/profile')}
                                    className="flex items-center space-x-2 focus:outline-none"
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-brand-gold/50 hover:border-brand-gold transition-colors duration-300">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${user.name || user.username}&background=0A192F&color=D4AF37&size=128`}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none animate-fade-in-up">
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm text-brand-navy font-medium truncate">{user.name || user.username}</p>
                                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                        </div>
                                        <NavLink
                                            to="/client-dashboard"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-cream/50 hover:text-brand-navy"
                                        >
                                            Dashboard
                                        </NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-brand-cream/50 hover:text-brand-navy"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                to="/auth"
                                className="bg-brand-navy text-white px-6 py-2 rounded-none text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
                            >
                                Sign In
                            </NavLink>
                        )}
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-navy hover:text-brand-gold focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-white border-t border-brand-gold/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 text-base font-medium ${isActive
                                        ? 'text-brand-gold bg-brand-cream/50'
                                        : 'text-brand-charcoal hover:text-brand-gold hover:bg-brand-cream/30'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        {user ? (
                            <>
                                <div className="px-3 py-2 border-t border-gray-100 mt-2">
                                    <div
                                        className="flex items-center space-x-3 mb-3 cursor-pointer"
                                        onClick={() => {
                                            navigate('/profile');
                                            setIsOpen(false);
                                        }}
                                    >
                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-gold/50">
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${user.name || user.username}&background=0A192F&color=D4AF37&size=128`}
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-brand-navy">{user.name || user.username}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                    <NavLink
                                        to="/client-dashboard"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-left px-3 py-2 text-base font-medium text-brand-navy hover:text-brand-gold hover:bg-brand-cream/30 rounded-md"
                                    >
                                        Dashboard
                                    </NavLink>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsOpen(false);
                                        }}
                                        className="block w-full text-left px-3 py-2 text-base font-medium text-brand-navy hover:text-brand-gold hover:bg-brand-cream/30 rounded-md"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <NavLink
                                to="/auth"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-brand-navy hover:text-brand-gold"
                            >
                                Sign In
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
