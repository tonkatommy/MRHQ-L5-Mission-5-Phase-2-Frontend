// import CSS module for styling
import styles from "./StationCard.module.css";

const StationCard = (props) => {
  const { stationName, stationAddress, openHours, fuelPrices, fuelTypes, services } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.title}>
            <h5 className={styles.stationName}>{stationName || "Z Stratford"}</h5>
            <h5 className={styles.stationAddress}>
              {stationAddress || "Cnr Broadway and Regan Street, Stratford"}
            </h5>
          </div>
          <div className={styles.openHours}>{openHours || "Open 24 Hours"}</div>
        </div>
        <div className={styles.fuelIndicators}>
          <div className={`${styles.fuelDiesel} ${styles.fuelBox}`}>
            <div className={styles.logoAndFuelType}>
              <img
                className={styles.logoSmall}
                src="/public/images/z-energy-logo-small.png"
                alt="Z Energy Logo"
              />
              <div className={styles.fuelTypeText}>{fuelTypes.diesel || "D"}</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.currencySign}>$</div>
              <div className={styles.price}>{fuelPrices.diesel || "2.05"}</div>
            </div>
          </div>
          <div className={`${styles.fuelUnleaded} ${styles.fuelBox}`}>
            <div className={styles.logoAndFuelType}>
              <img
                className={styles.logoSmall}
                src="/public/images/z-energy-logo-small.png"
                alt="Z Energy Logo"
              />
              <div className={styles.fuelTypeText}>{fuelTypes.unleaded || "91"}</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.currencySign}>$</div>
              <div className={styles.price}>{fuelPrices.unleaded || "2.35"}</div>
            </div>
          </div>
          <div className={`${styles.fuelPremium} ${styles.fuelBox}`}>
            <div className={styles.logoAndFuelType}>
              <img
                className={styles.logoSmall}
                src="/public/images/z-energy-logo-small.png"
                alt="Z Energy Logo"
              />
              <div className={styles.fuelTypeText}>{fuelTypes.premium || "96"}</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.currencySign}>$</div>
              <div className={styles.price}>{fuelPrices.premium || "2.55"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesIcons}>
        <div className={`${styles.iconContainer} ${services.lpg ? "" : styles.disabled}`}>
          <img src="/public/images/lpg.svg" alt="LPG Bottle" />
          <div className={styles.iconLabel}>LPG swap & go</div>
        </div>
        <div className={`${styles.iconContainer} ${services.food ? "" : styles.disabled}`}>
          <img src="/public/images/foodDrink.svg" alt="Cup with a straw" />
          <div className={styles.iconLabel}>Drinks & food</div>
        </div>
        <div className={`${styles.iconContainer} ${services.carWash ? "" : styles.disabled}`}>
          <img src="/public/images/carwash.svg" alt="Carwash icon" />
          <div className={styles.iconLabel}>Car wash</div>
        </div>
        <div className={`${styles.iconContainer} ${services.trailerHire ? "" : styles.disabled}`}>
          <img src="/public/images/trailerHire.svg" alt="Trailer icon" />
          <div className={styles.iconLabel}>Trailer hire</div>
        </div>
        <div className={`${styles.iconContainer} ${services.showMore ? "" : styles.disabled}`}>
          <img src="/public/images/showMoreToggle.svg" alt="Show more options" />
        </div>
      </div>
    </div>
  );
};

export default StationCard;
