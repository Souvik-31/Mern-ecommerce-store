# MERN E-Commerce Store

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project is organized as a monorepo, with separate `backend` and `frontend` directories.

## Features

- User authentication and authorization
- Product management (CRUD)
- Shopping cart and checkout
- Order management
- Stripe payment integration
- Admin dashboard
- Modern React UI with TailwindCSS
- RESTful API design

## Tech Stack

### Frontend
- React 19
- Vite
- TailwindCSS
- Zustand (state management)
- React Router DOM
- Axios
- Stripe.js
- Framer Motion
- Recharts (analytics)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT Authentication
- Stripe (server-side)
- Cloudinary (media uploads)
- Redis (ioredis)
- Bcrypt.js (password hashing)
- Dotenv
- Cookie-parser

## Directory Structure

```
.
├── backend
│   ├── controllers
│   ├── lib
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- MongoDB instance (local or cloud)
- Stripe account (for payments)
- Cloudinary account (for media uploads)
- Redis server (optional, for session/cache)

### 1. Clone the repository

```bash
git clone https://github.com/Souvik-31/Mern-ecommerce-store.git
cd Mern-ecommerce-store
```

### 2. Setup Environment Variables

- Create a `.env` file in `backend/` with the following variables:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
REDIS_URL=your_redis_url
```

### 3. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 4. Run the Application

#### Development

```bash
# In the project root, start backend (with nodemon)
npm run dev

# In another terminal, start frontend
cd frontend
npm run dev
```

- Backend runs on [http://localhost:5000](http://localhost:5000)
- Frontend runs on [http://localhost:5173](http://localhost:5173) (default Vite port)

## Scripts

- `npm run dev` - Start backend with nodemon
- `npm start` - Start backend
- `npm run build` - Install and build the frontend

Frontend scripts (from the `frontend` directory):
- `npm run dev` - Start frontend (Vite)
- `npm run build` - Build frontend
- `npm run preview` - Preview production build

## License

ISC

---

> Developed by [Souvik-31](https://github.com/Souvik-31)
