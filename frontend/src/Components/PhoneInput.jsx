import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputComponent = ({ formik }) => {
  return (
    <div className="relative w-full">
      <PhoneInput
        defaultCountry="tr"
        id="phoneNumber"
        preferredCountries={["tr", "us", "gb", "de", "fr"]}
        value={formik.values.phoneNumber}
        onChange={(value) => formik.setFieldValue("phoneNumber", value)}
        onBlur={() => formik.setFieldTouched("phoneNumber", true)}
        placeholder="Phone Number"
        className="custom-phone-input w-full border rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 mt-4"
        enableSearch={false}
        countryCallingCodeEditable={false}
        inputStyle={{
          background: "#374151",
          border: "none",
          width: "100%",
          color: "white",
          padding: "15px",
          paddingLeft: "5px",
        }}
      />

      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <p className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</p>
      ) : null}
    </div>
  );
};

export default PhoneInputComponent;
