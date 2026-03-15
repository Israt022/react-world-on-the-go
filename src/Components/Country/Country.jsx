import React, { useState } from 'react';
import "./Country.css"
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    const [visited,setVisited] = useState(false)
    // console.log(country.area.area);

    const handleVisited = () => {
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // {visited ? setVisited(false) : setVisited(true)}

        setVisited(!visited);
        handleVisitedCountry(country)
    }
    // console.log(handleVisitedCountry);
    return (
        <>
                <div className={`country ${visited ? 'country-visited' : 'country'}`}>
                    <img src={country.flags.flags.png} 
                        alt={country.flags.flags.alt}/>
                    <p>Name : {country.name.common}</p>
                    <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>

                    <div className='country-container'>
                        <button onClick={handleVisited} className={`visited-btn ${visited ? 'visited' : 'visited-btn'}`}>
                            {
                                visited ? 'Visited' : 'Not Visited'
                            }
                        </button>
                        <button onClick={() => handleVisitedFlag(country.flags.flags.png)}  className={`visited-btn`}>
                            Add Country Flag
                        </button>
                    </div>
                </div>
        </>
    );
};

export default Country;