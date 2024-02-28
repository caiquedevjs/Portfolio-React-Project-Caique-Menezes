/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Intro.css';
import { GoMoveToTop } from "react-icons/go";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styledSpan = {
  color: '#9370db',
  fontWeight: '500'
  
};
 
const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reinicia a animação quando atinge o final do texto
        setDisplayedText('');
        setIndex(0);
      }
    }, 100); // Ajuste o intervalo conforme necessário para a velocidade da animação

    const cursorIntervalId = setInterval(() => {
      setCursorVisible((prevCursorVisible) => !prevCursorVisible);
    }, 100); // Ajuste o intervalo para controlar a velocidade de piscar do cursor

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, [index, text]);

  return (
    <div>
      <span>{displayedText}</span>
      <span style={{ opacity: cursorVisible ? 1 : 0 }}>&nbsp;|</span>
    </div>
  );
};

const Intro = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="intro">
      
      <div className="col-md-1" onClick={handleScrollToTop}>
  <button className="btn btn-light" style={{ width: '50%' }}>
    <GoMoveToTop/>
  </button>
</div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className='Imagem-intro'>
              <img src="/musashi.jpg" className="img-thumbnail" alt="imagem-perfil" />
            </div>
            <h3 className="skillsText mt-3 text-center" style={{ border: '2px solid #9370db', borderRadius: '8px', padding: '5px', width: '50%', marginLeft: '35%'}}>Skills</h3>

            <div className='skills-icons-content'>
              
            
            <img src='/HTML.svg' className='skills-icons' alt='HTML' />
            <img src='/CSS.svg' className='skills-icons' alt='CSS' />
            <img src='/JavaScript.svg' className='skills-icons' alt='JavaScript' />
            <img src='/Python-Dark.svg' className='skills-icons' alt='Python' />
            <img src='/React-Dark.svg' className='skills-icons' alt='React' />
            <img src='/VueJS-Dark.svg' className='skills-icons' alt='Vue' />
            <img src='/NodeJS-Dark.svg' className='skills-icons' alt='Node' />
            <img src='MongoDB.svg' className='skills-icons' alt='MongoDB' />
            <img src='TailwindCSS-Dark.svg' className='skills-icons' alt='Tailwind' />
            <img src='Netlify-Dark.svg' className='skills-icons' alt='Netlify' />
            <img src='Webpack-Dark.svg' className='skills-icons' alt='Webpack' />

            
                      
            
      </div>
          </div>
          <div className="col-md-6">
         
            <h1 className='Intro-logo' style={{ marginTop: '50px', marginLeft: '20px' }}>
              Meu nome é Caique, eu sou um{' '}
              <span style={styledSpan}><TypewriterEffect text="desenvolvedor web." /></span>
            </h1>
          </div>
          
          <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%', marginLeft: '5%'}}>
          <h3 className="skillsText mt-3 text-center" style={{ border: '2px solid #9370db', borderRadius: '8px', padding: '5px', width: '50%'}}>Stack</h3>
  <div className="progress mb-3" style={{ width: '50%' }} role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-success" style={{ width: "50%" }}> Node.js 50%</div>
  </div>
  <div className="progress mb-3" style={{ width: '50%' }} role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-primary" style={{ width: "60%" }}>CSS 60%</div>
  </div>
  <div className="progress mb-3" style={{ width: '50%' }} role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-info" style={{ width: "50%" }}>React.js 50%</div>
  </div>
  <div className="progress mb-3" style={{ width: '50%' }} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-warning" style={{ width: "75%" }}>JavaScript 90%</div>
  </div>
  <div className="progress" style={{ width: '50%' }} role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-orange-custom" style={{ width: "90%" }}>HTML 90%</div>
  </div>
</div>




        </div>
      </div>
    </div>
  );
};

export default Intro;
