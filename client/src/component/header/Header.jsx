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
  const headerContainer =
    "w-[100%] max-w-6xl bg-[#003580] p-4 mt-[20px] mb-[100px]";
  const headerContainerListMode =
    " w-[100%] max-w-6xl bg-[#003580] p-4 mt-[20px]";
  return (
    <div className="bg-[#003580]   flex  justify-center text-white relative">
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
            <div className="h-[50px] bg-white flex items-center mt-4 justify-around rounded-[5px] w-[80%] absolute mb-[-25px] pt-[10px] ">
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon icon={faBed} className="text-[#d3d3d3]" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="rounded-none outline-0 text-black"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-[10px]">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-[#d3d3d3]"
                  />
                  <span onClick={() => setOpenDate(!openDate)} className="rounded-none outline-0 text-black">
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
                <div className="flex items-center gap-[10px]">
                  <FontAwesomeIcon icon={faPerson} className="text-[#d3d3d3]" />
                  <span onClick={() => {}} className="headerSearchText"></span>
                </div>
                <div className="flex items-center  gap-[10px]">
                  <button className="bg-[#0071c2] rounded-none font-[500px] mb-2 cursor-pointer p-[10px]" onClick={() => {}}>
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
