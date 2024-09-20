const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quizapp', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema and Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },  // Ensure unique email
    password: String
});
const User = mongoose.model('User', UserSchema);

// Registration Route
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists.' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Please provide both email and password.' });
    }

    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

        res.json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
