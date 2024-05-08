import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './styles/Home.css'
import Cards from '../components/Cards'
import Ammonia from '../components/Ammonia'

function Home() {

  const [data, SetData] = useState(null);

  useEffect(() => {
    fetch('https://blr1.blynk.cloud/external/api/get?token=lQsUZMADT45wS5-fILN4F8Htdr2M4glp&v5')
    .then(Response => Response.json())
    .then(json => SetData(json))
    .catch(err => console.log(err));
    console.log(data);
  }, [])


  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="page">
        <div className="cards-wrapper">
          <Cards />
          <Ammonia />
        </div>
        <div className="graph-wrapper">
        </div>
      </div>
    </div>
  )
}

export default Home