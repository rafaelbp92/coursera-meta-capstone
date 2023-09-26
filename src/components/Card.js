const Card = ({ image, title, price, text, action }) => {
  return (
    <article className="card" style={styles.card}>
      <img src={image} alt="card" width={270} height={175} style={styles.cardImage}/>
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
    maxWidth: 270,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EDEFEE",
    borderRadius: "1rem",
    minHeight: 450
  },
  cardImage: {
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem"
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
