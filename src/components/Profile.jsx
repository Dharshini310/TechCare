import React from 'react'
import jessica from '../assets/jessica.png';
import dob from "../assets/dob.png";
import female from "../assets/female.png";
import call from "../assets/call.png";
import insurance from "../assets/insurance.png";
import "../styles/Profile.css"

function Profile() {
  return (
    <div className='profile'>
        <div>
            <div className='styling'>
            <img src={jessica} alt='loading..'/>
            <h2>Jessica Taylor</h2>
            </div>
            <div className='list'>
                <img src={dob} alt='loading..'/>
                <div className='details'>
                <span>Date Of Birth</span>
                <b>August 23,1996</b>
                </div>
            </div>
            <div  className='list'>
                <img src={female} alt='loading..'/>
                <div className='details' >
                <span>Gender</span>
                <b>Female</b>
                </div>
            </div>
            <div  className='list'>
                <img src={call} alt='loading..'/>
                <div className='details' >
                <span>Contact Info</span>
                <b>(415) 555-1234</b>
                </div>
            </div>
            <div className='list'>
                <img src={call} alt='loading..'/>
                <div className='details'>
                <span>Emergency Contacts</span>
                <b>(415) 555-5678</b>
                </div>
            </div>
            <div className='list'>
                <img src={insurance} alt='loading..'/>
                <div className='details'>
                <span>Insurance Provider</span>
                <b>Sunrise Health Assurance</b>
                </div>
            </div>
            <button>Show All Information</button>
        </div>
    </div>
  )
}

export default Profile