// Import CSS module for styling
import styles from "./ProductsServices.module.css";

// Define the ProductsServices functional component
const ProductsServices = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h2 className={styles.title}>What you need made easy</h2>
            <p className={styles.description}>
              Moving furniture? Hangry for a pie and barista made coffee? Have a dirty car that
              needs some love? Come on in - we've got you covered.
            </p>
            <button className={styles.button}>Products and services</button>
          </div>
          <div className={styles.contentRight}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;
