import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between xl:max-w-[1132px] lg:max-w-[960px] md:max-w-[700px] sm:max-w-[580px] max-w-[320px] mx-auto w-full">
        {/* logo */}
        <div className="md:pl-[9px] md:pt-[5px]">
          <Image src="/logo.png" alt="Logo" width={40} height={100} className="md:w-10 w-8" />
        </div>

        {/* header right */}
        <div className="flex items-center gap-6 lg:gap-[41px]">
          <p className="hidden sm:block text-xl md:text-[27px] font-medium tracking-[.61px] mt-[7px]">
            +370 648 55 005
          </p>
          {/* link */}
          <Link
            href="#"
            className="md:text-[17px] font-semibold tracking-[.65px] border border-green-light rounded-[10px] md:rounded-[14px] flex items-center gap-[11px] pl-[31px] pr-[28px] pt-3 md:pt-5 lg:pt-[25px] pb-3 md:pb-5 lg:pb-[22px] mt-[13px] mb-[12px]"
          >
            Rinktis namą{" "}
            <Image src="/icons/home-icon.png" width={50} height={50} className="w-4 md:w-[21px] h-4 md:h-[21px]" alt="home-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
