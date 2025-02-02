import { useParams } from "react-router";
import { useCountry } from "../hooks/useCountry";

import { arrayWithAnd } from "../utils/arrayWithAnd";

import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "../components/NotFound";
import Container from "../components/Container";
import Button from "../components/Button";
import FlagAndName from "../components/FlagAndName";
import CoatOfArms from "../components/CoatOfArms";
import CountryContainer from "../components/CountryContainer";
import CountryInfo from "../components/CountryInfo";

import {
  faBuilding,
  faCoins,
  faComment,
  faMapLocationDot,
  faPen,
  faPeopleGroup,
  faPerson,
  faMountainSun,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../components/Map";

function Country() {
  const { id } = useParams();
  const { data, isLoading, isError } = useCountry(id);

  const {
    capital,
    altSpellings,
    coatOfArms,
    continents,
    currency,
    flags,
    languages,
    latlng,
    name,
    population,
    unMember,
    area,
  } = data || {};

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <NotFound>Country not found...</NotFound>;

  return (
    <>
      <Container>
        <Button type="goBack" to="/">
          Home
        </Button>
        <FlagAndName flag={flags} name={name} />

        <CountryContainer>
          <CountryInfo
            icon={faPerson}
            text={`${name} has a population of ${population}`}
          />

          <CountryInfo
            icon={faBuilding}
            countryData={data}
            text={`The Capital of ${name} is ${capital}`}
          />

          <CountryInfo
            icon={faCoins}
            text={
              currency ? `The currency of ${name} is the ${currency}` : false
            }
          />

          <CountryInfo
            icon={faMapLocationDot}
            text={`${name} is located in ${continents}`}
          />

          <CountryInfo
            icon={faComment}
            text={
              languages.length > 1
                ? arrayWithAnd(languages, `Languages spoke in ${name} are`)
                : arrayWithAnd(languages, `Language spoke in ${name} is`)
            }
          />

          <CountryInfo
            icon={faPen}
            text={
              altSpellings.length > 1
                ? arrayWithAnd(altSpellings, `Other names for ${name} are`)
                : arrayWithAnd(altSpellings, `Other names for ${name} is`)
            }
          />

          <CountryInfo
            icon={faPeopleGroup}
            text={`${name} is ${unMember ? "a" : "not a"} UN Member`}
          />

          <CountryInfo
            icon={faMountainSun}
            text={`${name} is ${area} km² in size`}
          />
        </CountryContainer>
        <CoatOfArms coatOfArms={coatOfArms} name={name} />
      </Container>
      <Map latlng={latlng} name={name} />
    </>
  );
}

export default Country;
