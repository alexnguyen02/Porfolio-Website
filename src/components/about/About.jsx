import "./About.css";
import headshot from "../../assets/headshot.png";
import LogoSlide from "./LogoSlide";

const About = () => {
  return (
    <div className="about">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sit
            architecto similique vero corporis voluptates aspernatur vel
            molestiae culpa. Quaerat earum repudiandae quidem, mollitia eos ab
            rem. Voluptate, eum assumenda.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sit
            architecto similique vero corporis voluptates aspernatur vel
            molestiae culpa. Quaerat earum repudiandae quidem, mollitia eos ab
            rem. Voluptate, eum assumenda.
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
