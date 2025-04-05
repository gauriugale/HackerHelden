import React from 'react';
import { useNavigate } from 'react-router-dom';
const CourseDetail = () => {
  const navigate = useNavigate();
  const handleEnrollClick = () => {
    navigate('/login'); // Navigate to the enrollment page
  };
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Course Thumbnail"
        style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Course Title</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
        This is a comprehensive course designed to provide in-depth knowledge and practical skills.
        Explore the content, benefits, and outcomes of this course to enhance your learning journey.
      </p>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>What You'll Learn</h2>
      <ul style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
        <li>Key concepts and principles of the subject</li>
        <li>Hands-on projects to apply your knowledge</li>
        <li>Real-world examples and case studies</li>
        <li>Expert guidance and support</li>
      </ul>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Course Details</h2>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
        Duration: 10 weeks<br />
        Level: Beginner to Intermediate<br />
        Format: Online, self-paced
      </p>
      <button
        className="btn btn-primary"
        style={{ padding: '10px 20px', fontSize: '1.2rem', borderRadius: '5px' }}
        onClick={handleEnrollClick}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;
