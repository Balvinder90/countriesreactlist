import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/countryApi";

function useCountries() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return { data, isLoading, isError };
}

export { useCountries };
