import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="rounded-[7px] flex h-[621px] mb-[71px]">
      {/* contact form */}
      <div className="flex-1 bg-form-bg rounded-l-[7px] pr-[191px] pl-[70px] pt-[96px] pb-[100px]">
        <ContactForm />
      </div>

      {/* contact image */}
      <div className="max-w-[497px] w-full h-full relative">
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
