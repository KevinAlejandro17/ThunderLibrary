import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "../config";

const {supabaseURL, supabaseAPIKEY} = supabaseConfig;
export const supabase = createClient(supabaseURL, supabaseAPIKEY);