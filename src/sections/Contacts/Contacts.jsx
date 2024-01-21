import styles from "./Contacts.module.scss";
import { socialIconsArr } from "@/data/socialIconsArr";

const Contacts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactsWrapper}>
        <h2>Контакти</h2>
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
        <button className={styles.contactButton}>Корисні статті</button>
      </div>
      <div className={styles.formWrapper}>
        <p>Форма</p>
      </div>
    </section>
  );
};

export default Contacts;
