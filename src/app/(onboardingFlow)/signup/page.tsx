"use client";
import React, { useState } from "react";
import Mobile from "./_components/Mobile";
import OTPMobile from "./_components/OTPMobile";
import { useSearchParams } from "next/navigation";
import FormLayout from "./_components/FormLayout";
import Step1 from "./_components/Step1";
import Step2 from "./_components/Step2";
import Step3 from "./_components/Step3";
import Step4 from "./_components/Step4";
import Step5 from "./_components/Step5";
import clsx from "clsx";
import Loader from "./_components/Loader";

const Signup = () => {
  const [page, setPage] = useState("signup");
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 0;
  const success = searchParams.get("success") || false;

  // Define RootState type to match your Redux store structure
  console.log("Current step:", step);
  console.log("success", success);
  console.log("onboarding page:", page);
  return (
    <div
      className={clsx(
        "min-h-screen flex md:items-center justify-center lg:px-16  md:bg-[#151515] gap-6",
        step > 0 ? "md:px-6 px-0" : "px-5 sm:px-6"
      )}
    >
      <div className="md:w-[60%] md:block hidden">
        <h1 className="text-5xl font-bold text-center">Welcome to unidost</h1>
        <p className="text-xl px-4 text-center mt-4">
          Bridge the campus gap. Meet minds across colleges with Unidost
        </p>
      </div>
      <div className={clsx(step > 0 && "w-full md:w-auto")}>
        <div className={clsx(" md:mt-0", step == 0 && "mt-10")}>
          {success ? (
            <FormLayout>
              <Loader />
            </FormLayout>
          ) : step === 0 && page === "signup" ? (
            <Mobile setPage={setPage} />
          ) : page === "otp" ? (
            <OTPMobile page={page} setPage={setPage} />
          ) : step > 0 ? (
            <FormLayout>
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
              {step === 5 && <Step5 />}
            </FormLayout>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;
