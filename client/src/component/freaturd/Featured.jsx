import React from "react";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  return (
    <div className="w-full p-2 max-w-5xl flex justify-center gap-[20px]">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="h-64 flex-1 relative text-white rounded-xl overflow-hidden">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[20px] left-[20px]">
              <h1 className="text-3xl font-bold">Berlin</h1>
              <h2 className="text-xl font-bold">{data[0]} properties</h2>
            </div>
          </div>
          <div className="h-64 flex-1 relative text-white rounded-xl overflow-hidden">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[20px] left-[20px]">
              <h1 className="text-3xl font-bold">Madrid</h1>
              <h2 className="text-xl font-bold">{data[1]} properties</h2>
            </div>
          </div>
          <div className="h-64 flex-1 relative text-white rounded-xl overflow-hidden">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[20px] left-[20px]">
              <h1 className="text-3xl font-bold">London</h1>
              <h2 className="text-xl font-bold">{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
