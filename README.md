📰 NewsPoint - Modern Indian News Portal
A full-stack, responsive, and highly interactive news website built with the MERN stack. Inspired by leading Indian news portals like India Today and NDTV, featuring a premium UI, 3D animated widgets, and a powerful admin dashboard.

MERN StackReactNode.jsMongoDB

✨ Key Features
👨‍💻 User Interface
Premium Dark/Light Mode: Smooth theme switching with Context API.
Glassmorphism & Animations: Modern UI with floating gradient bubbles and glass-effect cards.
3D Rotating Widgets: Interactive CSS 3D cubes for Live Cricket Scores and Weather Updates.
Responsive Design: Flawlessly adapts to Desktop, Tablet, and Mobile screens.
SEO Optimized: Dynamic meta tags using react-helmet-async.
📰 News & Content
Dynamic Categories: Dedicated pages for India, Politics, Sports, Tech, Business, etc.
Live API Integration: Auto-fetches real-time news using GNews API.
Real Images: Displays actual news thumbnails instead of placeholders.
Single Article View: Distinct, readable layout for full news articles.
🛡️ Admin Dashboard
Secure Authentication: JWT-based Admin & Journalist login.
Auto-Fetch System: One-click button to fetch and save live news from external APIs directly into the database.
Content Management: Create, Edit, and Delete news articles with a rich dashboard.
Image Upload: Native file upload system using Multer.
User Management: Admin can register new reporters/journalists.
🛠️ Tech Stack
Frontend: React.js (Vite), React Router DOM, Axios, Context API
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JSON Web Tokens (JWT), Bcrypt.js
File Handling: Multer
Styling: Advanced CSS3 (Animations, 3D Transforms, Glassmorphism)
🚀 Getting Started (Local Setup)
Follow these steps to run the project locally on your machine.

Prerequisites
Node.js installed on your system.
MongoDB (Local or MongoDB Atlas URI).
1. Clone the Repository
git clone https://github.com/Vipulbtech23/newspoint-mern.gitcd newspoint-mern
2. Backend Setup
bash

cd backend
npm install
Create a .env file in the backend folder and add your MongoDB URI:
env

MONGO_URI=your_mongodb_connection_string
PORT=5000
To populate dummy news data, run:
bash

node seed.js
Start the backend server:
bash

node server.js
3. Frontend Setup
Open a new terminal and navigate to the client folder:

bash

cd client
npm install
npm run dev
The application will now be running at http://localhost:5173.

📁 Project Structure
text

newspoint-mern/
├── backend/
│   ├── models/         # Mongoose schemas (News, User)
│   ├── routes/         # Express routes (News, Auth, FetchAPI)
│   ├── uploads/        # Uploaded images (gitignored)
│   ├── seed.js         # Database seeder script
│   ├── server.js       # Entry point for backend
│   └── .env            # Environment variables
├── client/
│   ├── src/
│   │   ├── components/  # React components (UI widgets, pages)
│   │   ├── contexts/    # Theme Context (Dark/Light mode)
│   │   ├── App.jsx      # Main routing layout
│   │   └── App.css     # Global advanced styles
│   └── index.html
└── README.md
🔮 Future Scope
Integration of Razorpay for the Subscription page.
Real-time comment system using Socket.io.
Redux Toolkit implementation for large-scale state management.
User profile dashboards with bookmarking capabilities.
Deployment on AWS/Vercel with Cloudinary for image optimization.
👨‍💻 Author
Vipul (Vipulbtech23)
GitHub Profile

Note: To use the Live Weather and Cricket widgets, you will need to add your own API keys for OpenWeatherMap and CricAPI inside the respective component files.
