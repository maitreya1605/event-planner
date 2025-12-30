const express = require('express');
const router = express.Router();

const Budget = require('../models/Budget');

const Event = require('../models/Event');

// Get budget details for an event
router.get('/:eventId', async (req, res) => {
    try {
        let budget = await Budget.findOne({ event: req.params.eventId });
        if (!budget) {
            const event = await Event.findById(req.params.eventId);
            const initialBudget = event && event.budget ? event.budget : 0;

            // Create a new budget record with the event's budget
            budget = new Budget({
                event: req.params.eventId,
                totalBudget: initialBudget,
                expenses: []
            });
            await budget.save();
        }
        res.json(budget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    const { eventId, totalBudget } = req.body;
    try {
        let budget = await Budget.findOne({ event: eventId });
        if (budget) {
            budget.totalBudget = totalBudget;
            await budget.save();
        } else {
            budget = new Budget({ event: eventId, totalBudget });
            await budget.save();
        }
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add an expense
router.post('/:eventId/expenses', async (req, res) => {
    const { title, amount, category } = req.body;
    try {
        let budget = await Budget.findOne({ event: req.params.eventId });
        if (!budget) {
            // Create budget if it doesn't exist (e.g. user adds expense before setting total)
            budget = new Budget({ event: req.params.eventId, totalBudget: 0 });
        }
        budget.expenses.push({ title, amount, category });
        await budget.save();
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an expense
router.delete('/:eventId/expenses/:expenseId', async (req, res) => {
    try {
        const budget = await Budget.findOne({ event: req.params.eventId });
        if (!budget) return res.status(404).json({ message: "Budget not found" });

        budget.expenses = budget.expenses.filter(exp => exp._id.toString() !== req.params.expenseId);
        await budget.save();
        res.json(budget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
