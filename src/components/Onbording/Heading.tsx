import React from "react";
import Parser from "html-react-parser";

interface HeadingProps {
  heading: string;
  para: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, para }) => {
  return (
    <div>
      <h1 className="text-white text-[32px] font-bold">{heading}</h1>
      <p className="text-white text-base font-normal mt-3">{Parser(para)}</p>
    </div>
  );
};

export default Heading;
