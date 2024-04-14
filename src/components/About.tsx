import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-about bg-cover h-[500px] 2xl:h-[750px] pt-[365px] md:pt-[380px] 2xl:pt-[600px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px]">
      <div className="md:flex justify-between">
        <p className="lowercase font-sans font-medium text-[20px] md:text-[30px] 2xl:text-[50px] text-white">
          Text abouT photo#1
        </p>
        <div className="flex gap-[10px] items-center flex-wrap">
          <Image
            src="/ab-1.jpg"
            alt="inst"
            width={160}
            height={90}
            className="w-[100px] h-[50px] border md:w-[140px] md:h-[70px] 2xl:w-[160px] 2xl:h-[90px]"
          />
          <Image
            src="/ab-2.jpg"
            alt="inst"
            width={140}
            height={70}
            className="w-[70px] h-[35px] border md:w-[100px] md:h-[50px]2xl:w-[140px] 2xl:h-[70px] "
          />
          <Image
            src="/ab-2.jpg"
            alt="inst"
            width={140}
            height={70}
            className="w-[70px] h-[35px] border md:w-[100px] md:h-[50px] 2xl:w-[140px] 2xl:h-[70px]"
          />
          <Image
            src="/ab-3.jpg"
            alt="inst"
            width={140}
            height={70}
            className="w-[70px] h-[35px] border md:w-[100px] md:h-[50px] 2xl:w-[140px] 2xl:h-[70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
