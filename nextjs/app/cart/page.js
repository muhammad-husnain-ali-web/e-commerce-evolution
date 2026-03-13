'use client'
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "../redux/cart/cartSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartStateItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setCartItems(cartStateItems);
  }, [cartStateItems]);
  return (
    <>
      <h1 className="text-green-700 text-center text-xl font-bold m-3">
        Shopping Cart
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart bg-white shadow-md rounded-lg p-4 m-4 w-64">
              <span className="cartImage overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={item.image}
                  alt={item.name}
                />
              </span>
              <p className="text-lg font-bold text-gray-800">{item.name}</p>
              <p id="quantity" className="text-gray-600">
                Quantity: {item.quantity}
              </p>
              <p className="text-xl font-bold text-green-600">Price: ${item.price.toFixed(2)}</p>
              <p className="text-xl font-bold text-green-600">
                Total Price: ${item.totalPrice.toFixed(2)}
              </p>
              <span className="quantity-controls w-full flex justify-center items-center gap-2 mt-2">
                <button className="minus p-2 border border-black rounded-md cursor-pointer hover:bg-gray-200"
                  onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <p className="text-gray-800 p-2 border border-black rounded-md">
                  {item.quantity}
                </p>
                <button className="plus p-2 border border-black rounded-md cursor-pointer hover:bg-gray-200"
                  onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </span>
              <button className="remove-btn w-full font-bold p-2 my-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
                onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-xl font-bold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={() => dispatch(clearCart())} className="checkout-btn w-fit p-2 my-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
