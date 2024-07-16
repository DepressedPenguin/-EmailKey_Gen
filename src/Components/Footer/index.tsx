import styles from "./footer.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  // FUNCTION TO SCROOL TO TTOP

  return (
    <>
      <footer className={styles.footer_Card}>
        <p className={styles.p_penguin}>
          <a
            className={styles.omit_deco}
            href="https://www.linkedin.com/in/zakaria-elaroussi-609121223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code By : DepressedPenguin
          </a>
        </p>
      </footer>
    </>
  );
}
