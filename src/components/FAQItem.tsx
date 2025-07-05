"use client";
import { MinusIcon, PlusIcon } from "@/icons";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left pt-[4px] pb-[5px] pl-3 pr-2"
      >
        <span className="text-lg font-medium inline-block tracking-[.2px] ">
          {question}
        </span>
        <div className="text-border-2 rounded-full p-[4px] border-border-2 border">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      {isOpen && (
        <div className="pb-4 px-4 text-base text-secondary-black">{answer}</div>
      )}
    </div>
  );
};

export default FAQItem;
