import React from "react";
import "./Services.css"
import theme_pattern from "/src/assets/theme_pattern.svg"
import Services_Data from "/src/assets/Services_Data"
import arrow_icon from "/src/assets/arrow_icon.svg"
const Services = () => {
    return (
        <div id="services" className="Services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Services