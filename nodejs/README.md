# E-Commerce Evolution - Node.js Backend Version

A robust backend API for e-commerce applications built with **Express**, **MongoDB**, and **Mongoose**. This is the backend service in the E-Commerce Evolution series, providing RESTful endpoints for product management, user authentication, and shopping cart operations.

## 📋 Overview

This Node.js implementation serves as the backend API for the e-commerce platform, handling all server-side operations including database management, business logic, and API endpoints. It is designed to work seamlessly with the React, Next.js, and Vanilla JavaScript frontends in the E-Commerce Evolution series, providing a scalable and maintainable backend infrastructure.

## ✨ Features

- **Product Management** - Create, read, and manage product catalog
- **User Management** - User registration and authentication
- **Shopping Cart API** - Full CRUD operations for shopping carts
- **MongoDB Integration** - Persistent data storage with Mongoose ODM
- **RESTful API** - Standard HTTP endpoints for frontend integration
- **CORS Support** - Cross-Origin Resource Sharing for frontend communication
- **Environment Configuration** - Secure configuration with dotenv
- **Body Parser** - Handle JSON request bodies efficiently
- **Error Handling** - Comprehensive error management and validation
- **Modular Architecture** - Clean separation of concerns with models and configuration

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | Latest | JavaScript runtime |
| **Express** | 5.2.1 | Web application framework |
| **MongoDB** | Latest | NoSQL database |
| **Mongoose** | 9.3.0 | MongoDB ODM (Object Document Mapper) |
| **CORS** | 2.8.6 | Cross-Origin Resource Sharing middleware |
| **Body Parser** | 2.2.2 | Request body parsing middleware |
| **Dotenv** | 17.3.1 | Environment variable management |

## 📁 Project Structure

```
nodejs/
├── server.js                  # Main server entry point
├── package.json               # Project dependencies and metadata
├── config/
│   └── connectDB.js           # MongoDB connection configuration
├── models/
│   ├── Product.js             # Product schema and model
│   ├── User.js                # User schema and model
│   └── Cart.js                # Cart schema and model
└── README.md                  # Project documentation
```

## 📄 File Descriptions

### Core Files

#### `server.js`
- Main server entry point
- Initializes Express application
- Configures middleware (JSON parsing, CORS, etc.)
- Establishes MongoDB connection
- Defines API routes and endpoints
- Listens on port 3000

#### `package.json`
- Project metadata and configuration
- Lists all npm dependencies
- Defines npm scripts for running the server
- Specifies ES module type support

#### `config/connectDB.js`
- Handles MongoDB connection logic
- Uses environment variables for connection URI
- Connects to `ecommerce` database
- Includes error handling and logging

### Data Models

#### `models/Product.js`
- Defines product schema
- Fields: `name`, `image`, `price`, `createdAt`
- Validates required fields and data types
- Supports product catalog management

#### `models/User.js`
- Defines user schema
- Handles user registration and authentication data
- Stores user credentials and profile information

#### `models/Cart.js`
- Defines shopping cart schema
- Fields: `productId`, `userId`, `quantity`, `createdAt`
- References Products and Users collections
- Manages cart items and quantities

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd nodejs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the nodejs directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
   
   Example for MongoDB Atlas:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
   ```

4. **Start the server:**
   ```bash
   node server.js
   ```

   The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Products
- `GET /products` - Get all products


### Cart
- `GET /cart/:userId` - Get user's cart
- `POST /cart` - Add item to cart
- `PUT /cart/:cartId` - Update cart item quantity
- `DELETE /cart/:cartId` - Remove item from cart

## 🔧 Configuration

### MongoDB Connection

The database connection is configured in `config/connectDB.js` using the `MONGO_URI` environment variable.

```javascript
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/ecommerce`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
```

### Middleware Configuration

Express middleware configured in `server.js`:
- `express.json()` - Parse incoming JSON requests
- `cors()` - Enable Cross-Origin Resource Sharing
- `body-parser` - Alternative request body parsing

## 🛡️ Environment Variables

Create a `.env` file with the following variables:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net

# Server Configuration
PORT=3000
NODE_ENV=development
```

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | 5.2.1 | Web framework |
| mongoose | 9.3.0 | MongoDB ODM |
| cors | 2.8.6 | CORS middleware |
| body-parser | 2.2.2 | Request body parser |
| dotenv | 17.3.1 | Environment variable loader |

## 🔄 Integration with Frontend

This backend API is designed to work with:
- **React Version** - Connects via HTTP requests to API endpoints
- **Next.js Version** - Can connect via API routes or direct HTTP calls
- **Vanilla JavaScript Version** - Connects via fetch API to backend endpoints

## 📝 Example Usage

### Adding a Product
```javascript
// POST /products
{
  "name": "Wireless Headphones",
  "image": "https://picsum.photos/200?random=1",
  "price": 59.99
}
```

### Creating a Cart Item
```javascript
// POST /cart
{
  "productId": "507f1f77bcf86cd799439011",
  "userId": "507f1f77bcf86cd799439012",
  "quantity": 2
}
```

## 🚀 Deployment

For production deployment:

1. **Set environment variables** on your hosting platform
2. **Build and optimize** dependencies
3. **Use a process manager** like PM2 for Node.js
4. **Enable CORS** for your frontend domain
5. **Set up database backups** and monitoring
6. **Use HTTPS** for secure communication

### Example PM2 Configuration
```bash
pm2 start server.js --name "ecommerce-api"
pm2 startup
pm2 save
```

## 📚 Related Versions

- [React Version](../react/) - Frontend with React 19 and Redux
- [Next.js Version](../nextjs/) - Full-stack with Next.js 16
- [Vanilla JavaScript Version](../vanilla/) - Pure HTML/CSS/JS frontend

## 📄 License

ISC

## 👨‍💻 Author

E-Commerce Evolution Series

---

For questions or issues, please refer to the main project documentation.
