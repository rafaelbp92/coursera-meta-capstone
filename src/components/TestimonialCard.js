import {
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarRegular,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ratingLevels = { 0: faStarRegular, 0.5: faStarHalfStroke, 1: faStar };

const TestimonialCard = ({ rating, image, name, text }) => {
  return (
    <article style={styles.container} className="testimonialCard">
      <span style={styles.rating}>
        {rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))}
      </span>
      <div style={styles.personContainer}>
        <div>
          <img
            src={image}
            alt="testimonial"
            style={styles.image}
          />
        </div>
        <div>
          <h4 style={styles.personName}>{name}</h4>
        </div>
      </div>
      <blockquote style={styles.quote}>"{text}"</blockquote>
    </article>
  );
};

export default TestimonialCard;

const styles = {
  container: {
    display: "flex",
    width: "12rem",
    maxWidth: "12rem",
    height: "15rem",
    maxHeight: "15rem",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: "1rem",
    borderRadius:"1rem",
    alignItems: "center"
  },
  personContainer: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  personName: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "8rem",
    marginLeft: "1rem",
  },
  image: {
    objectFit: "cover",
    width: "4rem",
    minWidth: "4rem",
    borderRadius: "1rem"
  },
  rating: {
    color: "#495E57"
  },
  quote: {
    fontStyle: "italic"
  }
};
