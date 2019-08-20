import React from "react";
import "./session.css";
const Session = props => {
  const sessionLinks = () => (
    <div className="hero-container">
      <div className="hero-inner">
        <div className="hero-front">
          <div className="hero-front-container">
            <span className="hero-project-logo" />
            <div className="hero-login-signin">
              <button
                className="hero-login-button"
                onClick={() => props.openModal("login")}
              >
                Login
              </button>
              <button
                className="hero-signup-button"
                onClick={() => props.openModal("signup")}
              >
                Signup
              </button>
              <a
                href="#"
                onClick={() => props.demoLogin()}
                className="hero-demo"
              >
                Demo
              </a>
            </div>
            <div class="hero-minislide">
              <img
                src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 4"
              />
              <img
                src="https://images.unsplash.com/photo-1453575969485-2644bab303a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 3"
              />

              <img
                src="https://images.unsplash.com/photo-1528724747537-1634153aa3c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 2"
              />

              <img
                src="https://images.unsplash.com/photo-1500627345056-c0094b32aaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const welcomePage = () => <h1>Logged in!</h1>;
  return props.isAuthenticated ? welcomePage() : sessionLinks();
};

export default Session;
