# E-Commerce TV Website

A full-stack e-commerce website built for browsing and purchasing televisions online. This project includes a frontend created using HTML, CSS, and JavaScript, with a backend powered by Node.js, Express.js, and MongoDB.

---

## Features

* User registration and login
* Browse available TVs
* Add products to cart
* Place and manage orders
* Backend API integration
* Responsive UI design

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## Project Structure

```bash
E-Commerce_TV_Website
│
├── Frontend Files
│   ├── About.html
│   ├── SHOPPAGE.html
│   ├── LOGIN.html
│   ├── checkout.html
│   └── ...
│
├── tvhub-backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
├── vercel.json
└── render.yaml
```

---

## Running Locally

### Clone Repository

```bash
git clone https://github.com/JeevaAakash/E-Commerce_TV_Website.git
cd E-Commerce_TV_Website
```

### Install Backend Dependencies

```bash
cd tvhub-backend
npm install
```

### Configure Environment Variables

Create `.env` inside `tvhub-backend`.

```env
MONGODB_URI=your_mongodb_connection
PORT=5000
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
```

Start backend:

```bash
npm start
```

---

### Frontend Setup

Create `.env.local`

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Open:

```bash
http://localhost:3000
```

---

## Deployment

### Backend (Render)

1. Connect GitHub repository
2. Select **Web Service**
3. Set build command:

```bash
cd tvhub-backend && npm install
```

4. Start command:

```bash
cd tvhub-backend && npm start
```

5. Add environment variables and deploy

---

### Frontend (Vercel)

1. Import GitHub repository
2. Select root directory
3. Add:

```env
REACT_APP_API_URL=your_backend_url/api
```

4. Deploy project

---

## API Routes

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Orders

```http
GET /api/orders
POST /api/orders
PUT /api/orders/:id
DELETE /api/orders/:id
```

---

## Future Improvements

* Payment gateway integration
* Product search and filtering
* Admin dashboard
* Order tracking
* Product recommendations

---

## Author

**Jeeva Aakash**

Built as a full-stack web development project to explore frontend, backend, deployment, and database integration.

---
