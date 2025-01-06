import './Experience.css';
import ExperienceCard from './ExperienceCard';

// TODO: Make sure each row only stores 3 cards, and any additional cards are placed in a new 
// TODO: Make sure each card has a unique key


const Experience = () => {
  return (
    <div className='experience'>
      <h2>Experience</h2>
      <div className='experience-cards'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  ); 
}

export default Experience;