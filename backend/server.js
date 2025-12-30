const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(session({
    name: 'session-id',
    secret: 'mySecretKey',      
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 30
    }
}))

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/events")
    .then(() => console.log("database connected"))
    .catch((err) => console.log("error: ", err));


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/budget', require('./routes/budgetRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));
app.use('/api/vendors', require('./routes/vendorRoutes'));

app.get('/', (req, res) => {
    res.send('Event Planner API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
