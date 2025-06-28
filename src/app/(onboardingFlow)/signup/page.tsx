"use client";
import React, { useState } from "react";
import Mobile from "./_components/Mobile";
import OTPMobile from "./_components/OTPMobile";

const Signup = () => {
  const [page, setPage] = useState("signup");
  return (
    <div className="min-h-screen flex md:items-center justify-center lg:px-16 px-5 sm:px-6 md:bg-[#151515] gap-6">
      <div className="w-[60%] md:block hidden">
        <h1 className="text-5xl font-bold text-center">Welcome to unidost</h1>
        <p className="text-xl px-4 text-center mt-4">
          Bridge the campus gap. Meet minds across colleges with Unidost
        </p>
      </div>
      <div>
        <div className="mt-10 md:mt-0">
          {page === "signup" ? <Mobile setPage={setPage} /> : <OTPMobile />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
