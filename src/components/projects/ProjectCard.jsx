import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ data, onClick }) => {
  return (
    <div className="project-card">
      <h3>{data.projectName}</h3>
      <p>
        {data.description}
      </p>
      <button 
        data-popup-target="popup-card"
        className= 'project-button' 
        onClick={() => onClick(data)}>
        <FontAwesomeIcon icon={faAngleRight} className="icon" />
      </button>
    </div>
  );
};

export default ProjectCard;
