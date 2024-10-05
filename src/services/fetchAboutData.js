import { supabase } from "../supabaseClient";

export const fetchAboutData = async () => {
  const { data, error } = await supabase.from("about").select("id");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const fetchAboutImage = async () => {
  const { data, error } = await supabase.from("about").select("image");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
