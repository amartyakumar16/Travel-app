import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d28080.107354903445!2d77.02118399999999!3d28.38866265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1747947050029!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
