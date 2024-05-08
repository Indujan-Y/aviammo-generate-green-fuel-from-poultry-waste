import React, {useState, useEffect} from 'react'
import { GiProgression } from "react-icons/gi";
import './styles/Ammonia.css';

function Ammonia() {
    const [ammoniaData, SetAmmoniaData] = useState(null);

    useEffect(() => {
        fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v2')
            .then(Response => Response.json())
            .then(json => SetAmmoniaData(json))
            .catch(err => console.log(err));
        console.log(ammoniaData);
    }, [])
    return (
        <div className="ammonia-card">
            <h3 className='title'>
                Ammonia Gas <br /> Produced
            </h3>
            <div className="ammonia-card-content">
                <div className="left-content">
                    <h1>
                        {ammoniaData}<span>%</span>
                    </h1>
                </div>
                <div className="right-content">
                    <GiProgression />
                </div>
            </div>
        </div>
    )
}

export default Ammonia