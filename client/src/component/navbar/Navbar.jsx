import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="bg-[#003580] flex justify-center h-[50px]">
      <div className="w-[100%] p-2  flex justify-between items-center max-w-5xl text-white">
      <Link to="/" className='text-[inherit] decoration-auto'>

        <span className="font-medium">lamabooking</span>
        </Link>

        <div className="">
          <button className="bg-white p-1 text-black ml-[20px]">Register</button>
          <button className="bg-white p-1 text-black ml-[20px]">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar