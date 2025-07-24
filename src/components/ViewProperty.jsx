
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Map from "./Map";
// import API from "../api/BaseApi";
// // import DOMPurify from "dompurify"; // Install it using: npm install dompurify
// // import PopPage from "./PopPage";
// import { useParams } from "react-router-dom";


// const ViewProperty = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const property = location.state?.property;

//   // Ensure slides array is valid
//   const slides = property?.images || property?.Images?.slice(0, 9) || [];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required.";
//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!formData.contactNumber) {
//       newErrors.contactNumber = "Phone number is required.";
//     } else if (!/^\d{10}$/.test(formData.contactNumber)) {
//       newErrors.contactNumber = "Phone number must be 10 digits.";
//     }
//     if (!formData.message) newErrors.message = "Message is required.";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccessMessage("");
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await API.post("/api/contact-user", {
//           name: formData?.name,
//           email: formData?.email,
//           contactNumber: formData?.contactNumber,
//           message: formData?.message,
//         });

//         if (response.status && response.status >= 200 && response.status < 300) {
//           setSuccessMessage("User data submitted successfully!");
//           setErrors({});
//           setFormData({ name: "", email: "", contactNumber: "", message: "" });
//         } else {
//           setErrors({ api: "Failed to submit user data. Please try again." });
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         setErrors({ api: "Something went wrong. Please try again later." });
//       }
//     }
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//   };
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowLeft") setActiveIndex((prev) => Math.max(prev - 1, 0));
//       if (e.key === "ArrowRight") setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [slides.length]);

//   if (!property) {
//     return (
//       <div className="container mx-auto px-4 py-8 text-center mt-[5vw]">
//         <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
//         <button onClick={() => navigate("/")} className="bg-teal-500 text-white px-4 py-2 rounded">
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
    
//       <div className="w-full flex flex-col mt-[20vw] lg:flex-row lg:justify-between lg:items-start p-4 lg:p-8 lg:mt-[5vw]">
//         {/* Left: Image Carousel */}
//         <div className="flex flex-col h-[55vh] lg:h-[90vh] items-center lg:w-[50vw] w-full max-w-7xl gap-6 bg-white rounded-lg shadow-md">
//           {/* Main Image */}
//           <div className="w-full h-[100vh] lg:h-full aspect-video rounded-lg overflow-hidden bg-gray-200">
//             <img
//               src={slides[activeIndex]}
//               alt={`Slide ${activeIndex + 1}`}
//               className="w-full h-full lg:object-cover lg:object-center hover:scale-105 transition-transform duration-300"
//             />
//           </div>

//           {/* Thumbnails & Navigation */}
//           <div className="flex items-center w-full gap-4">
//             {/* <button
//               className="w-12 h-12 rounded-full bg-gray-800 text-white disabled:opacity-50 shadow-md hover:scale-105 transition-transform"
//               onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
//               disabled={activeIndex === 0}
//             >
//               &#x25C0;
//             </button> */}

//             <ul className="h-[10vh] gap-4 flex items-center overflow-x-auto">
//               {slides.map((slide, index) => (
//                 <li
//                   key={index}
//                   className={`w-[20vw] sm:w-[10vw] h-[8vh] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-transform duration-300 ${
//                     activeIndex === index ? "border-blue-600 scale-105" : "border-gray-300"
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   <img src={slide} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
//                 </li>
//               ))}
//             </ul>

//             {/* <button
//               className="w-12 h-12 rounded-full bg-gray-800 text-white disabled:opacity-50 shadow-md hover:scale-105 transition-transform"
//               onClick={() => setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1))}
//               disabled={activeIndex === slides.length - 1}
//             >
//               &#x25B6;
//             </button> */}
//           </div>
//         </div>

//         {/* Right: Property Details */}
//         <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
//         <div className="flex w-full  lg:justify-start gap-5">

         
          
//       {isVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-black  hover:bg-zinc-200 rounded-full p-2 px-3 focus:outline-none"
//               onClick={handleClose}
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//               Submit Your Details
//             </h2>
//             {errors.api && (
//               <p className="text-red-500 text-center mb-4">{errors.api}</p>
//             )}
//             {successMessage && (
//               <p className="text-green-500 text-center mb-4">
//                 {successMessage}
//               </p>
//             )}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Name*
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email*
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
//                   Phone Number*
//                 </label>
//                 <input
//                   type="number"
//                   id="contactNumber"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//                 {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message*
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Enter your message"
//                   className="w-full border p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//                 {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//               </div>
//               <button type="submit" className="w-full bg-zinc-700 text-white py-3 rounded-md hover:bg-zinc-800 transition-all duration-300">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//         </div>
//           <h1 className="text-2xl font-bold mb-4 text-gray-900">{property.title}</h1>

//           <div className="flex justify-between text-sm text-gray-800 mb-4">
//             <div>
//               <span className="block font-semibold">Location</span>
//               <div className="flex items-center">
//                 <i className="ri-map-pin-5-fill text-red-600 mr-2"></i>
//                 {property.location}
//               </div>
//             </div>
//             <div>
//               <span className="block font-semibold">Bedrooms</span>
//               <div className="flex items-center">
//                 <i className="fas fa-th-large text-gray-500 mr-2"></i>
//                 {property.bedrooms}
//               </div>
//             </div>
//             <div>
//               <span className="block font-semibold">Area</span>
//               <div className="flex items-center">
//                 <i className="fas fa-vector-square text-gray-500 mr-2"></i>
//                 {property.area}
//               </div>
//             </div>
//           </div>

//           <div className="mt-6">
//             <span className="text-lg font-bold text-teal-500">{property.price} AED</span>
//           </div>
//           <button onClick={() => navigate("/")} className="bg-zinc-900  text-white px-2 py-2 rounded">
//             Back to Listings
//           </button>
//           <button
//         onClick={() => setIsVisible(true)}
//         className="bg-zinc-900 text-white px-2 py-2 rounded mt-8 ml-5"
//       >
//         Get in Touch
//       </button>
//           {/* Description Section */}
//           <h2 className="text-2xl font-extrabold mt-10">Description</h2>

//           {/* Option 1: Render HTML safely (use this if `description` contains HTML tags) */}
//           <p className="text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: property.description }}></p>

//           {/* Option 2: Render Plain Text (Use this if you want to remove HTML tags) */}
//           {/* <p className="text-gray-800 mb-6">{DOMPurify.sanitize(property.description)}</p> */}
//         </div>
//       </div>

//       <Map />
//     </>
//   );
// };

// export default ViewProperty;





import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Map from "./Map";
import API from "../api/BaseApi";

const ViewProperty = () => {
  const { id } = useParams();
  console.log("ID from URL:", id);
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const slides = property?.images || property?.Images?.slice(0, 9) || [];

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await API.get(`/api/properties/${id}`);
        console.log("Requesting:", `/api/properties/${id}`);

        setProperty(res.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setProperty(null);
      }
    };
    fetchProperty();
  }, [id]);

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
    if (!formData.message) newErrors.message = "Message is required.";
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
        const response = await API.post("/api/contact-user", formData);
        if (response.status >= 200 && response.status < 300) {
          setSuccessMessage("User data submitted successfully!");
          setErrors({});
          setFormData({ name: "", email: "", contactNumber: "", message: "" });
        } else {
          setErrors({ api: "Failed to submit user data. Please try again." });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ api: "Something went wrong. Please try again later." });
      }
    }
  };

  const handleClose = () => setIsVisible(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setActiveIndex((prev) => Math.max(prev - 1, 0));
      if (e.key === "ArrowRight") setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8 text-center mt-[5vw]">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <button onClick={() => navigate("/")} className="bg-teal-500 text-white px-4 py-2 rounded">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="w-full flex flex-col mt-[20vw] lg:flex-row lg:justify-between lg:items-start p-4 lg:p-8 lg:mt-[5vw]">
      <div className="flex flex-col h-[55vh] lg:h-[90vh] items-center lg:w-[50vw] w-full max-w-7xl gap-6 bg-white rounded-lg shadow-md">
        <div className="w-full h-[100vh] lg:h-full aspect-video rounded-lg overflow-hidden bg-gray-200">
          <img
            src={slides[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            className="w-full h-full lg:object-cover lg:object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <ul className="h-[10vh] gap-4 flex items-center overflow-x-auto">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`w-[20vw] sm:w-[10vw] h-[8vh] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-transform duration-300 ${
                  activeIndex === index ? "border-blue-600 scale-105" : "border-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={slide} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">{property.title}</h1>

        <div className="flex justify-between text-sm text-gray-800 mb-4">
          <div>
            <span className="block font-semibold">Location</span>
            <div className="flex items-center">
              <i className="ri-map-pin-5-fill text-red-600 mr-2"></i>
              {property.location}
            </div>
          </div>
          <div>
            <span className="block font-semibold">Bedrooms</span>
            <div className="flex items-center">
              <i className="fas fa-th-large text-gray-500 mr-2"></i>
              {property.bedrooms}
            </div>
          </div>
          <div>
            <span className="block font-semibold">Area</span>
            <div className="flex items-center">
              <i className="fas fa-vector-square text-gray-500 mr-2"></i>
              {property.area}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <span className="text-lg font-bold text-teal-500">{property.price} AED</span>
        </div>
        <button onClick={() => navigate("/")} className="bg-zinc-900 text-white px-2 py-2 rounded mt-4">
          Back to Listings
        </button>
        <button onClick={() => setIsVisible(true)} className="bg-zinc-900 text-white px-2 py-2 rounded mt-4 ml-4">
          Get in Touch
        </button>

        <h2 className="text-2xl font-extrabold mt-10">Description</h2>
        <p className="text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: property.description }}></p>
      </div>

      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
            <button className="absolute top-3 right-3 text-black hover:bg-zinc-200 rounded-full p-2 px-3" onClick={handleClose}>
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Submit Your Details</h2>
            {errors.api && <p className="text-red-500 text-center mb-4">{errors.api}</p>}
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <input id="name" value={formData.name} onChange={handleChange} placeholder="Name*" className="w-full mb-3 border p-3 rounded" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="w-full mb-3 border p-3 rounded" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <input id="contactNumber" type="number" value={formData.contactNumber} onChange={handleChange} placeholder="Phone Number*" className="w-full mb-3 border p-3 rounded" />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
              <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Message*" className="w-full mb-3 border p-3 rounded" />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              <button type="submit" className="w-full bg-zinc-700 text-white py-3 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}

    </div>
      <Map />
    </>
  );
};

export default ViewProperty;