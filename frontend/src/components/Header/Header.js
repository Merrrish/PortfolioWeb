import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/icons/Logo.svg';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 680);
        handleResize(); // Проверяем при первом рендере
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Скрываем Header при прокрутке вниз
            setIsVisible(false);
        } else {
            // Показываем Header при прокрутке вверх
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
            <div className={styles.header1}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" style={{ width: '25px', height: 'auto' }} />
                </div>
                <div className={styles.header2}>
                    <div className={styles.leftb}>
                        {!isMobile && <a href="#about" className={`${styles.headerSecB} ${styles.hideOnMobile}`}>
                            <span className={styles.txt2}>01.</span>
                            <span className={styles.txt1}>About</span>
                        </a>}
                        {!isMobile && <a href="#skills" className={`${styles.headerSecB} ${styles.hideOnMobile}`}>
                            <span className={styles.txt2}>02.</span>
                            <span className={styles.txt1}>Skills</span>
                        </a>}
                        {!isMobile && <a href="#projects" className={`${styles.headerSecB} ${styles.hideOnMobile}`}>
                            <span className={styles.txt2}>03.</span>
                            <span className={styles.txt1}>Projects</span>
                        </a>}
                        {!isMobile && <a href="#contacts" className={`${styles.headerSecB} ${styles.hideOnMobile}`}>
                            <span className={styles.txt2}>04.</span>
                            <span className={styles.txt1}>Contact</span>
                        </a>}
                    </div>
                    <div className={styles.rightb}>
                        <div className={styles.headerRes}>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ResFrame}>
                                <span className={styles.txt2}>Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
