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
import { coursesData } from "./data";
import YOG from "./YOG";

const Step5 = () => {
  const initData = getSession("signupForm") || {};

  const validationSchema = Yup.object().shape({
    courseId: Yup.string().required("required"),
    yearOfGraduation: Yup.string().required("required"),
  });
  console.log("initData", initData);
  const formData = {
    courseId: "",
    yearOfGraduation: "",
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
    router.push(`/signup?success=true`);
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: handleFun,
  });

  useEffect(() => {
    if (initData?.courseId) formik.setFieldValue("courseId", initData.courseId);
    if (initData?.yearOfGraduation)
      formik.setFieldValue("yearOfGraduation", initData.yearOfGraduation);
  }, []);
  console.log("formik.values.courseId", formik.values.courseId);
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
        <ProgressBar currentStep={step} totalSteps={6} />
      </div>
      <div className=" pt-12">
        <Heading
          heading="Select Course"
          para={`<span >Please select your course</span> `}
        />
        <div className="mt-8">
          <UniDropdown
            data={coursesData}
            selected={formik.values.courseId}
            setSelected={(selectedValue) => {
              formik.setFieldValue("courseId", selectedValue);
            }}
            touchedName={formik.touched.courseId}
            errorName={formik.errors.courseId}
            defaultLabel="Course"
          />
          <div className="mt-4">
            <YOG
              value={
                formik.values.yearOfGraduation
                  ? new Date(formik.values.yearOfGraduation)
                  : null
              }
              onChange={(date) => {
                formik.setFieldValue(
                  "yearOfGraduation",
                  date ? date.toISOString() : ""
                );
              }}
              touchedName={formik.touched.yearOfGraduation}
              errorName={formik.errors.yearOfGraduation}
            />
          </div>
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

export default Step5;
