const redis = require('../config/redis');

const guard = async (req, res, next) => {
    const userIP = req.ip;
    
    // Redis/Mock se pucho kya ye IP banned hai?
    const isBanned = await redis.get(`ban:${userIP}`);

    if (isBanned) {
        console.log(`🚫 Blocked request from Banned IP: ${userIP}`);
        return res.status(403).send("<h1>Access Denied</h1><p>You are permanently banned by Hydra-Honey.</p>");
    }

    next();
};

module.exports = guard;