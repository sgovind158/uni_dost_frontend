"use client";
import { CvaButton } from "@/components/Button/CvaButton";
import Heading from "@/components/Onbording/Heading";
import BackArrow from "@/components/svg/BackArrow";
import { cn } from "@/utils/cva";
import { OTPInput } from "input-otp";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OTPMobile = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");

  const handleBack = () => {
    router.push("/onboarding");
  };

  const submitOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log("OTP submitted");
  };

  return (
    <div className="bg-black rounded-2xl max-w-[390px] sm:w-[390px] md:min-h-[80vh]">
      <form onSubmit={submitOtp}>
        <CvaButton
          type="button"
          onClick={() => {
            handleBack();
          }}
          intent="backButton"
          className="px-0 sm:px-[20px] "
        >
          <BackArrow />
        </CvaButton>
        <div className="sm:px-5 pt-8">
          <Heading
            heading="Enter code"
            para={`<span className="text-[#747474]">We’ve sent an SMS with an activation code to your phone</span> <span className="text-white">+91 9679374048</span>`}
          />
          <div className="w-full mt-8">
            <OTPInput
              maxLength={6}
              autoFocus
              value={OTP}
              onChange={setOTP}
              containerClassName="group flex items-center justify-center has-[:disabled]:opacity-30 "
              render={({ slots }) => (
                <>
                  <div className="flex gap-[9px]">
                    {slots?.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default OTPMobile;

interface SlotProps {
  char: string | null;
  isActive: boolean;
  hasFakeCaret: boolean;
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative w-[36px] h-[36px] xs:w-[50px] xs:h-[50px]  text-base  text-white",
        "flex items-center justify-center gap-[9px]",
        "transition-all duration-300",
        "border border-[#484a4b] rounded-[10px]",
        "group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20",
        "outline outline-0 outline-accent-foreground/20",
        { "outline-1 outline-accent-foreground": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

// You can emulate a fake textbox caret!
function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-4 xs:h-8 bg-black" />
    </div>
  );
}
