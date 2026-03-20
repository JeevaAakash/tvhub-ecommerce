# Vercel & Render Deployment Configuration Guide

## Your Project Structure
```
Ecommerce website/          ← Root Directory
├── .env.local              ← Frontend env (don't upload)
├── vercel.json
├── About.html
├── AddtoCart.html
├── ... (other HTML files)
└── tvhub-backend/          ← Backend separate folder
    ├── .env                ← Backend env (don't upload)
    ├── server.js
    └── package.json
```

---

## 🔷 VERCEL (Frontend) Configuration

### Step 1: Create Project on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Click "Import Project"

### Step 2: Connect GitHub Repository
1. Paste URL: `https://github.com/JeevaAakash/E-Commerce_TV_Website.git`
2. Click "Continue"

### Step 3: Configure Build Settings

| Field | Value |
|-------|-------|
| **Project Name** | ecommerce-tv-website |
| **Framework Preset** | Other |
| **Root Directory** | `.` (DOT - means root folder) |
| **Build Command** | Leave empty (or `echo 'Static site'`) |
| **Output Directory** | Leave empty |
| **Install Command** | Leave empty |

### Step 4: Add Environment Variables

Click "Environment Variables" and add:

| Key | Value | Environments |
|-----|-------|--------------|
| `REACT_APP_API_URL` | `https://tvhub-backend.onrender.com/api` | Production, Preview, Development |

