# WastChat 💬

**WastChat** is a modern full-stack real-time chat application built with the MERN stack, Vite, TailwindCSS, Socket.IO, and Zustand. Designed for speed, style, and scalability, WastChat allows users to exchange messages, images, and enjoy personalized themes — all in real-time.

---

## 🚀 Features

- 🔐 Secure authentication (JWT & Cookies)
- 🧠 Persistent state with Zustand
- 💬 Real-time chat with Socket.IO
- 🎨 Theme customization via DaisyUI
- 📷 Image/file upload via Cloudinary
- 📨 Read receipts & message timestamps
- 💡 Responsive UI with Tailwind + Framer Motion
- 🌐 Google OAuth (coming soon)

---

## 🛠️ Tech Stack

| Layer        | Tools                                 |
|-------------|----------------------------------------|
| Frontend     | React, Vite, Zustand, DaisyUI, TailwindCSS |
| Backend      | Express.js, MongoDB, Mongoose, JWT, Socket.IO |
| Media Upload | Cloudinary                            |
| Auth         | JWT, Cookies  |
| Styling      | TailwindCSS, DaisyUI, Lucide Icons     |

---

## 📦 Installation

### 🔧 Backend Setup

```bash
cd backend
npm install
# Create .env and set: MONGODB_URI, JWT_SECRET, CLOUDINARY creds
npm run dev

⚙️ Environment Variables
# Backend (.env)
MONGODB_URI=mongodb://localhost:27017/wastchat
JWT_SECRET=your_jwt_secret (e.g openssl rand -base64 32)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret



### 🔧 Frontend Setup
cd frontend
npm install
npm run dev

