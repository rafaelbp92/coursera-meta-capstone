import Card from "./Card";

const SPECIALS = [
  {
    key: 1,
    title: "Greek Salad",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
    image: require("../assets/greek salad.jpg"),
  },
  {
    key: 2,
    title: "Bruschetta",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    price: 5.99,
    image: require("../assets/bruchetta.jpg"),
  },
  {
    key: 3,
    title: "Lemon Dessert",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 5.00,
    image: require("../assets/lemon dessert.jpg"),
  },
];

const SpecialsSection = () => {
  return (
    <section id="specials">
      {SPECIALS.map((special) => {
        return (
          <Card
            key={special.key}
            title={special.title}
            image={special.image}
            price={special.price}
            text={special.text}
          />
        );
      })}
    </section>
  );
};

export default SpecialsSection;
