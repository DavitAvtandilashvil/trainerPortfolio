import { supabase } from "../../supabaseClient";

const fetchStory = async () => {
  const { data: story, error } = await supabase.from("about").select("story");

  if (error) {
    throw new Error(error.message);
  }

  return story;
};

export default fetchStory;
