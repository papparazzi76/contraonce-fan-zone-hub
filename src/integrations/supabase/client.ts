// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wokwmbgesqauahauvjtg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indva3dtYmdlc3FhdWFoYXV2anRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzAxMzQsImV4cCI6MjA2MzUwNjEzNH0.wkbnkdbYX44krJ_KR64H11rAwh5RSlelMh-OjZC7B10";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);