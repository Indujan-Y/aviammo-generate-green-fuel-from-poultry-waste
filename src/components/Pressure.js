import React from 'react'
import { BsSpeedometer } from "react-icons/bs";
import './styles/Pressure.css';

function Pressure() {
  return (
    <div className="Pressure-card">
        <h3 className='title'>
            Pressure
        </h3>
        <div className="Pressure-card-content">
            <div className="left-content">
                <h1  className='content'>
                    71<span>%</span>
                </h1>
            </div>
            <div className="right-content">
                <BsSpeedometer />
            </div>
        </div>
    </div>
  )
}

export default Pressure