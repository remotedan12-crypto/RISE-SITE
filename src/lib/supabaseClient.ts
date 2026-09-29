
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL?.trim() ||
  "https://lukecaytxsmicrxrcyff.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1a2VjYXl0eHNtaWNyeHJjeWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTgyNzUsImV4cCI6MjA4NzE3NDI3NX0.pP8eTl50TXQit3kUkHwqu_zvmE1_iodSXiL8tejGMks";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
