import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "İsim en az 2 karakter olmalı")
        .required("İsim zorunludur"),
      email: Yup.string()
        .email("Geçerli bir e-posta girin")
        .required("E-posta zorunludur"),
      message: Yup.string()
        .min(10, "Mesaj en az 10 karakter olmalı")
        .required("Mesaj zorunludur"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Gönderilen Form:", values);

      Swal.fire({
        title: "Teşekkürler!",
        text: "Mesajınız başarıyla gönderildi.",
        icon: "success",
        confirmButtonText: "Tamam",
      });

      resetForm();
    },
  });

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white snap-start px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded font-bold transition"
        >
          PUSH
        </button>
      </form>
    </section>
  );
};

export default Contact;
