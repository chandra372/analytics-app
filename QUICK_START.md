# Quick Start Guide

## 🚀 Running Locally

### Start MongoDB (Windows)
If you have MongoDB installed locally:
```powershell
mongod
```

Or use MongoDB Atlas (cloud):
- Update `backend/.env` with your connection string

### Start Backend
```powershell
cd backend
npm run server
```
✅ Backend runs on: `http://localhost:5000`

### Start Frontend (in a new terminal)
```powershell
cd frontend
npm start
```
✅ Frontend runs on: `http://localhost:3000`

---

## 📋 Test the App

1. **Go to**: `http://localhost:3000`
2. **Register**: Create a new account
3. **Login**: Login with your credentials
4. **View Dashboard**: See analytics and charts
5. **Logout**: Click logout button

---

## 📁 Project Structure

```
analytics-app/
├── README.md                 # Project overview
├── DEPLOYMENT_GUIDE.md       # Deployment instructions
├── .gitignore               # Git ignore rules
│
├── backend/
│   ├── config/db.js         # Database connection
│   ├── models/              # Database schemas
│   │   ├── User.js
│   │   └── Analytics.js
│   ├── controllers/         # Business logic
│   │   ├── authController.js
│   │   └── analyticsController.js
│   ├── routes/              # API routes
│   │   ├── authRoutes.js
│   │   └── analyticsRoutes.js
│   ├── middleware/          # Custom middleware
│   │   └── authMiddleware.js
│   ├── server.js            # Main server file
│   ├── package.json         # Dependencies
│   └── .env                 # Environment variables
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── pages/           # React pages
    │   │   ├── Dashboard.js
    │   │   ├── Login.js
    │   │   └── Register.js
    │   ├── components/      # React components
    │   │   └── Navbar.js
    │   ├── App.js          # Main app with routing
    │   ├── index.js        # React entry point
    │   └── index.css       # Global styles
    ├── package.json        # Dependencies
    ├── .env               # Environment variables
    ├── tailwind.config.js # Tailwind configuration
    └── postcss.config.js  # PostCSS configuration
```

---

## 🔑 Key Features Implemented

✅ **Authentication System**
- User registration
- User login
- JWT token-based authentication
- Protected routes

✅ **Dashboard**
- Revenue tracking
- User count metrics
- API usage statistics
- Conversion rate

✅ **Visualizations**
- Line charts (revenue & users trend)
- Bar charts (comparison)
- Pie charts (product distribution)
- Summary table

✅ **UI/UX**
- Responsive design
- Dark mode support
- Professional styling
- Navbar with logout

✅ **API Endpoints**
- POST `/api/auth/register` - Register
- POST `/api/auth/login` - Login
- GET `/api/auth/profile` - Get user profile
- GET `/api/analytics` - Get analytics
- POST `/api/analytics` - Create analytics
- PUT `/api/analytics/:id` - Update analytics
- DELETE `/api/analytics/:id` - Delete analytics

---

## 📊 Sample Credentials

After registering:
- **Email**: your-email@example.com
- **Password**: your-password
- **Name**: Your Name

---

## 🛠️ Development Commands

### Backend
```powershell
cd backend

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run server

# Start production server
npm start
```

### Frontend
```powershell
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test
npm test
```

---

## 📦 Technologies Used

**Frontend:**
- React 18
- React Router v6
- Tailwind CSS
- Recharts
- Axios

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs

**Database:**
- MongoDB (local or Atlas)

**Deployment:**
- Vercel (frontend)
- Render (backend)

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/analyticsdb
JWT_SECRET=mysecretkey
```

### Frontend (.env)
```env
CI=false
REACT_APP_API_URL=http://localhost:5000
```

---

## 📚 API Examples

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Analytics
```bash
curl -X GET http://localhost:5000/api/analytics
```

---

## 🐛 Common Issues & Solutions

### Issue: MongoDB Connection Error
**Solution**: Ensure MongoDB is running or update MONGO_URI in .env

### Issue: CORS Errors
**Solution**: Backend CORS is configured. Check if backend is running on port 5000

### Issue: Port 3000 or 5000 Already in Use
**Solution**: 
```powershell
# Find and kill process using port
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Issue: Module Not Found
**Solution**:
```powershell
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

---

## 📖 Next Steps

1. **Test Locally** - Register, login, and explore
2. **Customize** - Update colors, add features
3. **Deploy** - Follow DEPLOYMENT_GUIDE.md
4. **Monitor** - Check logs and performance
5. **Scale** - Add more features and optimize

---

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)

---

## 💡 Enhancement Ideas

- [ ] Add real-time data updates (WebSockets)
- [ ] Implement advanced filtering
- [ ] Add data export (CSV/PDF)
- [ ] Multi-user support
- [ ] Role-based access
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Advanced analytics
- [ ] Custom reports
- [ ] API rate limiting

---

## 📞 Support

For issues or questions:
1. Check README.md
2. Review DEPLOYMENT_GUIDE.md
3. Check terminal logs for errors
4. Review browser console (F12)

---

**Built with ❤️ | Happy Coding! 🚀**
