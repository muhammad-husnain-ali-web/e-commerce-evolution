import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';

const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

  return (<>
  <div className='m-4'>
        <h1 className='text-green-700 text-xl text-center font-bold'>Welcome to Our E-commerce Store</h1>
        <p className='text-center text-green-600'>Discover a wide range of products at unbeatable prices. Shop now and enjoy exclusive deals!</p>
    </div>


    <div className='flex flex-wrap justify-center items-center'>
    {products.length > 0 ? (
        products.map((product) => (
            <div key={product.id} className='bg-white shadow-md rounded-lg p-4 m-4 w-64'>
                <span className='imgcontainer overflow-hidden rounded-lg'>
                    <img className='w-full h-full object-cover rounded-md' src={product.image} alt={product.name} />
                </span>
                <h2 className='text-lg font-bold text-gray-800'>{product.name}</h2>
                <p className='text-xl font-bold text-green-600'>${product.price.toFixed(2)}</p>
                <button onClick={() => dispatch(addToCart(product))} className="addToCart w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Add to Cart
                </button>
            </div>
        ))
    ) : (
        <p className='text-center text-gray-500'>No products available.</p>
    )}
    </div>
  </>
  )
}

export default Home
