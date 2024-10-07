import { useQuery } from "react-query";

import fetchAboutImage from "../services/aboutSection/fetchAboutImage";

export const useAboutImage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["aboutImage"],
    queryFn: fetchAboutImage,
  });
  return { data, isLoading, error };
};
