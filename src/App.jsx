import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EachCountry from "./components/EachCountry";
function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  //  =============== FETCH API ===============
  //useState(): It is used to add state to a functional component. It's a way to store and update values(like variables) inside your components.

  //useEffect(): It is a hook that allows you to perform side effects in your functional components. Side effects are things like data fetching, manually changing the DOM/UI, and so on. It runs after the component output has been rendered to the DOM. useEffect() continues to run until it is asked to stop using a dependency, a square bracket to denote an array.

  useEffect(() => {
    const getData = async () => {
      const fetchAPI = await fetch("https://restcountries.com/v3.1/all");

      const jsonAPI = await fetchAPI.json();
      console.log(jsonAPI);
      setAllCountries(jsonAPI);
      setLoading(false);
    };
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  // The first "allCountries" in the code below is used as an attribute, a container tho, to update the "allCountries" variable in the "useState" function.

  // ============== FILTERING BY SEARCH ================

  const filterBySearch = (input) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });
    setFilteredCountries(searchedCountry);
  };

  // =========== FILTERING BY REGION ============
  const filterByRegion = (continent) => {
    const selectedCountry = allCountries.filter((eachCountry) => {
      return eachCountry.region === continent;
    });
    setFilteredCountries(selectedCountry);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                filterBySearch={filterBySearch}
                filterByRegion={filterByRegion}
                loading={loading}
              />
            }
          />

          <Route path="/:countrydetails" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
