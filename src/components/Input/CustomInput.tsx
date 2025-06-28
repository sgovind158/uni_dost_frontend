import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  req?: boolean;
  value?: string | number | undefined;
}
const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  placeholder = "",
  handleChange,
  req = false,
  value,
}) => {
  const handleFun = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  return (
    <input
      value={value}
      required={req ? req : false}
      type={type}
      placeholder={placeholder}
      className="p-3 rounded border border-white text-white placeholder:text-white"
      onChange={(e) => handleFun(e)}
    />
  );
};

export default CustomInput;
