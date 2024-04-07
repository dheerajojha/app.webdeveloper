import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
const supabaseUrl = 'https://prqqgozlpaozmlnsjwtg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBycXFnb3pscGFvem1sbnNqd3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0NzY4ODksImV4cCI6MjAyODA1Mjg4OX0.z79ULlgbeaC77pW3wUkRUm6Jqq-Tv3fJx5qs57HcaAo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
