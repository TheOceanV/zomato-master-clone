import React from "react";

// Components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

const HomeLayout = (props) => {
    return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div> 
    </>
   );
};

export default HomeLayout;