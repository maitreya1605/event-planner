const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');


router.get('/', async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {

    try {
        const newVendor = await Vendor.create({
            name: req.body.name,
            category: req.body.category,
            contact: req.body.contact,
            email: req.body.email
        });

        res.status(201).json(newVendor);
    } catch (err) {
        console.error('Error saving vendor:', err);
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Vendor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Vendor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
