import React, { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    // Page ke top par scroll karne ke liye
    window.scrollTo(0, 0);
  }, [location.pathname]); // Jab bhi route change hoga ye effect chalega
  return (
    <div className="container mx-auto grid grid-cols-1 mt-[10vh] lg:grid-cols-2 gap-16 py-8 lg:mt-[5vw] p-10">
      {/* Left Content */}
      <div className="contentLeft">
        <div className="grid grid-cols-2 lg:h-[65vh] md:grid-cols-4 gap-4">
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-[-5px] transition duration-300">
            <img
              src="/AboutUs1.jpeg"alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-5 transition duration-300 lg:mt-[5vw]">
            <img
              src="/AboutUs2.jpeg"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-[-5px] transition duration-300">
            <img
              src="/AboutUs3.jpeg"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
          <div className="imgWrapper relative overflow-hidden rounded-lg shadow-lg hover:translate-y-5 transition duration-300 lg:mt-[5vw]">
            <img
              src="/AboutUs5.jpeg"
              alt=""
              className="w-full h-full object-cover transform hover:scale-150 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="contentRight">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-base text-gray-800 leading-7">
       <h6 className='font-bold'>
         Le Rose Real Estate
        
        </h6>

Expecting exceptional, personalized service from your real estate partner reflects the importance of being truly heard and understood. At Le Rose Real Estate, we elevate every client’s experience—whether you’re seeking a charming apartment or an ultra-luxury residence—by placing your needs at the heart of everything we do.

Since our founding in 2024, we have remained dedicated to redefining contemporary real estate in Dubai through trusted expertise, deep market knowledge, and a genuine commitment to integrity. We believe that every property tells a story, and our mission is to connect you with the one that feels like home.

With Le Rose, you can expect open, transparent communication at every step. From the first conversation to the final signature, we ensure a seamless, informed, and rewarding journey.
            {showMore && (
              <>
                {' '}
               Our Mission

Our success is built on cultivating strong, lasting relationships with our clients. By truly understanding your goals, we unlock the full potential of your real estate investment. Guided by market insight, a proven approach, and intuitive understanding, we navigate your real estate journey as if it were our own—helping you discover a home or investment that brings lasting joy and fulfillment.

At Le Rose Real Estate, we don’t just find you a property—we help you find your place in Dubai’s ever-evolving landscape.             </>
            )}
          </p>
          <button
            onClick={handleReadMore}
            className="inline-block text-zinc-100 p-5 bg-zinc-900 lg:w-[10vw] lg:px-6 py-3 rounded-md text-base font-medium hover:bg-zinc-900 transition"
          >
            {showMore ? 'Read Less' : 'Read More...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
