import React from 'react'
import bg from "../assets/bg.mp4"
import logo from "/PSI-Logo.svg"

const Header = () => {
  return (
<header className="relative w-full h-[500px] overflow-hidden text-white">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src={bg} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 bg-black/35 z-10"></div>

  <div className="relative z-20 flex flex-col justify-between items-start h-full md:pt-10 md:pb-14 px-4 py-8 md:px-24">
    <img src={logo} alt="PSI Logo" className="w-24 mb-6" />

<div className='flex flex-col items-start'>
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Discover PSI’s Vision</h1>

    <p className="text-sm md:text-lg max-w-4xl">
      Explore a curated selection of brochures, magazines, and investment insights that reflect our world of excellence in real estate.  
      From prime locations to groundbreaking opportunities, everything starts here.
    </p>
</div>
  </div>
</header>


  )
}

export default Header
