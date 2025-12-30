import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const ManageBudget = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState('');
    const [budgetData, setBudgetData] = useState({ totalBudget: 0, expenses: [] });
    const [newExpense, setNewExpense] = useState({ title: '', amount: '', category: '' });
    const [loading, setLoading] = useState(true);
    const [budgetInput, setBudgetInput] = useState('');

    // Fetch user's events
    useEffect(() => {
        const fetchEvents = async () => {
            if (!user || !user._id) return;
            try {
                const response = await fetch(`http://localhost:5000/api/events/${user._id}`);
                if (response.ok) {
                    const data = await response.json();
                    setEvents(data);
                    if (data.length > 0) setSelectedEventId(data[0]._id);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, [user]);

    // Fetch budget for selected event
    useEffect(() => {
        if (!selectedEventId) return;
        const fetchBudget = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/budget/${selectedEventId}`);
                if (response.ok) {
                    const data = await response.json();
                    setBudgetData(data);
                    setBudgetInput(data.totalBudget);
                }
            } catch (error) {
                console.error("Error fetching budget:", error);
            }
        };
        fetchBudget();
    }, [selectedEventId]);

    const handleSetBudget = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/budget', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ eventId: selectedEventId, totalBudget: budgetInput })
            });
            if (response.ok) {
                const data = await response.json();
                setBudgetData(prev => ({ ...prev, totalBudget: data.totalBudget }));
                alert("Budget updated successfully!");
            }
        } catch (error) {
            console.error("Error setting budget:", error);
        }
    };

    const handleAddExpense = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/budget/${selectedEventId}/expenses`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newExpense)
            });
            if (response.ok) {
                const data = await response.json();
                setBudgetData(data);
                setNewExpense({ title: '', amount: '', category: '' });
            }
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    const handleDeleteExpense = async (expenseId) => {
        if (!window.confirm("Are you sure?")) return;
        try {
            const response = await fetch(`http://localhost:5000/api/budget/${selectedEventId}/expenses/${expenseId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const data = await response.json();
                setBudgetData(data);
            }
        } catch (error) {
            console.error("Error deleting expense:", error);
        }
    };

    const totalSpent = budgetData.expenses.reduce((sum, item) => sum + item.amount, 0);
    const remaining = budgetData.totalBudget - totalSpent;

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (events.length === 0) return <div className="text-center py-20">Please create an event first.</div>;

    return (
        <div className="min-h-screen bg-brand-cream p-8 pt-24">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-brand-gold/20">
                <div className="bg-brand-navy p-6 text-white">
                    <h1 className="text-3xl font-serif">Manage Budget</h1>
                    <p className="text-brand-gold/80 text-sm">Track your event finances</p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Event Selector */}
                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-2">Select Event</label>
                        <select
                            value={selectedEventId}
                            onChange={(e) => setSelectedEventId(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded focus:ring-brand-gold focus:border-brand-gold"
                        >
                            {events.map(event => (
                                <option key={event._id} value={event._id}>{event.eventName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Budget Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-brand-cream rounded border border-brand-gold/20">
                            <div className="text-sm text-brand-charcoal/60 uppercase tracking-widest">Total Budget</div>
                            <div className="flex items-center justify-center mt-2">
                                <span className="text-xl text-brand-navy mr-1">₹</span>
                                <input
                                    type="number"
                                    value={budgetInput}
                                    onChange={(e) => setBudgetInput(e.target.value)}
                                    onBlur={handleSetBudget}
                                    className="w-24 bg-transparent text-2xl font-serif text-brand-navy border-b border-brand-charcoal/20 focus:border-brand-gold focus:outline-none text-center"
                                />
                            </div>
                        </div>
                        <div className="p-4 bg-brand-cream rounded border border-brand-gold/20">
                            <div className="text-sm text-brand-charcoal/60 uppercase tracking-widest">Total Spent</div>
                            <div className="text-2xl font-serif text-red-800 mt-2">₹{totalSpent}</div>
                        </div>
                        <div className="p-4 bg-brand-cream rounded border border-brand-gold/20">
                            <div className="text-sm text-brand-charcoal/60 uppercase tracking-widest">Remaining</div>
                            <div className={`text-2xl font-serif mt-2 ${remaining < 0 ? 'text-red-600' : 'text-green-700'}`}>
                                ₹{remaining}
                            </div>
                        </div>
                    </div>

                    {/* Add Expense Form */}
                    <form onSubmit={handleAddExpense} className="bg-gray-50 p-6 rounded border border-gray-200">
                        <h3 className="text-lg font-serif text-brand-navy mb-4">Add New Expense</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <input
                                type="text"
                                placeholder="Expense Title (e.g. Venue)"
                                value={newExpense.title}
                                onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
                                required
                                className="p-2 border border-gray-300 rounded md:col-span-2"
                            />
                            <input
                                type="number"
                                placeholder="Amount"
                                value={newExpense.amount}
                                onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
                                required
                                className="p-2 border border-gray-300 rounded"
                            />
                            <button type="submit" className="bg-brand-navy text-white py-2 rounded hover:bg-brand-gold transition-colors">
                                Add
                            </button>
                        </div>
                    </form>

                    {/* Expense List */}
                    <div>
                        <h3 className="text-xl font-serif text-brand-navy mb-4">Expenses</h3>
                        {budgetData.expenses.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No expenses recorded yet.</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-brand-cream text-brand-navy text-xs uppercase tracking-wider">
                                        <tr>
                                            <th className="p-3">Title</th>
                                            <th className="p-3">Date</th>
                                            <th className="p-3 text-right">Amount</th>
                                            <th className="p-3 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {budgetData.expenses.map(expense => (
                                            <tr key={expense._id} className="hover:bg-gray-50">
                                                <td className="p-3 font-medium text-brand-charcoal">{expense.title}</td>
                                                <td className="p-3 text-gray-500 text-sm">{new Date(expense.date).toLocaleDateString()}</td>
                                                <td className="p-3 text-right font-mono text-brand-navy">₹{expense.amount}</td>
                                                <td className="p-3 text-center">
                                                    <button
                                                        onClick={() => handleDeleteExpense(expense._id)}
                                                        className="text-red-500 hover:text-red-700 text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBudget;
