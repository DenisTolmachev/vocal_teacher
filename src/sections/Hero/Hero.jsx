import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroTitleWrapper}>
        <div className={styles.heroInfo}>
          <h1>Яна Полонська</h1>
          <p>Викладач вокалу</p>
        </div>
        <div className={styles.heroMic}>
          <Image
            className={styles.heroMicImg}
            src="/img/modern-microphone1.png"
            alt="microphone"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
