import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';

import { ReactComponent as GitIcon } from '../../assets/icons/GitIcon.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg';
import { ReactComponent as LinkIcon } from '../../assets/icons/Link.svg';

import projectImage from '../../assets/Spotaste.jpeg';
import projectVideo1 from '../../assets/MusicPlayer.mp4';
import projectVideo2 from '../../assets/Whiteboard.mp4';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className={styles.frame} id="projects">
            <div className={styles.frametxt}>
                <div className={styles.frametxt2}>
                    <span className={styles.txt1}>03.</span>
                    <span className={styles.txt2}>Projects</span>
                </div>
                <div className={styles.horizontalline}></div>
            </div>
            <div className={styles.framecontent}>
            <div className={styles.img}>
                <a 
                    href="https://spotaste-production.up.railway.app" 
                    className={styles.imageLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={projectImage} alt="Project Image" className={styles.projectImage} />
                </a>
            </div>
                <div className={styles.content}>
                    <div className={styles.content1}>
                    <span className={styles.contentxt1}>Featured</span>
                        <a 
                            href="https://spotaste-production.up.railway.app" 
                            className={styles.contentxt2} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Spotify Connected App
                        </a>
                    </div>
                    <div className={styles.content2}>
                        <span className={styles.contentxt3}>Spotify Profile for visualizing user data. View your top tracks, artists, playlists and recently played songs. Check your favorite genres and stream time. </span>
                    </div>
                    <div className={styles.content3}>
                        <span className={styles.contentxt4}>Flask</span>
                        <span className={styles.contentxt4}>HTML</span>
                        <span className={styles.contentxt4}>CSS</span>
                        <span className={styles.contentxt4}>Heroku</span>
                        <span className={styles.contentxt4}>Spotify API</span>
                    </div>
                    <div className={styles.card111}>
                        <a href="https://github.com/Merrrish/SpoTaste" target="_blank" rel="noopener noreferrer">
                            <GitIcon className={styles.icon1} />
                        </a>
                        <a href="https://spotaste-production.up.railway.app" target="_blank" rel="noopener noreferrer">
                            <LinkIcon className={styles.icon1} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.framecontent}>
                <div className={styles.content}>
                    <div className={styles.content1}>
                    <span className={styles.contentxt1}>Featured</span>
                        <a 
                            href="https://music-player-project-coral.vercel.app" 
                            className={styles.contentxt2} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Music Player
                        </a>
                    </div>
                    <div className={styles.content2}>
                        <span className={styles.contentxt3}>Web-based music player that allows users to listen to songs with synchronized lyrics in real time. The lyrics are displayed line by line, matching the song’s progress.</span>
                    </div>
                    <div className={styles.content3}>
                        <span className={styles.contentxt4}>React</span>
                        <span className={styles.contentxt4}>Tailwind CSS</span>
                        <span className={styles.contentxt4}>FramerMotion</span>
                        <span className={styles.contentxt4}>Flask</span>
                        <span className={styles.contentxt4}>SQL</span>
                    </div>
                    <div className={styles.card111}>
                        <a href="https://github.com/Merrrish/MusicPlayerProject" target="_blank" rel="noopener noreferrer">
                            <GitIcon className={styles.icon1} />
                        </a>
                        <a href="https://music-player-project-coral.vercel.app" target="_blank" rel="noopener noreferrer">
                            <LinkIcon className={styles.icon1} />
                        </a>
                    </div>
                </div>
                <div className={styles.img}> 
                    <a 
                        href="https://music-player-project-coral.vercel.app" 
                        className={styles.imageLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <video 
                            className={styles.projectImage} 
                            loop 
                            muted 
                            autoPlay 
                            playsInline
                        >
                            <source src={projectVideo1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </a>
                </div>

            </div>
            <div className={styles.framecontent}>
            <div className={styles.img}> 
                <a 
                    href="https://whiteboard-app-black.vercel.app" 
                    className={styles.imageLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <video 
                        className={styles.projectImage} 
                        loop 
                        muted 
                        autoPlay 
                        playsInline
                    >
                        <source src={projectVideo2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </a>
            </div>
                <div className={styles.content}>
                    <div className={styles.content1}>
                    <span className={styles.contentxt1}>Featured</span>
                        <a 
                            href="https://whiteboard-app-black.vercel.app" 
                            className={styles.contentxt2} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Online Whiteboard
                        </a>
                    </div>
                    <div className={styles.content2}>
                        <span className={styles.contentxt3}>Real-time collaborative whiteboard where multiple users can draw, erase, and interact with a shared canvas. Changes are synchronized in real-time across all connected clients.</span>
                    </div>
                    <div className={styles.content3}>
                        <span className={styles.contentxt4}>React</span>
                        <span className={styles.contentxt4}>Tailwind CSS</span>
                        <span className={styles.contentxt4}>Fabric.js</span>
                        <span className={styles.contentxt4}>Socket.io</span>
                        <span className={styles.contentxt4}>Node.js</span>
                    </div>
                    <div className={styles.card111}>
                        <a href="https://github.com/Merrrish/WhiteboardApp" target="_blank" rel="noopener noreferrer">
                            <GitIcon className={styles.icon1} />
                        </a>
                        <a href="https://whiteboard-app-black.vercel.app" target="_blank" rel="noopener noreferrer">
                            <LinkIcon className={styles.icon1} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
