import React from "react";
import image from "./assets/Logo icon.svg";
import { Button } from "@material-tailwind/react";
const Home = () => {
  return (
    <div className="flex justify-between">
      <div
        className="w-full h-screen bg-cover bg-center flex justify-between"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 70%, 0% 100%)",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.09)), url('/Boy%20fight.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="px-28">
          <div className="">
            <div className="flex items-center py-16 gap-2">
              <img
                src={image}
                style={{ width: "40px", height: "40px" }}
                alt="logo"
              />
              <h1 className="text-white font-bold font-saira leading-90 text-[32px]">
                BOXCHAMP
              </h1>
            </div>
          </div>

          <div className="text-white font-saira font-bold text-[70px] leading-90 flex flex-col py-20">
            <span>FIGHT LIKE</span>
            <h1 className="flex gap-2 justify-center items-center">
              <span>A</span>
              <span className="text-[#E84444]">CHAMPION</span>
            </h1>
          </div>
        </div>

        <div>
          <ul className="text-white font-bold font-saira leading-90 text-[16px] flex gap-10 justify-center py-16 px-24 items-center">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
            <li>
              <button className="bg-[#E84444] py-2 px-4">SIGN UP</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
