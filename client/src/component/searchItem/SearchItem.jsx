import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  const compStyle = {
    searchItem:
      "border-solid border-[lightgray] p-[10px] flex justify-between gap-5 mb-20",
    siImg: "w-[200px] h-[200px] object-cover",
  };
  return (
    <div className="border-solid border-8 border-[lightgray] p-[10px] flex justify-between gap-5 mb-5">
      <img src={item.photos[0]} alt="" className={compStyle.siImg} />
      <div className="flex flex-col gap-[10px] flex-[2]">
        <h1 className="text-xl">{item.name}</h1>
        <span className="text-xs">{item.distance}m from center</span>
        <span className="text-sm bg-green-700 text-white max-w-max p-[3px] rounded-md">
          Free airport taxi
        </span>
        <span className="text-xs font-bold ">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">{item.desc}</span>
        <span className="text-xs text-green-700 font-bold">
          Free cancellation{" "}
        </span>
        <span className="text-xs text-green-700">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        {item.rating && (
          <div>
            <span className="font-medium">Excellent</span>
            <button className="bg-[#003580] text-white p-[5px] font-bold border-none">
            {item.rating}
            </button>
          </div>
        )}

        <div className="text-right flex flex-col gap-[5px]">
          <span className="text-xl">$ {item.cheapestPrice}</span>
          <span className="text-xs text-[#808080]">
            Includes taxes and fees
          </span>
          <Link to={`/hotels/${item._id}`}>
          <button className="bg-[#0071c2] text-white font-bold pt-[10px] pb-[10px] pl-[5px] pr-[5px]">
            See availability
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
