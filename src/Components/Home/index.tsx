import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import sliders from "../../slider.json";
import EmailHunter from "../EmailHunter";

export default function Home() {
  // STATE TO HOLD CURRENT INDEX
  const [, setCurrentIndex] = useState<number>(0);

  // USE EFFECT TO MAKE SLIDERS CHANGE AUTOMATICALLY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.home_section}>
        {/* Uncomment and fix this if needed
        <p className={styles.headline_solgan}>
          Empower Your Strategy: Generate Keywords and Extract Emails with Ease
        </p>
        <div className={styles.features_tool}>
          <div className={styles.background_an_ul}>
            <img
              className={styles.img_fix_size}
              src={sliders[currentIndex].slider1}
              alt="background features"
            />
          </div>
          <div className={styles.list_features}>
            <h1>Features:</h1>
            <ul>
              <li>
                <strong>Social Media Keywords:</strong> Obtain keywords for
                Pinterest, Facebook, Twitter...
              </li>
              <li>
                <strong>Real-time Suggestions:</strong> Receive instant keyword
                recommendations.
              </li>
              <li>
                <strong>Automated Monitoring:</strong> Track social media trends
                automatically.
              </li>
              <li>
                <strong>Enhanced Readability:</strong> Clear and concise keyword
                suggestions.
              </li>
              <li>
                <strong>User-friendly Interface:</strong> Intuitive and
                easy-to-navigate tools.
              </li>
              <Link to="./inputKey">
                <button
                  className={`${styles.btn_sgetstart} btn btn-primary btn_start`}
                >
                  GET STARTED
                </button>
              </Link>
            </ul>
          </div>
        </div>
        */}
        <EmailHunter />
      </section>
    </>
  );
}
