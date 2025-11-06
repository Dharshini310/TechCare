import React from 'react';
import horizantaldots from '../assets/horizontaldots.png';
import search from '../assets/search.png';
import emily from "../assets/emily.png";
import ryan from "../assets/ryan.png";
import Brandon from "../assets/brandon.png";
import jessica from "../assets/jessica.png";
import samantha from "../assets/samantha.png";
import ashley from "../assets/ashley.png";
import oliva from "../assets/olivia.png";
import tyler from "../assets/tyler.png";
import kevin from "../assets/kevin.png";
import dylan from "../assets/dylan.png";
import nathan from "../assets/nathan.png";
import mike from "../assets/mike.png";
import "../styles/Patients.css";

function Patients() {
  const patientData = [
    { img: emily, name: "Emily Williams", gender: "Female", age: 18 },
    { img: ryan, name: "Ryan Johnson", gender: "Male", age: 45 },
    { img: Brandon, name: "Brandon Mitchell", gender: "Female", age: 18 },
    { img: jessica, name: "Jessica Taylor", gender: "Female", age: 28 },
    { img: samantha, name: "Samantha Johnson", gender: "Female", age: 56 },
    { img: ashley, name: "Ashley Martinez", gender: "Female", age: 54 },
    { img: oliva, name: "Olivia Brown", gender: "Female", age: 32 },
    { img: tyler, name: "Tyler Davis", gender: "Male", age: 19 },
    { img: kevin, name: "Kevin Anderson", gender: "Male", age: 30 },
    { img: dylan, name: "Dylan Thompson", gender: "Male", age: 36 },
    { img: nathan, name: "Nathan Evans", gender: "Male", age: 58 },
    { img: mike, name: "Mike Nolan", gender: "Male", age: 31 }
  ];

  return (
    <div className='patient'>
      <div className='patient-title'>
        <h2>Patients</h2>
        <img src={search} alt='search' />
      </div>

      <div className='completeDetails'>
        {patientData.map((p, i) => (
          <div 
            className='patientDetails' 
            key={i} 
            style={{ backgroundColor: p.name === "Jessica Taylor" ? "aqua" : "white" }}
          >
            <img src={p.img} alt={p.name} />
            <div className='patientname'>
              <b>{p.name}</b>
              <span>{p.gender}, {p.age}</span>
            </div>
            <img src={horizantaldots} alt='menu' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patients;
