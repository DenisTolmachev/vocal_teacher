import styles from './SocialIconsList.module.scss'
import { socialIconsArr } from "@/data/socialIconsArr";

const SocialIconsList = () => {
    return (
        <div>
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
    );
}

export default SocialIconsList;