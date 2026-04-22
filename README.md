# 🛡️ Sentinel Vault: Advanced Deception & Threat Intelligence System

**Developed by:** [Aryabhatt (Arya Bhatt)](https://github.com/aryabhatt-dev)  
*Developer | Open Source Contributor | BCA Student (2024-2027)*

![System Status](https://img.shields.io/badge/System-ONLINE-00ff00?style=for-the-badge&logo=statuspage)
![UHack 4.0 Merit](https://img.shields.io/badge/Achievement-National_Hackathon_Merit-gold?style=for-the-badge)
![Database](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)

---

## 📖 Project Overview
**Sentinel Vault** is a full-stack **Active Defense** mechanism. Unlike traditional firewalls that simply block traffic, this system employs **Honey-Trap Technology** to lure attackers into a controlled environment. By simulating vulnerable endpoints (such as `/.env`, `/admin/config`, or `/wp-admin`), the system captures high-fidelity threat intelligence without exposing production data.

### 🎯 The "Why" Behind Sentinel Vault
In the world of cybersecurity and ethical hacking, standard logs can be static and dull. **Sentinel Vault** transforms security into an interactive experience. It provides a real-time **"Command Center"** view of every malicious handshake attempted on the server, making threat monitoring both proactive and visual.

---

## 🛠️ Technical Architecture

### 🗄️ Database Strategy (PostgreSQL)
The core tracking engine is powered by PostgreSQL. The schema is designed for high-speed logging and analytical retrieval, managed via **pgAdmin 4**:

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
🛡️ Security Logic: The Guard & Trap
The Guard Middleware: Intercepts incoming requests to validate against dynamic security policies and banned_ips.

The Honey-Trap: Hidden "dark" routes are deployed. Any interaction with these paths is flagged as 100% malicious, as they are invisible to legitimate users.

The Sentinel Bridge: A robust Node.js API that bridges low-level SQL logs with high-level React visualizations.

🚀 Key Professional Features
Zero False Positives: Using deception-based detection, every dashboard entry is a verified, intentional threat.

Live Threat Streaming: Implements asynchronous polling to update the UI instantly without manual refreshes.

Deep Payload Analysis: Captures exact injection attempts (SQLi, XSS, or Path Traversal) for forensic analysis.

Hackathon-Grade Logic: The architecture is inspired by my award-winning Satellite Threat Detection & Monitoring System (STDAMS) project.

💻 Setup & Installation
1. Prerequisites
Node.js (v18+)

PostgreSQL 18

Git

2. Deployment
# Clone the repository
git clone [https://github.com/aryabhatt-dev/sentinel-vault.git](https://github.com/aryabhatt-dev/sentinel-vault.git)
cd sentinel-vault

# Install dependencies for both Backend and Frontend
cd backend && npm install
cd ../frontend && npm install
3. Environment Configuration
Create a .env file in the /backend folder:

Code snippet
DB_USER=postgres
DB_PASSWORD=your_secure_password
DB_HOST=localhost
DB_NAME=hydra_db
PORT=5000
4. Run the System
Bash
# Terminal 1: Launch the Backend Guard
cd backend && node server.js

# Terminal 2: Launch the Sentinel Dashboard
cd frontend && npm run dev
👤 About the Author
I am Aryabhatt, a BCA student and cybersecurity enthusiast based in Uttar Pradesh, India. I specialize in building secure, scalable applications using Python, C++, and the MERN stack.

Achievement: Certificate of Merit at UHack 4.0 (National Hackathon).

Focus: Open Source Security Research & GSoC 2026 Preparation.

Vision: Integrating machine learning with active defense to secure the next generation of web infrastructure.

© 2026 Aryabhatt. Developed for the global cybersecurity community.


---
