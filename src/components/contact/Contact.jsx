import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm"; 

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="call-to-action">
          <h3>Let's connect!</h3>
          <p>
            Feel free to reach out if you're interested in my work, or would like to
            chat about building software products.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/alex-nguyen-le/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            </a>
            <a href="https://github.com/alexnguyen02" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="github" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
