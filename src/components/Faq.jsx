"use client";
import { MinusIcon, PlusIcon } from "@/utils/icons";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";
import { FAQS_LIST } from "@/utils/helper";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        id="faqs"
        className="max-w-[1140px] px-4 mx-auto py-[88px] max-sm:py-10 max-xl:py-16 max-lg:py-14 max-md:py-12"
      >
        <CustomHeading title="Faqs" />
      </div>
      <div className="w-full border-y-2 border-solid border-black px-4">
        <div className="faq-list max-w-[1140px] mx-auto border-l-2 border-r-2">
          {FAQS_LIST.map((item, index) => (
            <div
              key={index}
              className={`faq-item border-b-2 ${
                index === 6 ? "!border-b-0" : ""
              } border-black pl-[30px] pr-11 max-md:px-4 lg:py-8 md:py-5 py-3`}
            >
              <div
                className="faq-header flex gap-5 justify-between cursor-pointer items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="lg:text-2xl md:text-xl font-semibold">{item}</h2>
                <span className="font-semibold lg:text-2xl text-xl transition-transform duration-300 ease-in-out">
                  {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all ease-in-out duration-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && (
                  <p className="lg:mt-4 mt-3 lg:text-base text-sm">
                    NFT stands for “Non-fungible token,” which means that it’s a
                    unique, digital item with blockchain-managed ownership that
                    users can buy, own, and trade. Some NFTs' fundamental
                    function is to be digital art. But they can also offer
                    additional benefits like exclusive access to websites, event
                    tickets, game items, and ownership records for physical
                    objects. Think of it as a unique piece of art that can also
                    work as a “members-only” card. Hustlin' Hardos works like
                    this.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center pt-8 pb-6 text-base font-normal">
          © Hustlin' Hardos {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Faq;
