import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm"; 

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="call-to-action">
          <h3>Let's connect!</h3>
          <p>
            Feel free to reach out if you're interested in my work, or want to
            give feedback on this porfolio website.
          </p>
          <div className="social-links">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            <FontAwesomeIcon icon={faGithub} className="github" />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
