
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://qqvgbmuflefbgckodyvd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdmdibXVmbGVmYmdja29keXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NzY1NjAsImV4cCI6MjA2MDE1MjU2MH0.1oXKj9H6afZKvnRqMhWqAurvyDK8RjHnkwfnaeFwP_E";

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

export default supabase;
