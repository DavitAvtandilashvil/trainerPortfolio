import { useQuery } from "react-query";
import { getPrices } from "../services/fetchPricesData";

export const usePrices = () => {
  const {
    data: prices,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["prices"],
    queryFn: getPrices,
  });

  return { prices, isLoading, error };
};
