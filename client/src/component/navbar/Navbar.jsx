import React from 'react'



const Navbar = () => {
  return (
    <div className="bg-[#003580] flex justify-center h-[50px]">
      <div className="w-[100%] p-2  flex justify-between items-center max-w-6xl text-white">
        <span className="font-medium">lamabooking</span>
        <div className="">
          <button className="bg-white p-1 text-black ml-[20px]">Register</button>
          <button className="bg-white p-1 text-black ml-[20px]">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar