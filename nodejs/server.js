import express from 'express'
import dotenv from 'dotenv';
import  connectDB  from './config/connectDB.js';
import Product from './models/Product.js';
import User from './models/User.js';
import Cart from './models/Cart.js';

const app = express()
const port = 3000

app.use(express.json());
dotenv.config();
await connectDB();

app.get('/', async(req, res) => {
//     const products = [
//   {
//     name: "Wireless Headphones",
//     image: "https://picsum.photos/200?random=1",
//     price: 59.99
//   },
//   {
//     name: "Smart Watch",
//     image: "https://picsum.photos/200?random=2",
//     price: 129.99
//   },
//   {
//     name: "Bluetooth Speaker",
//     image: "https://picsum.photos/200?random=3",
//     price: 39.99
//   },
//   {
//     name: "Gaming Mouse",
//     image: "https://picsum.photos/200?random=4",
//     price: 24.99
//   },
//   {
//     name: "Mechanical Keyboard",
//     image: "https://picsum.photos/200?random=5",
//     price: 79.99
//   },
//   {
//     name: "Laptop Stand",
//     image: "https://picsum.photos/200?random=6",
//     price: 29.99
//   },
//   {
//     name: "USB-C Hub",
//     image: "https://picsum.photos/200?random=7",
//     price: 34.99
//   },
//   {
//     name: "External SSD",
//     image: "https://picsum.photos/200?random=8",
//     price: 99.99
//   },
//   {
//         name: "Webcam HD",
//         image: "https://picsum.photos/200?random=9",
//         price: 49.99
//   },
//   {
//     name: "Portable Charger",
//     image: "https://picsum.photos/200?random=10",
//     price: 19.99
//   }
// ];
// await Product.insertMany(products)
// const users = [
//   {
//     name: "Ali Khan",
//     email: "ali.khan@example.com",
//     password: "password123"
//   },
//   {
//     name: "Sara Ahmed",
//     email: "sara.ahmed@example.com",
//     password: "securepass1"
//   },
//   {
//     name: "Usman Tariq",
//     email: "usman.tariq@example.com",
//     password: "mypassword7"
//   },
//   {
//     name: "Ayesha Malik",
//     email: "ayesha.malik@example.com",
//     password: "strongpass9"
//   },
//   {
//     name: "Bilal Hussain",
//     email: "bilal.hussain@example.com",
//     password: "bilalpass88"
//   },
//   {
//     name: "Fatima Noor",
//     email: "fatima.noor@example.com",
//     password: "fatimapass1"
//   },
//   {
//     name: "Hamza Sheikh",
//     email: "hamza.sheikh@example.com",
//     password: "hamzapass22"
//   },
//   {
//     name: "Zain Ali",
//     email: "zain.ali@example.com",
//     password: "zainpassword"
//   },
//   {
//     name: "Hina Raza",
//     email: "hina.raza@example.com",
//     password: "hinapass123"
//   },
//   {
//     name: "Omar Farooq",
//     email: "omar.farooq@example.com",
//     password: "omarpass456"
//   }
// ];
// await User.insertMany(users)
// console.log("Products inserted successfully");
  res.send('Hello World!')
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find();
        res.json({message: "Products fetched successfully", products: products});
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.get('/carts/:id', async(req, res) => {
    try {
        const cart = await Cart.find({userId: req.params.id}).populate('productId').populate('userId');
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        res.json({message: "Cart fetched successfully", cart: cart});
    }
        catch (error) {
        console.error("Error fetching carts:", error);
        res.status(500).json({ error: "Failed to fetch carts" });
    }
});

app.post('/carts', async(req, res) => {
    try {
        const { productId, userId, quantity } = req.body;
        if(quantity < 1) {
            return res.status(400).json({ error: "Quantity must be at least 1" });
        }
        const existingCartItem = await Cart.findOne({ productId, userId });
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.json({ message: "Cart item updated successfully", cartItem: existingCartItem });
        }
        const newCartItem = new Cart({ productId, userId, quantity });
        await newCartItem.save();
        res.status(201).json({ message: "Cart item added successfully", cartItem: newCartItem });
    }
    catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Failed to add to cart" });
    }
});

app.patch('/carts/:id', async(req, res) => {
    try {
        const { quantity, userId } = req.body;
        if(quantity < 1) {
            return res.status(400).json({ error: "Quantity must be at least 1" });
        }
        const updatedCartItem = await Cart.updateOne({ userId: userId, _id: req.params.id }, { quantity: quantity });  
        if (!updatedCartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }
        res.json({ message: "Cart item updated successfully", cartItem: updatedCartItem });
    }

    catch (error) {
        console.error("Error updating cart item:", error);
        res.status(500).json({ error: "Failed to update cart item" });
    }
});

app.delete('/carts/:id', async(req, res) => {
    try {
        const {userId} = req.body;
        console.log("User ID for deletion:", userId, "Cart Item ID:", req.params.id);
        const deletedCartItem = await Cart.deleteOne({ userId: userId, _id: req.params.id });
        console.log("Deleted Cart Item Result:", deletedCartItem);
        if (deletedCartItem.deletedCount === 0) {
            return res.status(404).json({ error: "Cart item not found" });
        }
        res.json({ message: "Cart item deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting cart item:", error);
        res.status(500).json({ error: "Failed to delete cart item" });
    }
});

app.delete('/checkout/:id', async(req, res) => {
    try {
        console.log("User ID for checkout deletion:", req.params.id);
        const deletedCartItems = await Cart.deleteMany({ userId: req.params.id });
        console.log("Deleted Cart Items Result:", deletedCartItems);
        if (deletedCartItems.deletedCount === 0) {
            return res.status(404).json({ error: "No cart items found for checkout" });
        }
        res.json({ message: "Checkout successful, cart items cleared" });
    }
    catch (error) {
        console.error("Error during checkout:", error);
        res.status(500).json({ error: "Failed to complete checkout" });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
