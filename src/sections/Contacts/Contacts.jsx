import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactsWrapper}>
        <h2>Контакти</h2>
        <div className={styles.adressWrapper}>
          <div className={styles.adressIcon}></div>
          <p>Івано-Франківськ вул. Броварська буд.5 офіс 3 </p>
        </div>
        <div className={styles.adressIcon}>Іконки</div>
        <button className={styles.contactButton}>Корисні статті</button>
      </div>
      <div className={styles.formWrapper}>
        <p>Форма</p>
      </div>
    </section>
  );
};

export default Contacts;
