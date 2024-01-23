/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Intro.css';


const styledSpan={
  color: '#696969',
}
const Intro = () => {
  

  return (
    <div className="intro">
      <div className='Imagem-intro'>
        <img src="/Design sem nome(1).png" className="img-thumbnail" alt="..." />
      </div>
      <div className="container-fluid">
        <h1 className='Intro-logo'>Hi, my name is Caique and I'm a <span style={styledSpan}>front-end developer.</span> 💻🚀</h1>
        <div className='Curriculum'>
          <button className='btn-curriculum'>
          <img src='/icons8-curriculum-64(1).png'/>
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Intro;
