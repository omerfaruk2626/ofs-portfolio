import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Box, TextField } from "@mui/material";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "İsim en az 2 karakter olmalı")
        .required("İsim zorunludur"),
      email: Yup.string()
        .email("Geçerli bir e-posta girin")
        .required("E-posta zorunludur"),
      phoneNumber: Yup.string()
        .min(10, "Telefon numarası en az 10 haneli olmalıdır")
        .required("Telefon numarası zorunludur"),
      message: Yup.string()
        .min(10, "Mesaj en az 10 karakter olmalı")
        .required("Mesaj zorunludur"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://ofs-portfolio-1.onrender.com/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent. Thank you!",
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
        } else {
          throw new Error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        }
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Network error: ${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setLoading(false);
    },
  });

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Who are you?"
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", backgroundColor: "#374151" },
            }}
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", backgroundColor: "#374151" },
            }}
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="phoneNumber" className="block text-gray-300 mb-2">
            Phone Number
          </label>
          <Box sx={{ width: "100%", "& .react-tel-input": { width: "100%" } }}>
            <PhoneInput
              country={"tr"}
              value={formik.values.phoneNumber}
              onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
              inputProps={{
                name: "phoneNumber",
                required: true,
                autoFocus: false,
              }}
              containerClass="w-full"
              inputClass="w-full ms-4 p-4 text-black rounded border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              buttonClass="bg-gray-600 text-black border-gray-500 hover:bg-gray-500"
            />
          </Box>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.phoneNumber}
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Your message"
            multiline
            rows={4}
            variant="outlined"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", backgroundColor: "#374151" },
            }}
            {...formik.getFieldProps("message")}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded font-bold transition"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
