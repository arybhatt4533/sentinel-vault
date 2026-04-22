# 🛡️ Sentinel Vault: Advanced Deception & Threat Intelligence System
**Developed by: Aryabhatt (Arya Bhatt)** *Cybersecurity Researcher | BCA Developer*

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
