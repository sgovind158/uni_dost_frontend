"use client";
import { CvaButton } from "@/components/Button/CvaButton";
import CustomPhoneInput2 from "@/components/Input/CustomPhoneInput2";
import Heading from "@/components/Onbording/Heading";
import BackArrow from "@/components/svg/BackArrow";
import { usePhoneValidation } from "@/customHooks/usePhoneValidation";
import { msg } from "@/utils/message";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

interface MobileProps {
  setPage: (page: string) => void;
}

const Mobile: React.FC<MobileProps> = ({ setPage }) => {
  const [phone, setPhone] = React.useState("");
  const router = useRouter();
  const { isPhoneValid } = usePhoneValidation();
  const handleBack = () => {
    router.push("/onboarding");
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("phone", phone);
    e?.preventDefault();
    setPage("otp");
    return;
    if (!isPhoneValid(phone)) {
      toast.error(msg?.invalidPhone);
      return;
    }
  };
  return (
    <div className="bg-black rounded-2xl max-w-[390px] sm:w-[390px] md:min-h-[80vh]">
      <form onSubmit={handleContinue}>
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
            heading="Let’s get you set up!"
            para="Join the Unidost community and unlock the best part of campus life"
          />
          <div className="mt-8">
            <CustomPhoneInput2 value={phone} setValue={setPhone} />
          </div>

          <CvaButton type="submit" className="mt-14">
            Continue
          </CvaButton>
        </div>
      </form>
    </div>
  );
};

export default Mobile;
