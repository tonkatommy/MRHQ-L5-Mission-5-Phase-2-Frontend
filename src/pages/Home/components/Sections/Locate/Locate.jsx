// Import CSS modules and React Router
import { useNavigate } from "react-router-dom";
import styles from "./Locate.module.css";

const Locate = () => {
  const navigate = useNavigate();

  const handleFindStation = () => {
    navigate("/find-station");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>There where you need us</h2>
        <button className={styles.button} onClick={handleFindStation}>
          Find your closest Z
          <svg
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="35" height="35" rx="17.5" fill="white" />
            <g clipPath="url(#clip0_1656_990)">
              <path
                d="M11.5017 15.2123C11.5017 11.7525 14.4131 8.9502 18.0017 8.9502C21.5902 8.9502 24.5017 11.7525 24.5017 15.2123C24.5017 19.1734 20.4324 23.9215 18.7329 25.7311C18.3334 26.1561 17.6665 26.1561 17.267 25.7311C15.5676 23.9215 11.4983 19.1734 11.4983 15.2123H11.5017ZM18.0017 17.4502C18.5763 17.4502 19.1274 17.2263 19.5337 16.8278C19.9401 16.4293 20.1683 15.8888 20.1683 15.3252C20.1683 14.7616 19.9401 14.2211 19.5337 13.8226C19.1274 13.4241 18.5763 13.2002 18.0017 13.2002C17.427 13.2002 16.8759 13.4241 16.4696 13.8226C16.0633 14.2211 15.835 14.7616 15.835 15.3252C15.835 15.8888 16.0633 16.4293 16.4696 16.8278C16.8759 17.2263 17.427 17.4502 18.0017 17.4502Z"
                fill="#F26522"
              />
            </g>
            <defs>
              <clipPath id="clip0_1656_990">
                <rect width="13.0034" height="17" fill="white" transform="translate(11.4983 9)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <img src="/images/mapOverlay.png" className={styles.image} alt="Map Overlay" />
    </div>
  );
};

export default Locate;
