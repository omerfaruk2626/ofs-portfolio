import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa";

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
        .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlardan oluşmalıdır")
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
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Who are you?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps("name")}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:ring-2 focus:ring-purple-500"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:ring-2 focus:ring-purple-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            {...formik.getFieldProps("phoneNumber")}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:ring-2 focus:ring-purple-500"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.phoneNumber}
            </p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            {...formik.getFieldProps("message")}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:ring-2 focus:ring-purple-500"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded font-bold transition"
        >
          {loading ? "Pushing..." : "Push"}
        </button>
      </form>

      <div className="text-center mt-6 flex gap-4 text-2xl">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/o-faruk-sivri/"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/omerfaruk2626"
          className="text-gray-300 hover:text-gray-200"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@omerfaruksivri26"
          className="text-green-500 hover:text-green-400"
        >
          <FaMedium />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/23258999/omer26"
          className="text-orange-500 hover:text-orange-400"
        >
          <FaStackOverflow />
        </a>
      </div>
    </section>
  );
};

export default Contact;
