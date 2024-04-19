import Navbar from './NavBar';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px] pt-[26px]  top-0 z-10 h-[90px] flex flex-col  justify-between absolute">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={147}
          height={38}
          priority={true}
          className="w-[120px] h-7 md:w-[130px] md:h-8 2xl:w-[147px] 2xl:h-9"
        />
        <Navbar />
      </div>
      <div className="w-full mt-6 border-b border-white border-opacity-40"></div>
    </header>
  );
};

export default Header;
