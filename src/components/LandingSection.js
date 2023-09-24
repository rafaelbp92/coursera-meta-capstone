import logo from "../assets/restauranfood.jpg";
import PrimaryButton from "./PrimaryButton";

const LandingSection = () => {
  return (
    <section id="landingSection">
      <div id="landingText">
        <h1 className="mainTitle">Little Lemon</h1>
        <h3 className="secondaryTitle">Chicago</h3>
        <p className="secondaryText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <PrimaryButton label="Reserve a Table" />
      </div>
      <img alt="restaurtant-food" src={logo} width={400} height={350} />
    </section>
  );
};

export default LandingSection;
