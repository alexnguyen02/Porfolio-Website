import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <h3>Comprehensive Obstacle Mapping</h3>
      <p>
        Collaborated in a team of four to develop a web application <b>within 24 hours</b> using <b>Javascript, HTML, CSS</b> and <b>Svelte</b> that helps
        pedestrians and people with accessibility needs navigate Toronto safely. Implemented <b>user authentication</b> using <b>Auth0</b>, <b>Javascript</b> and <b>Svelte</b>.
      </p>
      <FontAwesomeIcon icon={faAngleRight} className="icon" />
    </div>
  );
};

export default ProjectCard;
