import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import PhoneInputComponent from "../Components/PhoneInput";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import Icons

const Contact = () => {
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
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      message: Yup.string()
        .min(5, "Message must be at least 5 characters")
        .required("Message is required"),
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
            title: "Your message has been sent. Thank you!",
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
        } else {
          throw new Error("Failed to send the message. Please try again.");
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
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white px-6"
    >
      <h2 className="text-5xl font-bold mb-6 text-purple-400">Get in Touch</h2>

      <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
        Feel free to reach out to me for **collaborations, job opportunities**,
        or any web development inquiries.
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/omerfaruk2626"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-gray-700 transition"
        >
          <FaGithub className="text-2xl" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/o-faruk-sivri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>
        <a
          href="mailto:ofs@omerfaruksivri.com.tr"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-green-700 transition"
        >
          <FaEnvelope className="text-2xl" /> Email Me
        </a>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-md shadow-lg"
      >
        <div className="mb-4">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Your Name"
            variant="outlined"
            className="rounded-md"
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
            label="Email"
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

        <div className="mb-4">
          <PhoneInputComponent formik={formik} />
        </div>

        <div className="mb-4">
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Your Message"
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

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded font-bold transition"
        >
          {loading ? `Sending${dots}` : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
