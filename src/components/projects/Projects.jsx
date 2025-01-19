import './Projects.css'; 
import ProjectCard from './ProjectCard';
import data from '../../data/projects_data'; 
import PopUpCard from './PopUpCard';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsPopUpOpen(true); 
  }; 

  const closePopUp = () => {
    setIsPopUpOpen(false);
  }; 

  useEffect(() => {
      if (isPopUpOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }, [isPopUpOpen]);

  return (
    <div className='projects' id='projects'>
      {isPopUpOpen && (
        <div className='popup-card' id='popup-card'>
          <PopUpCard 
            data={selectedProject} 
            isOpen={isPopUpOpen} 
            onClose={closePopUp} />
        </div>
      )}
      <h2>Projects</h2>
      <div className='project-cards'>
        {data.map((project) => {
          return (
            <ProjectCard 
              data={project} key={project.id} 
              className='single-card'
              onClick={handleProjectClick}
            /> 
          )
        })}
      </div>
      {isPopUpOpen && <div id='overlay' onClick={closePopUp}></div>}
    </div>
  ); 
}

export default Projects; 