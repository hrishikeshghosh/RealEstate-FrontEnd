
import React, { useState } from "react";

const developers = [
  {
    name: "Emaar Properties",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/emaar.webp?width=137&height=82&format=webp&quality=90", // Replace with actual logo URL
    projects: 270,
    description: "Emaar Properties is one of the top developers in UAE known for iconic buildings like Burj Khalifa.",
    image: "/src/assets/webimg1.webp", // Replace with actual developer's image URL
  },
  {
    name: "Damac Properties",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/damac.webp?width=137&height=82&format=webp&quality=90",
    projects: 212,
    description: "Damac Properties offers luxurious properties across Dubai and beyond.",
    image: "https://via.placeholder.com/600x400",
  },

  {
    name: "Meraas",
    logo: "https://cdn.excelproperties.ae/media/developer/logo/meraas.webp?width=137&height=82&format=webp&quality=90",
    projects: 72,
    description: "Meraas is a Dubai-based holding company creating urban living experiences.",
    image: "https://via.placeholder.com/600x400",
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
