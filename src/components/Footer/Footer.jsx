import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className="row">
        <Link>About</Link>
        <Link>Contact</Link>
      </nav>

      <p>© 2026 MOIVEO • Made with ❤️ by ZHX Labs</p>
    </footer>
  );
}

export default Footer;
