import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-12 w-full'>
      <div className="logo">
        <a href="#" className='text-2xl'>VR Hub</a>
      </div>
      <div className="tabs flex gap-4">
        <a href="#about-us">About</a>
        <a href="#products">Products</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
