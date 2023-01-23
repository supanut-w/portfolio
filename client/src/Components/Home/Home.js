import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi I'm a</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full Stack Software Developer",
                "MERN Stack",
                "Web Developer",
                "UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
              delay: 5
            }}
          />
        </h3>
        <div className="button-for-action">
          <div className="hire-me-button">
            Hire Me
          </div>
          <div className="get-resume-button">
            <a href="/" download="supanut-cv">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
