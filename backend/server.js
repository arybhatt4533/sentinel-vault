const express = require('express');
const cors = require('cors');
const honeypot = require('./middleware/honeypot');
const guard = require('./middleware/guard');
const statsRoutes = require('./routes/stats'); // 1. Stats route ko import kiya
require('dotenv').config();

const app = express(); 

// 2. Middlewares
app.use(cors());
app.use(express.json());

// 3. API Routes for Dashboard
// Ye line dashboard ko SQL data se connect karegi
app.use('/api/stats', statsRoutes); // 2. Stats route ko register kiya

// 4. Security Layers (Order matters!)
app.use(guard);    
app.use(honeypot); 

// 5. Normal Routes (Jo log trap mein nahi fase unke liye)
app.get('/', (req, res) => {
    res.send("Welcome to Amazon Secure Gateway. Your IP is clean.");
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "iPhone 15", price: "$999" },
        { id: 2, name: "MacBook Air", price: "$1200" }
    ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🛡️  Hydra-Honey is Guarding on Port ${PORT}`);
});