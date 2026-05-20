# Vercel Deployment Setup Guide for This Project

## Problem: Vercel Configuration Questions

When deploying on Vercel, you'll see these options:
- Root Directory
- Environment Variables
- .env file import

Here's what to do for **E-Commerce TV Website**:

---

## ✅ Configuration for This Project

### 1. Root Directory Setting

**What to enter**: `.` (just a dot, or leave blank)

**Why**: Your frontend HTML files are in the root directory:
```
Ecommerce website/
├── index.html (or your entry page)
├── About.html
├── SHOPPAGE.html
├── checkout.html
└── ... other HTML files
```

**Steps in Vercel:**
1. Go to "Settings" → "General"
2. Find "Root Directory"
3. Keep it as `.` or blank
4. Click "Save"

---

### 2. Environment Variables Setup

Since this is a static HTML project with JavaScript (not React), environment variables work differently.

#### Option A: Basic Setup (Recommended)

In Vercel dashboard:

1. Go to your project → "Settings" → "Environment Variables"
2. Click "Add New Environment Variable"
3. Fill in:

| Name | Value |
|------|-------|
| `REACT_APP_API_URL` | `https://tvhub-backend.onrender.com/api` |

**Note**: Replace with your actual Render backend URL

#### What happens:
- Vercel will make this available as `process.env.REACT_APP_API_URL`

---

### 3. Using Environment Variables in Your Code

Since you're using vanilla JavaScript (not React), update your HTML files:

#### Before (hardcoded URL):
```javascript
// In your JavaScript files
fetch('https://tvhub-backend.onrender.com/api/orders')
```

#### After (using environment variable):
```javascript
// In your JavaScript files
const API_URL = process.env.REACT_APP_API_URL || 'https://tvhub-backend.onrender.com/api';

fetch(`${API_URL}/orders`)
```

---

## 📝 Step-by-Step Vercel Setup

### Step 1: Import Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Paste: `https://github.com/JeevaAakash/E-Commerce_TV_Website.git`
5. Click "Continue"

### Step 2: Configure Project
1. **Project Name**: `ecommerce-tv-website`
2. **Framework Preset**: `Other` (since it's static HTML)
3. **Root Directory**: `.` (or blank)
4. Click "Continue"

### Step 3: Add Environment Variables
1. Click "Environment Variables"
2. Click "Add New"
3. Enter:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-render-backend.onrender.com/api`
4. Select Scope: `Production`
5. Click "Add"

### Step 4: Deploy
1. Click "Deploy"
2. Wait for deployment to complete

---

## 🔑 What Each Setting Means

### Root Directory
- **For this project**: `.` (root)
- **Why**: Vercel needs to know where your website files are

### Environment Variables
- **What it is**: Secret values stored on Vercel (not in your code)
- **For this project**: Backend API URL
- **Why**: You don't want to hardcode the URL in your code

### .env File
- **What it is**: A file with secret values
- **For this project**: Not needed for Vercel
- **Why**: Vercel uses its dashboard instead of .env files

---

## 🔄 Complete Vercel Flow

```
GitHub (Your Code)
    ↓
Vercel (Imports & Deploys)
    ↓
Frontend Gets Environment Variables
    ↓
Your HTML/JS Uses API_URL to Connect to Backend
    ↓
Backend on Render
    ↓
MongoDB Atlas
```

---

## 📋 Checklist Before Deploying

- [ ] Root Directory set to `.` (root)
- [ ] Environment variable `REACT_APP_API_URL` added
- [ ] Value points to your Render backend: `https://your-render-app.onrender.com/api`
- [ ] Backend is already deployed on Render
- [ ] MongoDB is set up and connected
- [ ] `.env` files are in `.gitignore` (✅ Already done)

---

## ❌ Common Mistakes to Avoid

### ❌ Mistake 1: Wrong Root Directory
```
❌ tvhub-backend  (This is wrong - your HTML is not here)
✅ .              (This is correct)
```

### ❌ Mistake 2: Forgetting Environment Variable
```
❌ API_URL (name is wrong)
✅ REACT_APP_API_URL (correct name)
```

### ❌ Mistake 3: Wrong Backend URL
```
❌ https://tvhub-backend.onrender.com/api (This is for local development)
✅ https://your-render-app.onrender.com/api (This is for production)
```

### ❌ Mistake 4: Trailing Slash
```
❌ https://your-render-app.onrender.com/api/ (with slash)
✅ https://your-render-app.onrender.com/api (without slash)
```

---

## 🧪 Test After Deployment

### 1. Check Frontend is Live
```
Visit: https://your-vercel-app.vercel.app
You should see your website
```

### 2. Check Console for Errors
1. Open website
2. Press `F12` (Developer Tools)
3. Go to "Console" tab
4. Look for any error messages

### 3. Check if Backend is Connected
1. Try logging in / placing an order
2. If it works → Backend connection is successful ✅
3. If it fails → Check environment variable ❌

---

## 🚨 If Something Goes Wrong

### Issue: "Cannot find module 'dotenv'"
- **Solution**: This is not needed for Vercel. Don't use `require('dotenv')`

### Issue: Getting 404 errors to backend
- **Solution**: 
  1. Check `REACT_APP_API_URL` environment variable
  2. Make sure it exactly matches your Render URL
  3. Redeploy after changing

### Issue: CORS errors in console
- **Solution**:
  1. Go to Render backend settings
  2. Check `FRONTEND_URL` environment variable
  3. Must match your Vercel URL exactly
  4. Redeploy Render backend

### Issue: Environment variable showing `undefined`
- **Solution**:
  1. Go to Vercel Settings → Environment Variables
  2. Add/check `REACT_APP_API_URL`
  3. Make sure it's set to "Production"
  4. Redeploy

---

## 📚 Summary for This Project

| Setting | Value | Reason |
|---------|-------|--------|
| **Framework** | Other | Static HTML/JS |
| **Root Directory** | . | HTML files are in root |
| **Build Command** | Default | Vercel detects automatically |
| **Environment Variable Name** | REACT_APP_API_URL | Required for this project |
| **Environment Variable Value** | https://your-render-backend.onrender.com/api | Points to backend |

---

## 🎯 Next Steps

1. ✅ Deploy backend to Render (already done)
2. ✅ Get Render backend URL (e.g., https://tvhub-backend.onrender.com)
3. ➡️ **Go to Vercel**
4. ➡️ **Set Root Directory to `.`**
5. ➡️ **Add Environment Variable `REACT_APP_API_URL` = Render URL**
6. ➡️ **Deploy**
7. ✅ Test your live website

---

## 💡 Pro Tips

### Tip 1: Multiple Environment Versions
You can set different environment variables for:
- Production
- Preview
- Development

For this project, just use **Production**.

### Tip 2: Automatic Redeployment
Every time you push to GitHub:
1. Vercel automatically pulls the code
2. Uses the environment variables
3. Deploys the new version

### Tip 3: View Deployment Logs
1. Go to Vercel dashboard
2. Click your project
3. Go to "Deployments" tab
4. Click any deployment to see logs

---

## ✅ You're Ready!

Follow these steps and your project will be deployed on Vercel! 🚀

**Final Deployed URLs:**
- Frontend: `https://your-vercel-app.vercel.app`
- Backend: `https://your-render-app.onrender.com`
- Database: `MongoDB Atlas (Cloud)`
