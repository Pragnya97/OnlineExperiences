import React from "react";

// import image1 from "../images/image1.png";


export default function Main() {
    const image1 = "/images/image1.png";
    return (       
        <div className="main">
            <img src={process.env.PUBLIC_URL + image1} className="image1"/>
            <h1 className="title">Online Experiences</h1>
            <p className="description">Join unique interactive activities 
            led by one-of-a-kind hosts—all without leaving home.</p>

        </div>
    )
}