import image from "../assets/Mario and Adrian b.jpg";

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

      <img id="aboutImage" alt="restaurant-chef" src={image} width={272} height={336} />

    </section>
  );
};

export default AboutSection;
