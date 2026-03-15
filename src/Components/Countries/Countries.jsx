import React, { use } from 'react';
import "./Countries.css"
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <>
        
            <h1>In the Countries : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => 
                        <Country key={country.cca3.cca3} country={country}></Country>
                    )
                }
            </div>
        </>
    );
};

export default Countries;