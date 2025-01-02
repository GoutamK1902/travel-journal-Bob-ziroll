import React, { useState } from "react";
import "../App.css";

export default function Entry(props) {
  console.log(props)
  const [isExpanded, setIsExpanded] = useState(false);
  const placeInfo = props.text;
  const words = placeInfo.split(" ");
  const displayText = isExpanded
    ? placeInfo
    : words.slice(0, props.wordlimit).join(" ");
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  return (
    <div className="entry-box">
      <div className="image-container">
        <img
          className="location-img"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-box">
        <span>
          <span className="marker-text-span-parent">
            <img className="marker-img" src="/svg/marker.svg" alt="marker" />
            {props.country}
          </span>
          <a className="place-link" href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
        </span>

        <p className="place-name">{props.title}</p>
        <p className="timeline">{props.dates}</p>
        <p className="place-info">
          {displayText}
          {!isExpanded && props.text.length > props.wordlimit && "..."}
          {words.length > props.wordlimit && (
            <span className="read-more" onClick={toggleReadMore}>
              {isExpanded ? "Read less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
