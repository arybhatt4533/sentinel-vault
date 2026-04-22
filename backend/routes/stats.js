const express = require('express');
const router = express.Router();
const db = require('../config/db'); // ensure your db.js uses the 'pg' pool

// 1. Dashboard Table ke liye
router.get('/logs', async (req, res) => {
    try {
        // PostgreSQL mein pool.query() use hota hai aur result .rows mein hota hai
        const query = `
            SELECT 
                id, 
                ip_address, 
                path, 
                method, 
                detected_at 
            FROM attacks 
            ORDER BY detected_at DESC 
            LIMIT 10
        `;
        const result = await db.query(query);
        res.json(result.rows); 
    } catch (err) {
        console.error("Postgres Error in /logs:", err);
        res.status(500).json({ error: "Database se logs nahi mil paye." });
    }
});

// 2. Dashboard Cards ke liye
router.get('/summary', async (req, res) => {
    try {
        // PostgreSQL queries
        const totalResult = await db.query("SELECT COUNT(*) as total FROM attacks");
        
        // Agar banned_ips table abhi nahi banayi hai, toh isse 0 bhej sakte hain
        // const bannedResult = await db.query("SELECT COUNT(*) as banned FROM banned_ips");
        
        res.json({
            total: parseInt(totalResult.rows[0].total) || 0,
            banned: 0 // Abhi ke liye temporary 0, jab table ban jaye toh query daal dena
        });
    } catch (err) {
        console.error("Postgres Error in /summary:", err);
        res.status(500).json({ error: "Summary data load nahi ho paya." });
    }
});

module.exports = router;