import { supabase } from "../../supabaseClient";

const fetchSpecificColumns = async () => {
  const { data: columns, error } = await supabase
    .from("about")
    .select("some_column", "other_column");
  if (error) {
    throw new Error(error.message);
  }
  return columns;
};
export default fetchSpecificColumns;
