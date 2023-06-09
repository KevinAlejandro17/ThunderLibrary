import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAPIKEY = import.meta.env.VITE_SUPABASE_API_KEY;

console.log(supabaseURL, supabaseAPIKEY);

export const supabase = createClient(supabaseURL, supabaseAPIKEY);