import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import API from "../api/BaseApi";


function Commercial() {
  const [commercialProperties, setCommercialProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [areaType, setAreaType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Page ke top par scroll karne ke liye
    window.scrollTo(0, 0);
  }, [location.pathname]); // Jab bhi route change hoga ye effect chalega


  useEffect(() => {
    const fetchCommercialProperties = async () => {
      setLoading(true);
      try {
        const response = await API.get("/api/properties/commercial");
         if (!response.status || response.status < 200 || response.status >= 300)  {
          throw new Error("Failed to fetch commercial properties");
        }
        const data = response;
        setCommercialProperties(data?.data);
      } catch (error) {
        console.error("Error fetching commercial properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommercialProperties();
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (searchInput.trim()) queryParams.append("query", searchInput);
    if (areaType) queryParams.append("area", areaType);
    if (propertyType) queryParams.append("type", propertyType);

    if (queryParams.toString()) {
      navigate(`/search-commercial?${queryParams.toString()}`);
    } else {
      alert("Please enter a search term or select a property type.");
    }
  };

  const propertyCounts =commercialProperties?.length>0? commercialProperties.reduce((acc, property) => {
    acc[property.subCategory] = (acc[property.subCategory] || 0) + 1;
    return acc;
  }, {}):0;

  const propertyFilters = Object.entries(propertyCounts).map(([subCategory, count]) => [
    subCategory,
    count,
  ]);

  propertyFilters.unshift(["All", commercialProperties.length]);

  const filteredProperties =
    selectedType === "All"
      ? commercialProperties
      : commercialProperties.filter((property) => property.subCategory === selectedType);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-full relative">
        <video
          loop
          autoPlay
          muted
          playsInline
          controls={false}
          className="w-full h-[70vh] sm:h-full object-cover"
          src="/excel-properties-dubai.webm"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-xl lg:text-3xl font-bold">
              Discover Luxurious Commercial Properties in Dubai
            </h1>
            <h4>{loading ? "Loading..." : `${commercialProperties.length} properties available`}</h4>

            {/* Search Bar */}
            <div className="search-container mt-5 lg:mt-10 bg-white/30 backdrop-blur-md rounded-lg p-4 w-[100%] max-w-[800px] mx-auto shadow-md">
            <div className="tabs space-x-3 lg:space-x-3 sm:justify-start gap-3 sm:gap-5 mb-5">
                        <Link
                          className="tab-btn text-white bg-transparent border border-gray-300 py-2 px-2 sm:px-3 text-sm sm:text-base rounded cursor-pointer transition-all hover:bg-gray-200 active:bg-black active:text-white"
                          to="/residential-properties"
                        >
                          Residential
                        </Link>
                        <Link
                          className="tab-btn bg-transparent border border-gray-300 py-2 px-2 sm:px-5 text-sm sm:text-base rounded cursor-pointer text-white transition-all hover:bg-gray-200 active:bg-black active:text-white"
                          to="/commercial"
                        >
                          Commercial
                        </Link>
                        <Link
                          className="tab-btn bg-transparent border border-gray-300 py-2 px-2 sm:px-5 text-sm sm:text-base rounded cursor-pointer text-white transition-all hover:bg-gray-200 active:bg-black active:text-white"
                          to="/off-plan"
                        >
                          Off Plan
                        </Link>
                      </div>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <input
                  className="w-full lg:w-1/3 px-4 py-2 border rounded bg-transparent text-white"
                  type="text"
                  placeholder="Search Commercial Properties"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <select
                  className="w-full lg:w-1/4 px-4 py-2 border rounded bg-transparent text-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option className="text-zinc-800" value="">Property Type</option>
                  <option className="text-zinc-800" value="Shop">Shop</option>
                  <option className="text-zinc-800" value="Studio">Studio</option>
                </select>
                <select
                  className="w-full lg:w-1/4 px-4 py-2 border rounded bg-transparent text-white"
                  value={areaType}
                  onChange={(e) => setAreaType(e.target.value)}
                >
                  <option  className="text-zinc-800" value="">Select Area</option>
                  <option className="text-zinc-800" value={500}>500</option>
                  <option className="text-zinc-800" value={1000}>1000</option>
                  <option className="text-zinc-800" value={1500}>1500</option>
                  <option className="text-zinc-800" value={2000}>2000</option>
                  <option className="text-zinc-800" value={3000}>3000</option>
                </select>
                <button
                  className="w-full lg:w-1/4 px-4 py-2 bg-black text-white rounded hover:bg-zinc-800"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Filter by Property Types</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {propertyFilters.map(([subCategory, count]) => (
            <button
              key={subCategory}
              className={`px-4 py-2 rounded-lg border ${
                selectedType === subCategory
                  ? "bg-zinc-900 text-white"
                  : "bg-white text-gray-700"
              } hover:bg-zinc-800 hover:text-white transition`}
              onClick={() => setSelectedType(subCategory)}
            >
              {subCategory === "All" ? "🏢 All Properties" : subCategory} ({count})
            </button>
          ))}
        </div>
      </section>

      {/* Filtered Properties Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Commercial Properties</h2>
        {loading ? (
          <p>Loading properties...</p>
        ) : filteredProperties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties?.length>0? filteredProperties.map((property) => (
              <div
                         key={property.id}
                         className="bg-white shadow-md rounded-lg overflow-hidden relative group"
                       >
                         {property.featured && (
                           <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full z-10">
                             Featured
                           </span>
                         )}
                         <div className="relative">
                           <img
                             src={property.Images[0]}
                             alt={property.title}
                             className="w-full h-48 object-cover"
                           />
                           <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-50 transition duration-300"></div>
                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                             <Link
                               to={`/property/${property.id}`}
                               state={{ property }}
                               className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm"
                             >
                               View Property
                             </Link>
                           </div>
                         </div>
                         <div className="p-4">
                           <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
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
                           <div className="flex justify-between items-center">
                             <span className="text-sm font-bold text-gray-500">For Sale</span>
                             <span className="text-lg font-bold text-teal-500">{property.price} AED</span>
                           </div>
                         </div>
                       </div>
            )):<></>}
          </div>
        )}
      </section>
    </div>
  )
}

export default Commercial;
