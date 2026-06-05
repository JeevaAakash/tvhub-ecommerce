# E-Commerce TV Website – Deployment Guide

This project is split into two parts:

* **Frontend** → Static HTML, CSS, and JavaScript (deployed using Vercel)
* **Backend** → Node.js + MongoDB API (`tvhub-backend`) (deployed using Render)

---

## Backend Deployment (Render)

### 1. Configure Environment Variables

Inside the `tvhub-backend` folder, create a `.env` file.

You can use `.env.example` as a reference.

Add the following values:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=10000
FRONTEND_URL=your_vercel_url
NODE_ENV=production
JWT_SECRET=your_secret_key
```

### 2. Set Up MongoDB Atlas

* Create a free cluster in MongoDB Atlas
* Create a database user
* Copy your connection string

Example:

```bash
mongodb+srv://username:password@cluster.mongodb.net/tvhub
```

Paste this into `MONGODB_URI`.

### 3. Deploy Backend to Render

1. Push your project to GitHub
2. Open Render and create a **New Web Service**
3. Connect your repository
4. Use these settings:

```txt
Environment: Node
Build Command:
cd tvhub-backend && npm install

Start Command:
cd tvhub-backend && npm start
```

Additional settings:

```txt
Region: Any preferred region
Plan: Free
```

Add all environment variables before deploying.

After deployment, your backend URL will look like:

```txt
https://your-app-name.onrender.com
```

---

## Frontend Deployment (Vercel)

### 1. Configure API URL

Create `.env.local` in the project root:

```env
REACT_APP_API_URL=https://your-render-app.onrender.com/api
```

If needed, update frontend JavaScript to use this environment variable.

### 2. Deploy to Vercel

1. Import the GitHub repository into Vercel
2. Configure:

```txt
Project Name: E-Commerce_TV_Website
Framework Preset: Other
Root Directory: ./
```

Add environment variable:

```env
REACT_APP_API_URL=your_render_backend_url
```

Deploy the project.

Frontend URL example:

```txt
https://your-project-name.vercel.app
```

---

## Testing

### Backend Health Check

```bash
curl https://your-render-app.onrender.com/health
```

### Frontend

Open:

```txt
https://your-project-name.vercel.app
```

Verify:

* Homepage loads correctly
* Login/Register works
* Products load from database
* Add to Cart works
* API requests return data

---

## Common Issues

### Backend loading slowly

Render free instances may sleep after inactivity. First request can take a few seconds.

### CORS errors

Make sure `FRONTEND_URL` exactly matches your deployed Vercel URL.

### MongoDB connection failed

Check:

* Connection string
* Database user permissions
* Network access (`0.0.0.0/0` if required)

### Environment variables not updating

Redeploy the service after changing environment values.

---

## Project Structure

```txt
Ecommerce website/
│
├── .env.local.example
├── .gitignore
├── vercel.json
├── render.yaml
├── README.md
├── About.html
├── AddtoCart.html
├── ...
│
└── tvhub-backend/
    ├── .env.example
    ├── server.js
    ├── package.json
    ├── models/
    ├── routes/
    └── ...
```

---

Project successfully supports full-stack deployment using **Vercel + Render + MongoDB Atlas**.
