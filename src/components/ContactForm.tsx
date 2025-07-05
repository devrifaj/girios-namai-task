import { ArrowRightIcon } from "@/icons";
import Link from "next/link";

const ContactForm = () => {
  return (
    <form className="text-white">
      <div className="flex flex-col gap-[40.35px] mb-[52px] pl-[11px]">
        <input type="text" placeholder="Vardas *" className="input-form" />
        <input type="text" placeholder="El. paštas *" className="input-form" />
        <input
          type="text"
          placeholder="Telefono nr. *"
          className="input-form"
        />
        <input
          type="text"
          placeholder="Jus dominantis klausimas"
          className="input-form"
        />
      </div>

      {/* checkbox */}
      <div className="flex items-center gap-[22px] mb-[51px] pl-[11px]">
        <input
          type="checkbox"
          className="w-[27px] h-6 border border-border-6 accent-black bg-black"
        />
        <p className="text-[17px] font-medium">
          Susipažinau su{" "}
          <Link href="#" className="underline inline-block">
            Privatumo politika *
          </Link>
        </p>
      </div>

      <button
        type="submit"
        className="flex items-center gap-[15px] text-[17px] font-medium uppercase text-black bg-white rounded-[5px] py-[16.5px] pl-[95px] tracking-[0.8px] pr-[66px] cursor-pointer"
      >
        Siųsti <ArrowRightIcon />
      </button>
    </form>
  );
};

export default ContactForm;
