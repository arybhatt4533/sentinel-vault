const redis = require('../config/redis'); // Mock Redis import kiya

const honeypot = async (req, res, next) => {
    const traps = ['/admin', '/.env', '/wp-login.php', '/phpmyadmin'];

    if (traps.includes(req.path)) {
        const userIP = req.ip;

        // 🔒 Hacker ko Ban-list mein dalo
        await redis.set(`ban:${userIP}`, 'true'); 
        
        console.log(`🔴 ATTACK DETECTED! IP ${userIP} has been BANNED.`);

        return res.status(403).json({
            success: false,
            message: "Security Alert: Your IP has been flagged and blocked."
        });
    }
    next();
};

module.exports = honeypot;