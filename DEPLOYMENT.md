# E-Commerce TV Website – Deployment Guide

This project is deployed as two separate parts:

* **Frontend** → HTML, CSS, JavaScript (Hosted on Vercel)
* **Backend** → Node.js + Express + MongoDB (Hosted on Render)

---

## Backend Setup (Render)

### Step 1: Create Environment Variables

Inside `tvhub-backend`, create a `.env` file.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=10000
FRONTEND_URL=your_vercel_url
NODE_ENV=production
JWT_SECRET=your_secret_key
```

You can copy values from `.env.example`.

---

### Step 2: Create MongoDB Database

1. Open MongoDB Atlas
2. Create a free cluster
3. Add a database user
4. Copy the connection string

Example:

```bash
mongodb+srv://username:password@cluster.mongodb.net/tvhub
```

Paste the URL into `MONGODB_URI`.

---

### Step 3: Deploy Backend

1. Push the project to GitHub
2. Open Render
3. Create **New Web Service**
4. Connect your repository

Use:

```txt
Environment: Node
Build Command:
cd tvhub-backend && npm install

Start Command:
cd tvhub-backend && npm start
```

Other settings:

```txt
Plan: Free
Region: Preferred Region
```

Add environment variables and deploy.

Backend URL example:

```txt
https://your-backend.onrender.com
```

---

## Frontend Setup (Vercel)

### Configure API URL

Create `.env.local` in project root:

```env
REACT_APP_API_URL=https://your-backend.onrender.com/api
```

---

### Deploy Frontend

1. Open Vercel
2. Import GitHub repository
3. Configure:

```txt
Project Name:
E-Commerce_TV_Website

Framework:
Other

Root Directory:
./
```

Add:

```env
REACT_APP_API_URL=your_backend_url
```

Click **Deploy**.

Frontend URL example:

```txt
https://your-project.vercel.app
```

---

## Testing Deployment

### Backend

```bash
curl https://your-backend.onrender.com/health
```

Expected:

```json
{
 "status":"Server running"
}
```

### Frontend

Open your Vercel URL and check:

* Home page loads
* User login works
* Product list appears
* Cart functions correctly
* API requests return data

---

## Common Problems

### Render takes time to load

Free instances sleep after inactivity. First request may take time.

### CORS Error

Make sure `FRONTEND_URL` matches your deployed frontend URL.

### MongoDB Connection Error

Check:

* Connection string
* Database permissions
* Network access settings

### Environment Variables Not Working

Save changes and redeploy.

---

## Folder Structure

```txt
E-Commerce_TV_Website
│
├── Frontend Files
├── README.md
├── render.yaml
├── vercel.json
│
└── tvhub-backend
    ├── server.js
    ├── package.json
    ├── models
    ├── routes
    └── .env.example
```

---

Deployment completed using **Vercel + Render + MongoDB Atlas**.
