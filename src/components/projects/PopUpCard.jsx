import "./PopUpCard.css";
import imgService from "../../utils/image";

const PopUpCard = ({ data, isOpen, onClose }) => {
  return isOpen ? (
    <div className="popup">
      <div className="button">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="popup-inner">
        <img
          src={imgService.getImageURL(data.imageURL)}
          alt="Project image"
          className="popup-image"
        />
        <h4>{data.projectName}</h4>
        <p><span className="keyword">Tools</span>: {data.techStack}</p>
        <a
          href={data.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          View source code
        </a>
      </div>
    </div>
  ) : null;
};

export default PopUpCard;
