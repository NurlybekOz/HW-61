import {Country} from "../../types";
import {useEffect, useState} from "react";
interface Props {
    country: Country;
}
const CountriesInfo: React.FC<Props> = ({country}) => {
    const [borderCountries, setBorderCountries] = useState<Country[]>([])

    useEffect(() => {
            const fetchData = async () => {
                if (country.borders.length > 0 ) {
                const borderData: Country[] = [];
                for (const borderCode of country.borders) {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`);
                    const data = await response.json();
                    borderData.push(data[0]);
                }
                setBorderCountries(borderData);
            }
        }
        fetchData()
        setBorderCountries([])
    }, [country.borders])
    return (
        <div className="country-info">

            <div className='d-flex flex-column'>
                <h2>{country.name.common}</h2>
                <span><strong>Capital: </strong>{country.capital}</span>
                <span><strong>Population: </strong>{country.population}</span>
            </div>
            <img className='country-img' src={country.flags.png} alt={country.name.common} />
                <div>
                    <h4>Borders with:</h4>
                    {borderCountries.length === 0 ? 'No countries found.' :
                        <ul>
                        {borderCountries.map((borderCountry) => (
                            <li key={borderCountry.cca3}>
                                {borderCountry.name.common}
                            </li>
                        ))}
                    </ul>}
                </div>
        </div>
    );
};

export default CountriesInfo;