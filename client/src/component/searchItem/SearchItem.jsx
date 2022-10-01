import React from 'react'

const SearchItem = () => {
    const compStyle = {
        searchItem :"border-solid border-[lightgray] p-[10px] flex justify-between gap-5 mb-20",
        siImg:"w-[200px] h-[200px] object-cover",
    }
  return (
    <div className="border-solid border-8 border-[lightgray] p-[10px] flex justify-between gap-5 mb-5">
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className={compStyle.siImg}
    />
    <div className="flex flex-col gap-[10px] flex-[2]">
      <h1 className="text-xl">Tower Street Apartments</h1>
      <span className="text-xs">500m from center</span>
      <span className="text-sm bg-green-700 text-white max-w-max p-[3px] rounded-md">Free airport taxi</span>
      <span className="text-xs font-bold ">
        Studio Apartment with Air conditioning
      </span>
      <span className="text-xs">
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="text-xs text-green-700 font-bold">Free cancellation </span>
      <span className="text-xs text-green-700">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div >
        <span className='font-medium'>Excellent</span>
        <button className='bg-[#003580] text-white p-[5px] font-bold border-none'>8.9</button>
      </div>
      <div className="text-right flex flex-col gap-[5px]">
        <span className="text-xl">$112</span>
        <span className="text-xs text-[#808080]">Includes taxes and fees</span>
        <button className="bg-[#0071c2] text-white font-bold pt-[10px] pb-[10px] pl-[5px] pr-[5px]">See availability</button>
      </div>
    </div>
  </div>
  )
}

export default SearchItem