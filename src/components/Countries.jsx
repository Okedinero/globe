import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ allCountries }) => {
  return (
    <div className="all-countries p-5">
      {allCountries.map((country) => {
        return (
          <Link
            className="text-decoration-none text-black"
            to={`/${country.name.common}`}
            key={country.name.common}
          >
            <div className="shadow rounded-2 m-3 bg-elements custom-text-color">
              <img className="rounded-top-2" src={country.flags.png} alt="" />
              <div className="text-start p-4">
                <h4 className="mb-3">{country.name.common.slice(0, 15)}</h4>
                <p className="mb-1">
                  <b>Population:</b> {country.population.toLocaleString()}
                </p>
                <p className="mb-1">
                  <b>Region: </b>
                  {country.region}
                </p>
                <p className="mb-1">
                  <b>Capital:</b> {country.capital}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
