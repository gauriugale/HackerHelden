import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/faq" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/football" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/basketball" className="text-light text-decoration-none">Login</a></li>
              <li><a href="/tennis" className="text-light text-decoration-none">Join</a></li>
              <li><a href="/badminton" className="text-light text-decoration-none">Gift the Course</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase">Community & Events</h5>
            <ul className="list-unstyled">
              <li><a href="/community" className="text-light text-decoration-none">Community Hub</a></li>
              <li><a href="/events" className="text-light text-decoration-none">Upcoming Events</a></li>
              <li><a href="/blogs" className="text-light text-decoration-none">Blogs & Tips</a></li>
              <li><a href="/partners" className="text-light text-decoration-none">Our Partners</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase">Get the App</h5>
            <div className="d-flex flex-column">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="mb-2">
                <img
                  src="public/google-play-badge.png"
                  alt="Google Play"
                  className="img-fluid"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="public/app-store-badge.png"
                  alt="App Store"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
