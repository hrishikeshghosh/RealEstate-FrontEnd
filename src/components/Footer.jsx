import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">+971 58 989 6002</p>
          <p className="text-sm">+971 4 570 3903</p>
          <p className="text-sm">info@leroserealestate.ae</p>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className="text-sm">
          Office 628, Tamani Arts Building, 
            <br />
            Al Asayel St, Business Bay, Dubai
          </p>
        </div>

        {/* Working Hours Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Working hours</h4>
          <p className="text-sm">Monday - Saturday</p>
          <p className="text-sm">09:00 AM - 06:00 PM</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-2">Follow us</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/share/X5fGKzq57KhFNpsi/?mibextid=JRoKGi" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/lerose.realestate/profilecard/?igsh=b3Zrcmp6cTRvMjg4" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/lerose-realestate/" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-amber-500 hover:text-amber-400">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
   <div className="bg-gray-800 lg:text-[12px] text-[10px] flex items-center justify-evenly text-white text-center py-4 ">
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/termandcondition">Terms & Conditions</a>
    <a href="/contact-us">Contact Us</a>
   </div>
    </div>
  )
};

export default Footer;

