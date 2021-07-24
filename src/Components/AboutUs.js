import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="section">
        <h1 className="titl">Introducing the site</h1>
        <h1 className="subtit">
          This site aims to connect those who need blood and those who can
          donate blood, which saves the trouble of searching
        </h1>
        <p className="para">
          Many people may wonder why this site was designed, even though there
          are other sites for donating blood. The added value of our site is the
          state administration, where an association or group of young people
          from each state will manage the registrants, update the database and
          coordinate between blood donation interests in hospitals and civil
          protection units in organizing donation campaigns in the state and
          urging its residents to register on the site, as our goal is It is to
          facilitate the search for donors permanently and sustainably.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
