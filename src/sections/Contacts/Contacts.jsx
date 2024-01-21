import styles from "./Contacts.module.scss";

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
        <button className={styles.contactButton}>Корисні статті</button>
      </div>
      <div className={styles.formWrapper}>
        <p>Форма</p>
      </div>
    </section>
  );
};

export default Contacts;
