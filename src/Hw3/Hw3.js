import React from "react";
import './Hw3.css';

const Hw3 = () => {
    return (
        <div>
            <ul className="menu">
                <li><a href="#profile">Profile</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#subject">Subjects</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>

            <div id="profile" className="text">
                <div className="header">
                    Profile
                </div>
                <div className="container">
                    <img className="profile-pic" alt=""></img>
                    <div className="profile-info">
                        <h2>Đồng Phúc Nhẫn</h2>
                        <h4>Student ID: 20521694</h4>
                        <h4>I'm a passionate individual who enjoys football, gaming, and music in my free time.</h4>
                    </div>
                </div>
            </div>

            <div id="contact" className="text">
                <h2>Contact Information</h2>
                <p>
                    Gmail: <a href="mailto:phucnhan0406@gmail.com">phucnhan0406@gmail.com</a>
                </p>
                <p>
                    <b>
                        <ion-icon name="logo-github"></ion-icon>
                    </b>
                    <a href="https://github.com/phucnhan" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                <p>
                    <b>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </b>
                    <a href="https://www.facebook.com/profile.php?id=100011231765259" target="_blank" rel="noopener noreferrer">Personal Facebook</a>
                </p>
            </div>

            <div id="skills" className="text">
                <div>
                    <h2 style={{ textAlign: 'center', color: 'rgb(238, 123, 41)' }}>Skills</h2>
                    <ol>
                        <li>HTML/CSS <span className="star">&#9733;</span><span className="star">&#9733;</span></li>
                        <li>Python <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span></li>
                        <li>React <span className="star">&#9733;</span></li>
                        <li>SQL <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span></li>
                    </ol>
                </div>
            </div>

            <div id="subject" className="text">
                <h2 style={{ textAlign: 'center', color: 'rgb(238, 123, 41)' }}>Subject and learning</h2>
                <ol>
                    <li>Web Application Development</li>
                    <li>Database</li>
                    <li>Cloud</li>
                </ol>
            </div>

            <div id="experience" className="text">
                <h2 style={{ textAlign: 'center', color: 'rgb(238, 123, 41)' }}>Experience</h2>
                <h3 style={{ textAlign: 'left', color: 'rgb(12, 134, 235)' }}>Education</h3>
                <div className="column">
                    <h4>I learnt at UIT-VNUHCM from 2020.</h4>
                </div>
                <div className="column">
                    <h4>Information System</h4>
                    <p>
                        The education was mainly system design-based course, but I also learned about web development, data
                        analysis, and more. During my time in college, I specialized in OOP and data science. Now, I'm learning
                        web development.
                    </p>
                </div>
            </div>

            <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

        </div>
    );
};

export default Hw3;
