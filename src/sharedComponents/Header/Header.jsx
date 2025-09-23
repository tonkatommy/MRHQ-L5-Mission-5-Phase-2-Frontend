import styles from "./Header.module.css";
import logo from "../../assets/z_energy_logo.png";
import loginButton from "../../assets/login.svg";
import downArrow from "../../assets/chevron-down.svg";

function Header() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <a>
            <img src={logo} alt="Z Energy Logo"></img>
          </a>

          <button>For personal</button>

          <p>For business</p>
        </div>

        <div className={styles.right}>
          <p>Z App</p>

          <p>About Z</p>

          <button>
            Login <img src={loginButton}></img>
          </button>
        </div>
      </nav>

      <div className={styles.headings}>
        <p>
          At the station <img src={downArrow}></img>
        </p>

        <p>
          Rewards and promotions <img src={downArrow}></img>
        </p>

        <p>Locations</p>
      </div>
    </div>
  );
}

export default Header;
