import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="rounded-[7px] flex h-full sm:h-[621px] mb-10 md:mb-[71px]">
      {/* contact form */}
      <div className="flex-1 bg-form-bg rounded-b-[7px] sm:rounded-b-none rounded-t-[7px] lg:rounded-t-none lg:rounded-l-[7px] pr-4 sm:pr-18 xl:pr-[191px] pl-4 sm:pl-[70px] pt-10 sm:pt-[96px] sm:pb-[100px]">
        <ContactForm />
      </div>

      {/* contact image */}
      <div className="hidden lg:block max-w-[400px] xl:max-w-[497px] w-full h-full relative">
        <Image
          src="/contact-img.jpg"
          alt="contact-bg"
          width={1134}
          height={1000}
          className="w-full h-full object-cover rounded-r-[7px]"
        />
        <div className="absolute bottom-[54px] left-1/2 -right-1/2 -translate-x-1/2 w-[39px] h-[50px]">
          <Image
            src="/icons/contact-locator.png"
            alt="contact-bg"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
