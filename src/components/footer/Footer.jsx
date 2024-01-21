import styles from "./Footer.module.scss";
import Link from "next/link";
import { linksArr } from "@/data/linksArr";
import { socialIconsArr } from "@/data/socialIconsArr";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>
        <div>
          <ul className={styles.footerMenuList}>
            {linksArr.map(({ id, title, href }) => {
              return (
                <li key={id} className={styles.footerMenuItem}>
                  <Link href={href}>{title}</Link>
                </li>
              );
            })}
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
            {socialIconsArr.map(({ id, href, img }) => {
              return (
                <li key={id} className={styles.socialIconsItem}>
                  <a href={href}>
                    <svg className={styles.icon}>
                      <use href={img} />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <Link href="https://webevery.dev/" target="_blank">
          webevery.dev
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
