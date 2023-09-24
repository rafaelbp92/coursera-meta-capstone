import image1 from "../assets/restaurant chef B.jpg";
import image2 from "../assets/Mario and Adrian b.jpg";

const AboutSection = () => {
  return (
    <section id="aboutSection">
      <div id="aboutText">
        <h1 className="mainTitle">Little Lemon</h1>
        <h3 className="secondaryTitle">Chicago</h3>
        <p className="secondaryText">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>

        <div id="aboutImageWrapper1">
          <img alt="restaurant-staf" src={image1} width={272} height={336} />
        </div>
        <div id="aboutImageWrapper2">
          <img alt="restaurant-chef" src={image2} width={272} height={336} />
        </div>

    </section>
  );
};

export default AboutSection;
