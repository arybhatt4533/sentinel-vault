// Temporary Mock Redis (Agar Redis install nahi hai)
const mockRedis = {
    cache: new Set(),
    async get(key) { return this.cache.has(key) ? "true" : null; },
    async set(key, val, mode, time) { this.cache.add(key); console.log(`🔒 IP ${key} added to Mock Ban-list`); },
    on: () => {} // Dummy event listener
};

console.log("⚠️ Using Mock Redis (Testing Mode)");
module.exports = mockRedis;