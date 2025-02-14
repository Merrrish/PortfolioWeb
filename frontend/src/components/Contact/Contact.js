import React from 'react';
import styles from './Contact.module.css';

const About = () => {
    return (
            <section className={styles.frame} id="contacts">
                <div className={styles.frame1}>
                    <div className={styles.frametxt}>
                        <div className={styles.frametxt1}>
                            <span className={styles.txt3}>04.</span>
                            <span className={styles.txt4}>What's Next?</span>
                        </div>
                        <div className={styles.horizontalline}></div>
                    </div>
                    <span className={styles.txt1}>Get In Touch</span>
                    <span className={styles.txt2}>
                        I’m eager to explore new opportunities and always open to hearing from you. Drop me a message anytime, whether it’s a question or a friendly greeting—I’ll be sure to get back to you!
                    </span>
                    <div className={styles.headerRes}>
                        <a href="mailto:fudo.nara@gmail.com" className={styles.ResFrame1}>
                            <span className={styles.txt5}>Say Hi!</span>
                        </a>
                    </div>
                </div>
            </section>

    );
};

export default About;
