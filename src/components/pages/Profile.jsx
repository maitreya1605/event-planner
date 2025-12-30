import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-brand-cream text-brand-navy">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return (
        <div className="min-h-screen bg-brand-cream py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-brand-gold/10">
                    {/* Header with Background */}
                    <div className="bg-brand-navy h-32 md:h-48 relative">
                        <div className="absolute -bottom-16 left-8 md:left-12">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user.name || user.username}&background=0A192F&color=D4AF37&size=256`}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="pt-20 pb-8 px-8 md:px-12">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-serif text-brand-navy font-bold">{user.name}</h1>
                                <p className="text-brand-gold font-medium tracking-wide uppercase text-sm">@{user.username}</p>
                            </div>
                            <span className="bg-brand-cream text-brand-navy px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-navy/10">
                                Client
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="space-y-4">
                                <h2 className="text-lg font-serif text-brand-navy border-b border-brand-gold/20 pb-2">Contact Information</h2>
                                <div>
                                    <label className="block text-xs uppercase text-brand-charcoal/50 tracking-widest mb-1">Email Address</label>
                                    <p className="text-brand-charcoal font-medium">{user.email}</p>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-brand-charcoal/50 tracking-widest mb-1">Phone Number</label>
                                    <p className="text-brand-charcoal font-medium">{user.contact || 'Not provided'}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-serif text-brand-navy border-b border-brand-gold/20 pb-2">Account Details</h2>
                                <div>
                                    <label className="block text-xs uppercase text-brand-charcoal/50 tracking-widest mb-1">Member Since</label>
                                    <p className="text-brand-charcoal font-medium">December 2025</p>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-brand-charcoal/50 tracking-widest mb-1">Account Status</label>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <p className="text-brand-charcoal font-medium">Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                            <button className="px-6 py-2 bg-brand-navy text-white text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300 shadow-md">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
