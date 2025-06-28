"use client";
import DownArrow from "@/components/svg/DownArrow";
import clsx from "clsx";
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DOBProps {
  touchedName?: boolean;
  errorName?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}
const YOG = ({ value, onChange, touchedName, errorName }: DOBProps) => {
  //   const [startDate, setStartDate] = useState<Date | null>();

  interface CustomInputProps {
    value?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }

  const ExampleCustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick, className }, ref) => (
      <button type="button" className={className} onClick={onClick} ref={ref}>
        <span>{value ? value : "Year of Graduation"}</span> <DownArrow />
      </button>
    )
  );
  ExampleCustomInput.displayName = "ExampleCustomInput";
  console.log("value", value);
  return (
    <div className="custom-datepicker w-full">
      <DatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        className="w-full"
        maxDate={new Date()}
        showYearPicker
        showYearDropdown
        dateFormat="yyyy"
        dropdownMode="select"
        customInput={
          <ExampleCustomInput
            className={clsx(
              " w-full flex justify-between items-center px-4 py-[18px] border border-[rgba(216,218,220,.3)]",
              touchedName && errorName && "border-red-400"
            )}
          />
        }
      />
    </div>
  );
};

export default YOG;
