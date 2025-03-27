import React from 'react'
import Header from './common/Header'
import Image from 'next/image';
const Hero = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1920px] mx-auto ">
        <div>
          <h1 className="font-normal px-4 text-center text-[157px] ff-moderfb leading-[100%] max-xl:text-[100px] max-lg:text-[80px] max-md:text-6xl max-sm:text-4xl pt-[25px]">
            THE HUSTLIN’ HARDOS.
          </h1>
          <Image
            src="/assets/images/webp/office-img.webp"
            alt="office-img"
            width={1920}
            height={476}
            className="w-full max-w-[1920px] mx-auto pointer-events-none"
          />
          <h2 className='text-7xl px-4 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl font-normal max-w-[1140px] mx-auto py-16 leading-[140%] max-md:py-14 max-sm:py-10'>
            “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated
            NFT project of 2022"
          </h2>
        </div>
      </div>
    </>
  );
}

export default Hero