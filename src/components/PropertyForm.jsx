
import { useFormik } from "formik";
import * as Yup from "yup";
import API from "../api/BaseApi";

const PropertyForm = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      contactNumber: "",
      email: "",
      message: "",
      propertyType: "",
      propertyArea: "",
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
      propertyType: Yup.string(),
      propertyArea: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await API.post("/api/contact-user", values);

        if (response.status >= 200 && response.status < 300) {
          alert("User data submitted successfully!");
          resetForm();
        } else {
          alert("Failed to submit user data.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between bg-cover bg-center min-h-screen text-zinc-500 lg:mt-[10vh] mt-[5vh]"
        style={{ backgroundImage: "url('/Propimg.jpeg')" }}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-5 lg:pl-16 mb-8 lg:mb-0 text-center lg:text-left relative lg:-top-[15vw] top-[5vh]">
          <h1 className="text-2xl lg:text-6xl font-normal mb-4 font-[real2]">
            LOOKING TO SELL YOUR PROPERTY?
          </h1>
          <p className="text-lg lg:text-xl font-[real2]">LIST WITH US TODAY !</p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-[28vw] bg-white p-6 lg:p-8 rounded-lg shadow-lg mx-4 lg:mr-16">
          <form onSubmit={formik.handleSubmit} className="space-y-5 lg:space-y-7">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ex: Livia Siphron"
                className="w-full border-2 p-3 mt-1 text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              ) : null}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex: john@email.com"
                className="w-full border-2 p-3 mt-1 rounded-md text-zinc-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Phone number*
              </label>
              <div className="relative mt-1">
                <select className="absolute inset-y-0 left-0 border-gray-300 bg-gray-50 text-gray-700 rounded-l-md">
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+86">🇨🇳 +86</option>
                  <option>🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  id="contactNumber"
                  placeholder=" 81234 56789"
                  name="contactNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNumber}
                  className="w-full border-2 p-3 pl-20 text-zinc-800 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <p className="text-red-500 text-sm">{formik.errors.contactNumber}</p>
                ) : null}
              </div>
            </div>

            {/* Property Type Field */}
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.propertyType}
                className="w-full border-2 p-3 mt-1 text-zinc-700 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Full Floor">Full Floor</option>
              </select>
            </div>

            {/* Area Field */}
            <div>
              <label htmlFor="propertyArea" className="block text-sm font-medium text-gray-700">
                Area
              </label>
              <input
                type="text"
                id="propertyArea"
                placeholder="Area"
                className="w-full border-2 p-3 mt-1 text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                name="propertyArea"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.propertyArea}
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                className="w-full border-2 p-3 mt-1 text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-medium py-3 px-4 rounded-md hover:bg-gray-800"
              disabled={formik.isSubmitting}
            >
              Submit Listing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;