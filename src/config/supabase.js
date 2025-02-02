import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qkmayhehanpazqeoafmh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrbWF5aGVoYW5wYXpxZW9hZm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTcxNTYsImV4cCI6MjA1NDA5MzE1Nn0.A6NMKnMm_YyVtG5TtHIEPpMK8trt33OsZv2hnr3xhW0';

export const supabase = createClient(supabaseUrl, supabaseKey);
