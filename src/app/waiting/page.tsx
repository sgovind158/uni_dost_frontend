"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import CustomInput from "../components/Input/CustomInput";
import CustomPhoneInput2 from "../components/Input/CustomPhoneInput2";
import { msg } from "../utils/message";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const WaitingPage = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [loder, setLoder] = useState(false);

  const isPhoneValid = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validates phone number and sends data to the server
    if (!isPhoneValid(phone)) {
      toast.error(msg?.invalidPhone);
      return;
    }
    const form = {
      email: email,
      phone: phone,
    };
    setLoder(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setEmail("");
        setPhone("");
        toast.success("Thank you! We will keep you updated.");
        setLoder(false);
      } else {
        toast.error("Failed to send message.");
        setLoder(false);
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
      setLoder(false);
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className=" p-4 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">
          Uni Dost is Coming Soon!
        </h1>
        <p className="text-center text-white mb-6">
          Leave your email & WhatsApp to stay updated.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
          <CustomInput
            type="email"
            req={true}
            placeholder="Email*"
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />

          <CustomPhoneInput2 value={phone} setValue={setPhone} />

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="border border-[#747474] hover:bg-[#747474] text-white px-6 py-3 rounded-full font-semibold cursor-pointer"
            >
              {loder ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitingPage;
