import logo from "../assets/restauranfood.jpg";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

const LandingSection = () => {
  const navigate = useNavigate();

  function navigateToReservations() {
    navigate('/reservations');
  }

  return (
    <section id="landingSection">
      <div id="landingText">
        <h1 className="mainTitle">Little Lemon</h1>
        <h3 className="secondaryTitle">Chicago</h3>
        <p className="secondaryText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <PrimaryButton label="Reserve a Table" action={navigateToReservations}/>
      </div>
      <img alt="restaurtant-food" src={logo} width={400} height={350} />
    </section>
  );
};

export default LandingSection;
