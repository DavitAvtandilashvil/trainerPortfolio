import { supabase } from "../supabaseClient";

export const getJourney = async () => {
  const { data, error } = await supabase.from("services").select("*");
  console.log(data);
  if (error) throw error;
  return data;
};
