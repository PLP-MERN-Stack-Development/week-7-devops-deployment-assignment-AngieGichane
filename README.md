# 🚀 MERN Stack Deployment Project

<div align="center">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</div>

<div align="center">
  <h3>Production-ready MERN stack application with CI/CD pipelines</h3>
  <p>Complete deployment solution with monitoring, security, and automated workflows</p>
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🌐 Deployment](#-deployment)
- [🔄 CI/CD Pipeline](#-cicd-pipeline)
- [📊 Monitoring](#-monitoring)
- [🔒 Security](#-security)
- [📁 Project Structure](#-project-structure)
- [🌍 Environment Variables](#-environment-variables)
- [🐛 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🎯 **Production Ready**
- ⚡ **Optimized React Build** - Minified, bundled, and ready for production
- 🛡️ **Secure Express Backend** - Comprehensive security middleware and error handling
- 📦 **Database Hosting** - MongoDB Atlas integration with connection pooling
- 🔄 **Auto-scaling** - Responsive to traffic demands

### 🚀 **DevOps & Deployment**
- 🤖 **CI/CD Pipelines** - Automated testing and deployment with GitHub Actions
- 🌐 **Multi-platform Deployment** - Support for Render, Heroku, Vercel, and Netlify
- 📊 **Monitoring & Logging** - Real-time application monitoring and error tracking
- 🔧 **Environment Management** - Separate configurations for dev, staging, and production

### 🔒 **Security & Performance**
- 🛡️ **Security Headers** - Helmet.js for HTTP security
- 🔐 **Authentication Ready** - JWT token structure prepared
- 📈 **Performance Monitoring** - Response time and resource usage tracking
- 🚦 **Health Checks** - Automated health monitoring endpoints

## 🏗️ Architecture

```mermaid
graph TB
    A[Client Browser] --> B[React Frontend]
    B --> C[Express Backend]
    C --> D[MongoDB Atlas]
    
    E[GitHub Repository] --> F[GitHub Actions]
    F --> G[Automated Tests]
    F --> H[Build & Deploy]
    
    H --> I[Frontend Deploy<br/>Vercel/Netlify]
    H --> J[Backend Deploy<br/>Render/Heroku]
    
    K[Monitoring Tools] --> C
    K --> B
```

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | `^18.0.0` | UI Framework |
| **Vite/CRA** | Latest | Build Tool |
| **Axios** | `^1.0.0` | HTTP Client |
| **React Router** | `^6.0.0` | Client Routing |

### **Backend**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | `^16.0.0` | Runtime Environment |
| **Express.js** | `^4.18.0` | Web Framework |
| **Mongoose** | `^7.0.0` | MongoDB ODM |
| **Helmet** | `^7.0.0` | Security Middleware |

### **Database & Cloud**
| Service | Purpose |
|---------|---------|
| **MongoDB Atlas** | Cloud Database |
| **Render/Heroku** | Backend Hosting |
| **Vercel/Netlify** | Frontend Hosting |
| **GitHub Actions** | CI/CD Pipeline |

## 📋 Prerequisites

Ensure you have the following accounts and tools set up:

### **Required Tools**
- ✅ **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- ✅ **npm** or **yarn** - Package manager
- ✅ **Git** - Version control

### **Required Accounts**
- 🔐 **GitHub Account** - For repository and CI/CD
- 🍃 **MongoDB Atlas** - Database hosting ([Sign up](https://www.mongodb.com/cloud/atlas))
- 🚀 **Deployment Platform Account**:
  - **Backend**: [Render](https://render.com/) / [Heroku](https://heroku.com/) / [Railway](https://railway.app/)
  - **Frontend**: [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/)

## 🚀 Installation

### **1. Clone the Repository**

```bash
# Clone the project
git clone https://github.com/your-username/mern-deployment-project.git
cd mern-deployment-project
```

### **2. Backend Setup**

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install
# or
yarn install

# Copy environment template
cp .env.example .env
```

**Configure your `.env` file:**

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/your-database

# Security
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=http://localhost:3000

# External Services (Optional)
SENDGRID_API_KEY=your-sendgrid-key
CLOUDINARY_URL=your-cloudinary-url
```

### **3. Frontend Setup**

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install
# or
yarn install

# Create production environment file
touch .env.production
```

**Configure your `.env.production` file:**

```env
# API Configuration
REACT_APP_API_URL=https://your-backend-url.com/api
REACT_APP_ENV=production

# Optional: Analytics & Monitoring
REACT_APP_GOOGLE_ANALYTICS=GA_TRACKING_ID
```

### **4. Development Setup**

```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory, new terminal)
npm start
```

## ⚙️ Configuration

### **MongoDB Atlas Setup**

1. **Create a New Cluster:**
   - Log in to MongoDB Atlas
   - Create a new cluster (M0 Sandbox for free tier)
   - Choose your preferred region

2. **Database Access:**
   ```bash
   # Create a database user
   Username: your-username
   Password: your-secure-password
   ```

3. **Network Access:**
   ```bash
   # Allow access from anywhere (for deployment)
   IP Address: 0.0.0.0/0
   ```

4. **Get Connection String:**
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>
   ```

### **Package.json Scripts**

**Backend (server/package.json):**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "npm install",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

**Frontend (client/package.json):**
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

## 🌐 Deployment

### **Backend Deployment**

#### **Option 1: Render (Recommended)**

1. **Connect Repository:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service:**
   ```yaml
   Name: your-app-backend
   Region: Choose closest to your users
   Branch: main
   Root Directory: server
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **Environment Variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=your-mongodb-atlas-uri
   JWT_SECRET=your-production-jwt-secret
   PORT=10000
   ```

#### **Option 2: Heroku**

```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri

# Deploy
git subtree push --prefix server heroku main
```

### **Frontend Deployment**

#### **Option 1: Vercel (Recommended)**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd client
   vercel --prod
   ```

3. **Configure Build Settings:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "build",
     "installCommand": "npm install"
   }
   ```

#### **Option 2: Netlify**

1. **Build the Project:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy via Drag & Drop:**
   - Go to [Netlify](https://www.netlify.com/)
   - Drag the `build` folder to deploy
   - Or connect your GitHub repository

3. **Configure Build Settings:**
   ```
   Build Command: npm run build
   Publish Directory: build
   ```

## 🔄 CI/CD Pipeline

### **GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install Backend Dependencies
      run: |
        cd server
        npm ci
    
    - name: Install Frontend Dependencies
      run: |
        cd client
        npm ci
    
    - name: Run Backend Tests
      run: |
        cd server
        npm test
    
    - name: Run Frontend Tests
      run: |
        cd client
        npm test -- --coverage --ci --forceExit --detectOpenHandles
    
    - name: Build Frontend
      run: |
        cd client
        npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Production
      run: |
        echo "Deploying to production..."
        # Add your deployment commands here
```

### **Workflow Features**

- ✅ **Automated Testing** - Runs on every push and PR
- 🚀 **Automatic Deployment** - Deploys on main branch updates
- 📊 **Test Coverage** - Generates coverage reports
- 🔒 **Security Checks** - Vulnerability scanning
- 📧 **Notifications** - Slack/Email notifications on failure

## 📊 Monitoring

### **Backend Health Check**

```javascript
// server/routes/health.js
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version
  });
});
```

### **Monitoring Setup**

1. **Application Performance Monitoring:**
   - [New Relic](https://newrelic.com/) - Full-stack monitoring
   - [DataDog](https://www.datadoghq.com/) - Infrastructure monitoring
   - [Sentry](https://sentry.io/) - Error tracking

2. **Uptime Monitoring:**
   - [UptimeRobot](https://uptimerobot.com/) - Free uptime monitoring
   - [Pingdom](https://www.pingdom.com/) - Website performance monitoring

3. **Log Management:**
   ```javascript
   // Winston logger setup
   const winston = require('winston');
   
   const logger = winston.createLogger({
     level: 'info',
     format: winston.format.json(),
     transports: [
       new winston.transports.File({ filename: 'error.log', level: 'error' }),
       new winston.transports.File({ filename: 'combined.log' })
     ]
   });
   ```

## 🔒 Security

### **Security Middleware**

```javascript
// server/middleware/security.js
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
```

### **Security Checklist**

- ✅ **Environment Variables** - Never commit secrets
- ✅ **HTTPS Enforcement** - Force secure connections
- ✅ **Rate Limiting** - Prevent abuse
- ✅ **Input Validation** - Sanitize user inputs
- ✅ **Authentication** - Secure user sessions
- ✅ **CORS Configuration** - Restrict cross-origin requests

## 📁 Project Structure

```
mern-deployment-project/
├── 📁 client/                    # React Frontend
│   ├── 📁 public/
│   │   ├── 📄 index.html
│   │   └── 📄 favicon.ico
│   ├── 📁 src/
│   │   ├── 📁 components/        # Reusable components
│   │   ├── 📁 pages/            # Page components
│   │   ├── 📁 services/         # API services
│   │   ├── 📁 utils/            # Utility functions
│   │   ├── 📁 hooks/            # Custom React hooks
│   │   ├── 📄 App.js
│   │   └── 📄 index.js
│   ├── 📄 package.json
│   ├── 📄 .env.example
│   └── 📄 .env.production
├── 📁 server/                    # Express Backend
│   ├── 📁 controllers/          # Route controllers
│   ├── 📁 models/               # Mongoose models
│   ├── 📁 routes/               # Express routes
│   ├── 📁 middleware/           # Custom middleware
│   ├── 📁 utils/                # Utility functions
│   ├── 📁 config/               # Configuration files
│   ├── 📁 tests/                # Test files
│   ├── 📄 server.js             # Entry point
│   ├── 📄 package.json
│   ├── 📄 .env.example
│   └── 📄 .env
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml         # CI/CD pipeline
├── 📄 README.md
├── 📄 .gitignore
└── 📄 docker-compose.yml         # Optional: Local development
```

## 🌍 Environment Variables

### **Backend Environment Variables**

```env
# Required
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-super-secret-jwt-key

# Optional
CORS_ORIGIN=https://your-frontend-domain.com
SENDGRID_API_KEY=your-sendgrid-key
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
REDIS_URL=redis://localhost:6379

# Monitoring
NEW_RELIC_LICENSE_KEY=your-new-relic-key
SENTRY_DSN=your-sentry-dsn
```

### **Frontend Environment Variables**

```env
# Required
REACT_APP_API_URL=https://your-backend-domain.com/api

# Optional
REACT_APP_GOOGLE_ANALYTICS=GA_TRACKING_ID
REACT_APP_SENTRY_DSN=your-frontend-sentry-dsn
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
```

## 🐛 Troubleshooting

### **Common Issues**

#### **Deployment Issues**

**❌ Build Failures:**
```bash
# Check Node.js version compatibility
node --version
npm --version

# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**❌ Environment Variables Not Loading:**
```bash
# Verify environment variables are set
echo $NODE_ENV
echo $MONGODB_URI

# Check deployment platform settings
# Render: Settings > Environment Variables
# Heroku: heroku config:get VARIABLE_NAME
```

#### **Database Connection Issues**

**❌ MongoDB Connection Timeout:**
```javascript
// Add connection options
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});
```

**❌ CORS Errors:**
```javascript
// Update CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-domain.com'
  ],
  credentials: true
}));
```

### **Debugging Commands**

```bash
# Check application logs
# Render: View logs in dashboard
# Heroku: heroku logs --tail

# Test API endpoints
curl -X GET https://your-backend-url.com/api/health

# Check build output
npm run build --verbose
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### **Getting Started**

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly:**
   ```bash
   # Backend tests
   cd server && npm test
   
   # Frontend tests
   cd client && npm test
   ```
5. **Commit your changes:**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
6. **Push to your branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### **Development Guidelines**

- 📝 Follow existing code style and conventions
- ✅ Write tests for new features
- 📖 Update documentation for any changes
- 🔒 Ensure security best practices
- 🚀 Test deployment process

### **Commit Message Convention**

```
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>🚀 <strong>Ready for Production!</strong> 🚀</p>
  <p>
    <a href="https://github.com/your-username/mern-deployment-project/issues">🐛 Report Bug</a>
    ·
    <a href="https://github.com/your-username/mern-deployment-project/issues">✨ Request Feature</a>
    ·
    <a href="https://github.com/your-username/mern-deployment-project/discussions">💬 Discussions</a>
  </p>
  <p>Made with ❤️ by Angela Gichane</p>
</div>