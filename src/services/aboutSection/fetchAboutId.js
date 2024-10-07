import { supabase } from "../../supabaseClient";

const fetchAboutId = async () => {
  const { data } = await supabase.from("about").select("id");

  return data;
};
export default fetchAboutId;
