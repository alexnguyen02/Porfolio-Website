import './ExperienceCard.css';

// TODO: Make this component render the data dynamically.
// TODO: For company's image, construct a function that takes in the company's name and returns the image URL, and make a function call to that function at the src attribute instead. 

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      {/* Company's image */}
      <img src={new URL(`../../assets/coubon-icon.png`, import.meta.url).href} alt='CouBon logl'/>
      <h3>Position name</h3>
      <h4>Company name</h4>
      <h5>Start date - End date</h5>
      <p>
        Tasks accomplished: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet numquam
        iusto saepe consequuntur, quaerat repellendus ab. Porro, ut harum odit
        numquam possimus et, maiores nemo corrupti nam cumque fugiat adipisci!
      </p>
    </div>
  );
};

export default ExperienceCard;