"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Desktop from "./_components/Desktop";
import Mobile from "./_components/Mobile";

const Onboarding = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // Logic for sign-in can be added here
    console.log("Sign In button clicked");
    router.push("/login");
  };

  const handleCreateAccount = () => {
    // Logic for creating an account can be added here
    console.log("Create Account button clicked");
    router.push("/signup");
  };
  return (
    <div className=" bg-black">
      {/* desktop view */}
      <Desktop
        handleSignIn={handleSignIn}
        handleCreateAccount={handleCreateAccount}
      />

      {/* mobile view */}
      <Mobile
        handleSignIn={handleSignIn}
        handleCreateAccount={handleCreateAccount}
      />
    </div>
  );
};

export default Onboarding;
