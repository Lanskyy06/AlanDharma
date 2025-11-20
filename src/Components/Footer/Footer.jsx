import React from "react";
import "./Footer.css"
import Logo_alan from "/src/assets/Logo_alan.png"
import user_icon from "/src/assets/user_icon.svg"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={Logo_alan} alt="" />
                    <p>Passionate Informatics student specializing in Web Development and AI. Building innovative solutions and exploring the frontiers of technology. Let's connect and create something amazing together!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Alan Dharma. All rights reserved </p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer