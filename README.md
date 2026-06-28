📰 NewsPoint - Next-Gen AI-Powered  MERN Stack News Portal
A highly scalable, interactive, and modern Indian news portal built with the MERN stack. Inspired by platforms like India Today and NDTV, featuring AI-driven summaries, Text-to-Speech, 3D animated UI elements, and a robust admin dashboard.

MERNReactNode.jsOpenAIRazorpay

✨ Highlights & Key Features
🤖 AI & Automation
AI News Summarizer: Integrated OpenAI (ChatGPT) API to automatically generate 3-point Hindi-English summaries for long articles.
Auto-Fetch System: Admins can fetch real-time live news directly into the database using the GNews API with one click.
👨‍💻 User Experience (UX)
Text-to-Speech (TTS): "Listen to Article" feature allowing users to hear the news in Hindi/English using Web Speech API.
Premium UI/UX: Glassmorphism, floating gradient bubbles, and 3D rotating CSS cubes for Cricket & Weather widgets.
Dark/Light Mode: Smooth theme switching using React Context API.
Dynamic Categorization: Dedicated pages for Politics, Sports, Tech, Business, and more.
🛡️ Admin Dashboard
Content Management: Create, Edit, and Delete news articles with a rich interface.
Native Image Upload: Secure image handling via Multer.
User Management: Admins can register new journalists/reporters.
💳 Monetization
Razorpay Integration: Fully functional subscription page (₹599/year) with live Razorpay test mode checkout.
🛠️ Tech Stack
Frontend: React.js (Vite), React Router DOM, Axios, Context API
Backend: Node.js, Express.js, REST APIs
Database: MongoDB (Mongoose ODM)
Authentication: JSON Web Tokens (JWT), Bcrypt.js
Integrations:
OpenAI API (for AI Summarization)
Razorpay API (for Payment Gateway)
GNews API (for Live News fetching)
File Handling: Multer
Styling: Advanced CSS3 (Animations, 3D Transforms, Glassmorphism)
🚀 Getting Started (Local Setup)
Prerequisites
Node.js (v18+)
MongoDB (Local or MongoDB Atlas URI)
OpenAI API Key (for AI feature)
Razorpay Test Account & Keys (for Payment feature)
1. Clone the Repository
git clone https://github.com/Vipulbtech23/newspoint-mern.gitcd newspoint-mern
2. Environment Variables Setup
Create a .env file in the backend folder and add your credentials:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
3. Backend Setup
bash

cd backend
npm install
(Optional) Populate the database with dummy news data:

bash

node seed.js
Start the backend server:

bash

node server.js
4. Frontend Setup
Open a new terminal in the root directory:

bash

cd client
npm install
npm run dev
The application will now be running at http://localhost:5173.

📁 Project Structure
text

newspoint-mern/
├── backend/
│   ├── models/         # Mongoose schemas (News, User, Comment)
│   ├── routes/         # Express routes (News, Auth, FetchAPI, AI, Payment)
│   ├── uploads/        # Server-side image storage
│   ├── seed.js         # DB seeder script for dummy data
│   ├── server.js       # Express entry point
│   └── .env            # Environment variables
├── client/
│   ├── src/
│   │   ├── components/  # React components (UI widgets, pages, forms)
│   │   ├── contexts/    # Theme Context API
│   │   ├── App.jsx      # Main routing layout
│   │   └── App.css     # Global advanced styles & animations
│   └── index.html
└── README.md
🎯 Future Scope
State Management: Migrate from Context API to Redux Toolkit for complex state handling.
Real-Time Updates: Implement Socket.io for Live Breaking News pop-ups and real-time comments.
User Profiles: Complete User system (Login, Bookmarks, Personalized Feed).
Cloud Storage: Migrate from local Multer to Cloudinary for optimized image delivery.
👨‍💻 Author
Vipul
GitHub

⚠️ Note: To use the AI Summarizer and Payment features, valid API keys must be added to the .env file. Without them, the features will gracefully return fallback alerts.
