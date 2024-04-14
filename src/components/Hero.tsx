import React from 'react';

const Hero = () => {
  return (
    <section className="bg-hero bg-cover h-[750px] pt-[120px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px]">
      <p className="font-arsenal font-normal text-xl text-white text-right relative">
        <span className="border-r border-white border-opacity-40 mr-[19px]"></span>
        125 Water street st. john`s, nl 709 383 2136
      </p>
      <h1 className="text-white font-sans lowercase font-medium text-[120px] mt-[134px]">
        Terre restaurant
      </h1>
      <div className="flex font-arsenal text-white gap-[34px] items-center">
        <div className="uppercase text-black text-[22px] leading-6 font-normal bg-white w-[120px] h-[120px] text-center rounded-full pt-[38px] px-[22px] hover:w-[200px] hover:h-[200px] hover:cursor-custom hover:bg-transparent hover: border hover:border-white hover:text-white hover:pt-[77px] hover:px-[63px] transition-all duration-300">
          About us
        </div>
        <p className="font-normal text-[22px] w-full max-w-[618px]">
          We have beautiful and fun things coming up on the patio this summer.
          Now it only needs to… be summer. To be continued!
        </p>
      </div>
    </section>
  );
};

export default Hero;
