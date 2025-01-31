import CountriesBar from "./components/CountriesBar/CountriesBar.tsx";
import './App.css'
import {useEffect, useState} from "react";
import {Country} from "./types";
import CountriesInfo from "./components/CountriesInfo/CountriesInfo.tsx";

const url = `https://restcountries.com/v3.1/all`
console.log(url)

const App = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

    const fetchData = async () => {
        const response = await fetch(url);

        if (response.ok) {
            const countries = await response.json();
            setCountries(countries);
        }

    };

    useEffect(() => {
        fetchData().catch(e => console.error(e));
    }, []);

    const handleSelectCountry = (country: Country) => {
        setSelectedCountry(country);
    };

    return (
        <div className="App">
            <CountriesBar countries={countries} onSelectCountry={handleSelectCountry}></CountriesBar>
            {selectedCountry && <CountriesInfo country={selectedCountry} />}
        </div>


    )
};

export default App
