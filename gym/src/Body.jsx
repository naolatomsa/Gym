import React from "react";
import image from "./assets/Girl fight.jpg";

const Body = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" flex justify-center items-center gap-10 px-32">
        <div className="w-full">
          <img src={image} alt="girl fight" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="border-l-8 border-[#E84444]">
            <h1 className="text-black font-bold font-saira leading-90 text-[50px] flex flex-col gap-2 pl-4">
              <span>HOW WE GOT STARTED</span>
              <span> IN THIS BUSINESS</span>
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="leading-170 text-[16px] text-[#434443] font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="leading-170 text-[16px] text-[#434443] font-inter">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <button className="bg-[#E84444] font-bold font-saira leading-90 text-[16px] text-white py-2 px-10">
              TAKE A FREE LESSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
