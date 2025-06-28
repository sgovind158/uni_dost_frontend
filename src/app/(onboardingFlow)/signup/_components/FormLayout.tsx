"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black rounded-2xl w-full md:w-[390px] md:min-h-[80vh]">
      <div className="relative min-h-[100vh] md:min-h-[80vh]">
        <Image
          className="absolute right-0 "
          src={"/assests/splash/loading_down_img.svg"}
          alt="UNI DOST Logo"
          width={250}
          height={340}
        />
        <Image
          className="absolute bottom-0"
          src={"/assests/splash/loading_up_img.svg"}
          alt="UNI DOST Logo Text"
          width={250}
          height={340}
        />

        <div className="flex justify-center pt-[0px] md:pt-0 px-5 ">
          <div className="relative z-1 w-full xs:w-[390px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
