import "./Hw4.css";
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
function Hw4() {
    return (
        <div className="Hw4-app">
            <div className="left">
                <img src="./hw3.jpg" className="left-img" alt="" />
                <h2>Đồng Phúc Nhẫn</h2>
                <div className="contact">
                    <i className="fa-regular fa-envelope"></i> <h5>20521694@gm.uit.edu.vn</h5>
                </div>
                <div className="contact">
                    <i className="fa-solid fa-phone"></i> <h5>0359408701</h5>
                </div>
                <h4>INTRODUCTION</h4>
                <ul>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                    <li>BLOG</li>
                    <li>TIMELINE</li>
                </ul>
                <ul className="social">
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-solid fa-circle-info"></i></li>
                    <li><i className="fa-brands fa-github"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
                <div className="contact">
                    <h3>Make with <i className="fa-solid fa-heart"></i> and <i className="fa-solid fa-beer-mug-empty"></i></h3>
                </div>
                <div className="contact">
                    <h3>Thanks you to read</h3>
                </div>
            </div>
            <div className="right">
                <img src="./hw3.jpg" alt="" />
                <div className="name">
                    <h1>Hi! <span>I'm Phuc Nhan</span></h1>
                    <button>KNOW MORE<i className="fa-solid fa-circle-chevron-down"></i></button>
                </div>
                <div className="dot">
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>
        </div>
    );
}

export default Hw4;
