# 📟 ProcMon

> **The heartbeat of your infrastructure, delivered straight to Discord.**

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

---

## ⚡ What is ProcMon?

**ProcMon** (Process Monitor) is a lightweight, full-stack observability solution designed for developers who need immediate visibility into their silent background tasks.

Whether you are running critical Cron jobs, deploying nightly builds, or managing server health, ProcMon acts as the bridge between your code and your communication channels. It listens for HTTP "pings" from your applications and instantly dispatches formatted alerts to your Discord server via Webhooks.

**No more checking logs manually. If it breaks, you'll know.**

## 🚀 Key Features

* **Real-Time Discord Integration:** Turn silent HTTP requests into rich, actionable Discord notifications.
* **Project-Based Isolation:** Organize your monitors into distinct projects with unique API keys.
* **Secure API Handling:** Authenticated endpoints ensure only your authorized apps can trigger alerts.
* **Event Logging:** Keep a historical audit trail of every ping, success, or failure.
* **Modern Stack:** Built for performance using the T3-adjacent stack (Next.js, TypeScript, PostgreSQL).

## 🛠️ Tech Stack

**ProcMon** is engineered with robust, modern technologies:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Database:** [PostgreSQL](https://www.postgresql.org/) (managed via Prisma ORM)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
* **Auth:** [Clerk](https://clerk.com/) (Optional/If implemented) or Custom
* **Deployment:** Vercel / Docker compatible

---

## 🏁 Getting Started

Follow these steps to spin up your own instance of ProcMon.

### Prerequisites

* Node.js (v18+)
* npm or pnpm
* A PostgreSQL database URI

### Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/yourusername/ProcMon.git](https://github.com/yourusername/ProcMon.git)
    cd ProcMon
    ```

2.  **Install Dependencies**
    ```bash
    bun install
    # or
    npm install
    # or
    pnpm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory and configure your keys:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/procmon"
    # Add other necessary auth keys here
    ```

4.  **Database Migration**
    Sync your Prisma schema with your database:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Ignition**
    Start the development server:
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` to view the dashboard.

---

## 📡 Usage

Once your project is created in the dashboard, you will receive a unique **API Key** and **Project ID**. Use these to send pings from your scripts.



### 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make to **ProcMon** are greatly appreciated.

1.  **Fork the Project**
2.  **Create your Feature Branch**
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3.  **Commit your Changes**
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4.  **Push to the Branch**
    ```bash
    git push origin feature/AmazingFeature
    ```
5.  **Open a Pull Request**

---

### 📄 License

Distributed under the MIT License. See `LICENSE` for more information.<br>
Built with ❤️