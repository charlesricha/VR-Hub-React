import React from 'react'

const Aboutus = () => {
  return (
    <div className='flex h-screen p-8 items-center justify-center gap-8'id="about-us">

      <div className="content w-[50%] flex flex-col items-center justify-center">
        <h3 className='pb-8 text-3xl'>About Us</h3>
        <p>
      At <span className='text-pink-600'>VR Hub</span>, we believe reality is just the beginning. Our mission is to redefine how you interact with the world around you—by bringing the virtual and real together in ways you've never imagined. We’ve crafted a VR headset that pushes the boundaries of immersion, offering not just a product but an entirely new experience. From seamless integration with your favorite games to unlocking new dimensions of creativity, our technology opens doors to limitless potential. Whether you're a gamer, creator, or innovator, we’re here to guide you beyond the screen and into the future. Join us as we turn imagination into reality—one virtual step at a time
      </p>
      </div>
      <div className="image w-90 rounded-2xl">
        <img src="/1x/VR3.png" className='rounded-2xl' alt="" />
      </div>

    </div>
  )
}

export default Aboutus
