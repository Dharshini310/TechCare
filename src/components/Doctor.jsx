import React from 'react'
import doctor from "../assets/doctor.png";
import settings from "../assets/settings.png";
import threedots from "../assets/three-dots.jpg";
import "../styles/Doctor.css";

function Doctor() {
  return (
    <div>
        <div className='doctor'>
        <img src={doctor} alt='loading..'/>&nbsp;&nbsp;&nbsp;
        <div className='doctor-name'>
        <b>Dr.Jose Simmons</b>
        <span>General Practitioner</span>
        </div>&nbsp;&nbsp;&nbsp;
        <img src={settings} alt='loading..' id='settings'/>&nbsp;&nbsp;&nbsp;
        <img src={threedots} alt='loading..' id='threedots'/>&nbsp;&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default Doctor