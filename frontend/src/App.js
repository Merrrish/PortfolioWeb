import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import MoreProjects from './components/MoreProjects/MoreProjects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsFadingOut(true), 1500); // Запускаем анимацию исчезновения прелоадера через 1.5 секунды
        const removeLoader = setTimeout(() => {
            setIsLoading(false);
            setIsContentVisible(true); // Показываем основной контент после загрузки
        }, 2500); // Убираем прелоадер через 2.5 секунды
        return () => {
            clearTimeout(timer);
            clearTimeout(removeLoader);
        };
    }, []);

    if (isLoading) {
        return (
            <div className={`preloader ${isFadingOut ? 'fade-out' : ''}`}>
                <svg width="100" height="120" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="path-logo"
                        d="M4.5 4V2M8.5 8V8.49994C8.5 9.88065 7.38071 11 6 11M0.5 2V9.17157C0.5 9.70201 0.710714 10.2107 1.08579 10.5858C1.86684 11.3668 3.13316 11.3668 3.91421 10.5858C4.28929 10.2107 4.5 9.70201 4.5 9.17157V5M0 0.5H9M8.5 4.41421V5.08579C8.5 5.351 8.39464 5.60536 8.20711 5.79289C7.57714 6.42286 6.5 5.97669 6.5 5.08579V4.41421C6.5 4.149 6.60536 3.89464 6.79289 3.70711C7.42286 3.07714 8.5 3.52331 8.5 4.41421Z"
                        stroke="#E99BFF"
                    />
                </svg>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isContentVisible ? 1 : 0 }} // Плавное появление главного контента
                transition={{ duration: 1 }}
            >
                <Home />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <About />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <Skills />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <Projects />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <MoreProjects />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <Contact />
            </motion.div>
        </div>
    );
};

export default App;
