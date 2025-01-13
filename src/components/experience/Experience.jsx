import './Experience.css';
import ExperienceCard from './ExperienceCard';
import data from '../../experience_data'; 

// TODO: Make sure each row only stores 3 cards, and any additional cards are placed in a new 

const Experience = () => {
  return (
    <div className='experience' id='experience'>
      <h2>Experience</h2>
      <div className='experience-cards'>
        {data.map((e) => {
          console.log(e); 
          return (
            <ExperienceCard data={e} key={e.id}/>
          ); 
        })}
      </div>
    </div>
  ); 
}

export default Experience;