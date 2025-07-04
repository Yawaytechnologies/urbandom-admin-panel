# 📋 Urbandom Admin Panel

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E=18.0.0-green.svg)](https://nodejs.org/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Contributors](https://img.shields.io/github/contributors/urbandom/urbandom-admin-panel)](https://github.com/urbandom/urbandom-admin-panel/graphs/contributors)

Modern admin dashboard for Urbandom—manage users, properties, and all platform operations.

---

## 📷 Screenshots

![Dashboard Screenshot](./screenshots/dashboard.png)
*Add more screenshots of your UI as your project grows.*

---

## 🏠 About

This repo contains the codebase for the **Urbandom Admin Panel**, used by admins to manage platform data, users, listings, and more.

---

## ✨ Features

- 🔒 Secure login for admins
- 📊 Dashboard with platform statistics
- 👥 User, property, and transaction management
- 🔑 Role-based access control
- 📝 Activity logs and notifications

---

## ⚙️ Tech Stack

- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/) / [Ant Design](https://ant.design/)
- [Axios](https://axios-http.com/)
- (Add other libraries as needed)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/urbandom/urbandom-admin-panel.git
    cd urbandom-admin-panel
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    # or
    npm install
    ```

3. **Copy environment variables:**
    ```bash
    cp .env.example .env
    ```
    Update the `.env` file with your configuration.

4. **Run the development server:**
    ```bash
    yarn start
    # or
    npm run start
    ```

    The app should now be running at [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
REACT_APP_API_URL=https://api.urbandom.com
REACT_APP_GOOGLE_MAPS_KEY=xxxxxxx
# Add more as required
