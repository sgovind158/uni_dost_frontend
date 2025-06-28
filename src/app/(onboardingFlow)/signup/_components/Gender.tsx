import React from "react";
import { genderData } from "./data";
import Image from "next/image";
import clsx from "clsx";

interface GenderProps {
  handleValue: (value: string) => void;
  activeGenderValue: string;
}

const Gender: React.FC<GenderProps> = ({ handleValue, activeGenderValue }) => {
  interface GenderItem {
    id: number;
    img: string;
    name: string;
    value: string;
  }

  const handleGender = (item: GenderItem): void => {
    activeGenderValue = item?.value;
    handleValue(item?.value);
  };
  return (
    <div className="flex gap-4 justify-center items-center">
      {genderData?.map((item) => {
        const isActive = activeGenderValue === item?.value;
        return (
          <div
            key={item?.id}
            className="relative p-[2px] rounded-[20px] overflow-hidden"
          >
            <div
              className={clsx(
                "",
                isActive &&
                  "absolute inset-0 bg-gradient-to-r from-[#3EF0C2] via-[#8051E1] via-[#E04970] to-[#E15535]"
              )}
            ></div>
            <div
              className={clsx(
                "relative bg-black rounded-[20px] flex flex-col items-center justify-center px-5 py-3",
                !isActive && "border border-[rgba(216,218,220,0.3)]"
              )}
            >
              <button
                type="button"
                onClick={() => handleGender(item)}
                key={item?.id}
                className="cursor-pointer"
              >
                <Image
                  src={item?.img}
                  alt={item?.name}
                  width={65}
                  height={65}
                  className="w-[65px] h-[65px] "
                />
                <p className="text-[12px] font-medium">{item?.name}</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gender;
