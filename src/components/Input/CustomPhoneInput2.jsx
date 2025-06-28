import React from "react";
import styles from "./style/phoneInput.module.scss";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import clsx from "clsx";

const CustomPhoneInput2 = ({ value, setValue }) => {
  return (
    <div>
      <div className="w-full mt-0" style={{ marginTop: 6 }}>
        <PhoneInput
          defaultCountry="in"
          value={value}
          forceDialCode={true}
          onChange={(phone, meta) => {
            setValue(phone); // e.g., "9876543210"
          }}
          className={clsx(
            "text-base font-medium text-[#344054] w-full ",
            styles.phoneInput
          )}
        />
      </div>
    </div>
  );
};

export default CustomPhoneInput2;
