import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import PhoneInputComponent from "../Components/PhoneInput";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);
    } else {
      setDots("");
    }
    return () => clearInterval(interval);
  }, [loading]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, t("contact.formErrors.nameMin"))
        .required(t("contact.formErrors.nameRequired")),
      email: Yup.string()
        .email(t("contact.formErrors.emailValid"))
        .required(t("contact.formErrors.emailRequired")),
      phoneNumber: Yup.string().required(t("contact.formErrors.phoneRequired")),
      message: Yup.string()
        .min(5, t("contact.formErrors.messageMin"))
        .required(t("contact.formErrors.messageRequired")),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://ofs-portfolio-1.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: t("contact.successMessage"),
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
        } else {
          throw new Error(t("contact.errorMessage"));
        }
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${t("contact.networkError")}: ${error.message}`,
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
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-purple-400 text-center">
        {t("contact.title")}
      </h2>

      <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mb-10">
        {t("contact.description")}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="https://github.com/omerfaruk2626"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-2 text-center w-[200px] bg-gray-800 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-gray-700 transition"
        >
          <FaGithub className="text-2xl" /> {t("contact.socials.github")}
        </a>
        <a
          href="https://linkedin.com/in/o-faruk-sivri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-2 text-center w-[200px] bg-blue-600 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          <FaLinkedin className="text-2xl" /> {t("contact.socials.linkedin")}
        </a>
        <a
          href="mailto:ofs@omerfaruksivri.com.tr"
          className="flex items-center justify-center gap-2 p-2 text-center w-[200px] bg-green-600 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-green-700 transition"
        >
          <FaEnvelope className="text-2xl" /> {t("contact.socials.email")}
        </a>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full sm:max-w-lg bg-gray-800 p-3 rounded-md shadow-lg"
      >
        <div className="mb-5">
          <TextField
            fullWidth
            id="name"
            name="name"
            label={t("contact.form.name")}
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

        <div className="mb-5">
          <TextField
            fullWidth
            id="email"
            name="email"
            label={t("contact.form.email")}
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

        <div className="mb-5">
          <TextField
            fullWidth
            id="message"
            name="message"
            label={t("contact.form.message")}
            variant="outlined"
            multiline
            rows={4}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", backgroundColor: "#374151" },
            }}
            {...formik.getFieldProps("message")}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </div>
        <div className="mb-5">
          <PhoneInputComponent formik={formik} />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold shadow-md transition"
        >
          {loading
            ? `${t("contact.sending")}${dots}`
            : t("contact.form.submit")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
