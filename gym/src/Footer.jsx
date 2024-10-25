import React from "react";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import linkedn from "./assets/icon-linkedin.svg";

function Footer() {
  return (
    <div className="h-96 bg-black">
      <div className="flex justify-between items-center p-24">
        <div>
          <h1 className="text-white flex flex-col text-[32px] font-saira leading-270">
            <span>READY FOR YOUR </span>
            <div className="flex gap-1">
              <span className="text-[#E84444]">NEXT</span>
              <span>LESSON?</span>
            </div>
          </h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img
            src={facebook}
            style={{ width: "20px" }}
            alt="facebook"
            className="cursor-pointer"
          />
          <img
            src={instagram}
            style={{ width: "20px" }}
            alt="instagram"
            className="cursor-pointer"
          />
          <img
            src={linkedn}
            style={{ width: "20px" }}
            alt="linkedn"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between px-24">
        <div>
          <h1 className="text-white font-saira leading-90 hover:underline">
            info@yourdomain.com
          </h1>
        </div>
        <div className="flex gap-5">
          <h1 className="text-white font-saira leading-90">
            Terms & conditions
          </h1>
          <h1 className="text-white font-saira leading-90">privacy policy</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
