import React from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  const headerContainer =
    "w-full max-w-5xl bg-[#003580] p-4 mt-[20px] mb-[100px]";
  const headerContainerListMode =
    " w-full max-w-5xl bg-[#003580] p-4 mt-[20px]";


  return (
    <div className="bg-[#003580]   flex  justify-center text-white relative">
      {/* header icons */}
      <div
        className={type === "list" ? headerContainerListMode : headerContainer}
      >
        <div className="flex gap-[40px] mb-[50px]">
          <div className="flex items-center gap-[30px]  border-2 p-[10px] rounded-[20px]">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-[30px]">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-[30px]">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="flex items-center gap-[30px]">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-[30px]">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {/* header title */}
        {type !== "list" && (
          <>
            <h1 className="text-[40px] font-bold">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="mt-[20px] text-[20px]">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="bg-[#0071c2] mt-2 rounded-none font-[500px] cursor-pointer p-[10px]">
              Sign in / Register
            </button>
            {/* header search item */}
            <div className="h-[60px] bg-white flex items-center border-4  border-[#febb02] justify-around rounded-[5px] w-[100%] max-w-5xl absolute bottom-[-25px] pr-0 pl-0 pt-[15px] pb-[10px]">
              {/* search place */}
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon icon={faBed} className="text-[#d3d3d3]" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="rounded-none outline-0 text-black"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/* search date */}
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-[#d3d3d3]"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="rounded-none outline-0 text-black"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")}  to  ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-[50px] z-10"
                    minDate={new Date()}
                  />
                )}
              </div>
              {/* counter */}
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon icon={faPerson} className="text-[#d3d3d3]" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="text-[#d3d3d3] cursor-pointer"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="z-10 absolute top-[50px] shadow-md rounded-[5px] bg-white text-[#808080] ">
                    <div className="w-[200px] flex justify-between m-[10px]">
                      <span className="">Adult</span>
                      <div className="flex items-center text-xs text-black gap-[10px] ">
                        <button
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                          className="w-[30px] h-[30px] border-2 cursor-pointer bg-white text-[#0071c2] border-indigo-500/100"
                        >
                          -
                        </button>
                        <span className="">{options.adult}</span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className="w-[30px] h-[30px] border-2 cursor-pointer bg-white text-[#0071c2] border-indigo-500/100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-between m-[10px]">
                      <span className="">Children</span>
                      <div className="flex items-center text-xs text-black gap-[10px] ">
                        <button
                          onClick={() => handleOption("children", "d")}
                          disabled={options.Children <= 1}
                          className="w-[30px] h-[30px] border-2 cursor-pointer bg-white text-[#0071c2] border-indigo-500/100"
                        >
                          -
                        </button>
                        <span className="">{options.children}</span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="w-[30px] h-[30px] border-2 cursor-pointer bg-white text-[#0071c2] border-indigo-500/100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-between m-[10px]">
                      <span className="">Adult</span>
                      <div className="flex items-center text-xs text-black gap-[10px] ">
                        <button
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                          className="w-[30px] h-[30px] border-2 cursor-pointer bg-white text-[#0071c2] border-indigo-500/100"
                        >
                          -
                        </button>
                        <span className="">{options.room}</span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="w-[30px] h-[30px] border-2 cursor-pointer bg-white text-[#0071c2] border-indigo-500/100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* search button */}
              <div className="flex items-center  gap-[10px]">
                <button
                  className="bg-[#0071c2] rounded-none font-[500px] mb-2 cursor-pointer p-[10px]"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
