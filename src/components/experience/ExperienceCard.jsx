import "./ExperienceCard.css";
import imgService from "../../utils/image";

// TODO: Make this component render the data dynamically.
// TODO: For company's image, construct a function that takes in the company's name and returns the image URL, and make a function call to that function at the src attribute instead.

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card">
      <a href={`${data.companyWebsite}`} target="_blank" rel="noopener noreferrer">
        <img
          src={imgService.getImageURL(data.imageURL)}
          alt={`${data.company} logo`}
        />
      </a>
      <h3>{data.position}</h3>
      <h4>{data.company}</h4>
      <h5>
        {data.startDate} - {data.endDate}
      </h5>
      <p>{data.description}</p>
    </div>
  );
};

export default ExperienceCard;
