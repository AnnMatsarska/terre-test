import React from 'react';
import Image from 'next/image';

const History = () => {
  return (
    <>
      <section className="pt-[37px] md:t-[67px] 2xl:pt-[100px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px] relative">
        <div className="2xl:flex items-center justify-between">
          <p className="font-montez text-secondary-green font-normal text-[17px] md:text-[20px] 2xl:text-[22px] mb-[20px] 2xl:order-2">
            We could not be prouder to be.
          </p>
          <h2 className="lowercase font-sans font-medium text-[40px] md:text-[50px] 2xl:text-[60px] mb-[20px] md:mb-[30px] 2xl:order-1">
            Our history
          </h2>
        </div>
        <div className="2xl:ml-[579px]">
          <p className="font-arsenal font-normal text-[14px] md:text-[17px] 2xl:text-[20px] mb-[15px]">
            It only took one visit to Newfoundland & Labrador for Chef Matthew
            Swift to pack-up everything he owned and make St. John’s his new
            home.
          </p>
          <p className="font-arsenal font-normal text-[14px] md:text-[17px] 2xl:text-[20px] mb-[15px]">
            Heading kitchens in Ontario and Quebec restaurants, including
            Montreal institution Joe Beef, for two decades was the perfect
            primer for Matthew to break out on his own. Inspired by the
            provinces people, food, produce, history and jaw-dropping
            landscapes, Matthew and his incredible team have created a welcoming
            comfortable space that reflects and respects it’s environment.
          </p>
          <p className="font-arsenal font-normal text-[14px] md:text-[17px] 2xl:text-[20px] mb-[15px] md:w-[403px]2xl:w-0">
            In 2021, Terre was selected as one of ‘Canada’s Best New
            Restaurants’ by enRoute Magazine’s expert food panel. We could not
            be prouder to be part of this prestigious list.
          </p>
          <button
            type="button"
            className="lowercase border-[2px] border-secondary-green w-[340px] max-w-[100%] py-[17px] font-arsenal font-bold text-[14px] md:text-[17px] 2xl:text-[20px] mt-[13px] hover:bg-secondary-green hover:text-white transition-all duration-300 hover:cursor-custom mb-[12px] 2xl:ml-[440px]"
          >
            Read the full enRoute story
          </button>
        </div>
      </section>
      <div className="bg-historymob bg-cover md:bg-center md:bg-historytab 2xl:bg-history pb-[28px] md:pb-[0px] 2xl:h-[222px]">
        <Image
          src="/his-img-2.png"
          alt="inst"
          width={360}
          height={400}
          className="hidden md:block 2xl:absolute 2xl:left-[590px] 2xl:top-[1250px] 2xl:z-10"
        />
        <Image
          src="/his-img.png"
          alt="inst"
          width={360}
          height={400}
          className="md:absolute z-0 right-12 md:top-[940px] md:left-[380px] tab:left-[600px] desk:left-[900px] desk:top-[900px] 2xl:left-[150px] 2xl:top-[1000px] 2xl:w-[500px] 2xl:h-[550px]"
        />
      </div>
    </>
  );
};

export default History;
