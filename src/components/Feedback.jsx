import React, { useState } from 'react';

const Feedback = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Feedback',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Thank you for your feedback!");
                setFormData({ name: '', email: '', subject: 'General Feedback', message: '' });
                onClose();
            } else {
                alert("Failed to submit feedback.");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("Error submitting feedback.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
                <div className="bg-brand-navy p-4 flex justify-between items-center">
                    <h3 className="text-white font-serif text-xl">We Value Your Feedback</h3>
                    <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-1">Subject</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"
                        >
                            <option>General Feedback</option>
                            <option>Bug Report</option>
                            <option>Feature Request</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-gold text-white py-3 rounded font-medium hover:bg-brand-navy transition-colors duration-300 disabled:opacity-50"
                    >
                        {loading ? 'Sending...' : 'Submit Feedback'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
