const URLOne = "https://restcountries.com/v3.1/independent?status=true";
const URLTwo = "https://restcountries.com/v3.1/alpha";

async function getCountries() {
  try {
    const res = await fetch(URLOne);
    if (res.status !== 200 && !res.ok)
      throw new Error("Failed to fetch Countries Data.");
    const data = await res.json();
    console.log("Countries Data retrieved.");
    return data;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Operation Completed.");
  }
}

async function getCountry(id) {
  try {
    const res = await fetch(`${URLTwo}/${id}`);
    if (res.status !== 200 && !res.ok)
      throw new Error("Failed to fetch country data.");
    const data = await res.json();
    const obj = {
      area: data[0].area,
      capital: data[0].capital.join(""),
      altSpellings: data[0].altSpellings,
      languages: Object.values(data[0].languages),
      continents: data[0].continents.join(""),
      name: data[0].name.common,
      population: data[0].population,
      unMember: data[0].unMember,
      currency: data[0].currencies[Object.keys(data[0].currencies)]?.name,
      flags: data[0].flags,
      coatOfArms: data[0].coatOfArms,
      latlng: data[0].latlng,
    };
    console.log("Country Data retrieved.");
    return obj;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Operation Completed.");
  }
}

export { getCountries, getCountry };
