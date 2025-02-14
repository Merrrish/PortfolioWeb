import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const About = () => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    useEffect(() => {
        // Запускаем анимацию через 1 секунду, чтобы показать эффект
        const timer = setTimeout(() => {
            setIsHighlighted(true);
        }, 1000);

        return () => clearTimeout(timer); // Очистка таймера
    }, []);

    return (
        <div className={styles.HomeFr} id="home">
            <div className={styles.HomeFr1}>
                <div className={styles.txt3fr}><span class={styles.txt3}>Hi, my name is</span></div>
                    <div className={styles.txt4fr}>
                        <div className={`${styles.txt4} ${isHighlighted ? styles.highlight : ''}`}>
                            Bilyi Denys
                    </div>
                    <div className={styles.txt5}>
                        {['I', 'develop', 'web', 'solutions'].map((word, wordIndex) => (
                            <span key={wordIndex} className={styles.word}>
                                {Array.from(word).map((letter, letterIndex) => (
                                    <span key={letterIndex} className={styles.letter}>
                                        {letter}
                                    </span>
                                ))}
                                &nbsp;
                            </span>
                        ))}
                    </div>
                </div>
                <span className={styles.txt6}>I’m a Python developer specializing in building efficient, scalable applications. Currently, I’m focused on creating clean, robust code for innovative solutions that make a real impact.</span>
                <div className = {styles.HeaderRes}>
                    <div className={styles.ResFrame1}>
                        <a href="mailto:fudo.nara@gmail.com" className={styles.ResFrame1}>
                            <span className={styles.txt2}>Message</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
