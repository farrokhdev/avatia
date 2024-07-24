import React from "react";
import Mail from "../../assets/images/icons/mail.svg";

type Props = {
  value?: string;
  placeholder: string;
};

export const CustomTextField = ({ value, placeholder }: Props) => {
  return (
    <div className="w-full border border-gray-300 flex items-center gap-2 p-4 h-[54px] rounded-lg relative z-50">
      <img src={Mail} alt="" />
      <input
        className="text-gray-400 border-none rounded-md"
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
