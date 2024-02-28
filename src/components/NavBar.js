/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import './NavBar.css';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {
  

  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);

  const styleWithoutHover = {
    color: 'white', // Cor padrão sem hover
  };

  const styleWithHover = {
    color: '#9370db',// Cor com hover
  };

  const activeStyle = {
    color: '#9370db',
  };
  const sizeLogo ={
    width: '100px',
    marginRight: '20px'
  }

  const iconSize = 30;

  return (
    <div className='NavBar-bar'>
      
     <div className='logotext'> //Hello, World!</div>
      <ul className="nav nav-underline" style={{marginRight: '5%'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={activeStyle}>Me</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        
      </ul>
      <div className='head-icons'>
        <FaGithub size={iconSize} style={isGithubHovered ? styleWithHover : styleWithoutHover}
          onMouseEnter={() => setIsGithubHovered(true)}
          onMouseLeave={() => setIsGithubHovered(false)} />

        <RiLinkedinFill size={iconSize} style={isLinkedinHovered ? styleWithHover : styleWithoutHover}
          onMouseEnter={() => setIsLinkedinHovered(true)}
          onMouseLeave={() => setIsLinkedinHovered(false)} />

        <FaDiscord size={iconSize} style={isDiscordHovered ? styleWithHover : styleWithoutHover}
          onMouseEnter={() => setIsDiscordHovered(true)}
          onMouseLeave={() => setIsDiscordHovered(false)} />
      </div>
    </div>
  );
};

export default NavBar;
