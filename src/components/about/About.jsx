import "./About.css";
import headshot from "../../assets/headshot.png";
import LogoSlide from "./LogoSlide";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About</h2>
      <div className="description">
        <img
          src={headshot}
          alt="Professional headshot of Alex Nguyen"
          width="20%"
        />
        <div className="text">
          <p>
            {" "}
            I am a{" "}
            <strong>
              <span className="highlight"> keen problem-solver </span>
            </strong>{" "}
            who strives to make a meaningful impact through my work by
            leveraging my diverse skill set. Being <strong><span className="highlight">passionate</span></strong> about learning, I actively seek new opportunities
            that allow me to acquire valuable skills and experiences.
          </p>
          <p>
            {" "}
            Currently, I am pursuing a Bachelor of Science in{" "}
            <strong>
              <span className="highlight"> Computer Science </span>
            </strong>
            at Toronto Metropolitan University.
          </p>
        </div>
      </div>
      <div className="skills">
        <h3>Technical Skills</h3>
        <div className="tech-stack">
          <LogoSlide />
        </div>
      </div>
    </div>
  );
};

export default About;
