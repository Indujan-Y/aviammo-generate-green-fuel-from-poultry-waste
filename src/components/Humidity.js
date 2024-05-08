import React, {useState, useEffect} from 'react'
import { BsMoisture } from "react-icons/bs";
import './styles/Humidity.css';

function Moisture() {
    const [moistData, SetMoistData] = useState(null);

    useEffect(() => {
        fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v6')
            .then(Response => Response.json())
            .then(json => SetMoistData(json))
            .catch(err => console.log(err));
        console.log(moistData);
    }, [])
  return (
    <div className="Moisture-card">
        <h3 className='title'>
            Moisture
        </h3>
        <div className="Moisture-card-content">
            <div className="left-content">
                <h6  className='content'>
                    {moistData}<span>%</span>
                </h6>
            </div>
            <div className="right-content">
                <BsMoisture />
            </div>
        </div>
    </div>
  )
}

export default Moisture