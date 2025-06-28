import React, { Suspense } from "react";
import SignupFlow from "./_components/SignupFlow";

const Signup = () => {
  // Define RootState type to match your Redux store structure
  return (
    <Suspense>
      <SignupFlow />
    </Suspense>
  );
};

export default Signup;
