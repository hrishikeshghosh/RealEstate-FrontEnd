import React, { useState, useEffect } from "react";
import API from "../api/BaseApi";

const PopPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Phone number must be 10 digits.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await API.post("/api/contact-user", {
          name:formData?.name,
          email:formData?.email,
          contactNumber:formData?.contactNumber,
        });

        if (response.status && response.status>=200 && response.status <300) {
          setSuccessMessage("User data submitted successfully!");
          setErrors({});
          setFormData({ name: "", email: "", contactNumber: "" });
        } else {
          setErrors({ api: "Failed to submit user data. Please try again." });
          // const errorMessage = await response.text(); // Get error details from the response
  // setErrors({ api: errorMessage || "Failed to submit user data. Please try again." });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ api: "Something went wrong. Please try again later." });
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-white bg-zinc-700 hover:bg-zinc-800 rounded-full p-2 px-3 focus:outline-none"
              onClick={handleClose}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Submit Your Details
            </h2>
            {errors.api && (
              <p className="text-red-500 text-center mb-4">{errors.api}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center mb-4">
                {successMessage}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <input
                  type="number"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactNumber}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-700 text-white py-3 rounded-md hover:bg-zinc-800 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopPage;