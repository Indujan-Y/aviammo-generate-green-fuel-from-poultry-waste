import React, {useEffect, useState} from 'react'
// import { FaTemperatureLow } from "react-icons/fa";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import './styles/Temperature.css'

function Temperature() {
    const [tempData, SetTempData] = useState(null);

    useEffect(() => {
        fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v5')
            .then(Response => Response.json())
            .then(json => SetTempData(json))
            .catch(err => console.log(err));
        console.log(tempData);
    }, [])
    return (
        <div className="Temperature-card">
            <h3 className='title'>
                Temperature
            </h3>
            <div className="Temperature-card-content">
                <div className="left-content">
                    <h1 className='content'>
                        {tempData}<span>%</span>
                    </h1>
                </div>
                <div className="right-content">
                    <LiaTemperatureHighSolid />
                </div>
            </div>
        </div>
    )
}

export default Temperature