// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qqvgbmuflefbgckodyvd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdmdibXVmbGVmYmdja29keXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NzY1NjAsImV4cCI6MjA2MDE1MjU2MH0.1oXKj9H6afZKvnRqMhWqAurvyDK8RjHnkwfnaeFwP_E";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);