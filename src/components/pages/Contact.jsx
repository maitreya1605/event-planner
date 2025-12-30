import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'Wedding', // Default subject/event type
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ firstName: '', lastName: '', email: '', subject: 'Wedding', message: '' });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending feedback:", error);
            alert("Error sending message.");
        }
    };

    return (
        <div className="bg-brand-cream min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h1 className="font-serif text-4xl text-brand-navy mb-4">Get in Touch</h1>
                        <p className="text-brand-charcoal/70">
                            We'd love to hear about your upcoming event. Fill out the form below and we'll be in touch shortly.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-brand-charcoal mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-gray-300 focus:border-brand-gold outline-none py-2 bg-transparent transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-brand-charcoal mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-gray-300 focus:border-brand-gold outline-none py-2 bg-transparent transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-brand-gold outline-none py-2 bg-transparent transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-brand-charcoal mb-1">Event Type</label>
                            <select
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-brand-gold outline-none py-2 bg-transparent transition-colors"
                            >
                                <option>Wedding</option>
                                <option>Corporate Event</option>
                                <option>Private Party</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-brand-gold outline-none py-2 bg-transparent transition-colors"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full bg-brand-navy text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-gold transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
