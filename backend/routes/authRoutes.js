const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');



router.post('/client/register', async (req, res) => {
    const body = req.body;
    if (
        !body || !body.username || !body.password || !body.email || !body.contact || !body.name
    ) {
        return res.send("all required");
    }
    try {
        const hashedpass = await bcrypt.hash(body.password, 10);
        const newUser = await User.create({
            name: body.name,
            username: body.username,
            password: hashedpass,
            email: body.email,
            contact: body.contact,
        });

     
        req.session.user = {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        };

       
        return res.status(201).json({
            msg: "user created",
            redirectUrl: '/client-dashboard',
            user: {
                _id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                email: newUser.email
            }
        });
    }
    catch (err) {
        if (err.code == 11000) {
            const field = Object.keys(err.keyPattern)[0];
            return res.status(400).json({ msg: `${field} already exists` });
        }
        return res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }
});


router.post('/client/login', async (req, res) => {
    const body = req.body;
    try {
        const user1 = await User.findOne({ username: body.username });
        if (!user1) {
            return res.status(400).json({ msg: "user not found" });
        }
        const hass = await bcrypt.compare(body.password, user1.password);
        if (!hass) {
            return res.status(400).json({ msg: "wrong pass" });
        }
       
        req.session.user = {
            id: user1._id,
            username: user1.username,
            email: user1.email
        };

        res.status(200).json({
            msg: "auth success",
            redirectUrl: '/client-dashboard',
            user: {
                _id: user1._id,
                name: user1.name,
                username: user1.username,
                email: user1.email
            }
        });
        
    } catch (err) {
        res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }

});
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ msg: "Could not log out" });
        }
        res.clearCookie("session-id");
        res.status(200).json({ msg: "Logged out successfully" });
    });
});

module.exports = router;
