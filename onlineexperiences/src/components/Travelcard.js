import React from "react";

export default function Travelcard(props) {
    const alpha = `/images/${props.coverImg}`;
    const pin = "/images/pin.png"
    return (
        <div className="travelcard">
        <img src={process.env.PUBLIC_URL + alpha} className="alpha"/>
        <div className="cardright">
            <div >
        <img src={process.env.PUBLIC_URL + pin} className="pin"/>
            <span className="travelcountry">{props.travelcountry}</span>
            <a className="mapslink">{props.mapslink}</a>
        </div>
        <div className="destination">{props.destination}</div>
        <div className="dates">{props.dates}</div>
        <div className="traveldescription">{props.traveldescription}</div>
        </div>
        </div>
    )
}

