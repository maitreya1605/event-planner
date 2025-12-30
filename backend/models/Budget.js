const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
        unique: true // One budget per event
    },
    totalBudget: {
        type: Number,
        default: 0
    },
    expenses: [{
        title: { type: String, required: true },
        amount: { type: Number, required: true },
        category: { type: String },
        date: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Budget', budgetSchema);
