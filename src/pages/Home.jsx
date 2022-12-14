import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const [countries, setCountries] = useState();

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  const fectchCountry = async (country) => {
    if (country === "") {
      fetchCountries();
    } else {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const data = await response.json();
      setCountries(data);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="form_input">
        <input
          onChange={(e) => fectchCountry(e.target.value)}
          type="text"
          name="country"
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="container">
        <div className="row">
          {countries?.map((country, index) => (
            <Link to={`/country/${country.name.common}`} key={index}>
              <div className="countries">
                <div className="image_placeholder">
                  <img src={country.flags.png} alt={country.name.common}></img>
                </div>
                <div className="text_content">
                  <h3>{country.name.common}</h3>
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  {country.capital && (
                    <p>
                      <span>Capital:</span> {country.capital[0]}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
