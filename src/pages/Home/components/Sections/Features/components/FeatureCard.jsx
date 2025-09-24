// Import CSS modules
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ subTitle, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.subtitle}>{subTitle}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <rect width="35" height="35" rx="17.5" fill="url(#paint0_linear_1656_647)" />
        <path
          d="M18.6897 9.41969C18.971 9.15096 19.3524 9 19.7502 9C20.1479 9 20.5294 9.15096 20.8107 9.41969L27.5608 15.8702C27.842 16.139 28 16.5036 28 16.8837C28 17.2638 27.842 17.6283 27.5608 17.8971L20.8107 24.3476C20.5278 24.6087 20.1489 24.7532 19.7556 24.7499C19.3623 24.7467 18.9861 24.5959 18.708 24.3302C18.4298 24.0644 18.2721 23.7049 18.2687 23.329C18.2652 22.9532 18.4164 22.5911 18.6897 22.3207L22.7502 18.3171H8.50002C8.10219 18.3171 7.72066 18.1661 7.43935 17.8973C7.15804 17.6284 7 17.2638 7 16.8837C7 16.5035 7.15804 16.1389 7.43935 15.8701C7.72066 15.6012 8.10219 15.4502 8.50002 15.4502H22.7502L18.6897 11.4466C18.4085 11.1778 18.2505 10.8132 18.2505 10.4331C18.2505 10.053 18.4085 9.6885 18.6897 9.41969Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1656_647"
            x1="0"
            y1="17.5"
            x2="35"
            y2="17.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.211469" stopColor="#1E196A" />
            <stop offset="0.967931" stopColor="#3129AC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FeatureCard;
