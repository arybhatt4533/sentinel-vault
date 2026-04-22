# 🛡️ Sentinel Vault: Advanced Deception & Threat Intelligence System
**Developed by: Aryabhatt (Arya Bhatt)** *Developer // open source contributor // BCA student*

![System Status](https://img.shields.io/badge/System-ONLINE-00ff00?style=for-the-badge&logo=statuspage)
![UHack 4.0 Merit](https://img.shields.io/badge/Achievement-National_Hackathon_Merit-gold?style=for-the-badge)

---

## 📖 Detailed Project Overview
**Sentinel Vault** is not just a dashboard; it is a full-stack **Active Defense** mechanism. While traditional firewalls block traffic, this system uses **Honey-Trap Technology** to lure attackers into a controlled environment. By simulating vulnerable endpoints (like `/.env` or `/admin/config`), we capture high-fidelity threat intelligence without risking real production data.

### Why this project?
In my research into cybersecurity and ethical hacking, I realized that logging is often boring. **Sentinel Vault** makes security interactive. It provides a real-time "Command Center" view of every malicious handshake attempted on the server.

---

## 🛠️ Technical Architecture & Schema

### 🗄️ Database Strategy (PostgreSQL)
The system uses a robust PostgreSQL backend. Based on my **pgAdmin 4** implementation, the core tracking engine runs on this schema:

```sql
CREATE TABLE attacks (
    id SERIAL PRIMARY KEY,
    ip_address VARCHAR(50),
    method VARCHAR(10),
    path TEXT,
    user_agent TEXT,
    payload TEXT,
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🛡️ Security Logic (The Guard & Trap)
The Guard Middleware: Intercepts every request to check against a dynamically updated banned_ips list.

The Honey-Trap: Specific "dark" routes are set up. Any interaction with these routes is flagged as 100% malicious, as no legitimate user would ever access them.

The Sentinel Bridge: A Node.js API that bridges the gap between the low-level SQL logs and the React high-level visualization.

🚀 Professional Features
Zero-False Positives: By using deception-based detection, every entry in this dashboard is a verified threat.

Live Threat Streaming: Uses asynchronous polling to update the Sentinel Dashboard without page refreshes.

Payload Analysis: Captures exactly what the attacker was trying to inject (SQLi, XSS, or Path Traversal attempts).

National Hackathon Pedigree: Logic inspired by the award-winning Satellite Threat Detection (STDAMS) project.

💻 Installation for Reviewers
.Prerequisites
.Node.js (v18+)
.PostgreSQL 18
.Git
git clone [https://github.com/aryabhatt-dev/sentinel-vault.git](https://github.com/aryabhatt-dev/sentinel-vault.git)
cd sentinel-vault
npm install
Environment Configuration:
Create a .env in the root with your PostgreSQL credentials:
DB_PASSWORD=your_secure_password
Launch the Sentinel:
# Start the backend guard
node backend/server.js
# Start the frontend dashboard
npm run dev --prefix frontend
