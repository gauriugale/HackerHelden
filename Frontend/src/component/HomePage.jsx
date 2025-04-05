import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./welcome";

const HomePage = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const darkModeButtonStyle = {
        position: "fixed",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 1000,
    };

    const handleEnrolClick = () => {
        navigate('/card');
    };

    return (
        <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
            <Welcome />
            <button
                className="btn btn-secondary"
                style={darkModeButtonStyle}
                onClick={toggleDarkMode}
            >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <header className="text-center py-5">
                <h1>Welcome to EduLearn</h1>
                <p>Explore a variety of courses to enhance your skills!</p>
            </header>

            <div className="container py-5">
                <h2 className="text-center mb-4">Our Popular Courses</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="https://via.placeholder.com/300x200"
                                className="card-img-top"
                                alt="Course 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">
                                    Learn HTML, CSS, JavaScript, and React to build modern web
                                    applications.
                                </p>
                                <a href="#" className="btn btn-primary" onClick={handleEnrolClick}>
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="https://via.placeholder.com/300x200"
                                className="card-img-top"
                                alt="Course 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Data Science</h5>
                                <p className="card-text">
                                    Dive into data analysis, machine learning, and AI with Python.
                                </p>
                                <a href="#" className="btn btn-primary" onClick={handleEnrolClick}>
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="https://via.placeholder.com/300x200"
                                className="card-img-top"
                                alt="Course 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Graphic Design</h5>
                                <p className="card-text">
                                    Master tools like Photoshop and Illustrator to create stunning
                                    designs.
                                </p>
                                <a href="#" className="btn btn-primary" onClick={handleEnrolClick}>
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
