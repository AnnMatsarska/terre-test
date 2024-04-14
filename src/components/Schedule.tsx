import React from 'react';
import Image from 'next/image';

const Schedule = () => {
  return (
    <section className="bg-schedulemob bg-cover 2xl:bg-schedule w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px] pt-[60px] md:pt-[100px] 2xl:pt-[90px] md:pb-[70px] 2xl:pb-[74px]">
      <div className="2xl:flex gap-[71px] mb-[60px] md:mb-[100px] 2xl:mb-[0px]">
        <div className="2xl:order-2 2xl:mt-[50px]">
          <p className="lowercase font-montez font-normal text-secondary-green text-[17px] md:text-[20px] 2xl:text-[22px]">
            Work time
          </p>
          <p className="lowercase font-medium font-sans text-[40px] md:text-[50px] 2xl:text-[60px] mb-[10px]">
            RESTAURANT
          </p>
          <div className="md:flex items-center gap-[30px] mb-[30px] 2xl:block">
            <div className="flex items-center gap-[12px] mb-[15px] md:mb-[0px]  2xl:mb-[30px]">
              <Image
                src="/clock.svg"
                alt="clock"
                width={40}
                height={40}
                className="w-[40px] h-[40px]  md:w-[50px] md:h-[50px] "
              />
              <p className="lowercase font-arsenal font-normal text-[17px] md:text-[20px] 2xl:text-[22px]">
                <span className="lowercase font-bold">friday: </span>
                8AM – 11:30AM
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
        </div>
        <Image
          src="/meal.jpg"
          alt="meal"
          width={360}
          height={240}
          className="w-[360px] h-[240px]  md:w-[728px] md:h-[400px] 2xl:w-[650px] md:h-[500px] 2xl:order-1"
        />
      </div>
      <div className="2xl:flex justify-between">
        <div className="2xl:mt-[244px]">
          <p className="lowercase font-montez font-normal text-secondary-green text-[17px] md:text-[20px] 2xl:text-[22px]">
            Work time
          </p>
          <p className="lowercase font-medium font-sans text-[40px] md:text-[50px] 2xl:text-[60px] mb-[10px]">
            CAFÉ
          </p>
          <div className="flex items-center gap-[12px] mb-[10px] md:mb-[30px] 2xl:mb-[0px]">
            <Image
              src="/clock.svg"
              alt="clock"
              width={40}
              height={40}
              className="w-[40px] h-[40px]  md:w-[50px] md:h-[50px]"
            />
            <p className="lowercase font-arsenal font-normal text-[17px] md:text-[20px] 2xl:text-[22px] w-[200px] md:w-[100%]">
              <span className="lowercase font-bold">Breakfast & Lunch: </span>
              Every day from 8AM – 3PM
            </p>
          </div>
        </div>
        <Image
          src="/guest.jpg"
          alt="meal"
          width={360}
          height={240}
          className="w-[360px] max-w-[100%] h-[240px]  md:w-[728px]  md:h-[400px] 2xl:w-[650px] md:h-[500px] "
        />
      </div>
    </section>
  );
};

export default Schedule;
