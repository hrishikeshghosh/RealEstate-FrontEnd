import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import API from "../api/BaseApi";

const FeedBack = () => {
  const location = useLocation();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Name is required."),
      contactNumber: Yup.string()
        .matches(/^\d{9,15}$/, "Mobile number must be between 9 and 15 digits.")
        .required("Mobile number is required."),
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Email is required."),
      message: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Ensure API.post uses the correct baseURL from BaseApi.js
        const response = await API.post("/api/contact-user", values);

        if (response.status >= 200 && response.status < 300) {
          alert("Form submitted successfully!");
          resetForm();
        } else {
          alert("Failed to submit user data.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451.30901848506284!2d55.2802911!3d25.1872953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8293baa2a9%3A0x852495bf26b93ac9!2sLe%20Rose%20Real%20Estate!5e0!3m2!1sen!2sin!4v1736435037924!5m2!1sen!2sin"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Office 628, Tamani Arts Building, Al Asayel St, Business Bay, Dubai
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:example@email.com" className="text-red-500 leading-relaxed">
                info@leroserealestate.ae
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+971 58 989 6002</p>
              <p className="leading-relaxed">+971 4 570 3903</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Please get in touch with us - Call, Email, or Fill Out the form below indicating the
            department you wish to reach, and our dedicated team will contact you within the next 24
            hours.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="contactNumber" className="leading-7 text-sm text-gray-600">
                Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.contactNumber && formik.errors.contactNumber ? (
                <p className="text-red-500 text-sm">{formik.errors.contactNumber}</p>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-600 rounded text-lg"
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Are you an investor, tenant, or landlord? Looking to buy, sell, or rent a property in the UAE?
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;