import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; // ✅ Import Google Analytics
import { Helmet } from 'react-helmet';
import { Icon } from "@iconify/react";

// Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PropertyForm from './components/PropertyForm';
import OffPlan from './components/OffPlan';
import Footer from './components/Footer';
import Commercial from './components/Commercial';
import Partners from './components/Partners';
import StartHome from './components/StartHome';
import RequestForm from './components/RequestForm';
import Developer from './components/Developer';
import MeetTheTeam from './components/MeetTheTeam';
import AboutUs from './components/AboutUs';
import PopPage from './components/PopPage';
import BlogPage from './components/BlogPage';
import BlogDetails from './components/BlogDetails';
import ViewProperty from './components/ViewProperty';
import ContactPage from './components/ContactPage';
import PropertyListing from './components/PropertyListing';
import BlogForm from './components/BlogForm';
import FeedBack from './components/FeedBack';
import Admin from './components/Admin';
import SearchResults from './components/SearchResults';
import SearchResidential from './components/SearchResidential';
import SearchCommercial from './components/SearchCommercial';
import SearchOffPlan from './components/SearchOffPlan';
import Demo from './components/Demo';
import TermsConditions from './components/Terms & Conditions';
import ScrollToTop from './components/ScrollToTop';
import RentProp from './components/RentProp';

const TRACKING_ID = "G-8YDFJDE9YS"; // ✅ Replace with your GA Measurement ID

const App = () => {
  const location = useLocation();

  // ✅ Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  // ✅ Track page views on route change
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Helmet>
        <title>Real Estate Dubai - Your Dream Properties - Home</title>
        <meta name="description" content="Explore top properties in Dubai with expert guidance." />
        <meta name="keywords" content="Real Estate, Dubai, Properties, Rent, Buy" />
        <meta name="author" content="Leroserealestate" />
        <link rel="canonical" href="https://www.leroserealestate.ae/" />
      </Helmet>

      {/* ✅ Floating WhatsApp Icon */}
      <div
        className="fixed bottom-0 right-0 w-fit p-5 z-50 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.open('https://wa.me/971589896002');
        }}
      >
        <Icon icon={`logos:whatsapp-icon`} className="text-5xl" />
      </div>

      <ScrollToTop />
      <NavBar />
      <PopPage />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<StartHome />} />
          <Route path="/residential-properties" element={<HomePage />} />
          <Route path="/buy-property" element={<HomePage />} />
          <Route path='/rent-property' element={<RentProp />} />
          <Route path='/rent-properties' element={<RentProp />} />
          <Route path='/Properties-For-Rent-in-Dubai' element={<RentProp />} />
          <Route path="/pro" element={<PropertyForm />} />
          <Route path="/off-plan" element={<OffPlan />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/Properties-For-Sale-in-Dubai" element={<Commercial />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/req" element={<RequestForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/developers" element={<Developer />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/feed" element={<FeedBack />} />
          <Route path="/blog/:id/:title" element={<BlogDetails />} />
          <Route path="/allproperties" element={<PropertyListing />} />
          <Route path="/property/:id" element={<ViewProperty />} />
          <Route path="/search-result" element={<SearchResults />} />
          <Route path="/search-residential" element={<SearchResidential />} />
          <Route path="/search-commercial" element={<SearchCommercial />} />
          <Route path="/search-off-plan" element={<SearchOffPlan />} />
          <Route path="/privacy-policy" element={<Demo />} />
          <Route path="/termandcondition" element={<TermsConditions />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
                <div className="container flex flex-col items-center ">
                  <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                      404
                    </h2>
                    <p className="text-2xl md:text-3xl dark:text-gray-300">
                      Sorry, we couldn't find this page.
                    </p>
                    <a
                      href="/"
                      className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
                    >
                      Back to home
                    </a>
                  </div>
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Partners />
      <Footer />
    </div>
  );
};

export default App;
