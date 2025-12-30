import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Phone, Mail, Search, Filter } from 'lucide-react';

export default function VendorManagement() {
    const [vendors, setVendors] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        contact: '',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:5000/api/vendors');
            setVendors(response.data);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await axios.post('http://localhost:5000/api/vendors', formData);
            alert('Vendor added successfully!');
            fetchVendors();
            setFormData({ name: '', category: '', contact: '', email: '' });
        } catch (error) {
            console.error('Error adding vendor:', error);
            alert('Failed to add vendor. Check console for details.');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to remove this vendor?')) {
            try {
                await axios.delete(`http://localhost:5000/api/vendors/${id}`);
                fetchVendors();
            } catch (error) {
                console.error('Error deleting vendor:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-brand-cream pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl text-brand-navy mb-4">Vendor Management</h1>
                    <p className="text-brand-charcoal/70 text-lg max-w-2xl mx-auto">
                        Curate your dream team of professionals. Manage contracts and contacts all in one place.
                    </p>
                </div>

                {/* Add Vendor Form */}
                <div className="bg-white rounded-xl shadow-lg border border-brand-gold/20 overflow-hidden mb-16">
                    <div className="bg-brand-navy p-6">
                        <h2 className="text-white font-serif text-2xl flex items-center gap-2">
                            <Plus className="w-6 h-6 text-brand-gold" />
                            Add New Vendor
                        </h2>
                    </div>
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Vendor Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Royal Catering Services"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all bg-gray-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Category <span className="text-red-500">*</span></label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all bg-gray-50"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Venue">Venue</option>
                                    <option value="Catering">Catering</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Music">Music/DJ</option>
                                    <option value="Decor">Decor/Florist</option>
                                    <option value="Attire">Attire</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Contact Number <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="+91 98765 43210"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all bg-gray-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="contact@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all bg-gray-50"
                                />
                            </div>
                            <div className="flex items-end lg:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-brand-navy text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    Add Vendor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Vendors List */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-serif text-3xl text-brand-navy">Your Vendors</h2>
                    <div className="flex gap-2">
                        <button className="p-2 text-brand-navy hover:text-brand-gold transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                        <button className="p-2 text-brand-navy hover:text-brand-gold transition-colors">
                            <Filter className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto"></div>
                    </div>
                ) : vendors.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500 text-lg">No vendors added yet. Start building your team above!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vendors.map((vendor) => (
                            <div key={vendor._id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                                <div className="h-2 bg-brand-gold/20 group-hover:bg-brand-gold transition-colors duration-300"></div>
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-brand-cream text-brand-navy text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                                {vendor.category}
                                            </span>
                                            <h3 className="font-serif text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                                                {vendor.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-gray-600">
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-4 h-4 text-brand-gold" />
                                            <span className="text-sm">{vendor.contact}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-4 h-4 text-brand-gold" />
                                            <span className="text-sm truncate">{vendor.email}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                    <button className="text-sm font-bold text-brand-navy hover:text-brand-gold transition-colors uppercase tracking-wider">
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => handleDelete(vendor._id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                                        title="Remove Vendor"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
