import React from "react"
import dot from "../images/Fill220.png"

export default function Card(prop) {
    return (
        <div className="card">
            <img className="card-image" src={prop.data.imgUrl} alt="event photo" />
            <div className="card-about">
                <div className="card-location">
                    <img className="card-drop" src={dot} alt="" />
                    <h2 className="card-country">{prop.data.location.toUpperCase()}</h2>
                    <a href={prop.data.google} >View on Google Maps</a>
                </div>
                <h1>{prop.data.title}</h1>
                <h3>{prop.data.startDate} - {prop.data.endDate}</h3>
                <p className="card-description">{prop.data.description}</p>
            </div>
        </div>
    )
}