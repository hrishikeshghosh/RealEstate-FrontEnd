import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import API from "../api/BaseApi";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    // Page ke top par scroll karne ke liye
    window.scrollTo(0, 0);
  }, [location.pathname]); // Jab bhi route change hoga ye effect chalega

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get("/api/blogs"); // Update with your API URL
        if (!response.status || response.status < 200 || response.status >= 300)  {
          throw new Error("Failed to fetch blogs");
        }
        const data = response.data;
        setBlogs(data); // Update blogs state with fetched data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-5 mt-[15vh]">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Real Estate Blogs
        </h1>
        <p className="text-center text-gray-500">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-5 mt-[15vh]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Real Estate Blogs
      </h1>
      {blogs.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogPost
              key={blog._id} // Use `_id` from the database
              id={blog._id}
              title={blog.title}
              image={blog.images?.[0] || "https://via.placeholder.com/500"} // Show the first image or fallback image
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}
    </div>
  );
};

export default BlogPage;

