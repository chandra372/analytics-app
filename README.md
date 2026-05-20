# Analytics Dashboard - Full Stack MERN Application

A powerful, full-stack analytics dashboard built with MongoDB, Express, React, and Node.js. Features user authentication, real-time analytics visualization, and responsive design.

## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS, Recharts, React Router
- **Backend**: Node.js, Express, MongoDB, JWT
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend), Render (Backend)

## 📁 Project Structure

```
analytics-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Analytics.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── analyticsRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── analyticsController.js
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── pages/
    │   │   ├── Dashboard.js
    │   │   ├── Login.js
    │   │   └── Register.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── .env
    ├── .gitignore
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/analyticsdb
JWT_SECRET=your-secret-key-here
```

4. Start the backend server:
```bash
npm run server
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔑 Features

✅ **User Authentication**
- Register new users
- Login with email/password
- JWT token-based auth
- Secure password hashing

✅ **Analytics Dashboard**
- Real-time data visualization
- Revenue tracking
- User growth charts
- API usage statistics

✅ **Dashboard Cards**
- Key metrics display
- Revenue overview
- User count
- API usage stats

✅ **Charts & Graphs**
- Line charts for revenue trends
- Bar charts for comparisons
- Responsive chart layout
- Interactive tooltips

✅ **Responsive Design**
- Mobile-friendly layout
- Dark mode support
- Tailwind CSS styling
- Grid-based responsive layout

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires auth)

### Analytics
- `GET /api/analytics` - Get all analytics
- `POST /api/analytics` - Create analytics (requires auth)
- `PUT /api/analytics/:id` - Update analytics (requires auth)
- `DELETE /api/analytics/:id` - Delete analytics (requires auth)

## 🚀 Deployment

### Deploy Backend on Render

1. Push your code to GitHub
2. Visit [render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repository
5. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
6. Add environment variables in Render dashboard
7. Deploy!

### Deploy Frontend on Vercel

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Add `.env` file with: `CI=false`
5. Deploy!

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### Frontend (.env)
```env
CI=false
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected routes with middleware
- CORS configuration
- Environment variable protection

## 📊 Sample Data

The dashboard includes sample data for:
- Revenue tracking (Jan-Jun)
- User growth metrics
- API usage statistics

You can update these by making API calls to the `/api/analytics` endpoint.

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or check your MongoDB Atlas connection string
- Verify the `MONGO_URI` in `.env`

### CORS Errors
- Make sure backend is running on `http://localhost:5000`
- Check CORS configuration in `server.js`

### Port Already in Use
- Change the `PORT` in backend `.env`
- Or kill the process using the port

## 📦 Dependencies

### Backend
- express
- mongoose
- cors
- dotenv
- bcryptjs
- jsonwebtoken

### Frontend
- react
- react-dom
- react-router-dom
- axios
- recharts
- tailwindcss

## 🎓 Learning Resources

- [React Documentation](https://reactjs.org)
- [Node.js Documentation](https://nodejs.org)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express Documentation](https://expressjs.com)

## 💡 Future Enhancements

- [ ] Real-time updates with WebSockets
- [ ] Advanced filtering and search
- [ ] Data export to CSV/PDF
- [ ] Multi-user collaboration
- [ ] Advanced analytics and reports
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Role-based access control

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ as a full-stack portfolio project.

---

**Happy Coding!** 🎉
