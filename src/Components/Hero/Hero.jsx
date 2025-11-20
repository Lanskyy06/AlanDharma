import React from "react"
import './Hero.css'
import profile_Alan from "/src/assets/profile_Alan.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_Alan} alt="" />
            <h1><span>I'm Alan Dharma,</span> Student Of<br></br>Telkom University</h1>
            <p>"Greatness is not born in comfort, but forged in the relentless struggle<br></br>againts Doubt, Failure, and Fear"</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <a className="hero-resume" href="/Portfolio-alan/CV alan.pdf" target="_blank" rel="noopener noreferrer">
                    MY CV
                </a>
                
            </div>
        </div>
    )
}

export default Hero