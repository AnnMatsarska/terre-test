import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const hoverStyle = {
    fill: '#FF5733', // Change fill color on hover
  };
  return (
    <section className="bg-black pt-[60px] pt-[54px] md:pt-[70px] 2xl:pt-[80px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px] pb-[65px]">
      <div className="2xl:flex gap-[210px]">
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={34}
          priority={true}
          className="w-[130px] h-[34px] md:w-[240px] md:h-[62px] block  mx-auto mb-[25px] md:mb-[40px]"
        />
        <div className="flex flex-wrap gap-[30px] justify-center md:justify-between ">
          <div className="w-[144px] 2xl:w-[206px] mb-8">
            <p className="uppercase font-arsenal font-bold text-[17px] md:text-[22px] text-white mb-[10px] md:mb-[20px]">
              sitemap
            </p>
            <p className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white mb-[8px] hover:cursor-custom hover:underline">
              Menu
            </p>
            <p className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white hover:cursor-custom hover:underline">
              Book now
            </p>
          </div>
          <div className="w-[144px] 2xl:w-[206px] mb-8">
            <p className="uppercase font-arsenal font-bold text-[17px] md:text-[22px] text-white mb-[10px] md:mb-[20px]">
              Address
            </p>
            <p className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white ">
              125 water streetst. john’s, nl a1c 5x4
            </p>
          </div>
          <div className="w-[144px] 2xl:w-[206px] mb-8">
            <p className="uppercase font-arsenal font-bold text-[17px] md:text-[22px] text-white mb-[10px] md:mb-[20px]">
              Contacts
            </p>
            <a
              href="tel:+7093832136"
              className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white block mb-2"
            >
              +7 09 383 2136
            </a>
            <a
              href="mailto:info@terrerestaurant.com"
              className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white "
            >
              info@terrerestaurant.com
            </a>
          </div>
          <div className="w-[144px] 2xl:w-[206px] mb-8">
            <p className="uppercase font-arsenal font-bold text-[17px] md:text-[22px] text-white mb-[10px] md:mb-[20px] hover:cursor-custom hover:underline">
              Other
            </p>
            <p className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white hover:cursor-custom hover:underline">
              Privacy
            </p>
            <p className="lowercase font-arsenal font-normal text-[14px] md:text-[20px] text-white hover:cursor-custom hover:underline">
              Terms
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-[20px] justify-center 2xl:justify-start 2xl:mt-[-60px]">
        <Image
          src="/inst.svg"
          alt="inst"
          width={40}
          height={40}
          priority={true}
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] block "
        />
        <Image
          src="/fb.svg"
          alt="fb"
          width={40}
          height={40}
          priority={true}
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] block "
        />
      </div>
    </section>
  );
};

export default Footer;
