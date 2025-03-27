"use client";
import {  ROADMAP_LIST } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <div className="container max-w-[1172px] mx-auto px-4 py-[88px] max-sm:py-10 max-xl:py-16 max-lg:py-14 max-md:py-12">
        <CustomHeading headingText="RoadMap" myClass="uppercase" />
      </div>
      <div className="border-b-2 border-black w-full"></div>
      <div className="relative flex flex-col items-center container max-w-[1172px] mx-auto px-4 pl-4 xl:border-x-2 lg:pt-[99px] pt-10 xl:pb-[186px] lg:pb-[120px] md:pb-[70px] pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:h-[1451px] md:h-[1736px] h-full max-md:left-6 w-4">
          <Image
            src="/assets/images/svg/down-arrow.svg"
            alt="down-arrow"
            width={5}
            height={1689}
            className="w-full h-full object-cover lg:mt-[150px]"
          />
        </div>
        {ROADMAP_LIST.map((item, index) => (
          <div
            key={index}
            className={`flex w-full items-start max-md:max-w-[545px] max-md:ml-auto ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            } ${
              index === 1
                ? "mt-[-122px] max-md:mt-0"
                : index === 2
                ? "mt-[-33px] max-md:mt-0"
                : index === 3
                ? "mt-[-50px] max-md:mt-0"
                : index === 4
                ? "mt-[-45px] max-md:mt-0"
                : ""
            }`}
          >
            <div
              className={`relative md:w-1/2 w-full ${
                index % 2 === 0
                  ? "justify-end lg:pl-[65px] md:pl-9"
                  : "justify-start lg:pr-[65px] pr-5 lg:pl-9"
              } flex-col max-md:!pr-0 max-md:pl-8`}
            >
              <p className="md:text-sm text-xs font-normal max-md:mt-6 mb-2">
                {item.name}
              </p>
              <h2 className="lg:text-4xl text-2xl leading-[110%] font-semibold mb-2">
                {item.tittle}
              </h2>
              <p className="text-black font-normal md:text-base text-sm">
                {item.description}
              </p>
            </div>
            <div
              className={`md:size-14 size-10 max-md:absolute   bg-white border-2 border-black rounded-full flex items-center justify-center text-lg font-bold md:absolute relative md:transform md:-translate-x-1/2 md:left-1/2 max-md:left-[16px] max-sm:left-1`}
            >
              <Image
                src="/assets/images/png/icon-img.png"
                width={32}
                height={27}
                alt="arrow"
                className="md:w-8 md:h-7 size-6 pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="border border-black w-full"></div>
    </div>
  );
};

export default Roadmap;
