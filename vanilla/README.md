# E-Commerce Evolution - Vanilla JavaScript Version

A simple, lightweight e-commerce application built with vanilla JavaScript, HTML, and CSS. This is the first version in the E-Commerce Evolution series, demonstrating core e-commerce functionality without any frameworks or libraries.

## 📋 Features

- ✅ **Product Catalog** - Display products with images, names, and prices
- ✅ **Shopping Cart** - Add/remove products and manage quantities
- ✅ **Cart Persistence** - LocalStorage integration for cart persistence
- ✅ **Quantity Management** - Increase/decrease product quantities
- ✅ **Dynamic Pricing** - Automatic price calculation based on quantity
- ✅ **Cart Counter** - Real-time cart item counter in navigation
- ✅ **Responsive Navigation** - Simple navbar with home and cart links
- ✅ **Checkout Ready** - Checkout button for completing purchases

## 🏗️ Project Structure

```
vanilla/
├── index.html          # Home page with product catalog
├── carts.html          # Shopping cart page
├── script.js           # Product data and initialization
├── home.js             # Product rendering and cart add logic
├── cart.js             # Cart management and display logic
├── style.css           # Styling for cart page
├── styles.css          # Main styling
└── README.md           # Project documentation
```

## 📄 File Descriptions

### HTML Files

#### `index.html`
- Main home page
- Displays welcome message and product catalog
- Product cards generate dynamically via JavaScript
- Navigation bar with cart link and item counter

#### `carts.html`
- Shopping cart page
- Displays all items added to cart
- Shows individual product totals and overall cart total
- Quantity adjustment controls (increment/decrement)
- Remove button for each item
- Checkout button

### JavaScript Files

#### `script.js`
- Contains product data (currently commented out with sample products)
- Initializes application data

#### `home.js`
- Fetches products from localStorage
- `renderProducts()` - Dynamically creates and displays product cards
- `setCartValue()` - Updates cart counter in navigation
- Event listener for "Add to Cart" button
- Handles duplicate products (increments quantity instead of adding duplicates)

#### `cart.js`
- `renderCart()` - Displays all cart items with details
- `setCartValue()` - Updates cart item counter
- `totalCartPrice()` - Calculates and displays total cart price
- Event listeners for:
  - Remove button (deletes items from cart)
  - Quantity adjustment buttons (+ and -)
  - Checkout button

### CSS Files

#### `styles.css`
- Main stylesheet
- Navigation bar styling
- Product card styling
- Responsive layout

#### `style.css`
- Additional cart-specific styling
- Cart item layout
- Buttons and controls styling

## 🎯 How It Works

### Data Storage
All data is stored in browser's **LocalStorage**:
- `products` - Array of available products
- `cart` - Array of items currently in the cart

### Workflow

1. **Load Products**: Products are loaded from localStorage and displayed on the home page
2. **Add to Cart**: When user clicks "Add to Cart", the product is added to localStorage cart
3. **Cart Update**: Cart counter updates in real-time showing total number of items
4. **View Cart**: Users can navigate to carts.html to view all items
5. **Manage Quantity**: Users can increase/decrease item quantities or remove items entirely
6. **Checkout**: Proceed to checkout (payment logic not implemented in this version)

### Cart Logic

```javascript
// When adding to cart:
- Check if product already exists in cart
- If yes: increment quantity and update total price
- If no: add new product with quantity = 1

// When updating quantity:
- Update item quantity
- Recalculate item total (quantity × original price)
- Recalculate cart total

// When removing:
- Filter out the item from cart array
- Update localStorage and UI
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation & Running

1. **Clone or download** the project
2. **Open in browser**:
   - Double-click `index.html` to open in default browser, OR
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
3. **Navigate** to `http://localhost:8000` (or appropriate port)

## 💡 Usage Guide

### Adding Products to Catalog

Products are stored in localStorage. Add them programmatically via browser console:

```javascript
const products = [
  {
    id: 1,
    name: "Product Name",
    price: 29.99,
    image: "image_url"
  }
];
localStorage.setItem("products", JSON.stringify(products));
```

Then refresh the page to see products.

### Verifying Cart Data

Open browser DevTools (F12) and check localStorage:
```javascript
// View products
console.log(JSON.parse(localStorage.getItem("products")));

// View cart
console.log(JSON.parse(localStorage.getItem("cart")));
```

### Clear All Data

```javascript
localStorage.clear();
```

## 🔧 Key Functions

| Function | File | Purpose |
|----------|------|---------|
| `renderProducts()` | home.js | Displays all products on home page |
| `renderCart()` | cart.js | Displays all cart items |
| `setCartValue()` | home.js / cart.js | Updates cart counter |
| `totalCartPrice()` | cart.js | Calculates total cart price |

## ⚡ Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Any modern browser with LocalStorage support

## 📝 Notes

- **No Backend**: This is a frontend-only application. Cart data is stored locally in the browser
- **LocalStorage Limitation**: Data is lost if browser cache is cleared
- **No Authentication**: No user login system implemented
- **No Payment**: Checkout button only validates cart state; actual payment integration not included

## 📌 Current Limitations & TODO

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Real checkout/payment processing
- [ ] Order history
- [ ] Product filtering/search
- [ ] User reviews and ratings
- [ ] Image optimization
- [ ] Form validation
- [ ] Error handling improvements
- [ ] Loading states

## 🤝 Contributing

This is part of an evaluation series. Feel free to extend and modify as needed.

## 📄 License

Free to use and modify for learning purposes.

