# Deployment Guide

## Prerequisites
- GitHub account
- Render account (for backend)
- Vercel account (for frontend)
- MongoDB Atlas account (for database)

---

## Step 1: Database Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user and get the connection string
5. Copy your connection string: `mongodb+srv://username:password@cluster.mongodb.net/analyticsdb?retryWrites=true&w=majority`

---

## Step 2: Backend Deployment (Render)

### Prepare Backend for Deployment

1. Update `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/analyticsdb?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-key-change-this
```

2. Push to GitHub:
```bash
git add .
git commit -m "Initial commit: Analytics Dashboard"
git push origin main
```

### Deploy on Render

1. Visit [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in the details:
   - **Name**: `analytics-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment**: Node
   - **Region**: Choose closest to you

5. Add Environment Variables:
   - Click "Advanced"
   - Add variables:
     - `PORT`: 5000
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Your secret key

6. Click "Create Web Service"

7. Wait for deployment (2-3 minutes)

8. Copy your backend URL: `https://analytics-backend.onrender.com`

---

## Step 3: Frontend Deployment (Vercel)

### Prepare Frontend for Deployment

1. Update `frontend/.env`:
```env
CI=false
REACT_APP_API_URL=https://analytics-backend.onrender.com
```

2. Update `frontend/src/pages/Login.js` and other API calls to use:
```javascript
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Replace all instances of:
// "http://localhost:5000"
// with:
// `${API_URL}`
```

3. Push to GitHub if not already done

### Deploy on Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure:
   - **Framework**: React
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. Add Environment Variables:
   - `REACT_APP_API_URL`: Your Render backend URL

6. Click "Deploy"

7. Wait for deployment (1-2 minutes)

8. Get your frontend URL from Vercel dashboard

---

## Step 4: Update API Calls

Replace all API URLs in your React components:

```javascript
// OLD
fetch("http://localhost:5000/api/auth/login", {
  // ...
})

// NEW
fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
  // ...
})
```

Files to update:
- `frontend/src/pages/Login.js`
- `frontend/src/pages/Register.js`
- `frontend/src/pages/Dashboard.js`

---

## Step 5: Test Deployment

1. Visit your Vercel frontend URL
2. Register a new account
3. Login
4. Check if dashboard loads and displays data
5. Check if API calls work

---

## 🔗 Final URLs

- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://analytics-backend.onrender.com`
- **Database**: MongoDB Atlas

---

## Troubleshooting

### CORS Errors
If you get CORS errors, ensure your backend has:
```javascript
app.use(cors());
```

### API Connection Issues
- Check if backend URL is correct
- Verify environment variables
- Check Render logs for errors

### Database Connection Failed
- Verify MongoDB Atlas connection string
- Check IP whitelist in MongoDB Atlas
- Ensure username/password are correct

### Vercel Build Fails
- Check that `frontend/.env` has `CI=false`
- Verify build command: `npm run build`
- Check logs in Vercel dashboard

### Render Deployment Fails
- Check logs in Render dashboard
- Verify environment variables
- Ensure `backend/` folder structure is correct

---

## Monitoring & Maintenance

### Check Logs
- **Render**: Dashboard → Logs
- **Vercel**: Dashboard → Deployments → Logs

### Update Code
```bash
# After making changes
git add .
git commit -m "Update features"
git push origin main

# Auto-deploys on both Vercel and Render
```

### Monitor Performance
- Vercel Analytics
- Render metrics dashboard
- MongoDB Atlas monitoring

---

## Scaling Tips

1. **Database**: Upgrade MongoDB Atlas tier if needed
2. **Backend**: Increase Render resources
3. **Frontend**: Vercel handles scaling automatically

---

## Security Checklist

- [ ] Changed `JWT_SECRET` in production
- [ ] Updated MongoDB user with strong password
- [ ] Enabled HTTPS (automatic on both platforms)
- [ ] Set up environment variables properly
- [ ] Restricted MongoDB Atlas IP whitelist
- [ ] Used secure CORS configuration
- [ ] Removed sensitive data from code

---

## Next Steps

1. Add more analytics features
2. Implement real-time updates with WebSockets
3. Add email notifications
4. Create admin dashboard
5. Add more chart types
6. Implement data export functionality

---

**Happy Deployment! 🚀**
