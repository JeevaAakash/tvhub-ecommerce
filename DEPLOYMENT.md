# E-Commerce TV Website - Deployment Guide

## Project Structure for Deployment
```
- Frontend: HTML/CSS/JS files (Deploy to Vercel)
- Backend: tvhub-backend/ (Deploy to Render)
```

## Backend Deployment (Render)

### Step 1: Prepare Environment Variables
1. Create a `.env` file in `tvhub-backend/` (use `.env.example` as reference)
2. Get MongoDB Atlas connection string from [mongodb.com](https://www.mongodb.com/cloud/atlas)
3. Set these variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: 10000 (Render default)
   - `FRONTEND_URL`: Your Vercel deployment URL
   - `NODE_ENV`: production

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Configure:
   - **Name**: tvhub-backend (or your choice)
   - **Environment**: Node
   - **Build Command**: `cd tvhub-backend && npm install`
   - **Start Command**: `cd tvhub-backend && npm start`
   - **Region**: Oregon or your preferred region
   - **Plan**: Free tier available
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `FRONTEND_URL`: Your Vercel frontend URL
   - `JWT_SECRET`: Generate a secure random string
6. Deploy

### Backend URL (after deployment):
- Your backend will be available at: `https://your-app-name.onrender.com`

---

## Frontend Deployment (Vercel)

### Step 1: Update API Configuration
1. Create `.env.local` in root directory:
   ```
   REACT_APP_API_URL=https://your-render-app.onrender.com/api
   ```
2. Update your HTML files to reference this environment variable (if using JavaScript)

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Project Name**: E-Commerce_TV_Website (or your choice)
   - **Framework Preset**: Other (since it's static HTML)
   - **Root Directory**: ./ (root)
4. Add Environment Variables:
   - `REACT_APP_API_URL`: Your Render backend URL
5. Deploy

### Frontend URL (after deployment):
- Your site will be available at: `https://your-project-name.vercel.app`

---

## Database Setup (MongoDB Atlas)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with password
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/tvhub`
5. Use this as `MONGODB_URI` in Render and local `.env`

---

## Testing Deployment

### Test Backend Health:
```
curl https://your-render-app.onrender.com/health
```

### Test Frontend:
Visit `https://your-project-name.vercel.app`

---

## Common Issues & Solutions

**Issue**: Backend takes long to start
- **Solution**: Render free tier sleeps after 15 minutes of inactivity. Consider upgrading to paid plan.

**Issue**: CORS errors
- **Solution**: Ensure `FRONTEND_URL` environment variable matches exactly your Vercel URL (with or without trailing slash)

**Issue**: MongoDB connection timeout
- **Solution**: Check IP whitelist in MongoDB Atlas (set to `0.0.0.0/0` to allow all IPs)

**Issue**: Environment variables not working
- **Solution**: Restart the deployment or redeploy after updating variables

---

## File Structure After Setup

```
Ecommerce website/
├── .env.local.example          (Frontend env example)
├── .gitignore                   (Updated)
├── vercel.json                  (Vercel config)
├── render.yaml                  (Render config)
├── README.md
├── About.html
├── AddtoCart.html
├── ... (other HTML files)
└── tvhub-backend/
    ├── .env.example             (Backend env example)
    ├── server.js               (Updated)
    ├── package.json            (Updated)
    ├── models/
    ├── routes/
    └── ...
```

---

## Summary of Changes Made

✅ Updated `tvhub-backend/server.js` to use environment variables
✅ Added `dotenv` dependency to `tvhub-backend/package.json`
✅ Created `.env.example` files for both frontend and backend
✅ Created `render.yaml` for Render deployment
✅ Created `vercel.json` for Vercel configuration
✅ Updated `.gitignore` to exclude `.env` files

Next Steps:
1. Set up MongoDB Atlas cluster
2. Deploy backend to Render
3. Deploy frontend to Vercel
4. Update environment variables with actual deployment URLs
5. Test both services are working together
