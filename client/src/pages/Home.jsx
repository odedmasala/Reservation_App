import React from "react";
import Featured from "../component/freaturd/Featured";
import Header from "../component/header/Header";
import Navbar from "../component/navbar/Navbar";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div className="mt-[50px] flex flex-col items-center gap-[30px]">
          <Featured/>
        </div>
      </div>
    </>
  );
};
export default Home;
