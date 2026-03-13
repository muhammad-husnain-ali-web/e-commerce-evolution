import { createSlice } from "@reduxjs/toolkit";

// Safe loader for Next.js (because SSR has no window)
const loadCartFromStorage = () => {
  if (typeof window !== "undefined") {
    const carts = localStorage.getItem("carts");
    return carts ? JSON.parse(carts) : [];
  }
  return [];
};

const carts = loadCartFromStorage();

const initialState = {
  cartItems: carts,
  totalItems: carts.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: carts.reduce((sum, i) => sum + i.totalPrice, 0),
};

const updateTotals = (state) => {
  state.totalItems = state.cartItems.reduce((sum, i) => sum + i.quantity, 0);
  state.totalPrice = state.cartItems.reduce((sum, i) => sum + i.totalPrice, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      updateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }

      updateTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find((i) => i.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }

      updateTotals(state);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter((i) => i.id !== id);

      updateTotals(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },

  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;