import TestimonialCard from "./TestimonialCard";
import {Ratings} from "../utils/ratingsEnum";

const TESTIMONIALS = [
  {
    key: 1,
    name: "Jane Doe",
    text: "The best experience in online restaurant ever",
    rating: Ratings.Great,
    image: require("../assets/person_1.jpeg"),
  },
  {
    key: 2,
    name: "John Smith",
    text: "Excellent service and delicious food!",
    rating: Ratings.Excellent,
    image: require("../assets/person_2.jpeg"),
  },
  {
    key: 3,
    name: "Alice Johnson",
    text: "Highly recommended! I'll be coming back for more.",
    rating: Ratings.Great,
    image: require("../assets/person_3.jpeg"),
  },
  {
    key: 4,
    name: "Milena Brown",
    text: "The restaurant exceeded my expectations.",
    rating: Ratings.Excellent,
    image: require("../assets/person_4.jpeg"),
  },
];

const TestimonialsSection = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.testimonialHeader}>Testimonials</h2>
      <div id="testimonialsContainer" style={styles.testiminalsContainer}>
        {TESTIMONIALS.map((testimonial) => {
          return (
            <TestimonialCard
              key={testimonial.key}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    padding: "5rem 0",
  },
  testimonialHeader: {
    marginBottom: "5rem",
    color: "#333333",
  },
  testiminalsContainer: {
    display: "flex",
    columnGap: "1rem",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }
};
