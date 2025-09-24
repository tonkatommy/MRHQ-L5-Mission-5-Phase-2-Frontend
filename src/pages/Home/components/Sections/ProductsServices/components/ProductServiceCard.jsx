// Import CSS modules
import styles from "./ProductServiceCard.module.css";

// Import other components

const ProductServiceCard = ({ imageSrc, title, arrowSrc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src={imageSrc} className={styles.cardImage} alt="Product/Service Image" />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardArrowContainer}>
        <img src={arrowSrc} className={styles.cardArrow} alt="White arrow in blue circle" />
      </div>
    </div>
  );
};

export default ProductServiceCard;
