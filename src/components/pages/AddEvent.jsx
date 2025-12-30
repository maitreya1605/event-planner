import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AddEvent() {
    const [formData, setFormData] = useState({
        eventType: '',
        eventName: '',
        date: '',
        location: '',
        description: '',
        budget: '',
        guestCount: ''
    });

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            alert("Please login to create an event");
            return;
        }

        if (!user._id) {
            alert("Session expired or invalid. Please log out and log back in.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    user: user._id // Assuming user object has _id
                }),
            });

            if (response.ok) {
                alert("Event Created Successfully!");
                navigate('/client-dashboard');
            } else {
                alert("Failed to create event");
            }
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Error creating event");
        }
    };

    return (
        <div className="bg-brand-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden border-t-4 border-brand-gold">
                    <div className="px-6 py-8 sm:p-10">
                        <h2 className="text-3xl font-serif text-brand-navy text-center mb-8">Create New Event</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="eventType" className="block text-sm font-medium text-brand-charcoal">
                                        Event Type
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            required
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                        >
                                            <option value="">Select an event type</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Anniversary">Anniversary</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Baby Shower">Baby Shower</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="eventName" className="block text-sm font-medium text-brand-charcoal">
                                        Event Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="eventName"
                                            id="eventName"
                                            required
                                            value={formData.eventName}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="e.g. Smith Wedding, Corporate Gala"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-brand-charcoal">
                                        Date
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-brand-charcoal">
                                        Location
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            required
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="Venue or City"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-brand-charcoal">
                                        Estimated Budget ($)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="budget"
                                            id="budget"
                                            min="0"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="5000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="guestCount" className="block text-sm font-medium text-brand-charcoal">
                                        Guest Count
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="guestCount"
                                            id="guestCount"
                                            min="0"
                                            value={formData.guestCount}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="100"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-brand-charcoal">
                                        Description / Notes
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={4}
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-brand-gold focus:border-brand-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="Any specific details or themes..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-navy hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy transition-colors duration-200"
                                >
                                    Create Event
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
