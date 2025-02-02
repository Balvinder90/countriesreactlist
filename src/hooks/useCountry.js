import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/countryApi";

function useCountry(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country", id],
    queryFn: () => getCountry(id),
  });
  return { data, isLoading, isError };
}

export { useCountry };
