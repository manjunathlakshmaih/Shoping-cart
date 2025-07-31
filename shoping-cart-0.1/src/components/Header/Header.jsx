import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <section className="logo">
                    <strong>VR</strong>
                    <span className="blue-dot"></span>
                    <span className="blue-dot"></span>
                    <span>headset</span>
                </section>
                <nav>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Promotion</a></li>
                        <li><a href="#">Newsletter</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;