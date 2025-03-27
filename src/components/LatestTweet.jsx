"use client";
import React from 'react'
import CustomHeading from './common/CustomHeading'
import { NextIcon, PrevIcon } from '@/utils/icons'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TWEET_LIST } from '@/utils/helper';
const LatestTweet = () => {
  return (
    <>
      <div id="about-us" className="max-xl:px-4">
        <div className="w-full flex items-center justify-between max-w-[1140px] mx-auto py-[80px] max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10">
          <CustomHeading title="Latest Tweet" />
          <div className="flex items-center gap-[56px] max-md:gap-6">
            <p className="swiper-prev cursor-pointer max-md:size-10 max-sm:size-5">
              <PrevIcon />
            </p>
            <p className="swiper-next cursor-pointer max-md:size-10 max-sm:size-5">
              <NextIcon />
            </p>
          </div>
        </div>
        <div className="w-full border-y-2 border-solid border-black">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="w-full max-w-[1140px] mx-auto border-x-2 border-solid border-black"
          >
            <div className="flex items-center">
              {TWEET_LIST.map((obj, i) => (
                <SwiperSlide key={i}>
                  <div className={`border-s-2 border-solid border-black `}>
                    <div className="px-6 py-12 flex flex-col justify-between">
                      <div>
                        <h2 className="font-semibold text-4xl max-sm:text-2xl leading-[110%]">
                          {obj.title}
                        </h2>
                        <div className="flex items-center gap-3 pt-3">
                          <p>{obj.icon}</p>
                          <p className="font-normal text-sm">{obj.date}</p>
                        </div>
                        <p className="font-normal text-base pt-3">
                          {obj.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-normal leading-[140%] w-full max-w-[99px] whitespace-nowrap cursor-pointer pt-4 flex flex-col transition-all ease-linear duration-300 hover:text-blue-500">
                          Read more ...
                          <span className="border border-solid max-w-[100px] mt-[-4px]"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default LatestTweet