import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.aboutWrapper}>
        <h2>Про мене</h2>
        <p>
          Спів - це мистецтво, яке народжується в серці і звучить красою в
          кожній ноті.
        </p>
      </div>
      <div className={styles.sliderWrapper}>
        <p>СЛАЙДЕР</p>
      </div>
    </section>
  );
};

export default About;
