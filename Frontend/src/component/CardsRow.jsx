import React from 'react';
import './CardsRow.css';

const CardsRow = () => {
  return (
    <>

    <h2><b>Start Learning with your favourite courses..!!!</b></h2>
    <div className="container mt-5 cards-container">
      <div className="card">
        <img src="public/1.jpg" alt="Web Developement" />
        <div className="card-body">
          <h3 className="card-title">Web Developement</h3>
          <p className="card-text">
            Learn to build websites and web applications using HTML, CSS, and JavaScript.
          </p>
          <button className="card-button">Get Course</button>
        </div>
      </div>

      <div className="card">
        <img src="public/2.jpg" alt="Cloud Computing" />
        <div className="card-body">
          <h3 className="card-title">Cloud Computing</h3>
          <p className="card-text">
            Understand the fundamentals of cloud computing and how to use cloud services.
          </p>
          <button className="card-button">Get Course</button>
        </div>
      </div>

      <div className="card">
        <img src="public/3.jpg" alt="Artificial Intelligence" />
        <div className="card-body">
          <h3 className="card-title">Artificial Intelligence</h3>
          <p className="card-text">
            Explore the world of AI and learn how to build intelligent systems.
          </p>
          <button className="card-button">Get Course</button>
        </div>
      </div>

      <div className="card">
        <img src="public/4.jpg" alt="Data Science" />
        <div className="card-body">
          <h3 className="card-title">Data Science</h3>
          <p className="card-text">
            Dive into data analysis, visualization, and machine learning techniques.
          </p>
          <button className="card-button">Get Course</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardsRow;