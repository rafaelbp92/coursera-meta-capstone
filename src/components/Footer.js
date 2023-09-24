import logo from "../assets/restaurant.jpg";

const Footer = () => {
  return (
    <footer id="mainFooter">
      <img src={logo} alt="footerLogo" width={160} height={280} />
      <section>
        <h1>Doormat Navigation</h1>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <a href="reservations">Reservations</a>
          </li>
          <li>
            <a href="orderOnline">Order Online</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
        </ul>
      </section>
      <section>
        <h1>Contact</h1>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h1>Social Media Links</h1>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
