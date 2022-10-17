import React from "react";
import Navbar from "../component/navbar/Navbar";
import Header from "../component/header/Header";
import SearchItem from "../component/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../src/hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );
  const handleClick = () => {
    reFetch();
  };
  const compStyle = {
    lsItem: "flex flex-col gap-[5px] mb-[10px]",
    lsInput: "w-[30px] border-none p-[5px]",
    lsSpan:
      "h-[30px] p-[5px] bg-white flex items-center cursor-pointer font-bold text-base",
    lsOptionItem: "flex justify-between mb-[10px] text-[#555] text-xs",
    lsOptionInput: "w-[100px]",
    searchBtn:
      "p-[10px] bg-[#0071c2] text-white border-none w-full font-medium cursor-pointer",
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-[1] bg-[#febb02] p-[10px] rounded-[10px] h-max  sticky top-[10px]">
            <h1 className="text-xl text-[#555] mt-[10px]">Search</h1>
            <div className={compStyle.lsItem}>
              <label className="text-xl">Destination</label>
              <input
                className="h-8 border-none rounded-none"
                placeholder={destination}
                type="text"
              />
            </div>
            <div className={compStyle.lsItem}>
              <label className="text-xl">Check-in Date</label>
              <span
                className={compStyle.lsSpan}
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={compStyle.lsItem}>
              <label>Options</label>
              <div className="p-[10px]">
                <div className={compStyle.lsOptionItem}>
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className={compStyle.lsOptionInput}
                  />
                </div>
                <div className={compStyle.lsOptionItem}>
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className={compStyle.lsOptionInput}
                  />
                </div>
                <div className={compStyle.lsOptionItem}>
                  <span>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={compStyle.lsOptionInput}
                    placeholder={options.adult}
                  />
                </div>
                <div className={compStyle.lsOptionItem}>
                  <span>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={compStyle.lsOptionInput}
                    placeholder={options.children}
                  />
                </div>
                <div className={compStyle.lsOptionItem}>
                  <span>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={compStyle.lsOptionInput}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className={compStyle.searchBtn} onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="flex-[3]">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
