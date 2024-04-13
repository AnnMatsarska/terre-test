import Navbar from './NavBar';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <header className="fixed top-0 z-10 h-[90px] border-b border-white border-opacity-40">
        <div className="w-full h-full w-[340px] md:w-[728px] xl:w-[1360px] mx-auto flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={147}
            height={38}
            priority={true}
            className="w-[147px] h-[38px]"
          />
          <Navbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
