import { HEADER_DATA_LIST, HEADER_SOCIAL_LIST, NAV_LINK_LIST } from '@/utils/helper';
import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <div className="bg-black py-4">
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          direction="right"
        >
          {HEADER_DATA_LIST.map((item, index) => (
            <div className="flex items-center !gap-16" key={index}>
              <div className={`${item.width} mx-5`}>
                <Image
                  src={item.img}
                  alt="brands"
                  width={132}
                  height={25}
                  className={`w-full ${item.width}`}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <header className="pt-2 pb-4 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-end max-xl:justify-center">
          <div className="flex items-center justify-between w-full 2xl:mr-[420px] max-xl:mr-0  max-2xl:mr-[177px] max-w-[658px] px-4">
            <Link href="/">
              <p className="text-2xl font-normal leading-[100%] ff-moderfb">
                Hustlin' Hardos
              </p>
            </Link>
            <ul className="flex items-center gap-5 max-sm:gap-3">
              {HEADER_SOCIAL_LIST.map((item, index) => (
                <li
                  className="transition-all ease-linear duration-300 hover:scale-100"
                  key={index}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="transition-all ease-linear duration-300 hover:scale-100"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
              <li>
                <button className="max-md:hidden uppercase transition-all ease-linear duration-300 hover:bg-black hover:border-[#FFD600] hover:text-[#FFD600] border-2 border-solid border-black bg-[#FFD600] w-[165px] h-[43px] flex items-center justify-center cursor-pointer text-black font-semibold text-sm">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button className="md:hidden mx-auto mt-5 uppercase transition-all ease-linear duration-300 hover:bg-black hover:border-[#FFD600] hover:text-[#FFD600] border-2 border-solid border-black bg-[#FFD600] w-[165px] h-[43px] flex items-center justify-center cursor-pointer text-black font-semibold text-sm">
          Connect Wallet
        </button>
      </header>
      <div className="border-y-2 border solid border-black flex items-center justify-center">
        <div className="flex items-center">
          {NAV_LINK_LIST.map((item, index) => (
            <div
              className={`flex items-center px-6 justify-center border-s-2 border-solid border-black transition-all ease-linear duration-300 hover:bg-black  hover:text-[#FFD600] ${
                index === 4 ? "!border-e-2" : ""
              } max-md:px-2 py-[7px]`}
              key={index}
            >
              <Link href={item.link}>
                <p className="font-normal text-base max-sm:text-sm uppercase">
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header