import React from "react";
import DownArrow from "../svg/DownArrow";
import clsx from "clsx";

type University = {
  id: number;
  label: string;
  value: string;
  touchedName?: boolean;
  errorName?: string;
};
interface dropProps {
  touchedName?: boolean;
  errorName?: string;
  selected: string;
  setSelected: (value: string) => void;
  data?: University[];
  defaultLabel?: string;
}
const UniDropdown = ({
  data,
  selected,
  setSelected,
  touchedName,
  errorName,
  defaultLabel = "Select an option",
}: dropProps) => {
  return (
    <div>
      <div className="relative inline-block w-full">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={clsx(
            " w-full appearance-none bg-black text-white border  border-[rgba(216,218,220,.3)] px-4 py-[18px] pr-10 focus:outline-none focus:border-white",
            touchedName && errorName && "border-red-400"
          )}
        >
          <option value="" disabled>
            {defaultLabel}
          </option>
          {data?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default UniDropdown;
