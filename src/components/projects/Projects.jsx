import './Projects.css'; 
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className='project-cards'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  ); 
}

export default Projects; 