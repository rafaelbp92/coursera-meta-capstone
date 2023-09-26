const Card = ({ image, title, price, text, action }) => {
  return (
    <article className="card" style={styles.card}>
      <img src={image} alt="card" style={styles.cardImage}/>
      <div style={styles.cardContainer}>
        <header style={styles.cardHeader}>
          <h4>{title}</h4>
          <h4 style={styles.priceText}>${price.toFixed(2)}</h4>
        </header>
        <p style={styles.cardText}>{text}</p>
      </div>
    </article>
  );
};

export default Card;

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EDEFEE",
    borderRadius: "1rem",
    flex: "0 1 25%"
  },
  cardImage: {
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
    width: "100%",
    height: "12.5rem",
    objectFit: "cover"
  },
  cardContainer: {
    padding: "20px"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  cardText: {
    color: "#495E57"
  },
  priceText: {
    color: "#EE9972"
  }
};
