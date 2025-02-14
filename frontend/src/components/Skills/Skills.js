import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
        className={styles.skillsContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  // Когда компонент в кадре, ставим его видимым
        transition={{ duration: 0.6 }}
        >
        <section className={styles.Frame} id="skills">
            <div className={styles.Frame1}>
                <div className={styles.Frametxt}>
                     <div className={styles.Frametxt1}>
                        <span className={styles.txt1}>02.</span>
                        <span className={styles.txt2}>Skills</span>
                    </div>
                    <div className={styles.horizontalline}></div>
                </div>
                <div className={styles.Framecontent}>
                    <div className={styles.fc}>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                HTML
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillper}>
                                    <span className={styles.tooltip}>
                                        90%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                CSS
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillpercss}>
                                    <span className={styles.tooltip}>
                                        85%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                Python
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillperp}>
                                    <span className={styles.tooltip}>
                                        85%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                SQL
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillpers}>
                                    <span className={styles.tooltip}>
                                        70%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                Node.js
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillpern}>
                                    <span className={styles.tooltip}>
                                        60%
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fc}>
                    <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                Flask
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillper}>
                                    <span className={styles.tooltip}>
                                        90%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                React
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillpercss}>
                                    <span className={styles.tooltip}>
                                        85%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                Aiogram
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillperp}>
                                    <span className={styles.tooltip}>
                                        85%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                Django
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillpers}>
                                    <span className={styles.tooltip}>
                                        70%
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skillbox}>
                            <span className={styles.sbtitle}>
                                Tkinter
                            </span>
                            <div className={styles.skillbar}>
                                <span className={styles.skillpern}>
                                    <span className={styles.tooltip}>
                                        60%
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    );
};

export default About;
