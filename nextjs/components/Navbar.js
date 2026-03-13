'use client'
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav className='bg-green-800 text-white shadow-md p-4 flex justify-around items-center'>
        <Link href="/" className='text-xl font-bold'>Home</Link>
        <Link href="/cart" className='text-xl font-bold ml-4 relative'>
          <span>Cart</span>
          <span className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 absolute top-0 -right-2 text-xs'>
            {totalItems}
          </span>
        </Link>
    </nav>
  )
}

export default Navbar
