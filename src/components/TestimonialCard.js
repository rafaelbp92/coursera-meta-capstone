const TestimonialCard = ({ rating, image, name, text }) => {
  return (
    <article style={styles.container} className="testimonialCard">
      <h4>{rating}</h4>
      <div style={styles.personContainer}>
        <div>
          <img src={image} alt="testimonial" width={45} height={45} />
        </div>
        <div>
          <h4 style={styles.personName}>{name}</h4>
        </div>
      </div>
      <div>{text}</div>
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
};
