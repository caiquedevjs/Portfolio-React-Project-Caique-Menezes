/* eslint-disable no-unused-vars */
import React from 'react';
import './Aboutme.css';

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/MemojiSusurro-Caique.png"
            className='img-aboutme'
            alt="Imagem de perfil"
          />
        </div>
        <div className="col-md-6 aboutme">
          <h3>📢 About-me</h3>
          <p className="fw-light">
            My name is Caique Menezes, I'm a{' '}
            <span className="styledSpan">front-end developer</span>, a{' '}
            <span className="styledSpan">Computing student</span> at the Federal University
            of Bahia and a <span className="styledSpan">Systems Analysis and Development student </span>
            at the Salvador University. Passionate about{' '}
            <span className="styledSpan">technology and development</span>, I dedicate myself
            daily to studies in the area of web development, my journey as a dev is just beginning,
            and I am always willing to learn new things and expand my potential to the maximum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

