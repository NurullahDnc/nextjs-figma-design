import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://facebook.com"  
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com"  
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com" 
  },
  {
    name: "Youtube",
    icon: <FaYoutube  />,
    url: "https://youtube.com" 
  },
];

const FooterSocialMedia = () => {
  return (
    <div className='space-y-4'>
      <h2 className="text-2xl">Social Media</h2>

      <div>
        {socialMediaLinks.map((link, index) => (
          <div key={index} className="flex items-center space-x-2 space-y-2">
            <h3 className="font-semibold text-xl">{link.icon}</h3>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="list-decimal text-lg leading-relaxed opacity-90">
                {link.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialMedia;
