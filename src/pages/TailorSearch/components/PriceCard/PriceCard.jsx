import styles from "./PriceCard.module.css";

const PriceCard = (props) => {
  const { fuelType, fuelPrice } = props;
  let bgColour = "";
  switch (fuelType) {
    case "D":
      bgColour = "#36353a";
      break;
    case "91":
      bgColour = "#31522f";
      break;
    case "96":
      bgColour = "#b64138";
      break;
    default:
      bgColour = "#d5d4dc";
      break;
  }

  return (
    <div style={{ background: bgColour }} className={`${styles.fuelBox}`}>
      <div className={styles.logoAndFuelType}>
        <img
          className={styles.logoSmall}
          src="/images/z-energy-logo-small.png"
          alt="Z Energy Logo"
        />
        <div className={styles.fuelTypeText}>{fuelType || ""}</div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.currencySign}>$</div>
        <div className={styles.price}>{fuelPrice || "9.99"}</div>
      </div>
    </div>
  );
};

export default PriceCard;
