import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between max-w-[1132px] mx-auto w-full">
        {/* logo */}
        <div className="pl-[9px] pt-[5px]">
          <Image src="/logo.png" alt="Logo" width={40} height={100} />
        </div>

        {/* header right */}
        <div className="flex items-center gap-[41px]">
          <p className="text-[27px] font-medium tracking-[.61px] mt-[7px]">
            +370 648 55 005
          </p>
          {/* link */}
          <Link
            href="#"
            className="text-[17px] font-semibold tracking-[.65px] border border-green-light rounded-[14px] flex items-center gap-[11px] pl-[31px] pr-[28px] pt-[25px] pb-[22px] mt-[13px] mb-[12px]"
          >
            Rinktis namą{" "}
            <Image src="/icons/home-icon.png" width={50} height={50} className="w-[21px] h-[21px]" alt="home-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
