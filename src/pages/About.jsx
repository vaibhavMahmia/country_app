import React from 'react';
import countryFacts from '../api/countryData.json';
import { useLocation } from 'react-router-dom';

const About = () => {
  const {pathname} = useLocation();
  if(pathname==='/about')
    document.title='worlAtlas_about';
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Intresting Facts
        <br />
        we are proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const {id, countryName, capital, population, interestingFact} = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">IntrestingFact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  )
}

export default About