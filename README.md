# TVHub – Full Stack E-Commerce Website

TVHub is a full-stack e-commerce web application developed for browsing and purchasing televisions online. The project was built to strengthen my understanding of frontend development, backend APIs, database integration, authentication, and full-stack deployment.

The website provides a simple shopping experience where users can create accounts, explore products, manage orders, and interact with a responsive interface.

---

## Live Demo

 Website: https://tvhub-ecommerce.vercel.app

 GitHub Repository: https://github.com/JeevaAakash/tvhub-ecommerce

---

## Features

* User registration and login system
* Browse and explore available TV products
* Add products to cart
* Place and manage orders
* Authentication using JWT
* Backend API integration
* Responsive design for different devices
* Database connectivity with MongoDB

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
tvhub-ecommerce
│
├── Frontend
│   ├── HOME.html
│   ├── LOGIN.html
│   ├── register.html
│   ├── SHOPPAGE.html
│   ├── checkout.html
│   └── assets
│
├── tvhub-backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── server.js
│   └── package.json
│
├── README.md
├── vercel.json
└── render.yaml
```

---

## Run Locally

### Clone Repository

```bash
git clone https://github.com/JeevaAakash/tvhub-ecommerce.git
cd tvhub-ecommerce
```

### Backend Setup

Install dependencies:

```bash
cd tvhub-backend
npm install
```

Create `.env`

```env
MONGODB_URI=your_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm start
```

---

### Frontend Setup

Open frontend files using Live Server or your preferred local environment.

Backend API:

```env
http://localhost:5000/api
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
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

* Online payment integration
* Product search and filtering
* Admin management panel
* Order tracking
* Wishlist functionality
* Product recommendation system

---

## Learning Outcome

Through this project, I gained hands-on experience in:

* Full Stack Development
* REST API Integration
* MongoDB Database Management
* Authentication & Security
* Deployment using Vercel and Render
* Debugging real-world deployment issues

---

## Author

Jeeva Aakash S
B.Tech Information Technology

Built as a personal full-stack project to improve practical web development skills and deployment experience.
