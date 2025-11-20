import React from "react";
import './About.css'
import theme_pattern from "/src/assets/theme_pattern.svg"
import profile_Alan from "/src/assets/profile_Alan.jpg"

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_Alan} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As an Informatics student with a background in computer vocational education, I bring a unique blend of theoretical knowledge and hands-on skill to the table. My initial training equipped me with a robust understanding of core computing principles, which I am now deepening through my university studies in computer science theory, algorithms, and data structures.</p>
                        <p>Currently, I am channeling this integrated knowledge into specialized areas that I am passionate about: Web Development and Artificial Intelligence. I am not just a student; I am an active builder, spending my time outside the classroom developing projects that range from dynamic websites to exploring machine learning models. Known for my relentless work ethic and problem-solving mindset, I am eager to contribute to innovative teams and take on complex challenges that push the boundaries of my growing expertise.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>

    )
}

export default About