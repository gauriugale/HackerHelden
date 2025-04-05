import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleRegisterClick = () => {
    navigate('/signup');
  }
  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <nav className={`navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          EduCourses
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-primary me-2" onClick={handleLoginClick}>Login</button>
            <button className="btn btn-primary me-3" onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
