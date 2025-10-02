// import CSS module for styling
import { useState } from "react";
import styles from "./StationCard.module.css";
import PriceCard from "../PriceCard/PriceCard";

const StationCard = (props) => {
  const {
    stationName,
    stationAddress,
    openHours,
    fuelPrices,
    fuelTypes,
    services,
    moreInfoItems = [],
  } = props;

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  return (
    <div className={`${styles.container} ${showMoreInfo ? styles.expanded : ""}`}>
      {/* Station Information */}
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.title}>
            <h5 className={styles.stationName}>{stationName || "Z Test"}</h5>
            <h5 className={styles.stationAddress}>
              {stationAddress || "Cnr Test and Test Street, Testville"}
            </h5>
          </div>
          <div className={styles.openHours}>{openHours || "Open 24 Hours"}</div>
        </div>
        {/* Fuel Indicators */}
        <div className={styles.fuelIndicators}>
          <PriceCard fuelType={fuelTypes.diesel} fuelPrice={fuelPrices.diesel} />
          <PriceCard fuelType={fuelTypes.unleaded} fuelPrice={fuelPrices.unleaded} />
          <PriceCard fuelType={fuelTypes.premium} fuelPrice={fuelPrices.premium} />
        </div>
      </div>
      {/* Services Icons */}
      <div className={styles.servicesIcons}>
        <div className={`${styles.iconContainer} ${services.lpg ? "" : styles.disabled}`}>
          <img src="/images/lpg.svg" alt="LPG Bottle" />
          <div className={styles.iconLabel}>LPG swap & go</div>
        </div>
        <div className={`${styles.iconContainer} ${services.food ? "" : styles.disabled}`}>
          <img src="/images/foodDrink.svg" alt="Cup with a straw" />
          <div className={styles.iconLabel}>Drinks & food</div>
        </div>
        <div className={`${styles.iconContainer} ${services.carWash ? "" : styles.disabled}`}>
          <img src="/images/carwash.svg" alt="Carwash icon" />
          <div className={styles.iconLabel}>Car wash</div>
        </div>
        <div className={`${styles.iconContainer} ${services.trailerHire ? "" : styles.disabled}`}>
          <img src="/images/trailerHire.svg" alt="Trailer icon" />
          <div className={styles.iconLabel}>Trailer hire</div>
        </div>
        <div
          className={`${styles.iconContainer} ${styles.toggleContainer} ${
            services.showMore ? "" : styles.disabled
          }`}
          onClick={toggleMoreInfo}
        >
          <img
            src="/images/showMoreToggle.svg"
            alt="Show more options"
            className={`${styles.toggleIcon} ${showMoreInfo ? styles.rotated : ""}`}
          />
        </div>
      </div>
      {/* More Information */}
      {moreInfoItems.length > 0 && (
        <div className={`${styles.moreInfo} ${showMoreInfo ? styles.visible : ""}`}>
          <div className={styles.moreInfoContent}>
            {moreInfoItems.length <= 2 ? (
              // Single column for 1-2 items
              <div className={styles.moreInfoSingle}>
                <ul>
                  {moreInfoItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              // Two columns for 3+ items
              <>
                <div className={styles.moreInfoLeft}>
                  <ul>
                    {moreInfoItems
                      .slice(0, Math.ceil(moreInfoItems.length / 2))
                      .map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
                <div className={styles.moreInfoRight}>
                  <ul>
                    {moreInfoItems.slice(Math.ceil(moreInfoItems.length / 2)).map((item, index) => (
                      <li key={index + Math.ceil(moreInfoItems.length / 2)}>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StationCard;
