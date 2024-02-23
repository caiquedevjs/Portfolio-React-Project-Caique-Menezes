/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Intro.css';
import { GoMoveToTop } from "react-icons/go";
import { useState, useEffect } from 'react';

const styledSpan = {
  color: '#696969',
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
            <img src="/memojiHi2-Caique.png" alt="Right Image" style={{ width: '100%' }} />
              
          </div>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className='Imagem-intro'>
              <img src="/Design_sem_nome_1_-removebg-preview.png" className="img-thumbnail" alt="..." />
            </div>
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
            <div className='skills-icons-content '>
              
              {/* Adicione seus ícones de habilidades aqui */}
            </div>
            <h1 className='Intro-logo' style={{ marginTop: '50px', marginLeft: '20px' }}>
              <span role="img" aria-label="Wave" className="wave">👋🏼</span> my name is Caique and I'm a{' '}
              <span style={styledSpan}><TypewriterEffect text="front-end developer." /></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
