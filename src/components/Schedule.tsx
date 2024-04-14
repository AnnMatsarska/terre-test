import React from 'react';
import Image from 'next/image';

const Schedule = () => {
  return (
    <section className="w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px] pt-[60px] md:pt-[100px] 2xl:pt-[90px]">
      <p className="lowercase font-montez font-normal text-secondary-green text-[17px] md:text-[20px] 2xl:text-[22px]">
        Work time
      </p>
      <p className="lowercase font-medium font-sans text-[40px] md:text-[50px] 2xl:text-[60px]">
        RESTAURANT
      </p>
      <div className="md:flex items-center gap-[30px] mb-[30px]">
        <div className="flex items-center gap-[12px] mb-[15px] md:mb-[0]">
          <Image
            src="/clock.svg"
            alt="clock"
            width={40}
            height={40}
            className="w-[40px] h-[40px]  md:w-[50px] md:h-[50px] "
          />
          <p className="lowercase font-arsenal font-normal text-[17px] md:text-[20px] 2xl:text-[22px]">
            <span className="lowercase font-bold">friday: </span>8AM – 11:30AM
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <Image
            src="/clock.svg"
            alt="clock"
            width={40}
            height={40}
            className="w-[40px] h-[40px]  md:w-[50px] md:h-[50px]"
          />
          <p className="lowercase font-arsenal font-normal text-[17px] md:text-[20px] 2xl:text-[22px]">
            <span className="lowercase font-bold">Saturday & Sunday: </span>
            9AM – 2:00PM
          </p>
        </div>
      </div>
      <Image
        src="/meal.jpg"
        alt="meal"
        width={360}
        height={240}
        className="w-[360px] h-[240px]  md:w-[50px] md:h-[50px] "
      />
    </section>
  );
};

export default Schedule;
