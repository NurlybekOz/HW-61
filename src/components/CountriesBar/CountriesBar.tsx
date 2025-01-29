import {Country} from "../../types";
interface Props {
    countries: Country[];
    onSelectCountry: (country: Country) => void;
}


const CountriesBar:React.FC<Props> = ({countries, onSelectCountry}) => {

    return (
        <div className="countriesBar">
            {countries.map((country, index) => (
                <button type='button'
                        className='country'
                        key={index}
                        onClick={() => onSelectCountry(country)}>
                    {country.name.common}
                </button>
            ))}
        </div>
    );
};

export default CountriesBar;