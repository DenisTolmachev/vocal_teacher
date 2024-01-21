import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>
        <div>
          <ul>
            <li>Про мене</li>
            <li>Контакти</li>
            <li>Корисні статті</li>
          </ul>
        </div>
        <div className={styles.adressWrapper}>
          <figure className={styles.adressIcon}>
            <svg>
              <use href="/sprite.svg#map_point" />
            </svg>
          </figure>
          <p>Івано-Франківськ вул. Броварська буд.5 офіс 3 </p>
        </div>

        <div className={styles.socialIcons}>
          <ul className={styles.socialIconsList}>
            <li className={styles.socialIconsItem}>
              <a href="#">
                <svg className={styles.icon}>
                  <use href="/sprite.svg#telegram" />
                </svg>
              </a>
            </li>
            <li className={styles.socialIconsItem}>
              <a href="#">
                <svg className={styles.icon}>
                  <use href="/sprite.svg#phone" />
                </svg>
              </a>
            </li>
            <li className={styles.socialIconsItem}>
              <a href="#">
                <svg className={styles.icon}>
                  <use href="/sprite.svg#email" />
                </svg>
              </a>
            </li>
            <li className={styles.socialIconsItem}>
              <a href="#">
                <svg className={styles.icon}>
                  <use href="/sprite.svg#viber" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <Link
          href="https://webevery.dev/"
          target="_blank"
        >
          webevery.dev
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
