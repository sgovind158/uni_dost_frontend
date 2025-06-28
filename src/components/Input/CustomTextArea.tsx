import React, { ChangeEvent } from "react";

interface CustomTextAreaProps {
  type?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  req?: boolean;
  value: string;
}
const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder = "",
  handleChange,
  value,
}) => {
  const handleFun = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
  };
  return (
    <textarea
      value={value}
      rows={4}
      placeholder={placeholder}
      className="p-3 rounded border border-white text-white placeholder:text-white"
      onChange={(e) => handleFun(e)}
    ></textarea>
  );
};

export default CustomTextArea;
