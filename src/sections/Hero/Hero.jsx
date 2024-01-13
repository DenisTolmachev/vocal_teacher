import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.heroTitleWrapper}>
                <h1>Яна Полонська</h1>
                <p>Викладач вокалу</p>
            </div>
        </section>
    );
}

export default Hero;