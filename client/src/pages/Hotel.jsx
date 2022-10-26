import React from "react";
import Navbar from "../component/navbar/Navbar";
import Header from "../component/header/Header";
import MailList from "../component/mailList/MailList";
import Footer from "../component/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from "../context/SearchContext";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { dates ,options } = useContext(SearchContext);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
const days = dayDifference(dates[0].endDate,dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  // const handleClick = () => {
  //   if (user) {
  //     setOpenModal(true);
  //   } else {
  //     navigate("/login");
  //   }
  // };
  const hotelStyle = {
    hotelContainer: "flex flex-col  items-center mt-5",
    sliderWrapper: "w-[100%] h-[100%] flex justify-center items-center",
    hotelWrapper: "w-full max-w-5xl flex flex-col gap-[10px] relative",
    slider:
      "sticky  top-[0] left-[0] w-[100vw] h-[98vh] bg-[#0000009c] z-[999] flex items-center",
    sliderImg: "w-4/5 h-[80vh]",
    icons: {
      close: "absolute top-5 right-5 text-5xl text-[lightgray] cursor-pointer",
      arrow: "m-5 text-6xl text-[lightgray] cursor-pointer",
    },
    bookNowBtn:
      "absolute text-white cursor-pointer font-bold rounded bg-[#0071c2] flex text-center  top-[10px] right-0 border-none pl-[20px] pr-[20px] pt-[10px] pb-[10px]",
    hotelImg: "w-full object-cover cursor-pointer",
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className={hotelStyle.hotelContainer}>
          {open && (
            <div className={hotelStyle.slider}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={hotelStyle.icons.close}
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className={hotelStyle.icons.arrow}
                onClick={() => handleMove("l")}
              />
              <div className={hotelStyle.sliderWrapper}>
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className={hotelStyle.sliderImg}
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className={hotelStyle.icons.arrow}
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className={hotelStyle.hotelWrapper}>
            <button className={hotelStyle.bookNowBtn}>
              Reserve or Book Now!
            </button>
            <h1 className="text-4xl font-bold">{data.name}</h1>
            <div className="text-xs flex items-center gap-[10px]">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="text-[#0071c2] font-medium">
              Excellent location – {data.distance}m from center
            </span>
            <span className="text-[#008009] text-lg font-medium">
              Book a stay over $ {data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="flex flex-wrap justify-around">
              {data.photos?.map((photo, i) => (
                <div className="w-1/3" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className={hotelStyle.hotelImg}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-5 mt-5">
              <div className="flex-[3]">
                <h1 className="text-4xl">{data.title}</h1>
                <p className="text-sm mt-5">{data.desc}</p>
              </div>
              <div className="flex-1 bg-[#ebf3ff] p-5 flex flex-col gap-5">
                <h1 className="text-xl">Perfect for a {days}-night stay!</h1>
                <span className="text-sm">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2 className="font-extralight text-gl">
                  <b className="font-bold">{days* data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button className="border-none bg-blue-500 pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
