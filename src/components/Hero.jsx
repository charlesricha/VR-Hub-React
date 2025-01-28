import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
   <section className='bg-white/30 backdrop-blur-sm rounded-3xl p-4 flex flex-col h-full'>
        <div className="navbar">
            <Navbar/>
        </div>




        <div className="main flex gap-4 items-center justify-between ">
            <div className="content flex flex-col gap-8 px-4 items-center">
                <h1 className='text-3xl font-bold'>Experience the Reality with VR</h1>

                <p> Whether you're exploring vast virtual worlds, enjoying interactive games, or stepping into professional environments, our headset delivers unmatched clarity, comfort, and performance.Upgrade your reality today!</p>
                <button className='bg-red-50 px-8 flex items-center justify-center rounded-full w-[50%] text-black py-1'>
                    Explore Now
                </button>
            </div>
            <img src="/1x/Asset 1.png" alt="" className='-mb-4'/>

        </div>




        <div className="footer flex items-center justify-center w-[50%] gap-4">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        </div>
   </section>
  )
}

export default Hero
