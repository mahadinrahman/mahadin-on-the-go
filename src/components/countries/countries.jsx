import React, { use, useState } from 'react';
import Country from '../../Country/Country';
import './countries.css';

const Countries = ({CountriesPromise}) => {
    const countriesData=use(CountriesPromise);
    const countries=countriesData.countries;

    const [visited,setVisited]=useState([]);

    const handlevisited=(country)=>{
        const newvisited=[...visited,country];
        setVisited(newvisited);

    }
    
    return (
        
        <div >
            <h1>Mahadin On The Go</h1>
            <h3>Total Country Visited:{visited.length}</h3>
            <ol>
                {
                    visited.map(country => (<li key={country.cca3.cca3}>{country.name.common}</li>))
                }
             </ol>
            <div className='countries'>
            {
                countries.map(country=><Country handlevisited={handlevisited} key={country.cca3.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;