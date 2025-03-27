import React from 'react'

const CustomHeading = ({ title, myClass }) => {
  return (
    <h2
      className={`text-[80px] max-xl:text-6xl max-lg:text-5xl  shadows max-md:text-4xl max-sm:text-3xl font-normal ${myClass}`}
    >
      {title}
    </h2>
  );
};

export default CustomHeading