import { CvaButton } from "@/components/Button/CvaButton";
import Heading from "@/components/Onbording/Heading";
import BackArrow from "@/components/svg/BackArrow";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import * as Yup from "yup";
import { useFormik } from "formik";
import RightArrow from "@/components/svg/RightArrow";
import { getSession, setSession } from "@/utils/storage";
import UniDropdown from "@/components/Dropdown/UniDropdown";
import { universities } from "./data";

const Step4 = () => {
  const initData = getSession("signupForm") || {};

  const validationSchema = Yup.object().shape({
    universityId: Yup.string().required("required"),
  });
  console.log("initData", initData);
  const formData = {
    universityId: "",
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 0;
  const handleBack = () => {
    router.push(`/signup?step=${step - 1}`);
  };

  const handleFun = (values: typeof formData) => {
    console.log("OTP submitted", values);
    setSession("signupForm", {
      ...initData,
      ...values,
    });
    router.push(`/signup?step=${step + 1}`);
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: handleFun,
  });

  useEffect(() => {
    if (initData?.universityId)
      formik.setFieldValue("universityId", initData.universityId);
  }, []);
  console.log("formik.values.universityId", formik.values.universityId);
  return (
    <form onSubmit={formik.handleSubmit}>
      <CvaButton
        type="button"
        onClick={() => {
          handleBack();
        }}
        intent="backButton"
        className="px-0 "
      >
        <BackArrow />
      </CvaButton>
      <div>
        <ProgressBar currentStep={step} totalSteps={5} />
      </div>
      <div className=" pt-12">
        <Heading
          heading="Select Uni"
          para={`<span >Please select your university</span> `}
        />
        <div className="mt-8">
          <UniDropdown
            data={universities}
            selected={formik.values.universityId}
            setSelected={(selectedValue) => {
              formik.setFieldValue("universityId", selectedValue);
            }}
            touchedName={formik.touched.universityId}
            errorName={formik.errors.universityId}
            defaultLabel="Select University"
          />

          <div className="flex justify-end mt-[250px] md:mt-[100px]">
            <CvaButton
              type="submit"
              intent="backButton"
              className="px-0 w-[50px] h-[50px] flex justify-center items-center rounded-[100px] bg-white"
            >
              <RightArrow />
            </CvaButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step4;
