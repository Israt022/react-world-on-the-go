import React, { use, useState } from 'react';
import "./Countries.css"
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const [visitedCountry,setVisitedCountry] = useState([])
    const [visitedFlag,setVisitedFlag] = useState([])
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry,country]
        setVisitedCountry(newVisitedCountry)
        // console.log("HJandle visited Country",newVisitedCountry);
    }
    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
        console.log("HJandle visited Flag",newVisitedFlag);
    }
    // console.log(countries);
    return (
        <>
        
            <h1>In the Countries : {countries.length}</h1>
            <h3>Total Country Visited : {visitedCountry.length}</h3>
            <h3>Total Visited Country Flag: {visitedFlag.length}</h3>
            <ol>
                {visitedCountry.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='visited-flag-container'>
                {visitedFlag.map((flag,i)=> <img key={i} src={flag}/>)}
            </div>
            <div className='countries'>
                {
                    countries.map(country => 
                        <Country 
                            key={country.cca3.cca3} 
                            country={country}
                            handleVisitedCountry = {handleVisitedCountry}
                            handleVisitedFlag={handleVisitedFlag}
                        >    
                        </Country>
                    )
                }
            </div>
        </>
    );
};

export default Countries;