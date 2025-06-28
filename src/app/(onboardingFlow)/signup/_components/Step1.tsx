import { CvaButton } from "@/components/Button/CvaButton";
import Heading from "@/components/Onbording/Heading";
import BackArrow from "@/components/svg/BackArrow";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import * as Yup from "yup";
import { useFormik } from "formik";
import StepInput from "@/components/Input/StepInput";
import RightArrow from "@/components/svg/RightArrow";
import { getSession, setSession } from "@/utils/storage";

const Step1 = () => {
  const initData = getSession("signupForm") || {};

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
  });

  const formData = {
    name: "",
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 0;
  const handleBack = () => {
    router.push("/onboarding");
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
    if (initData?.name) formik.setFieldValue("name", initData.name);
  }, []);
  return (
    <Suspense>
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
            heading="Name"
            para={`<span >Enter your name to get started</span> `}
          />
          <div className="mt-8">
            <StepInput
              type="text"
              placeholder="Name of the Person"
              value={formik.values.name}
              name="name"
              formik={formik}
              touchedName={formik.touched.name}
              errorName={formik.errors.name}
            />
            <div className="flex justify-end mt-[50px]">
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
    </Suspense>
  );
};

export default Step1;
