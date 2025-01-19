import "./ExperienceCard.css";
import imgService from "../../utils/image";

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card">
      <a href={`${data.companyWebsite}`} target="_blank" rel="noopener noreferrer">
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
      </a>
    </div>
  );
};

export default ExperienceCard;
