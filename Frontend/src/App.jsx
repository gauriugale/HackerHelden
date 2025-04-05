import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import LoginForm from './component/login.jsx';
import SignUpForm from './component/signup.jsx';
import ContactUsForm from './component/contactus.jsx';
import Footer from './component/footer.jsx';
import CardsRow from './component/Card.jsx';
import Welcome from './component/welcome.jsx';
import HomePage from './component/HomePage.jsx';
import Cards from './component/Card.jsx';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/contact" element={<ContactUsForm />} />
        <Route path="/card" element={<Cards />} />
      </Routes>
      
    </Router>
    <Footer />
    </>
    
  );
};

export default App;
