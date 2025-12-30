import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ClientDashboard = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            if (!user || !user._id) return;
            try {
                const response = await fetch(`http://localhost:5000/api/events/${user._id}`);
                if (response.ok) {
                    const data = await response.json();
                    setEvents(data);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [user]);

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center bg-brand-cream text-brand-navy">Loading user data...</div>;
    }

    const upcomingEvents = events.filter(event => event.status === 'upcoming');
    const completedEvents = events.filter(event => event.status === 'completed');

    const EventCard = ({ event }) => (
        <div className="group bg-brand-cream/30 border border-brand-charcoal/5 rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:border-brand-gold/30">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-brand-navy group-hover:text-brand-gold transition-colors">
                    {event.eventName}
                </h3>
                <span className="text-xs font-mono text-brand-charcoal/60 bg-white px-2 py-1 rounded border border-brand-charcoal/10">
                    {new Date(event.date).toLocaleDateString()}
                </span>
            </div>
            <p className="text-sm text-brand-charcoal/70 mb-2">
                Type: <span className="font-medium">{event.eventType}</span>
            </p>
            <p className="text-sm text-brand-charcoal/70 mb-4">
                Location: <span className="font-medium">{event.location}</span>
            </p>
            <button className="w-full py-2 text-xs uppercase tracking-widest font-medium text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white transition-colors duration-300 rounded-sm">
                View Details
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-brand-cream p-8 pt-24">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Welcome Section */}
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-navy animate-fade-in">
                        Welcome, <span className="text-brand-gold">{user.name || user.username}</span>
                    </h1>
                    <p className="text-lg text-brand-charcoal/70 font-light tracking-wide">
                        Your personal event planning hub
                    </p>
                </header>

                {/* Profile Section */}
                <div className="flex justify-center">
                    <div className="relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brand-white shadow-xl transform transition-transform duration-300 group-hover:scale-105">
                            <img
                                src={`https://ui-avatars.com/api/?name=${user.name || user.username}&background=0A192F&color=D4AF37&size=256`}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-navy text-brand-gold text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Profile
                        </div>
                    </div>
                </div>

                {/* Upcoming Events Section */}
                <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-brand-gold/10">
                    <div className="bg-brand-navy px-6 py-4 border-b border-brand-gold/20 flex justify-between items-center">
                        <h2 className="text-xl font-serif text-white tracking-wide">Upcoming Events</h2>
                        <span className="bg-brand-gold/20 text-brand-gold text-xs px-2 py-1 rounded uppercase tracking-wider">
                            {upcomingEvents.length} Active
                        </span>
                    </div>

                    <div className="p-6 md:p-8">
                        {loading ? (
                            <div className="text-center py-8 text-brand-charcoal/50">Loading events...</div>
                        ) : upcomingEvents.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2">
                                {upcomingEvents.map((event) => (
                                    <EventCard key={event._id} event={event} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-brand-charcoal/40 text-6xl mb-4">📅</div>
                                <p className="text-brand-charcoal/60 text-lg">No upcoming events.</p>
                                <a href="/add-event" className="inline-block mt-6 px-6 py-2 bg-brand-gold text-white text-sm uppercase tracking-widest hover:bg-brand-navy transition-colors duration-300 shadow-md">
                                    Plan an Event
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* Completed Events Section */}
                <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-brand-gold/10 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="bg-brand-charcoal px-6 py-4 border-b border-brand-gold/20 flex justify-between items-center">
                        <h2 className="text-xl font-serif text-white tracking-wide">Completed Events</h2>
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded uppercase tracking-wider">
                            {completedEvents.length} Archived
                        </span>
                    </div>

                    <div className="p-6 md:p-8">
                        {completedEvents.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2">
                                {completedEvents.map((event) => (
                                    <EventCard key={event._id} event={event} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-brand-charcoal/50">
                                <p>No completed events yet.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Quick Stats / Additional Info (Optional, keeping it clean for now) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-3xl font-serif text-brand-gold mb-1">0</div>
                        <div className="text-xs uppercase tracking-widest text-brand-charcoal/60">Pending Tasks</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-3xl font-serif text-brand-gold mb-1">$0</div>
                        <div className="text-xs uppercase tracking-widest text-brand-charcoal/60">Budget Used</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-3xl font-serif text-brand-gold mb-1">0</div>
                        <div className="text-xs uppercase tracking-widest text-brand-charcoal/60">Guests Invited</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientDashboard;
