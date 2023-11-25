import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h1>Total Countries : {countries.length}</h1>
            <div className="visited-countries">
                <h4> Number Of Visited countries : {visitedCountries.length}</h4>
                <ul className="country-list">
                    {
                        visitedCountries.map((country) => <li key={country.cca2} > {country.name.common}</li>
                        )
                    }
                </ul>
            </div>
            <div className="box">
            {
                    countries.map(country => <Country
                        keys={country.cca2}
                        country={country}
                        handleVisitedCountries ={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    )
}