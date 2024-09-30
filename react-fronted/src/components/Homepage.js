import React from "react";
import "./Homepage.css";
import logo from "./homepage.jpg";
import { SlScreenSmartphone } from "react-icons/sl";

const Homepage = () => {
  return (
    <div className="homepage">
      <h2 class="mobile_notice">
        <SlScreenSmartphone className="icon" />
        לצפייה נוחה בנייד יש לסובב את המסך
      </h2>
      <div className="homepage-content">
        <img src={logo} className="homepage-image" />
        <h1>Next Semester</h1>
        <p className="homepage-description" dir="rtl">
          החלטתם שבא לכם קורס בחירה מעלה ממוצע? הגעתם למקום הנכון!
          <br></br>
          באתר זה תוכלו למצוא את רשימת כל הקורסים הרלוונטים לתואר בפקולטה למדמ"ח
          ואת הממוצע שלהם לאורך תקופות זמן שונות.
          <br></br>
          <br></br>
          בנוסף, תוכלו למצוא את גרף הקדמים של הפקולטה, שיעזור לכם לתכנן את התואר
          כמה סמסטרים קדימה, מוזמנים לשחק, להזיז וללחוץ על הצמתים בגרף!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
