import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PropertyForm from './components/PropertyForm';
import OffPlan from './components/OffPlan';
import Footer from './components/Footer'; // Footer import karo
import Commercial from './components/Commercial';
// import blogs from "./data/Blogs";
import Partners from './components/Partners';
import StartHome from './components/StartHome';
import RequestForm from './components/RequestForm';
// import Areas from './components/Areas';
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
import { Helmet } from 'react-helmet';
import FeedBack from './components/FeedBack';
import Admin from './components/Admin';
import SearchResults from './components/SearchResults';
import SearchResidential from './components/SearchResidential';
import SearchCommercial from './components/SearchCommercial';
import SearchOffPlan from './components/SearchOffPlan';
import Demo from './components/Demo';
import TermsConditions from './components/Terms & Conditions';
import ScrollToTop from './components/ScrollToTop';
import { Icon } from "@iconify/react";
import RentProp from './components/RentProp';


const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Helmet>
            <title>Real Estate Dubai - Your Dream Properties- Home</title>
            <meta name="description" content="Explore top properties in Dubai with expert guidance." />
            <meta name="keywords" content="Real Estate, Dubai, Properties, Rent, Buy" />
            <meta name="author" content="Leroserealestate" />
            <link rel="canonical" href="https://www.leroserealestate.ae/" />
        </Helmet>
    <div className=' fixed bottom-0 right-0 w-fit p-5 z-50 cursor-pointer' onClick={(e)=>{
      e.preventDefault()
      window.open('https://wa.me/971589896002')
    }}>
    <Icon icon={`logos:whatsapp-icon`} className=' text-5xl'/>
    </div>

   <Helmet>
        <title>Real Estate Dubai - Your Dream Properties - Home</title>
        <meta
          name="description"
          content="Explore top properties in Dubai with expert guidance."
        />
        <meta
          name="keywords"
          content="Real Estate, Dubai, Properties, Rent, Buy"
        />
      </Helmet>
      {/* Navbar at the top */}
     

      <ScrollToTop />
      <NavBar /> 
       <PopPage/>

      {/* Main content with Routes */}
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
          {/* <Route path="/getintouch" element={<PopPage />} /> */}
          {/* <Route element={<Map />} /> */}
          <Route path="/blog/:id/:title" element={<BlogDetails />} />
          <Route path="/allproperties" element={<PropertyListing />} />
          <Route path="/property/:id" element={<ViewProperty />} />
          
          <Route path="/search-result" element={<SearchResults />} />
          <Route path="/search-residential" element={<SearchResidential />} />
          <Route path="/search-commercial" element={<SearchCommercial />} />
          <Route path="/search-off-plan" element={<SearchOffPlan />} />
          <Route path="/privacy-policy" element={<Demo />} />
          <Route path="/termandcondition" element={<TermsConditions />} />
          
          {/* <Route path="/map" element={<PopPage />} /> */}
          <Route path="*" element={<div>
            <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
    <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">Sorry, we couldn't find this page.</p>
            <a href="/" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back to home</a>
        </div>
    </div>
</section>
          </div>} />
          <Route path="*" element={<div><Helmet><title>404 - Page Not Found</title></Helmet>404 - Page Not Found</div>} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Partners />
      <Footer />
      
    </div>
  );
};

export default App;
