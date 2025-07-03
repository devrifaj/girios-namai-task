import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background pt-[14px] pb-3">
      <div className="flex-between max-w-[1130px] mx-auto w-full">
        {/* logo */}
        <div className="logo pl-2">
          <Image src="/logo.png" alt="Logo" width={40} height={100} />
        </div>

        {/* header right */}
        <div className="flex items-center gap-[43px]">
          <p className="text-[27px] font-medium tracking-[.26px]">
            +370 648 55 005
          </p>
          <Link
            href="#"
            className="text-[17px] font-semibold tracking-[.45px] border border-[#125F3F] rounded-[14px] flex items-center gap-[14px] pl-[33px] pr-[25px] py-[23px]"
          >
            Rinktis namą{" "}
            <img src="/icons/home-icon.png" className="w-[21px] h-[21px]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
