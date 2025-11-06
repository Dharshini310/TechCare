import React from 'react'
import overview from '../assets/overview.png';
import patients from "../assets/patients.png";
import schedule from "../assets/schedule.png";
import transaction from "../assets/transactions.png";
import message from "../assets/messages.png";
import "../styles/Links.css";

function Links() {
  return (
    <div className='links'>
        <div className='link'>
            <img src={overview} alt='loading..'/>&nbsp;
            <b>OverView</b>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='link' style={{backgroundColor:"aqua"}}>
            <img src={patients} alt='loading..'/>&nbsp;
            <b>Patients</b>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='link'>
            <img src={schedule} alt='loading..'/>&nbsp;
            <b>Schedule</b>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='link'>
            <img src={message} alt='loading..'/>&nbsp;
            <b>Message</b>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='link'>
            <img src={transaction} alt='loading..'/>&nbsp;
            <b>Transactions</b>
        </div>
    </div>
  )
}

export default Links