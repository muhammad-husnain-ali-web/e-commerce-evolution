import js from '@eslint/js';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:  JSON.parse(localStorage.getItem("carts")) || [],
  totalItems: JSON.parse(localStorage.getItem("carts")).reduce((sum, i) => sum + i.quantity, 0) || 0,
  totalPrice: JSON.parse(localStorage.getItem("carts")).reduce((sum, i) => sum + i.totalPrice, 0) || 0,
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addToCart: (state, action) => {
        const item = action.payload;
        console.log(item)
        let carts = JSON.parse(localStorage.getItem("carts")) || [];
        const existingCartIndex = carts.findIndex((cart) => cart.id === item.id);

        if (existingCartIndex !== -1) {
            carts[existingCartIndex].quantity += 1;
            carts[existingCartIndex].totalPrice = carts[existingCartIndex].quantity * carts[existingCartIndex].price;
        } else {
            carts.push({ ...item, quantity: 1, totalPrice: item.price });
        }
        localStorage.setItem("carts", JSON.stringify(carts));
        updateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload
      let carts = JSON.parse(localStorage.getItem("carts")) || [];
        carts = carts.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    quantity: i.quantity + 1,
                    totalPrice: (i.quantity+1)*i.price,
                };
            }   
            return i;
        });
        localStorage.setItem("carts", JSON.stringify(carts));
      updateTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload
      let carts = JSON.parse(localStorage.getItem("carts")) || [];
        carts = carts.map(i => {
            if (i.id === id && i.quantity > 1) {
                return {
                    ...i,
                    quantity: i.quantity - 1,
                    totalPrice: (i.quantity-1)*i.price,
                };
            }   
            return i;
        });
        localStorage.setItem("carts", JSON.stringify(carts));
      updateTotals(state);
    },

    removeFromCart: (state, action) => {
        const id = action.payload
        console.log(id)
        let carts = JSON.parse(localStorage.getItem("carts")) || [];
        carts = carts.filter(i => i.id !== id);
        console.log(carts)
        localStorage.setItem("carts", JSON.stringify(carts));
        updateTotals(state);
    },

    clearCart: (state) => {
      localStorage.setItem("carts", JSON.stringify([]));
      state.totalItems = 0;
      state.totalPrice = 0;
      state.cartItems = [];
    },
  },
});

const updateTotals = (state) => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    state.cartItems = carts;
    state.totalItems = carts.reduce((sum, i) => sum + i.quantity, 0);
    state.totalPrice = carts.reduce((sum, i) => sum + i.totalPrice, 0);
};

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer