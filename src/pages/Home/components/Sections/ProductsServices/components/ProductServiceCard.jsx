// Import CSS modules
import styles from "./ProductServiceCard.module.css";

// Import other components

const ProductServiceCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>What you need, made easy</h1>
        <p className={styles.description}>
          Moving furniture? Hangry for a pie and barista made coffee? Have a dirty car that needs
          some love? Come on in - we've got you covered.
        </p>
        <button className={styles.button}>Products and services</button>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.serviceCards}></div>
      </div>
    </div>
  );
};

export default ProductServiceCard;
