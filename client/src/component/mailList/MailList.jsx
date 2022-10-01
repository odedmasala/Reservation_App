import React from "react";

const MailList = () => {
  const stylePage = {
    spanStyle: " text-xl",
    title: "text-5xl text-white",
    mailBoxStyle:
      "w-full mt-[50px] bg-[#003580] text-white flex flex-col items-center gap-[20px]",
    mailInput:
      "w-[300px] h-[30px] p-[10px] border-none rounded mt-[10px] mr-[10px]",
    mailBtn:
      "h-[40px] bg-[#0071c2] font-medium border-none rounded cursor-pointer",
  };
  return (
    <div className={stylePage.mailBoxStyle}>
      <span className={stylePage.title}>Save time, save money!</span>
      <span className={stylePage.spanStyle}>
        Sign up and we'll send the best deals to you
      </span>
      <div>
        <input
          className={stylePage.mailInput}
          type="text"
          placeholder="Your Email"
        />
        <button className={stylePage.mailBtn}>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
