import React from 'react';
import download from "../assets/download.png";
import "../styles/LabResults.css";

function LabResults() {
  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <div className="lab-item">
        <span>Blood Tests</span>
        <img src={download} alt="download" />
      </div>
      <div className="lab-item">
        <span>CT Scans</span>
        <img src={download} alt="download" />
      </div>
      <div className="lab-item">
        <span>Radiology Results</span>
        <img src={download} alt="download" />
      </div>
      <div className="lab-item">
        <span>X-Rays</span>
        <img src={download} alt="download" />
      </div>
      <div className="lab-item">
        <span>Urine Test</span>
        <img src={download} alt="download" />
      </div>
    </div>
  );
}

export default LabResults;
