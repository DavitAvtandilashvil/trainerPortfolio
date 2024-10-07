import { supabase } from "../../supabaseClient";

const fetchAllRows = async () => {
  const { data: rows, error } = await supabase.from("about").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return rows;
};
export default fetchAllRows;
