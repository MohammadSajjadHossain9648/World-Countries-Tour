import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch('https://restcountries.com/v3.1/all')
       .then(response => response.json())
       .then(data => setCountries(data))
    }, [])

    return (
        <div>
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;