**Note:** 
- Replace `tvhub-backend` with your actual Render service name
- The `.env.local` file should NOT be uploaded to git (it's in .gitignore)
- Vercel reads environment variables from the dashboard, not from .env files

### Step 5: Deploy
- Click "Deploy"
- Wait 3-5 minutes
- Your frontend will be live at: `https://your-project.vercel.app`

---

## 🔴 RENDER (Backend) Configuration

### Step 1: Create Web Service on Render
1. Go to [render.com](https://render.com)
2. Click "+ New" → "Web Service"

### Step 2: Connect GitHub Repository
1. Click "Connect Account" → Authorize GitHub
2. Select: `E-Commerce_TV_Website`
3. Click "Connect"

### Step 3: Configure Build Settings

| Field | Value |
|-------|-------|
| **Name** | tvhub-backend |
| **Environment** | Node |
| **Region** | Oregon (closest to you) |
| **Branch** | main |
| **Root Directory** | `tvhub-backend` (folder with server.js) |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | Free |

### Step 4: Add Environment Variables

Click "Advanced" → "Add Environment Variable"

Add these environment variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://username:password@cluster.xxxxx.mongodb.net/tvhub?retryWrites=true&w=majority` |
| `PORT` | `10000` |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-project.vercel.app` |
| `JWT_SECRET` | Generate: `openssl rand -hex 32` |

**To generate JWT_SECRET in PowerShell:**
```powershell
$random = [System.Security.Cryptography.RNGCryptoServiceProvider]::new()
$buffer = [byte[]]::new(32)
$random.GetBytes($buffer)
[Convert]::ToHexString($buffer)
```

### Step 5: Deploy
- Click "Create Web Service"
- Render deploys automatically
- Your backend will be live at: `https://tvhub-backend.onrender.com`

---

## 📝 Important Points About .env Files

### What is `.env` file?
- Secret credentials file
- Should NEVER be uploaded to GitHub
- Used only on your local machine

### Frontend `.env.local` (Root Directory)
**File location:** `E:\COLLEGE...\Ecommerce website\.env.local`

```env
REACT_APP_API_URL=http://localhost:5000/api
```

**Vercel Deployment:**
- ❌ Don't upload `.env.local` to git
- ✅ Set variables in Vercel Dashboard instead
- Variables set in Vercel Dashboard: `REACT_APP_API_URL=https://tvhub-backend.onrender.com/api`

### Backend `.env` (tvhub-backend Folder)
**File location:** `E:\COLLEGE...\Ecommerce website\tvhub-backend\.env`

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/tvhub
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-secret-key-123
```

**Render Deployment:**
- ❌ Don't upload `.env` to git
- ✅ Set variables in Render Dashboard instead
- Render Dashboard variables: `MONGODB_URI`, `PORT`, `NODE_ENV`, `FRONTEND_URL`, `JWT_SECRET`

---

## ✅ STEP-BY-STEP FOR YOUR PROJECT

### For VERCEL (Frontend):
```
Root Directory: .
Environment Variable:
  Key: REACT_APP_API_URL
  Value: https://tvhub-backend.onrender.com/api
```

### For RENDER (Backend):
```
Root Directory: tvhub-backend
Environment Variables:
  MONGODB_URI: (Your MongoDB connection string)
  PORT: 10000
  NODE_ENV: production
  FRONTEND_URL: https://your-project.vercel.app
  JWT_SECRET: (Generate secure random string)
```

---

## 🔑 Step 1: Get MongoDB Connection String

### On MongoDB Atlas:
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Log in to your cluster
3. Click "Connect"
4. Choose "Connect your application"
5. Copy this string (IMPORTANT: Replace password):
   ```
   mongodb+srv://tvhub_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/tvhub?retryWrites=true&w=majority
   ```
6. Paste in Render environment variables as `MONGODB_URI`

---

## 🧪 Testing After Deployment

### Test Backend on Render:
```bash
# In terminal or Postman
curl https://tvhub-backend.onrender.com/health

# Should return:
# {"status":"Server is running"}
```

### Test Frontend on Vercel:
1. Visit: `https://your-project.vercel.app`
2. Open DevTools (F12)
3. Check "Console" for API errors
4. Try to login/register to test API connection

---

## 🔄 After First Deployment

### Make Changes:
```bash
# 1. Edit files
# 2. Commit changes
git add .
git commit -m "Update message"

# 3. Push to GitHub
git push origin main

# 4. AUTOMATIC REDEPLOY
# Vercel and Render auto-deploy on git push
```

---

## ⚠️ Common Mistakes

### ❌ WRONG - Uploading .env files
```
git add .env          ← This exposes secrets!
git commit -m "Add env"
git push
```

### ✅ CORRECT - Keep .env local only
```
# .env files already in .gitignore
git add .
git commit -m "Update code"
git push

# Set variables in Vercel/Render dashboard instead
```

### ❌ WRONG Vercel Root Directory
```
Root Directory: tvhub-backend/  ← Wrong! This is for backend
```

### ✅ CORRECT Vercel Root Directory
```
Root Directory: .               ← Right! Root of repo for frontend
```

### ❌ WRONG Render Root Directory
```
Root Directory: .               ← Wrong! This is root, need backend folder
```

### ✅ CORRECT Render Root Directory
```
Root Directory: tvhub-backend   ← Right! Backend folder path
```

---

## 📋 Quick Checklist

### Vercel Checklist:
- [ ] Root Directory: `.`
- [ ] Framework: Other
- [ ] Environment Variable Added: `REACT_APP_API_URL`
- [ ] Value: Your Render backend URL
- [ ] Click Deploy

### Render Checklist:
- [ ] Root Directory: `tvhub-backend`
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] All 5 environment variables added
- [ ] MONGODB_URI has correct password
- [ ] FRONTEND_URL matches your Vercel URL exactly
- [ ] Click Create Web Service

---

## 🆘 Troubleshooting

### Vercel: "Not Found" Error
- Check if `REACT_APP_API_URL` is set correctly
- Should NOT have `/` at end of API URL

### Render: "Cannot connect to MongoDB"
- Check MongoDB Atlas IP whitelist
- Set to `0.0.0.0/0` to allow all IPs

### CORS Error in Console
- Backend `FRONTEND_URL` must match frontend URL exactly
- Redeploy Render after changing

### Render keeps sleeping
- Free tier sleeps after 15 minutes
- Upgrade to paid or use monitoring service

---

## 🎉 Final Result

### Frontend Live:
```
https://your-project.vercel.app
```

### Backend API Live:
```
https://tvhub-backend.onrender.com/api
```

### Your Project is Now Live! 🚀
