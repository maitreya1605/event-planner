const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

router.post('/', async (req, res) => {
    const body = req.body
    try {
        await Feedback.create({
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
        })
        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).json({ message: "Error submitting feedback", error: error.message });
    }
});

module.exports = router;
