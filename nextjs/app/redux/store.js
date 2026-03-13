import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
  },
})

if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("carts", JSON.stringify(state.cart.cartItems));
  });
}