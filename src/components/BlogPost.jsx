import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const BlogPost = ({ id, title, image }) => {
  const formatTitle = (title) => title.toLowerCase().replace(/\s+/g, '-'); // Spaces to hyphens
 
  const location = useLocation();

  useEffect(() => {
    // Page ke top par scroll karne ke liye
    window.scrollTo(0, 0);
  }, [location.pathname]); // Jab bhi route change hoga ye effect chalega

  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden mb-8">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image} // Display blog image
          alt={title}
          className="w-full h-56 object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <Link
          to={`/blog/${id}/${formatTitle(title)}`} // Link to blog detail page
          className="inline-block px-4 py-2 bg-zinc-700 text-white rounded-full font-medium text-sm hover:bg-zinc-900 transition-all duration-300"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;


