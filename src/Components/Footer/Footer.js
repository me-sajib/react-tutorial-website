import React from "react";
import { BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2>me.mrsajib@gmail.com</h2>
        <div className="icon">
          <BsGithub /> <BsFacebook /> <BsYoutube />
        </div>
        <div className="last-part"></div>
        <div className="copyright">
          <p>Copyright © 2021 All rights reserved by sajib-it</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
