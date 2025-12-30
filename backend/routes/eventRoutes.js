const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


router.post('/', async (req, res) => {
    try {
        const { user, eventType, eventName, date, location, description, budget, guestCount } = req.body;

        const newEvent = new Event({
            user,
            eventType,
            eventName,
            date,
            location,
            description,
            budget,
            guestCount,
            status: new Date(date) < new Date() ? 'completed' : 'upcoming' 
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Server error creating event' });
    }
});

// Get all events for a user
router.get('/:userId', async (req, res) => {
    try {
        const events = await Event.find({ user: req.params.userId }).sort({ date: 1 }); // Sort by date ascending
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Server error fetching events' });
    }
});

module.exports = router;
