import { useQuery } from "react-query";
import fetchExperience from "../services/aboutSection/fetchExperience";

export const useExperience = () => {
  const { data, isLoading, error } = useQuery("experience", fetchExperience);
  return { data, isLoading, error };
};
