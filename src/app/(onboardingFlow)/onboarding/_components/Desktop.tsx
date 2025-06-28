import WhiteLine from "@/components/Line/WhiteLine";
import Image from "next/image";
import React from "react";
import Bridge from "./Bridge";
import { CvaButton } from "@/components/Button/CvaButton";

interface DesktopProps {
  handleSignIn: () => void;
  handleCreateAccount: () => void;
}

const Desktop: React.FC<DesktopProps> = ({
  handleSignIn,
  handleCreateAccount,
}) => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center min-h-[100vh] items-center md:gap-[40px] lg:gap-[100px]">
        <div className="w-[423px] ">
          <div className="pt-10 w-[423px] h-[423px]">
            <Image
              src="/assests/onboarding/onboarding_img.png"
              alt="Onboarding Image"
              width={423}
              height={423}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full  flex flex-col justify-center items-center mt-8 pb-3">
            <p className="text-center max-w-[215px] text-sm text-white">
              Join <span className="text-base font-semibold">10K+</span>{" "}
              Students & Alumni Around the Globe
            </p>
            <div>
              <WhiteLine />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Bridge />
          </div>
          <div className="mt-[60px] px-5">
            <CvaButton
              onClick={() => {
                handleSignIn();
              }}
              className=" w-full"
            >
              Sign In
            </CvaButton>
            <CvaButton
              intent="secondary"
              onClick={() => {
                handleCreateAccount();
              }}
              className="mt-6 "
            >
              Create Account
            </CvaButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
