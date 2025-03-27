import React from 'react'
import Image from 'next/image';
const EditorHardo = () => {
  return (
    <div className="border-y-2 border-solid border-black max-xl:px-4">
      <div className="w-full flex items-center gap-[91px] max-xl:py-5 max-md:gap-4 max-md:flex-wrap max-md:mx-auto max-w-[1140px] mx-auto border-x-2 border-solid border-black">
        <div className="w-full max-w-[480px] ps-[43px] max-xl:ps-5 max-sm:ps-4 max-xl:px-5 max-sm:px-4">
          <p className="font-normal text-base">
            March 1, 2022 by Editor Hardo
          </p>
          <p className="font-normal text-base  pt-4">
            Hustlin' Hardos is a collection of 9,999 NFT characters on the
            Ethereum Blockchain, inspired by the business/finance world, hustler
            culture and web3 aesthetics. Each Hustlin' Hardo is a completely
            original and unique combination of hundreds of potential attributes
            such as luxury watches, clothing, or accessories - all with provable
            degrees of rarity. The collection features truly unique and powerful
            artwork, while offering its holders first-of-its-kind utility. Your
            Huslin’ Hardo NFT is your gateway to The Boardroom, one of the most
            rewarding and engaging online communities
          </p>
          <p className='font-normal text-base pt-4 cursor-pointer'>Read More...</p>
              </div>
              <div className='w-full max-w-[570px]'>
                  <Image src='/assets/images/webp/sad-employ.webp' alt='sad-employ' width={570} height={572} className='w-full max-w-[570px] pointer-events-none'/>
              </div>
      </div>
    </div>
  );
}

export default EditorHardo