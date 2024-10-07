import { useQuery } from "react-query";
import { getJourney } from "../services/fetchJourneyData";

export const useJourneyServices = () => {
  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getJourney,
  });

  return { services, isLoading, error };
};
