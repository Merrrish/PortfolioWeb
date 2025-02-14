import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MoreProjects.module.css';

import { ReactComponent as GitIcon } from '../../assets/icons/GitIcon.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg';
import { ReactComponent as LinkIcon } from '../../assets/icons/Link.svg';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className={styles.frame} id="projects">
            <div className={styles.frame1}>
                <div className={styles.frameT}>
                    <div className={styles.frametxt2}>
                        <span className={styles.txt2}>More Projects</span>
                    </div>
                    <div className={styles.horizontalline}></div>
                    <span className={styles.txt5}>Check Archive</span>
                </div>
                <div className={styles.frameC}>
                    {/* Пример карточки */}
                    <a href="https://t.me/voting_for_chatbot" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.card1}>
                            <div className={styles.card11}>
                                <FolderIcon className={styles.icon} />
                                <div className={styles.card111}>
                                    <a href="https://github.com/Merrrish/VotingBot" target="_blank" rel="noopener noreferrer">
                                        <GitIcon className={styles.icon1} />
                                    </a>
                                    <a href="https://t.me/voting_for_chatbot" target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className={styles.icon1} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card12}>
                                <span className={styles.txt3}>Voting bot</span>
                                <span className={styles.txt4}>Telegram bot that allows users in group chat make a poll to kick someone.</span>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <span className={styles.txt5}>Telegram API</span>
                            <span className={styles.txt5}>Aiogram</span>
                            <span className={styles.txt5}>Python</span>
                        </div>
                    </a>

                    {/* Другие карточки */}
                    <a href="https://github.com/Merrrish/Portfolio_Website" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.card1}>
                            <div className={styles.card11}>
                                <FolderIcon className={styles.icon} />
                                <div className={styles.card111}>
                                    <a href="https://github.com/Merrrish/portfolioWebApp" target="_blank" rel="noopener noreferrer">
                                        <GitIcon className={styles.icon1} />
                                    </a>
                                    <a href="https://portfolio-web-bay-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className={styles.icon1} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card12}>
                                <span className={styles.txt3}>Portfolio Website</span>
                                <span className={styles.txt4}>Personal portfolio website V1 built with Django and React (FrameMotion for animations).</span>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <span className={styles.txt5}>Vercel</span>
                            <span className={styles.txt5}>React</span>
                            <span className={styles.txt5}>FrameMotion</span>
                        </div>
                    </a>

                    <a href="https://t.me/moviesforfun_bot" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.card1}>
                            <div className={styles.card11}>
                                <FolderIcon className={styles.icon} />
                                <div className={styles.card111}>
                                    <a href="https://github.com/Merrrish/Movies_Bot" target="_blank" rel="noopener noreferrer">
                                        <GitIcon className={styles.icon1} />
                                    </a>
                                    <a href="https://t.me/moviesforfun_bot" target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className={styles.icon1} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card12}>
                                <span className={styles.txt3}>Movies Bot</span>
                                <span className={styles.txt4}>Telegram Bot where you can check information about your favorite movies. OMDB API used.</span>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <span className={styles.txt5}>Python</span>
                            <span className={styles.txt5}>Aiogram</span>
                            <span className={styles.txt5}>OMDB API</span>
                        </div>
                    </a>

                    <a href="https://t.me/URLSafety_bot" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.card1}>
                            <div className={styles.card11}>
                                <FolderIcon className={styles.icon} />
                                <div className={styles.card111}>
                                    <a href="https://github.com/Merrrish/URL_Bot" target="_blank" rel="noopener noreferrer">
                                        <GitIcon className={styles.icon1} />
                                    </a>
                                    <a href="https://t.me/URLSafety_bot" target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className={styles.icon1} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card12}>
                                <span className={styles.txt3}>URL Checker</span>
                                <span className={styles.txt4}>Telegram Bot that uses Aiogram and VirusTotal API to check link that you afraid of.</span>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <span className={styles.txt5}>VirusTotal API</span>
                            <span className={styles.txt5}>Python</span>
                            <span className={styles.txt5}>Aiogram</span>
                        </div>
                    </a>

                    <a href="https://t.me/TextToSpeachMine_Bot" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.card1}>
                            <div className={styles.card11}>
                                <FolderIcon className={styles.icon} />
                                <div className={styles.card111}>
                                    <a href="https://github.com/Merrrish/TextToSpeach" target="_blank" rel="noopener noreferrer">
                                        <GitIcon className={styles.icon1} />
                                    </a>
                                    <a href="https://t.me/TextToSpeachMine_Bot" target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className={styles.icon1} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card12}>
                                <span className={styles.txt3}>Text to Speech Bot</span>
                                <span className={styles.txt4}>Telegram bot that uses Google TTS to convert your text into voice message. Just send your text and receive audio.</span>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <span className={styles.txt5}>GTTS</span>
                            <span className={styles.txt5}>Python</span>
                            <span className={styles.txt5}>Aiogram</span>
                        </div>
                    </a>

                    <a href="https://github.com/Merrrish/VSCode_Theme" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.card1}>
                            <div className={styles.card11}>
                                <FolderIcon className={styles.icon} />
                                <div className={styles.card111}>
                                    <a href="https://github.com/Merrrish/bumble-bee-theme" target="_blank" rel="noopener noreferrer">
                                        <GitIcon className={styles.icon1} />
                                    </a>
                                    <a href="https://marketplace.visualstudio.com/publishers/BumbleBeeYellowTheme" target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className={styles.icon1} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card12}>
                                <span className={styles.txt3}>VSCode Theme</span>
                                <span className={styles.txt4}>Dark-Yellow Theme for VSCode that you can download on VisualStudioCode Marketplace.</span>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <span className={styles.txt5}>VSCode</span>
                            <span className={styles.txt5}>npm</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
