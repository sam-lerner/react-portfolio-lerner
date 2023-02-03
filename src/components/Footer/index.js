import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="container text-center">
        <h6>
          Designed by Sam Lerner
        </h6>
      <h1>
        {/* <a href="mailto:sam.a.lerner@gmail.com"><AiFillMail /></a> */}
        <a href="https://www.linkedin.com/in/sam-lerner-5943b41b3/" ><AiFillLinkedin /></a>
        <a href="https://github.com/sam-lerner" ><AiFillGithub /></a>
      </h1>
      </div>
    </footer>
  );
};

export default Footer;
