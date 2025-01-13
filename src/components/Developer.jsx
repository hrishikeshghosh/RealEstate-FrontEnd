
import React, { useState } from "react";

const developers = [
  {
    name: "Emaar Properties",
    logo: "/DEVELOPERS LOGO BLUE-05.png", // Replace with actual logo URL
    projects: 135,
    description: "Emaar Properties is one of the top developers in UAE known for iconic buildings like Burj Khalifa.",
    image: "/webimg1.webp", // Replace with actual developer's image URL
  },
  {
    name: "Properties",
    logo: "/DEVELOPERS LOGO BLUE-09.png",
    projects: 123,
    description: "Offers luxurious properties across Dubai and beyond.",
    image: "/webimg1.webp",
  },
  {
    name: "IMTIAZ DEVELOPMENTS",
    logo: "/DEVELOPERS LOGO BLUE-01.png",
    projects: 79,
    description: "Imtiaz Developments offers luxurious properties across Dubai and beyond.",
    image: "/webimg1.webp",
  },
  {
    name: "Dubai Properties",
    logo: "/DEVELOPERS LOGO BLUE-02.png",
    projects: 202,
    description: "Dubai Properties offers luxurious properties across Dubai and beyond.",
    image: "/webimg1.webp",
  },
  {
    name: "Meraas",
    logo: "/DEVELOPERS LOGO BLUE-03.png",
    projects: 72,
    description: "Meraas is a Dubai-based holding company creating urban living experiences.",
    image: "/webimg1.webp",
  },
  {
    name: "Damac Properties",
    logo: "/DEVELOPERS LOGO BLUE-04.png",
    projects: 182,
    description: "Damac Properties offers luxurious properties across Dubai and beyond.",
    image: "/webimg1.webp",
  },
  {
    name: "Object 1",
    logo: "/DEVELOPERS LOGO BLUE-06.png",
    projects: 125,
    description: "Object Properties offers luxurious properties across Dubai and beyond.",
    image: "/webimg1.webp",
  },
  {
    name: "Omniyat",
    logo: "/DEVELOPERS LOGO BLUE-08.png",
    projects: 127,
    description: "Omniyat offers luxurious properties across Dubai and beyond.",
    image: "/webimg1.webp",
  },

  {
    name: "Nakheel",
    logo: "/DEVELOPERS LOGO BLUE-07.png",
    projects: 72,
    description: "Nakheel is a Dubai-based holding company creating urban living experiences.",
    image: "/webimg1.webp",
  },
 
  
];

export default function Developers() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto mt-[15vw] lg:mt-[5vw]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4">Top Developers in UAE</h1>
      <p className="text-gray-600 mb-6">Real Estate in Popular Developers</p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer bg-white"
            onClick={() => setSelectedDeveloper(dev)}
          >
            <img src={dev.logo} alt={dev.name} className="h-20 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-center">{dev.name}</h2>
            <p className="text-gray-500 text-center">{dev.projects} Projects</p>
          </div>
        ))}
      </div>

      {/* Selected Developer Details */}
      {selectedDeveloper && (
        <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
          {/* Dynamic Logo */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={selectedDeveloper.logo}
              alt={`${selectedDeveloper.name} Logo`}
              className="h-16 w-16 object-contain rounded-full border"
            />
            <h2 className="text-xl font-bold">{selectedDeveloper.name}</h2>
          </div>

          {/* Dynamic Image */}
          <img
            src={selectedDeveloper.image}
            alt={selectedDeveloper.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Description */}
          <p className="text-gray-700 mt-4">{selectedDeveloper.description}</p>

          {/* Close Button */}
          {/* <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => setSelectedDeveloper(null)}
          >
            Close
          </button> */}
          <button
class="px-5 py-2 relative rounded-md group overflow-hidden font-medium bg-transparent border-2 text-black mt-5" >
<span
class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-zinc-900 group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white text-sm font-semibold" onClick={() => setSelectedDeveloper(null)}>Close</span>
</button>
        </div>
      )}
    </div>
  );
}
