import { useState } from "react";
import { useCountries } from "../hooks/UseCountries";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import CountriesContainer from "../components/CountriesContainer";
import CountryItem from "../components/CountryItem";
import Button from "../components/Button";
import Filters from "../components/Filters";
import Error from "../components/Error";
import NoCountry from "../components/NoCountry";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Countries() {
  let derived;

  const { data, isLoading, isError } = useCountries();

  const [search, setSearch] = useState("");

  const [isSortedByName, setIsSortedByName] = useState(null);
  const [isSortedByPopulation, setIsSortedByPopulation] = useState(null);

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <Error />;

  if (isSortedByName === null && isSortedByPopulation === null) {
    derived = data
      .slice()
      .filter((country) =>
        country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
      );
  }

  if (isSortedByName === true) {
    derived = data
      .slice()
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  if (isSortedByName === false) {
    derived = data
      .slice()
      .sort((a, b) => b.name.common.localeCompare(a.name.common));
  }

  if (isSortedByPopulation === true) {
    derived = data.slice().sort((a, b) => a.population - b.population);
  }

  if (isSortedByPopulation === false) {
    derived = data.slice().sort((a, b) => b.population - a.population);
  }

  function handleSortByName(e) {
    e.preventDefault();
    setIsSortedByName(!isSortedByName);
    setIsSortedByPopulation(null);
  }

  function handleSortByPopulation(e) {
    e.preventDefault();
    setIsSortedByPopulation(!isSortedByPopulation);
    setIsSortedByName(null);
  }

  return (
    <Container>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setSortedByName={setIsSortedByName}
        setSortedByPopulation={setIsSortedByPopulation}
      />

      <Filters>
        <Button type="sort" onClick={handleSortByName}>
          {isSortedByName ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
          Sort by Name
        </Button>
        <Button type="sort" onClick={handleSortByPopulation}>
          {isSortedByPopulation ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
          Sort by Population
        </Button>
      </Filters>

      {derived.length === 0 && <NoCountry>No Countries found 😢</NoCountry>}

      <CountriesContainer>
        {derived.map((country) => (
          <CountryItem key={country.cca2} country={country} />
        ))}
      </CountriesContainer>
    </Container>
  );
}

export default Countries;
