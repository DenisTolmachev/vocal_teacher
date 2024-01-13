import { montsAlt } from "@/app/fonts";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aboutWrapper}>
        <h2>Про мене</h2>
        <p className={montsAlt.className}>
          Спів - це мистецтво, яке народжується в серці і звучить красою в
          кожній ноті.
        </p>
      </div>
      <div className={styles.sliderWrapper}></div>
    </section>
  );
};

export default About;
