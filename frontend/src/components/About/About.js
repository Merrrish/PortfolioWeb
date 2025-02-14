import React from 'react';
import Photo from '../../assets/photo1.jpeg';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.AboutMe} id="about">
            <div className={styles.AboutMe1}>
                <div className={styles.AboutMe2}>
                    <div className={styles.frametxt}>
                        <div className={styles.frametxt2}>
                            <span className={styles.txt7}>01.</span>
                            <span className={styles.txt8}>About Me</span>
                        </div>
                        <div className={styles.horizontalline}></div>
                </div>
                    <span className={styles.txt9}><p>Hello! My name is Bilyi Denys, and I enjoy creating innovative digital experiences. My interest in web development started back in 2016 when i decided to create custom Discord bot for our friends chat - turns out building own application can be interesting!</p>

                        <p>Nowdays, studying Information Technologies at Czech University of Life Science, I’ve had the opportunity to explore various aspects of development, from building simple applications to tackling more complex projects.</p>

                        <p>I’m currently focused on learning and growing in the field, and I’m excited to apply my skills in a professional setting. Looking forward to contributing to impactful projects and working with passionate teams in the near future!</p>
                    </span>
                    <div className={styles.AboutMe3}>
                        <span className={styles.txt9}>Here are technologies I’ve been working with recently:</span>
                        <div className={styles.AboutMe4}>
                            <div className={styles.AboutMe45}>
                                <span className={styles.txt2}>Flask</span>
                                <span className={styles.txt2}>Django</span>
                                <span className={styles.txt2}>React</span>
                            </div>
                            <div className={styles.AboutMe45}>
                                <span className={styles.txt2}>Aiogram</span>
                                <span className={styles.txt2}>TensorFlow</span>
                                <span className={styles.txt2}>Tkinter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.AboutImg1}>
                    <img src={Photo} alt="Me Myself I am" />
                    <div className={styles.overlay}></div>
                </div>
            </div>
        </div>
    );
};

export default About;
