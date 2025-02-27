import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/BaseApi";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
    propertyType: "",
    propertyArea: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error if valid
    const newErrors = validateForm();
    if (!newErrors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber =
        "Mobile number must be a valid 10-digit number.";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setError("Please fix the errors above.");
      setSuccess("");
      return;
    }

    try {
      const response = await API.post("/api/contact-user", {
        name: formData?.name,
        email: formData?.email,
        contactNumber: formData?.contactNumber,
        propertyArea: formData?.propertyArea,
        propertyType: formData?.propertyType,
        message: formData?.message,
      });

      if (response.status && response.status >= 200 && response.status < 300) {
        setSuccess("User data submitted successfully!");
        setError("");
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          message: "",
          propertyType: "",
          propertyArea: "",
        });
        setErrors({});
      } else {
        setError("Failed to submit user data.");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong.");
    }
  };

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
          <p className="text-lg lg:text-xl font-[real2]">
            LIST WITH US TODAY !
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-[28vw] bg-white p-6 lg:p-8 rounded-lg shadow-lg mx-4 lg:mr-16">
          <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-7">
            {/* Name Field */}
            <div>
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
                placeholder="ex: Livia Siphron"
                className="w-full border-2 p-3 mt-1 text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex: john@email.com"
                className="w-full border-2 p-3 mt-1 rounded-md text-zinc-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
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
                  type="tel" // Use "tel" instead of "number"
                  id="phone"
                  placeholder="81234 56789"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full border-2 p-3 pl-20 text-zinc-800 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  minLength="9" // Minimum 9 digits
                  maxLength="15" // Maximum 15 digits
                  pattern="[0-9]*" // Allow only numeric input
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm">{errors.contactNumber}</p>
                )}
              </div>
            </div>

            {/* Property Type Field */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
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
              <label
                htmlFor="area"
                className="block text-sm font-medium text-gray-700"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                placeholder="Area"
                className="w-full border-2 p-3 mt-1 text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                name="propertyArea"
                value={formData.propertyArea}
                onChange={handleChange}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                className="w-full border-2 p-3 mt-1 text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-medium py-3 px-4 rounded-md hover:bg-gray-800"
            >
              Submit Listing
            </button>

            {/* Success/Error Messages */}
            {success && (
              <p className="text-green-500 text-sm mt-2">{success}</p>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
