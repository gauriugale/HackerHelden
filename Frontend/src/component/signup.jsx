import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const engineeringCourses = [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ];

  return (
    <div className="container py-5 bg-light">
      <form className="p-4 border rounded bg-light">
        <h1 className="mb-4 text-dark">Student Registration</h1>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label text-dark">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label text-dark">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-dark">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-dark">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label text-dark">
            Course
          </label>
          <select id="course" name="course" className="form-select" required>
            <option value="">Select a course</option>
            {engineeringCourses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label text-dark">
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            className="form-control"
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label text-dark">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
