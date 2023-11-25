import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries}) => {
    
    const { name, flags, area, population } = country;

    const [visited, setVisited] = useState(false);
    
    const  handleVisited = ()  => {
        setVisited(!visited)
    }

    return (
        <div className={visited ? "container" : "visited-container"}>
            <h5>Name : {name.common}</h5>
            <img src={flags.png} alt="Flag"/>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <button onClick={() => handleVisitedCountries(country)}>Set Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button> <br />
            { visited ? 'I have visited' : 'I want to visit'}
        </div>
    );
};

export default Country;