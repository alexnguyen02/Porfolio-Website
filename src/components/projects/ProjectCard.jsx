import "./ProjectCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = () => {
  return (
    <div className="project-card">
      <h3>Project name</h3>
      <p>
        Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        blanditiis, asperiores dolorem atque aut iure. Nihil deserunt voluptate
        numquam.
      </p>
      <FontAwesomeIcon icon={faAngleRight} className="icon"/>
    </div>
  );
};

export default ProjectCard;
