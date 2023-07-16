import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGit, FaLinkedin } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/AdeoluOluwaseg3" target="_blank" rel="noreferrer"><BsTwitter /></a>
        
      </div>
      <div>
        <a href="https://www.instagram.com/segunadeolu/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>
      <div>
        <a href="https://www.facebook.com/segun.adeolu1/" target="_blank" rel="noreferrer"> <FaFacebookF /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/oluwasegunadeolu/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/moxie99" target="_blank" rel="noreferrer">
          <FaGit/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
