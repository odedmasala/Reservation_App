import React from "react";
import FeaturedProperties from "../component/featuredProperties/FeaturedProperties";
import Featured from "../component/freaturd/Featured";
import Header from "../component/header/Header";
import Navbar from "../component/navbar/Navbar";
import PropertyList from "../component/propertyList/PropertyList";
const Home = () => {
  const title = {
      h1 :"w-[1024ox] text-2xl"
  }
  return (

    <>
      <div>
        <Navbar />
        <Header />
        <div className="mt-[50px] flex flex-col items-center gap-[30px]">
          <Featured/>
          <h1 className={title.h1}>Browse by property type</h1>
          <PropertyList/>
          <h1 className={title.h1}>Homes guests love</h1>
          <FeaturedProperties/>
        </div>
      </div>
    </>
  );
};
export default Home;
