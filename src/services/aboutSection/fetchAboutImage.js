import { supabase } from "../../supabaseClient";

const fetchAboutImage = async () => {
  const { data, error } = await supabase.from("about").select("image");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
export default fetchAboutImage;
