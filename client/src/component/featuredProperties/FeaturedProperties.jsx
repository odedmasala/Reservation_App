import React from 'react'

const FeaturedProperties = () => {
    const itemStyle  = "flex-1 gap-[10px] flex flex-col"
    const imageStyle = "w-full h-[250px] object-cover"
    const titleStyle ={
        fpName :"text-[#333] font-bold",
        fpCity :"font-light",
        fpPrice:"font-medium",
        fpRatingBrn :"bg-[#003580] text-white rounded-none p-[3px] mr-[10px] font-bold",
        fpRatingSpan:"text-sm"
    }
  return (
    <div className="w-full max-w-5xl flex justify-between gap-[20px]">
    <div className={itemStyle}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
        alt=""
        className={imageStyle}
      />
      <span className={titleStyle.fpName}>Aparthotel Stare Miasto</span>
      <span className={titleStyle.fpCity}>Madrid</span>
      <span className={titleStyle.fpPrice}>Starting from $120</span>
      <div >
        <button className={titleStyle.fpRatingBrn}>8.9</button>
        <span className={titleStyle.fpRatingSpan}>Excellent</span>
      </div>
    </div>
    <div className={itemStyle}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
        alt=""
        className={imageStyle}
      />
      <span className={titleStyle.fpName}>Comfort Suites Airport</span>
      <span className={titleStyle.fpCity}>Austin</span>
      <span className={titleStyle.fpPrice}>Starting from $140</span>
      <div >
        <button className={titleStyle.fpRatingBrn}>9.3</button>
        <span className={titleStyle.fpRatingSpan}>Exceptional</span>
      </div>
    </div>
    <div className={itemStyle}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
        alt=""
        className={imageStyle}
      />
      <span className={titleStyle.fpName}>Four Seasons Hotel</span>
      <span className={titleStyle.fpCity}>Lisbon</span>
      <span className={titleStyle.fpPrice}>Starting from $99</span>
      <div >
        <button className={titleStyle.fpRatingBrn}>8.8</button>
        <span className={titleStyle.fpRatingSpan}>Excellent</span>
      </div>
    </div>
    <div className={itemStyle}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
        alt=""
        className={imageStyle}
      />
      <span className={titleStyle.fpName}>Hilton Garden Inn</span>
      <span className={titleStyle.fpCity}>Berlin</span>
      <span className={titleStyle.fpPrice}>Starting from $105</span>
      <div >
        <button className={titleStyle.fpRatingBrn}>8.9</button>
        <span className={titleStyle.fpRatingSpan}>Excellent</span>
      </div>
    </div>
  </div>
  )
}

export default FeaturedProperties