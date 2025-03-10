import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../api/BaseApi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // CSS for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "", // Full number with country code (e.g., +917000654043)
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error if valid
    const newErrors = validateForm();
    if (!newErrors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (value) => {
    console.log("Raw Phone value:", value); // Debug: Check raw value
    // Ensure value starts with '+'
    const formattedValue = value.startsWith("+") ? value : `+${value}`;
    setFormData({ ...formData, contactNumber: formattedValue });

    // Clear error if valid
    const newErrors = validateForm();
    if (!newErrors.contactNumber) {
      setErrors({ ...errors, contactNumber: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = "Phone number is required.";
    } else if (!/^\+\d{9,15}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Mobile number must start with '+' followed by 9-15 digits (e.g., +917000654043).";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message || formData.message.trim().length === 0) {
      newErrors.message = "Message cannot be empty.";
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
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber, // Full number with country code
        message: formData.message,
      });

      if (response.status && response.status >= 200 && response.status < 300) {
        setSuccess("User data submitted successfully!");
        setError("");
        setFormData({ name: "", contactNumber: "", email: "", message: "" });
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div className="flex flex-col mt-[20vw] lg:flex-row w-full h-auto lg:mt-[5vw]">
        <div
          className="lg:w-2/5 h-64 lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: "url('/ContactImg.jpeg')",
          }}
        >
          <img className="w-32 lg:w-25 p-4" src="/logo-01.png" alt="Logo" />
        </div>

        <div className="lg:w-3/5 p-6 lg:p-12 bg-white text-gray-800">
          <h1 className="text-2xl lg:text-4xl font-light uppercase tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-sm lg:text-base mb-6">
            At Lerose Real Estate, we’re here to help you find your dream property. Whether you’re
            looking to buy, sell, or invest, our team of experts is ready to assist you every step
            of the way.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm uppercase mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={"ae"} // Default country (UAE)
                value={formData.contactNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "contactNumber",
                  id: "contactNumber",
                  className:
                    "w-full p-2 pl-12 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500",
                }}
                buttonStyle={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "2px solid #d1d5db", // Match your border style
                }}
                dropdownStyle={{
                  borderRadius: "0",
                  border: "1px solid #d1d5db",
                }}
                specialLabel={false} // Removes extra label
                enableSearch={true} // Allows searching in dropdown
                countryCodeEditable={false} // Prevents manual editing of country code
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm">{errors.contactNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none focus:border-gray-500 resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-32 lg:w-40 bg-gray-800 text-white py-2 uppercase text-sm tracking-wide"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;