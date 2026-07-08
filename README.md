# 📰 NewsPoint - Next-Generation AI Powered MERN News Portal

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![OpenAI](https://img.shields.io/badge/OpenAI-AI-black?style=for-the-badge&logo=openai)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-blue?style=for-the-badge&logo=razorpay)

</p>

---

# 🌐 About NewsPoint

**NewsPoint** is a modern **AI-powered Indian News Portal** built using the **MERN Stack**.

Inspired by leading news platforms such as **India Today**, **NDTV**, and **Times of India**, NewsPoint provides a premium news reading experience with Artificial Intelligence, real-time news fetching, Text-to-Speech, interactive UI animations, and an advanced Admin Dashboard.

The platform enables administrators to publish news, fetch live articles automatically, generate AI-powered summaries, and manage users, while readers enjoy a fast, modern, and intelligent news experience.

---

# 🚀 Key Features

## 🤖 Artificial Intelligence

- 🧠 AI News Summarizer using OpenAI (ChatGPT)
- 📄 Automatic 3-point Hindi & English summaries
- ⚡ Instant AI-generated article highlights
- 🔍 Smart content processing

---

## 🌍 Live News Integration

- 📰 One-click Live News Fetch
- 🌐 GNews API Integration
- ⚡ Real-time article import
- 🗂 Automatic news categorization

---

## 👨‍💻 User Experience

- 🎙 Text-to-Speech (Hindi & English)
- 🌙 Dark / Light Theme
- 💎 Glassmorphism UI
- 🎨 Floating Gradient Background
- 🧊 3D Animated Widgets
- 📱 Fully Responsive Design
- 🔥 Smooth Page Animations

---

## 📰 News Categories

- Politics
- Sports
- Technology
- Business
- Entertainment
- Health
- Science
- World
- Education
- Lifestyle

---

# 👨‍💼 Admin Dashboard

The Admin Panel provides complete control over the portal.

### Features

- ➕ Create News
- ✏ Edit News
- ❌ Delete News
- 📸 Image Upload (Multer)
- 👨‍💻 Journalist Management
- 📰 Live News Fetch
- 🤖 AI Summary Generation
- 📊 Dashboard Analytics

---

# 💳 Premium Subscription

Integrated with **Razorpay**.

### Features

- ₹599/year Subscription
- Secure Checkout
- Razorpay Test Mode
- Payment Verification

---

# 🛠 Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js (Vite) |
| Backend | Node.js + Express.js |
| Database | MongoDB (Mongoose) |
| Authentication | JWT + Bcrypt.js |
| HTTP Client | Axios |
| State Management | React Context API |
| AI | OpenAI API |
| News API | GNews API |
| Payment Gateway | Razorpay |
| File Upload | Multer |
| Styling | CSS3 + Glassmorphism + 3D Animations |

---

# 🏗 Project Architecture

```
                User
                  │
        ┌─────────┴──────────┐
        │                    │
        ▼                    ▼
 React Frontend        Admin Dashboard
        │                    │
        └─────────┬──────────┘
                  │
          Express REST APIs
                  │
        ┌─────────┼─────────┐
        │         │         │
        ▼         ▼         ▼
    MongoDB   OpenAI API   GNews API
                  │
             Razorpay API
```

---

# 📂 Project Structure

```
newspoint-mern/

│
├── backend/
│   ├── models/
│   │      ├── News.js
│   │      ├── User.js
│   │      └── Comment.js
│   │
│   ├── routes/
│   │      ├── newsRoutes.js
│   │      ├── authRoutes.js
│   │      ├── aiRoutes.js
│   │      ├── paymentRoutes.js
│   │      └── fetchRoutes.js
│   │
│   ├── uploads/
│   ├── middleware/
│   ├── seed.js
│   ├── server.js
│   └── .env
│
├── client/
│   ├── src/
│   │      ├── components/
│   │      ├── contexts/
│   │      ├── pages/
│   │      ├── App.jsx
│   │      └── App.css
│   │
│   └── index.html
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Vipulbtech23/newspoint-mern.git

cd newspoint-mern
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

OPENAI_API_KEY=your_openai_api_key

RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx

RAZORPAY_KEY_SECRET=your_secret_key
```

---

# 📦 Backend Setup

Install dependencies

```bash
cd backend

npm install
```

(Optional)

Populate database

```bash
node seed.js
```

Run backend

```bash
node server.js
```

---

# 💻 Frontend Setup

Open another terminal

```bash
cd client

npm install

npm run dev
```

Application will start at

```
http://localhost:5173
```

---

# 📸 Screenshots

Add screenshots here

- 🏠 Home Page
- 📰 News Details
- 🤖 AI Summary
- 👨‍💼 Admin Dashboard
- 💳 Subscription Page
- 🌙 Dark Theme
- 📰 Category Pages

---

# 🎯 Future Scope

- Redux Toolkit Integration
- Socket.io Real-Time Breaking News
- Live Comments
- User Authentication
- Personalized Feed
- Bookmark Articles
- Reading History
- Push Notifications
- Cloudinary Image Storage
- AI News Recommendation System
- AI Fake News Detection
- Progressive Web App (PWA)
- Mobile Application

---

# 👨‍💻 Author

**Vipul Pandey**

Computer Science Engineer

🔗 GitHub

https://github.com/Vipulbtech23

---

# ⭐ Support

If you found this project helpful,

⭐ Star this repository

🍴 Fork it

📢 Share it

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 🙏 Acknowledgements

Special thanks to

- OpenAI
- React Team
- Node.js
- Express.js
- MongoDB
- Razorpay
- GNews API
- Open Source Community
