import React from "react";

export default function Travel() {
    const fill = "/images/fill.png";
    return (
        <div className="travel">
        <nav className="navbar-travel">
        <img src={process.env.PUBLIC_URL + fill} className="fill"/>
        <span className="titletravel">my travel journal.</span>
        </nav>
        </div>
    )
}
