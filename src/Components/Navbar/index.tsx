import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // USELOCATION TO GET CURRENT ROUTE
  const location = useLocation().pathname;
  console.log(location);

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.ul_nav}>
          <Link
            className={
              location === "/"
                ? `${styles.select_element} ${styles.linkRemove_style}`
                : styles.linkRemove_style
            }
            to="/"
          >
            <li className="li_nav">
              <i className="bi bi-house-fill"></i> Home
            </li>
          </Link>
          <Link
            className={
              location === "/EmailHunter"
                ? `${styles.select_element} ${styles.linkRemove_style}`
                : styles.linkRemove_style
            }
            to="/EmailHunter"
          >
            <li className="li_nav">
              <i className="bi bi-envelope-at"></i> LinkedExtract
            </li>
          </Link>
          <Link
            className={
              location === "/inputKey"
                ? `${styles.select_element} ${styles.linkRemove_style}`
                : styles.linkRemove_style
            }
            to="/inputKey"
          >
            <li className="li_nav">
              <i className="bi bi-filetype-key"></i> KeyWord Gen
            </li>
          </Link>
          <Link
            className={
              location === "/youtube"
                ? `${styles.select_element} ${styles.linkRemove_style}`
                : styles.linkRemove_style
            }
            to="https://qy2mp3.online/"
            target="_blank"
          >
            <li className="li_nav">
              <i className="bi bi-filetype-mp3"></i> Youtube to Mp3
            </li>
          </Link>
          <Link
            className={
              location === "/tiktotk"
                ? `${styles.select_element} ${styles.linkRemove_style}`
                : styles.linkRemove_style
            }
            to="https://snaptiktok.site/"
            target="_blank"
          >
            <li className="li_nav">
              <i className="bi bi-tiktok"></i> TikTok Downloader
            </li>
          </Link>
        </ul>
      </nav>
      {/* LOGO TOOL */}
      <div className={styles.logo}>
        <h1 className={styles.headline_logo}>EmailKey Gen</h1>
      </div>

      {/* NAV MOBILE */}
      {isMobileMenu && (
        <>
          <nav className={styles.navbarMobile}>
            <ul className={styles.ul_nav}>
              <i
                onClick={() => setIsMobileMenu(!isMobileMenu)}
                style={{ fontSize: 35, cursor: "pointer" }}
                className="fa fa-bars"
              ></i>
              {/* <p onClick={() => setIsMobileMenu(!isMobileMenu)}>TOGGLE</p> */}
              <Link
                className={
                  location === "/"
                    ? `${styles.select_element} ${styles.linkRemove_style}`
                    : styles.linkRemove_style
                }
                to="/"
              >
                <li className="li_nav">
                  <i className="bi bi-house-fill"></i> Home
                </li>
              </Link>
              <Link
                className={
                  location === "/EmailHunter"
                    ? `${styles.select_element} ${styles.linkRemove_style}`
                    : styles.linkRemove_style
                }
                to="/EmailHunter"
              >
                <li className="li_nav">
                  <i className="bi bi-envelope-at"></i> LinkedExtract
                </li>
              </Link>
              <Link
                className={
                  location === "/inputKey"
                    ? `${styles.select_element} ${styles.linkRemove_style}`
                    : styles.linkRemove_style
                }
                to="/inputKey"
              >
                <li className="li_nav">
                  <i className="bi bi-filetype-key"></i> KeyWord Gen
                </li>
              </Link>
              <Link
                className={
                  location === "/youtube"
                    ? `${styles.select_element} ${styles.linkRemove_style}`
                    : styles.linkRemove_style
                }
                to="/youtube"
              >
                <li className="li_nav">
                  <i className="bi bi-filetype-mp3"></i> Youtube to Mp3
                </li>
              </Link>
              <Link
                className={
                  location === "/tiktotk"
                    ? `${styles.select_element} ${styles.linkRemove_style}`
                    : styles.linkRemove_style
                }
                to="/tiktotk"
              >
                <li className="li_nav">
                  <i className="bi bi-tiktok"></i> TikTok Downloader
                </li>
              </Link>
            </ul>
          </nav>
        </>
      )}
      {/* LOGO TOOL */}
      <div className={styles.logoMobile}>
        <h1 className={styles.headline_logo}>
          {" "}
          {!isMobileMenu && (
            <i
              onClick={() => setIsMobileMenu(!isMobileMenu)}
              style={{ fontSize: 35, cursor: "pointer" }}
              className="fa fa-bars"
            ></i>
            // <p onClick={() => setIsMobileMenu(!isMobileMenu)}>TOGGLE</p>
          )}{" "}
          EmailKey Gen
        </h1>
      </div>
    </>
  );
}
