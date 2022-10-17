import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  
  console.log(data);
  const itemStyle = "flex-1 gap-[10px] flex flex-col";
  const imageStyle = "w-full h-[250px] object-cover";
  const titleStyle = {
    fpName: "text-[#333] font-bold",
    fpCity: "font-light",
    fpPrice: "font-medium",
    fpRatingBrn:
      "bg-[#003580] text-white rounded-none p-[3px] mr-[10px] font-bold",
    fpRatingSpan: "text-sm",
  };

  return (
    <div className="w-full max-w-5xl flex justify-between gap-[20px]">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className={itemStyle}>
              <img src={item.photos[0]} alt="" className={imageStyle} />
              <span className={titleStyle.fpName}>{item.name}</span>
              <span className={titleStyle.fpCity}>{item.city}</span>
              <span className={titleStyle.fpPrice}>{item.cheapestPrice}</span>
              {item.rating && (
                <div>
                  <button className={titleStyle.fpRatingBrn}>
                    {item.rating}
                  </button>
                  <span className={titleStyle.fpRatingSpan}>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
