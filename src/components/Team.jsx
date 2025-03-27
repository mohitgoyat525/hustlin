"use client";
import React from 'react'
import CustomHeading from './common/CustomHeading';
import { NextIcon, PrevIcon } from '@/utils/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TEAM_LIST } from '@/utils/helper';
import Image from 'next/image';
const Team = () => {
  return (
    <>
      <div
        id="team"
        className="py-[80px] max-w-[1140px] mx-auto flex px-4 items-center justify-between max-sm:py-10 max-xl:py-16 max-lg:py-14 max-md:py-12"
      >
        <CustomHeading title="Team" />
        <div className="flex items-center gap-[56px] max-md:gap-6">
          <p className="swiper-prev cursor-pointer max-md:size-10 max-sm:size-5">
            <PrevIcon />
          </p>
          <p className="swiper-next cursor-pointer max-md:size-10 max-sm:size-5">
            <NextIcon />
          </p>
        </div>
      </div>
      <div className="border-y-2 border-solid">
        <div className="max-w-[1140px] w-full mx-auto border-x-2 border-solid border-black max-xl:px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            breakpoints={{
              1024: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="w-full max-w-[1140px] mx-auto border-solid border-black"
          >
            <div className="flex items-center">
              {TEAM_LIST.map((obj, i) => (
                <SwiperSlide key={i}>
                  <div className='bg-center border-s-2 max-xl:border-x-2 border-solid border-black bg-cover py-[56px] max-lg:py-10 max-lg:max-w-full bg-no-repeat bg-[url("/assets/images/webp/team-swiper-bg-img.webp")] w-full max-w-[570px] h-[316px]'>
                    <dv className="h-full w-full">
                      <Image
                        src={obj.profile}
                        alt="profile"
                        width={88}
                        height={88}
                        className="w-full max-w-[88px] pointer-events-none mx-auto"
                      />
                      <h2 className="text-4xl text-center shadows py-4 font-black text-[#70675F] max-lg:text-3xl max-md:text-2xl">
                        {obj.title}
                      </h2>
                      <p className="text-center mx-auto font-normal text-base  max-w-[407px]">
                        {obj.description}
                      </p>
                    </dv>
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

export default Team;