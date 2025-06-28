"use client";
import React, { useState } from "react";
import Parser from "html-react-parser";
import clsx from "clsx";
import { bridgeData } from "./data";

const Bridge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="px-[30px]">
      {bridgeData?.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "text-center text-white mb-4",
              activeIndex === index ? "block" : "hidden"
            )}
          >
            {Parser(item.para)}
          </div>
        );
      })}
      <div className="gap-[6px] flex justify-center items-center mt-6">
        {bridgeData?.map((item, index) => {
          return (
            <button
              key={item?.id}
              className={clsx(
                "w-[35px] h-[4px] rounded-[80px] ",
                activeIndex === index ? "bg-[#D9D9D9]" : "bg-[#D8DADC1A]"
              )}
              onClick={() => setActiveIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Bridge;
