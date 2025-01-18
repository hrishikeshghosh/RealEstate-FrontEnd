import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-96">
     <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451.30901848506284!2d55.2802911!3d25.1872953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8293baa2a9%3A0x852495bf26b93ac9!2sLe%20Rose%20Real%20Estate!5e0!3m2!1sen!2sin!4v1736435037924!5m2!1sen!2sin"
          ></iframe>
    </div>
  );
}

export default Map;
