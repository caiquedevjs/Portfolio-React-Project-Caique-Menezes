/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './projects.css';  // Certifique-se de importar o seu arquivo de estilo

const Projects = () => {
  return (
    <div className='projects' style={{ marginTop: '20%' }}>
      <h3 style={{ color: 'white', fontWeight: '400', letterSpacing: '2px', border: '2px solid #9370db', borderRadius: '8px', backgroundColor: '#9370db'}}>🗂 Projects</h3>
      <div className="container text-center" style={{ marginTop: '5%' }}>
        <div className="row">
          <div className="col">
            <div className="card " style={{ border: '3px solid #9370db', borderRadius: '20px' }}>
              <img src="/Captura de tela de 2024-01-16 18-03-29.png" className="card-img-top projects-thumbnail" alt="..." style={{ border: '3px solid #9370db', borderRadius: '20px' }} />
              <div className="card-body">
                <h5 className="card-title">Form dark/ligth theme</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#9370db', border: '2px solid #9370db' }}>Go somewhere</a>
              </div>
              <div className='skills-user'>
                <img src='/HTML.svg' className='skills-icons'/>
                <img src='/CSS.svg' className='skills-icons'/>
                <img src='/JavaScript.svg' className='skills-icons'/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ border: '3px solid #9370db', borderRadius: '20px' }}>
              <img src="/Captura de tela de 2024-01-16 18-01-29.png" className="card-img-top projects-thumbnail" alt="..." style={{ border: '3px solid #9370db', borderRadius: '20px' }} />
              <div className="card-body">
                <h5 className="card-title">Task list to do</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#9370db', border: '2px solid #9370db' }}>Repository</a>
                
              </div>
              <div className='skills-user'>
                <img src='/HTML.svg' className='skills-icons'/>
                <img src='/CSS.svg' className='skills-icons'/>
                <img src='/JavaScript.svg' className='skills-icons'/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ border: '3px solid #9370db', borderRadius: '20px' }}>
              <img src="/Captura de tela de 2024-01-16 18-04-57.png" className="card-img-top projects-thumbnail" alt="..." style={{ border: '3px solid #9370db', borderRadius: '20px' }} />
              <div className="card-body">
                <h5 className="card-title">Display time motivational</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#9370db', border: '2px solid #9370db' }}>Repository</a>
              </div>
              <div className='skills-user'>
                <img src='/HTML.svg' className='skills-icons'/>
                <img src='/CSS.svg' className='skills-icons'/>
                <img src='/JavaScript.svg' className='skills-icons'/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ border: '3px solid #9370db', borderRadius: '20px' }}>
              <img src="/Captura de tela de 2024-01-16 18-05-40.png" className="card-img-top projects-thumbnail" alt="..." style={{ border: '3px solid #9370db', borderRadius: '20px' }} />
              <div className="card-body">
                <h5 className="card-title">IMC calculator</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#9370db', border: '2px solid #9370db' }}>Repository</a>
              </div>
              <div className='skills-user'>
                <img src='/HTML.svg' className='skills-icons'/>
                <img src='/CSS.svg' className='skills-icons'/>
                <img src='/JavaScript.svg' className='skills-icons'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
