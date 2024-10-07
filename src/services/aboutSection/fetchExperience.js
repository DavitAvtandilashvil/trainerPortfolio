import { supabase } from "../../supabaseClient";

const fetchExperience = async () => {
  const { data: experience, error } = await supabase
    .from("about")
    .select("experience");
  if (error) {
    throw new Error(error.message);
  }
  return experience;
};
export default fetchExperience;
