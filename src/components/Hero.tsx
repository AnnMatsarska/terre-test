import React from 'react';

const Hero = () => {
  return (
    <section className="bg-hero bg-cover h-[500px] md:h-[535px] 2xl:h-[750px] pt-[120px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px]">
      <p className="font-arsenal font-normal text-[14px] md:text-[17px] 2xl:text-[20px] text-white text-right relative">
        <span className="border-r border-white border-opacity-40 mr-[19px]"></span>
        125 Water street st. john`s, nl 709 383 2136
      </p>
      <h1 className="text-white font-sans lowercase font-medium mt-[77px] md:mt-[100px] 2xl:mt-[134px] text-[50px] md:text-[70px] 2xl:text-[120px] mob:w-[300px] leading-none mb-5 md:mb-10 2xl:mb-11">
        Terre restaurant
      </h1>
      <div className="flex justify-between ">
        <div className="flex font-arsenal text-white gap-[34px] items-center">
          <div className="uppercase text-black text-[14px] md:text-[17px] 2xl:text-[22px] md:leading-6 font-normal bg-white w-[70px] h-[70px] md:w-[80px] md:h-[80px] 2xl:w-[120px] 2xl:h-[120px] text-center rounded-full pt-[16px] px-[10px] md:pt-[20px] md:px-[6px] 2xl:pt-[38px] 2xl:px-[22px]  md:hover:w-[133px] md:hover:h-[133px] 2xl:hover:h-[200px] 2xl:hover:w-[200px] hover:cursor-custom hover:bg-transparent hover: border hover:border-white hover:text-white  md:hover:pt-[45px] md:hover:px-[35px] 2xl:hover:pt-[77px] 2xl:hover:px-[63px] transition-all duration-300">
            About us
          </div>
          <p className="font-normal text-[14px] md:text-[17px] 2xl:text-[22px] w-full max-w-[618px]">
            We have beautiful and fun things coming up on the patio this summer.
            Now it only needs to… be summer. To be continued!
          </p>
        </div>
        <div className="font-arsenal font-normal text-white">
          <div className="flex items-center justify-end">
            <div className="border-l-[26px] md:border-l-[30px] border-white h-[1px] opacity-60"></div>
            <p className="text-[14px] md:text-[17px] 2xl:text-[20px] opacity-60 pl-4">
              01
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="border-l-[40px] md:border-l-[50px] border-white h-[1px] "></div>
            <p className="text-[17px] md:text-[20px] 2xl:text-[24px] pl-4">
              02
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="border-l-[26px] md:border-l-[30px]  border-white h-[1px] opacity-60"></div>
            <p className="text-[14px] md:text-[17px] 2xl:text-[20px] opacity-60 pl-4">
              03
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
