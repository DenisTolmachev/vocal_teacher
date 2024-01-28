import styles from "./Header.module.scss";
import Link from "next/link";
import { linksArr } from "@/data/linksArr";
import { socialIconsArr } from "@/data/socialIconsArr";
import SocialIconsList from "../socialIconsList/SocialIconsList";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <ul className={styles.navMenuList}>
          {linksArr.map(({ id, title, href }) => {
            return (
              <li key={id} className={styles.navMenuItem}>
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.socialIconsWrapper}>
        <SocialIconsList />
      </div>
      <button className={styles.navButton}>Безкоштовний урок</button>
    </header>
  );
};

export default Header;
