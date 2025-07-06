import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wrapper mb-10 md:mb-20 lg:mb-[136px]">
      {/* top */}
      <div className="border-y border-border-7 flex justify-between items-center pt-[26px] pb-[22px] sm:pl-[48px] sm:pr-[54px]">
        {/* logo */}
        <div className="flex items-center gap-[15px]">
          <div className="w-[28px] h-[36px] ">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[16px] md:text-[21px] font-semibold">Girios Namai</span>
        </div>

        {/* tel number */}
        <p className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[38px] font-medium tracking-[1.1px]">
          +370 648 55 005
        </p>
      </div>

      {/* copyright */}
      <div className="flex justify-between flex-col-reverse md:flex-row gap-4 md:gap-0 items-center pt-[42px]">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[22px]">
          <p className="footer-text tracking-[1.3px] text-center sm:text-left">
            © {new Date().getFullYear()} GIRIOS NAMAI. Visos teisės saugomos
          </p>
          <Link href="#" className="underline footer-text tracking-[1.2px]">
            PRIVATUMO POLITIKA
          </Link>
        </div>

        <p className="footer-text tracking-[1.2px]">
          Projektą vysto: GIRIOS NAMAI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
