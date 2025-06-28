import Image from "next/image";
import React from "react";
import Bridge from "./Bridge";
import { CvaButton } from "@/components/Button/CvaButton";
import WhiteLine from "@/components/Line/WhiteLine";

type MobileProps = {
  handleSignIn: () => void;
  handleCreateAccount: () => void;
};

const Mobile: React.FC<MobileProps> = ({
  handleSignIn,
  handleCreateAccount,
}) => {
  return (
    <div className="block md:hidden ">
      <div className="flex justify-center">
        <div className="pt-10 w-[423px] h-[423px]">
          <Image
            src="/assests/onboarding/onboarding_img.png"
            alt="Onboarding Image"
            width={423}
            height={423}
            className="w-full h-[423px] object-cover"
          />
        </div>
      </div>
      <div>
        <Bridge />
      </div>
      <div className="mt-[60px] px-5 flex flex-col items-center">
        <CvaButton
          onClick={() => {
            handleSignIn();
          }}
          className="max-w-[390px] "
        >
          Sign In
        </CvaButton>
        <CvaButton
          intent="secondary"
          onClick={() => {
            handleCreateAccount();
          }}
          className="mt-6 max-w-[390px]"
        >
          Create Account
        </CvaButton>
      </div>

      <div className="w-full  flex flex-col justify-center items-center mt-8 pb-3">
        <p className="text-center max-w-[215px] text-sm text-white">
          Join <span className="text-base font-semibold">10K+</span> Students &
          Alumni Around the Globe
        </p>
        <div>
          <WhiteLine />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
