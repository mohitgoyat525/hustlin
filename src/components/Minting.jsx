"use client"
import React, { useState, useEffect } from "react";
import CustomHeading from "./common/CustomHeading";
import Image from "next/image";
import { MINIT_LIST } from "@/utils/helper";
const Minting = () => {
  const [count, setCount] = useState(100);
  const [timeLeft, setTimeLeft] = useState(
    40 * 86400 + 15 * 3600 + 12 * 60 + 10
  );

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}:${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
      <>
          <div id="minting" className="max-xl:px-4">
      <div className="max-w-[1140px] mx-auto max-xl:px-4 w-full py-[88px] max-xl:py-16 max-lg:py-14 max-md:py-11 max-sm:py-10">
        <CustomHeading headingText="Minting" myClass="uppercase" />
      </div>

      <div className="w-full border-y-2 border-solid border-black">
        <div className="w-full flex items-center max-xl:px-4 gap-[133px] max-xl:gap-20 max-xl:py-5 max-lg:flex-wrap max-lg:justify-center max-lg:max-w-full max-lg:gap-14  max-w-[1140px] mx-auto border-x-2 border-solid border-black">
          <div className="ps-6 max-lg:ps-4 max-lg:pe-4 w-full max-w-[438px] max-lg:max-w-full">
            <p className="text-base font-normal">
              Most of the Hustlin’ Hardos first experienced NFTs via other
              successful projects like NBA TopShot, where revealing your newly
              minted item invoked the same emotions as opening up that first
              pack of baseball cards. NFTs have allowed us to enjoy those
              feelings once again while also empowering communities through
              shared ownership. The space has seen incredible growth over the
              past year, and it is our belief that we are in the very early
              innings of the paradigm shift that will be powered by web3.
            </p>
            <div
              className="border-2 border-solid border-black mt-4 flex items-center justify-center w-full max-w-[238px] h-[53px]"
            >
              <button
                className="text-black text-4xl font-semibold px-6 border-r-2 cursor-pointer border-solid  h-[53px]"
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <p className="text-black px-6 border-r-2 text-4xl text-center flex items-center font-semibold border-solid  h-[53px]">
                {count}
              </p>
              <button
                className="text-black px-6 text-4xl font-semibold cursor-pointer"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="mt-[35px] transition-all ease-linear duration-300 hover:bg-black hover:border-[#FFD600] hover:text-[#FFD600] border-2 border-solid border-black bg-[#FFD600] w-[111px] h-[43px] flex items-center justify-center cursor-pointer text-black font-semibold text-sm ">
              Mint Now
            </button>
            <p className="text-[#00A106] text-lg font-semibold pt-9">
              Time Left
            </p>
            <p className="text-[#FF0000] text-4xl font-semibold">
              {formatTime(timeLeft)}
            </p>
                  </div>
                  <div className="">
                      <Image src='/assets/images/webp/sad-employ.webp' alt="sad-employ" width={570} height={567} className=" w-full max-w-[570px] h-[567px] max-lg:h-full pointer-events-none"/>
                  </div>
        </div>
              </div>

          </div>
          <div className="border-b-2 border-solid border-black py-[21px] max-lg:px-4">
              <div className="w-full flex items-center justify-between max-w-[832px] mx-auto max-md:flex-wrap max-md:gap-5">
                  {MINIT_LIST.map((obj, i) => (
                      <div className="flex flex-col" key={i}>
                          <h3 className="font-normal text-2xl leading-[110%]">{obj}</h3>
                          <p className="font-semibold text-4xl leading-[110%]">45</p>
                      </div>
                  ))}
              </div>
          </div>
    </>
  );
};

export default Minting;
