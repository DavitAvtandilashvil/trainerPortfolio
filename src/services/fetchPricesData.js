import { supabase } from "../supabaseClient";

export const getPrices = async () => {
  const { data, error } = await supabase.from("prices").select("*");
  console.log(data);
  if (error) throw error;
  return data;
};
