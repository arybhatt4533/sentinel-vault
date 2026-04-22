# 🛡️ Sentinel Vault | Advanced Honeypot Monitoring System

![System Status](https://img.shields.io/badge/System-ONLINE-00ff00?style=for-the-badge&logo=statuspage)
![Version](https://img.shields.io/badge/Version-1.0.0--Stable-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Sentinel Vault** is a high-interaction Honeypot Dashboard designed to detect, log, and visualize unauthorized access attempts in real-time. Built for the **Hydra-Honey** security suite, it provides a sophisticated interface for security administrators to monitor attack vectors and manage network integrity.

---

## 🚀 Key Features

* **Real-Time Monitoring:** Instant visualization of incoming attack vectors via SQL integration.
* **Threat Analytics:** Live counters for total threats and banned IP addresses.
* **Security Layers:** Integrated **Guard** and **Honeypot** middlewares to trap and identify malicious actors.
* **Data Integrity:** Secure PostgreSQL backend for robust log management.
* **Cyberpunk UI:** High-contrast, dark-mode dashboard built for maximum readability and "Command Center" feel.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Axios, Lucide Icons |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (pgAdmin) |
| **Security** | Custom Middleware (Guard & Honey-Trap Logic) |

---

## 📸 Dashboard Preview

> **"Establishing Secure Connection..."**
> The dashboard features a real-time table showing Source IPs, HTTP Methods, and Targeted Vector Paths (like `/.env` or `/admin`).

---

## 🏗️ Architecture Flow

1.  **The Trap:** Attacker hits a "Honey-Link" (e.g., `/api/products` or `/.env`).
2.  **Detection:** `honeypot.js` middleware captures metadata (IP, User-Agent, Payload).
3.  **Logging:** Backend pushes the attempt into the PostgreSQL `attacks` table.
4.  **Visualization:** React frontend fetches updates and displays them on the **Sentinel Vault** UI.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/sentinel-vault.git](https://github.com/YOUR_USERNAME/sentinel-vault.git)
