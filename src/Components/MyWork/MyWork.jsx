import React from "react";
import "./MyWork.css"
import theme_pattern from "/src/assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "/src/assets/arrow_icon.svg"

const MyWork = () => {
    return (
        <div id="work" className="MyWork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <div key={index} className="work-item">
                        <img src={work.w_img} alt={work.w_name} />
                        <div className="work-overlay">
                            <h3>{work.w_name}</h3>
                            <p>{work.w_desc}</p>
                            <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="work-link">
                                View Project <img src={arrow_icon} alt="arrow" />
                            </a>
                        </div>
                    </div>
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork