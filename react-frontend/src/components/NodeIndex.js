import React from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Importing the question icon
import "./NodeIndex.css";

const NodeIndex = () => {
  return (
    <div className="legend-container">
      <h3>
      <span className="info-icon">
          <FaQuestionCircle />
          <span className="tooltip-text">
           קורסים שלא הועברו ב5 שנים האחרונות לא מוצגים 
           <br></br>
           להצגת שווי נק"ז הניחו את העכבר על צומת הקורס
          </span>
        </span>
        &nbsp; מקרא
        
      </h3>
      <ul className="legend-list">
        <li>
          <span className="color-box" style={{ backgroundColor: "#98c4fc" }}></span>
          קורס חובה
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#FF6600" }}></span>
          קורס בחירה
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#FFEB00" }}></span>
          קורס מתמטי נוסף
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#117554" }}></span>
          קורס מדעי
        </li>
        <li>
          <span className="color-box" style={{ backgroundColor: "#A04747" }}></span>
          רשימה ב
        </li>
      </ul>
      <span className="edge-box dashed"></span> ---- מקצוע צמוד
      <br></br>
      <span className="edge-box arrowed"></span> ---&gt; קדם
    </div>
  );
};

export default NodeIndex;
