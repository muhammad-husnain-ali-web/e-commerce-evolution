# E-Commerce Evolution - Next.js Version

A modern, full-stack e-commerce application built with **Next.js 16**, **React 19**, **Redux Toolkit**, and **Tailwind CSS**. This is the third version in the E-Commerce Evolution series, showcasing advanced patterns including server components, client-side state management, and full-stack capabilities.

## 📋 Overview

This Next.js implementation provides a production-ready e-commerce shopping experience with server-side rendering support, optimized performance, and modern React patterns. It demonstrates how to build scalable applications with Next.js while maintaining the same core functionality across the E-Commerce Evolution series.

## ✨ Features

- **Product Catalog** - Browse available products on the home page
- **Shopping Cart** - Add/remove products and manage quantities
- **Cart Counter** - Real-time cart item count in the navigation bar
- **State Management** - Redux Toolkit for centralized state management
- **Server Components** - Next.js App Router with client/server component optimization
- **Responsive Design** - Tailwind CSS for mobile-friendly layout
- **Hot Module Replacement** - Fast refresh during development
- **Code Splitting** - Automatic code splitting for optimal performance
- **ESLint** - Code quality checks and best practices

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.1.6 | React framework & full-stack platform |
| **React** | 19.2.3 | UI framework |
| **Redux Toolkit** | 2.11.2 | State management |
| **React-Redux** | 9.2.0 | Redux bindings for React |
| **Tailwind CSS** | 4 | Utility-first CSS framework |
| **React Compiler** | 1.0.0 | Automatic React optimization |
| **ESLint** | 9 | Code linting |

## 📁 Project Structure

```
nextjs/
├── app/
│   ├── layout.js              # Root layout component
│   ├── page.js                # Home page with product catalog
│   ├── globals.css            # Global styles
│   ├── cart/
│   │   └── page.js            # Shopping cart page
│   └── redux/
│       ├── store.js           # Redux store configuration
│       ├── cartProvider.js    # Redux provider wrapper
│       └── cart/
│           └── cartSlice.js   # Cart state and actions
├── components/
│   └── Navbar.js              # Navigation bar with cart counter
├── public/                    # Static assets
├── eslint.config.mjs          # ESLint configuration
├── next.config.mjs            # Next.js configuration
├── jsconfig.json              # JavaScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## 📄 File Descriptions

### Core Files

#### `app/page.js`
- Home page displaying product catalog
- Uses client-side component (`'use client'`)
- Manages product state from localStorage
- Dispatches `addToCart` actions to Redux store
- Displays product cards with images, names, and prices
- Add to Cart buttons for each product

#### `app/cart/page.js`
- Shopping cart page
- Client-side component with Redux integration
- Displays all items added to cart
- Shows individual product totals and overall cart total
- Quantity adjustment controls (increment/decrement buttons)
- Remove button for each item
- Proceed to Checkout button
- Clear Cart functionality

#### `app/layout.js`
- Root layout component
- Wraps entire application with Redux provider
- Includes Navbar component
- Sets up global styles and meta information

### Redux & State Management

#### `app/redux/store.js`
- Configures Redux store using Redux Toolkit
- Includes cart reducer
- Exports store for application use

#### `app/redux/cartProvider.js`
- Redux Provider wrapper component
- Makes Redux store accessible to all components
- Wrapped around app in layout.js

#### `app/redux/cart/cartSlice.js`
- Defines cart state shape and initial state
- Actions: `addToCart`, `removeFromCart`, `clearCart`, `increaseQuantity`, `decreaseQuantity`
- Calculates `totalPrice` automatically
- Manages cart items with quantities and individual totals

### Components

#### `components/Navbar.js`
- Navigation bar displayed at the top
- Links to Home and Cart pages
- Displays real-time cart item counter
- Responsive design with Tailwind CSS

### Configuration Files

- **`next.config.mjs`** - Next.js configuration options
- **`jsconfig.json`** - JavaScript project settings
- **`eslint.config.mjs`** - ESLint rules for code quality
- **`postcss.config.mjs`** - PostCSS configuration for Tailwind
- **`tailwind.config.js`** - Tailwind CSS customization

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Navigate to the nextjs directory:
```bash
cd nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build application for production
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint to check code quality

## 📦 Data Flow

1. **Product Loading** - Products stored in localStorage, loaded on Home page mount
2. **Add to Cart** - Click "Add to Cart" dispatches Redux action with product data
3. **State Update** - Redux updates cart state, calculates total price
4. **UI Re-render** - Connected components re-render with updated cart data
5. **Navigation** - Navigate to Cart page to view and manage items
6. **Quantity Management** - Increase/decrease buttons dispatch actions to update quantities
7. **Remove Item** - Remove button dispatches action to delete item from cart

## 🎨 Styling

This project uses **Tailwind CSS v4** with the PostCSS plugin system. All components are styled using utility classes for rapid development and consistent design.

## 🔑 Key Differences from Other Versions

| Feature | Vanilla | React | Next.js |
|---------|---------|-------|---------|
| **Framework** | None | React 19 | Next.js 16 |
| **Build Tool** | None | Vite | Next.js |
| **State Management** | localStorage | Redux Toolkit | Redux Toolkit |
| **Styling** | Custom CSS | Tailwind CSS | Tailwind CSS |
| **Routing** | HTML files | React Router | Next.js App Router |
| **Performance** | Basic | Client-side | Server-optimized |
| **Development** | Manual | HMR | Fast Refresh |

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔗 Related Projects

This is part of the **E-Commerce Evolution** series:
- [Vanilla Version](../vanilla/) - Pure JavaScript implementation
- [React Version](../react/) - React with Vite
- **Next.js Version** - Full-stack with Next.js (you are here)
