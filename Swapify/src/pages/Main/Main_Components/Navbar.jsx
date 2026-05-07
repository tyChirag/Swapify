import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-5'>
      <h1 className='text-blue-600 text-2xl'>SWAPIFY</h1>
      <div className='flex gap-10'>
        <Link>Home</Link>
        <Link>Categories</Link>
        <Link>Trades</Link>
        <Link>Profile</Link>
      </div>
      <div className='flex gap-10 px-5'>
        <button>Mode</button>
      <button className='bg-blue-600 text-white px-4 py-2 rounded-2xl'>+ Add Item</button></div>
    </div>
  )
}

export default Navbar
