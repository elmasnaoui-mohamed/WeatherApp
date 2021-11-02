import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="weather-container">
      <div className="location-desc">
        <div className="desc">
          {props.imgURL && <img src={props.imgURL} alt="" />}
          {props.description && <span>{props.description}</span>}
        </div>
        <div className="location">
          {props.country && <span>{props.country}, </span>}
          {props.city && <span>{props.city}</span>}
        </div>
      </div>
      <div className="more-info">
        <div>
          {props.Temperature && <span>Temperature: </span>}
          {props.Temperature && <span>{Math.floor(props.Temperature)}°</span>}
        </div>
        <div>
          {props.Humidity && <span>Humidity: </span>}
          {props.Humidity && <span>{props.Humidity}</span>}
        </div>
      </div>
    </div>
  );
}
