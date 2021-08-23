import React, { useEffect,useState } from 'react';
import './covid.css'

const Covid = () => {

const [data,setData] = useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      const dat = actualData.statewise[0]
      console.log(dat)
      setData(dat)
      
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <section >
      <div className="fl">
             
      
          <li className="card">
              <div className = "card__main">
                  <div className="card__inner">
                      <p className='card__name'><span>OUR </span>COUNTRY</p>
                      <p className ="card__total card__small">INDIA</p>
                  </div>
              </div>

          </li>
          <li className="card1">
              <div className = "card__main">
                  <div className="card__inner">
                      <p className='card__name'><span>TOTAL </span>RECOVERED</p>
                      <p className ="card__total card__small">{data.recovered}</p>
                  </div>
              </div>

          </li>
          <li className="card2">
              <div className = "card__main">
                  <div className="card__inner">
                      <p className='card__name'><span>TOTAL </span>CONFIRMED</p>
                      <p className ="card__total card__small">{data.confirmed}</p>
                  </div>
              </div>

          </li>
          <li className="card3">
              <div className = "card__main">
                  <div className="card__inner">
                      <p className='card__name'><span>TOTAL </span>DEATH</p>
                      <p className ="card__total card__small">{data.deaths}</p>
                  </div>
              </div>
          </li>
          <li className="card4">
              <div className = "card__main">
                  <div className="card__inner">
                      <p className='card__name'><span>TOTAL </span>ACTIVE</p>
                      <p className ="card__total card__small">{data.active}</p>
                  </div>
              </div>

          </li>
          <li className="card5">
              <div className = "card__main">
                  <div className="card__inner">
                      <p className='card__name'><span>LAST </span>UPDATED</p>
                      <p className ="card__total card__small">{data.lastupdatedtime}</p>
                  </div>
              </div>

          </li>

    
      </div> 
      </section>
    </>
  );
};

export default Covid;
