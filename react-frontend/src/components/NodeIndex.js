import React, { useState } from "react";
import { FaQuestionCircle, FaTimes, FaBars } from "react-icons/fa"; 
import "./NodeIndex.css";

const NodeIndex = () => {
  const [showLegend, setShowLegend] = useState(true); 

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  return (
    <div className="node-index-container">
      <div className="toggle-btn" onClick={toggleLegend}>
        {showLegend ? <FaTimes /> : <FaBars />} 
        <span>{showLegend ? "הסתר מקרא" : "הצג מקרא"}</span>
      </div>

      {showLegend && (
        <div className="legend-container">
          <h3>
            <span className="info-icon">
              <FaQuestionCircle />
              <span className="tooltip-text">
                קורסים שלא הועברו ב5 שנים האחרונות לא מוצגים
                <br />
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
          <br />
          <span className="edge-box arrowed"></span> ---&gt; קדם
        </div>
      )}
    </div>
  );
};

export default NodeIndex;
