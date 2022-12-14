import { useState, useEffect } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();
      setCountry(data[0]);
    };
    fetchCountry();
  }, [name]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="btn_back">
          <Link to="/">
            <BiArrowBack /> BackBack
          </Link>
        </div>
        <div className="content">
          <div className="flag">
            <img src={country?.flags.png} alt={country?.name.common} />
          </div>
          <div>
            <h1>{country?.name.common}</h1>
            <div className="details">
              <div className="col-1">
                <p>
                  <span>Native Name:</span> {country?.name.common}
                </p>
                <p>
                  <span>Population:</span> {country?.population}
                </p>
                <p>
                  <span>Region:</span> {country?.region}
                </p>
                <p>
                  <span>Sub Region:</span> {country?.subregion}
                </p>
                {country?.capital && (
                  <p>
                    <span>Capital:</span> {country?.capital[0]}
                  </p>
                )}
              </div>
              <div className="col-2">
                <p>
                  <span>Top Level Domain:</span> be
                </p>
                <p>
                  <span>Currencies:</span>
                </p>
                <p>
                  <span>Languages:</span>
                </p>
              </div>
            </div>
            {country?.borders && (
              <div className="border_Countries">
                <h4>Border Countries: </h4>
                <div>
                  {country?.borders.map((border, index) => (
                    <p key={index}>{border} , </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
