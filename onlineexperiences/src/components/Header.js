import React from "react";
// import Airbnb from "../images/airbnb.png";

export default function Header() {
    const Airbnb = "/images/airbnb.png";
    return (
     <nav className="navbar">
        <img src={process.env.PUBLIC_URL + Airbnb} className="airbnb"/>
     </nav>


    )
}