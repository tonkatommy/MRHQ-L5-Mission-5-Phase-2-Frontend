import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/z_energy_logo.png";
import loginButton from "../../assets/login.svg";
import downArrow from "../../assets/chevron-down.svg";

function Header() {
  const location = useLocation();

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link to="/">
            <img src={logo} alt="Z Energy Logo"></img>
          </Link>

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

        <Link to="/find-station" className={location.pathname === '/find-station' ? styles.active : ''}>
          <p>Locations</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
