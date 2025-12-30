import { useNavigate } from 'react-router-dom';

export default function Services() {
    const navigate = useNavigate();

    const services = [
        {
            title: "Add Event",
            price: "Planning Suite",
            description: "Start your journey by creating a new event. Our intuitive tools help you organize every detail from the ground up.",
            features: ["Event creation wizard", "Guest list management", "RSVP tracking", "Event timeline", "Custom invitations"],
            action: () => navigate('/add-event'),
            buttonText: "Create Event"
        },
        {
            title: "Manage Budget",
            price: "Financial Tools",
            description: "Keep your finances on track with our smart budgeting system. Allocate funds, track expenses, and avoid overspending.",
            features: ["Smart budget allocation", "Real-time expense tracking", "Payment reminders", "Cost estimation", "Visual spending reports"],
            action: () => navigate('/manage-budget'),
            buttonText: "Manage Budget"
        },
        {
            title: "Vendor Management",
            price: "Vendor Network",
            description: "Build your dream team. Connect with top-rated vendors, manage contracts, and coordinate logistics seamlessly.",
            features: ["Curated vendor search", "Quote comparison", "Digital contract management", "Direct messaging", "Performance reviews"],
            action: () => navigate('/vendor-management'),
            buttonText: "Manage Vendors"
        }
    ];

    return (
        <div className="bg-brand-cream min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl text-brand-navy mb-6">Our Services</h1>
                    <p className="text-brand-charcoal/70 max-w-2xl mx-auto text-lg">
                        Tailored packages to meet your specific needs and ensure your day is nothing short of perfection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold">
                            <h3 className="font-serif text-2xl text-brand-navy mb-2">{service.title}</h3>
                            <p className="text-brand-gold font-medium mb-6">{service.price}</p>
                            <p className="text-brand-charcoal/70 mb-8 leading-relaxed">{service.description}</p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-brand-charcoal/80">
                                        <span className="text-brand-gold mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={service.action}
                                className="w-full mt-10 border border-brand-navy text-brand-navy py-3 uppercase tracking-widest text-xs font-bold hover:bg-brand-navy hover:text-white transition-colors"
                            >
                                {service.buttonText || "Inquire Now"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
