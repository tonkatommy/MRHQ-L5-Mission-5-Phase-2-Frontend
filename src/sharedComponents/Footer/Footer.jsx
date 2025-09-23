import styles from "./Footer.module.css";
import logo from "../../assets/z_energy_logo.png";
import shield from "../../assets/shielded_logo.png";
import facebook from "../../assets/facebook Vector.svg";
import tiktok from "../../assets/tiktok Vector.svg";
import linkedin from "../../assets/linkedin Vector.svg";
import instagram from "../../assets/instagram Vector.svg";
import google from "../../assets/google_app_store_badge.png";
import apple from "../../assets/apple_app_store_badge.svg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <img src={logo}></img>
        <div className={styles.footerLinksAndSocials}>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h5>Products and Services</h5>
              <p>At the station</p>
              <p>Z App</p>
              <p>Rewards and promotions</p>
            </div>
            <div className={styles.footerColumn}>
              <h5>For business</h5>
              <p>Z Business fuel card</p>
              <p>Fuels and services</p>
              <p>Business tips and stories</p>
            </div>
            <div className={styles.footerColumn}>
              <h5>About Z</h5>
              <p>Our Story</p>
              <p>Our people</p>
              <p>What we stand for</p>
              <p>Sustainability</p>
              <p>News</p>
              <p>Careers at Z</p>
              <p>Corporate centre</p>
            </div>
          </div>
          <div className={styles.socials}>
            <button>
              Contact us
              <div className={styles.contactCircle}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1463_3888)">
                    <path
                      d="M14.9718 10.3125C15.5376 10.5008 15.8762 11.0814 15.7599 11.6685L15.7276 11.8324C15.3495 13.7571 13.6366 15.502 11.376 15.1922C6.18415 14.4768 1.87024 10.7433 0.417367 5.70779C-0.216801 3.51236 1.26741 1.56952 3.118 0.919097L3.27556 0.863675C3.83983 0.664368 4.46307 0.91609 4.73061 1.44901L6.1191 4.20686C6.35549 4.67447 6.25548 5.24271 5.87333 5.60512L4.57544 6.83251C5.7434 8.8132 7.56897 10.3411 9.72968 11.1399L10.6916 9.7752C10.9925 9.34522 11.5407 9.16763 12.0401 9.33135L14.9718 10.3125Z"
                      fill="#F26522"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1463_3888">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(14.9611 -0.0200195) rotate(85.8752)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
            <div className={styles.footerSocials}>
              <img src={facebook}></img>
              <img src={tiktok}></img>
              <img src={linkedin}></img>
              <img src={instagram}></img>
            </div>
            <div className={styles.appStoreLinks}>
              <img src={google} className={styles.google}></img>
              <img src={apple} className={styles.apple}></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBreak}></div>
      <div className={styles.footerBottom}>
        <div className={styles.bottomLeft}>
          <p>Privacy</p>
          <p>Terms of use</p>
          <p>Fuel Safety Data Sheets</p>
          <p>Investor relations</p>
        </div>
        <div className={styles.bottomRight}>
          <p>©Z Energy Limited. All trademarks are used under license.</p>
          <img src={shield}></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
