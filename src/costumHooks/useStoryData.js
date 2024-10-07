import { useQuery } from "react-query";
import fetchStory from "../services/aboutSection/fetchStory";

export const useStoryData = () => {
  const { data, error, isLoading } = useQuery("aboutStory", fetchStory);
  return { data, error, isLoading };
};
