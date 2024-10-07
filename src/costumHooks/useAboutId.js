import { useQuery } from "react-query";
import fetchAboutId from "../services/aboutSection/fetchAboutId";

export const useAboutId = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["aboutId"],
    queryFn: fetchAboutId,
  });
  return { data, isLoading, error, isError };
};
