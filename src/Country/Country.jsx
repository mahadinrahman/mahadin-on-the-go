import React, { useState } from 'react';
import './country.css'

const Country = ({country,handlevisited}) => {

      const [visited,setVisited]=useState(false);

    const handleClick=()=>{
        // 1st method

        // if(visited){
        //     setVisited(false);
        // }else{
        //    setVisited(true);
        // }

        // 2nd method
        setVisited(!visited);

        
    }
    return (
        <div className={`country ${visited ? 'countries-visited' :''}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3 style={{color:'gold'}}>Name:{country.name.common}</h3>
            <h3 style={{color:'gold'}}>Population:{country.population.population}</h3>
            <p style={{color:'gold'}}>Area:{country.area.area} {country.area.area > 300000 ? "(Big country)" :"(Small Country)"}</p>
            <br></br>
            <button  onClick={()=>{handleClick();handlevisited(country)} } style={{padding:'10px',borderRadius:'8px',color:'white',backgroundColor:'purple'}}>{visited ? 'visited':'not visited'}</button>
        </div>
    );
};

export default Country;