import React from 'react'
import Temperature from '../components/Temperature'
import Humidity from '../components/Humidity'
import Presure from '../components/Pressure'
import './styles/Cards.css'

function cards() {
  return (
    <div className="cards-content-wrapper">
        <div className="censor-readings">
            <h1 className='censor-readings-title'>
                Sensor Readings
            </h1>
            <div className="censor-values">
                <Temperature/>
                <Humidity/>
                {/* <Presure/> */}
            </div>
        </div>
    </div>
  )
}

export default cards