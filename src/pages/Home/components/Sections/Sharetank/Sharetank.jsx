// Import CSS modules
import styles from "./Sharetank.module.css";

const Sharetank = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.header}>
            <p>Z App</p>
            <h2>Sharetank</h2>
          </div>
          <p className={styles.description}>
            Sign up to Sharetank, the virtual fuel tank you can fill anytime, anywhere and share
            with up to 5 friends or whānau.
          </p>
          <button className={styles.button}>
            Learn more
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="35" height="35" rx="17.5" fill="white" />
              <g clip-path="url(#clip0_1613_873)">
                <path
                  d="M18.6897 9.91969C18.971 9.65096 19.3524 9.5 19.7502 9.5C20.1479 9.5 20.5294 9.65096 20.8107 9.91969L27.5608 16.3702C27.842 16.639 28 17.0036 28 17.3837C28 17.7638 27.842 18.1283 27.5608 18.3971L20.8107 24.8476C20.5278 25.1087 20.1489 25.2532 19.7556 25.2499C19.3623 25.2467 18.9861 25.0959 18.708 24.8302C18.4298 24.5644 18.2721 24.2049 18.2687 23.829C18.2652 23.4532 18.4164 23.0911 18.6897 22.8207L22.7502 18.8171H8.50002C8.10219 18.8171 7.72066 18.6661 7.43935 18.3973C7.15804 18.1284 7 17.7638 7 17.3837C7 17.0035 7.15804 16.6389 7.43935 16.3701C7.72066 16.1012 8.10219 15.9502 8.50002 15.9502H22.7502L18.6897 11.9466C18.4085 11.6778 18.2505 11.3132 18.2505 10.9331C18.2505 10.553 18.4085 10.1885 18.6897 9.91969Z"
                  fill="#F26522"
                />
              </g>
              <defs>
                <clipPath id="clip0_1613_873">
                  <rect width="21" height="17" fill="white" transform="translate(7 9.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className={styles.contentRight}>
          <img src="/images/sharetankApp.png" alt="Sharetank" />
        </div>
      </div>
    </div>
  );
};

export default Sharetank;
