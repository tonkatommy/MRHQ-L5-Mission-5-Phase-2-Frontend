import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  const navigate = useNavigate();

  const handleFindStation = () => {
    navigate("/tailor-search");
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroMessage}>
          <h1>Z is for New Zealand</h1>
          <h3>Powering better journeys, today and tomorrow</h3>
          <button onClick={handleFindStation}>
            Find your closest Z
            <div className={styles.buttonCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
              >
                <path
                  d="M0.00167643 6.21231C0.00167643 2.75254 2.91314 -0.0498047 6.50168 -0.0498047C10.0902 -0.0498047 13.0017 2.75254 13.0017 6.21231C13.0017 10.1734 8.93241 14.9215 7.23293 16.7311C6.83345 17.1561 6.16652 17.1561 5.76704 16.7311C4.06756 14.9215 -0.00170898 10.1734 -0.00170898 6.21231H0.00167643ZM6.50168 8.4502C7.07631 8.4502 7.62741 8.22631 8.03374 7.8278C8.44007 7.42928 8.66834 6.88878 8.66834 6.3252C8.66834 5.76161 8.44007 5.22111 8.03374 4.82259C7.62741 4.42408 7.07631 4.2002 6.50168 4.2002C5.92704 4.2002 5.37594 4.42408 4.96961 4.82259C4.56328 5.22111 4.33501 5.76161 4.33501 6.3252C4.33501 6.88878 4.56328 7.42928 4.96961 7.8278C5.37594 8.22631 5.92704 8.4502 6.50168 8.4502Z"
                  fill="#F26522"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
