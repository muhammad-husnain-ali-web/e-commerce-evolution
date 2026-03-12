# E-Commerce Evolution - React Version

A modern e-commerce application built with **React 19**, **Redux Toolkit**, and **Vite**. This is part of the E-Commerce Evolution series, showcasing the same functionality implemented across multiple frameworks and architectures.

## 📋 Overview

This React implementation provides a fully functional e-commerce shopping experience with product browsing and shopping cart management. It demonstrates modern React patterns including state management with Redux, client-side routing with React Router, and responsive UI with Tailwind CSS.

## ✨ Features

- **Product Catalog** - Browse available products on the home page
- **Shopping Cart** - Add/remove products and manage quantities
- **Cart Counter** - Real-time cart item count in the navigation bar
- **State Management** - Redux Toolkit for centralized state management
- **Client-side Routing** - Seamless navigation between Home and Cart pages
- **Responsive Design** - Tailwind CSS for mobile-friendly layout
- **Fast Development** - Vite for instant HMR (Hot Module Replacement)
- **ESLint** - Code quality checks and best practices

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.0 | UI framework |
| **Vite** | 7.3.1 | Build tool & dev server |
| **Redux Toolkit** | 2.11.2 | State management |
| **React-Redux** | 9.2.0 | Redux bindings for React |
| **React Router** | 7.13.1 | Client-side routing |
| **Tailwind CSS** | 4.2.1 | Utility-first CSS framework |
| **ESLint** | 9.39.1 | Code linting |

## 📁 Project Structure

```
react/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation bar with cart counter
│   ├── pages/
│   │   ├── Home.jsx            # Product listing page
│   │   └── Cart.jsx            # Shopping cart page
│   ├── redux/
│   │   ├── store.js            # Redux store configuration
│   │   └── cart/
│   │       └── cartSlice.js    # Cart state and actions
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Application entry point
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── assets/                 # Static assets
├── public/                     # Public static files
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration (Tailwind)
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. Navigate to the react directory:
   ```bash
   cd react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Linting

Check code quality and style:

```bash
npm run lint
```

## 📝 Available Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## 🎯 Key Features in Detail

### Shopping Cart with Redux

The cart state is managed using Redux Toolkit's `cartSlice`, which provides actions for:
- Adding products to the cart
- Removing products from the cart
- Updating product quantities
- Calculating totals

### Navigation with React Router

The app uses React Router v7 for smooth client-side navigation:
- **Home Page** (`/`) - Browse and add products
- **Cart Page** (`/cart`) - View and manage cart items

### Real-time Cart Updates

The Navbar displays the current number of items in the cart using Redux selectors, updating instantly when the cart changes.

### Styling with Tailwind CSS

The application uses Tailwind CSS v4 for responsive and utility-first styling, ensuring a modern and clean UI.

## 🔄 E-Commerce Evolution Series

This React version is part of the E-Commerce Evolution project, implementing the same e-commerce functionality across different technologies:

- **Vanilla JavaScript** (`vanilla/`) - Plain HTML, CSS, and JavaScript
- **React** (`react/`) - Modern React with Redux and Vite
- **Next.js** (`nextjs/`) - Full-stack React with server-side rendering

Compare implementations to understand different architectural approaches!

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork, modify, and submit pull requests to improve this implementation.

---

**Happy coding!** 🚀
