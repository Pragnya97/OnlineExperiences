import React from "react";
// import katie from "/images/katie.png";
// import star from "/images/star.png";
// import soldout from "../images/soldout.png"

export default function Card(props) {
    const img = `/images/${props.coverImg}`;
    const star = "/images/star.png"
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {/* {props.openspots === 0 && <div className="badge">SOLD OUT</div>} */}
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src= {process.env.PUBLIC_URL + img} className="photo"/>
            <div className="rating">
                <img src={process.env.PUBLIC_URL + star} className="star"/>
                <span className="rate">{props.stats.rating}</span>
                <span className="country">({props.stats.reviewCount}) • </span>
                <span className="country">{props.location}</span>
            </div>
            <p className="title">{props.title}</p>
            <p className="cost"><span className="perperson">From ${props.price}</span>/ per person</p>
        </div>
    )
}