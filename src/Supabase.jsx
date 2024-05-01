import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qsprzqrgdinsiarnryoh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcHJ6cXJnZGluc2lhcm5yeW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDczNDksImV4cCI6MjAzMDEyMzM0OX0.gy7VDqTIlbjGyE9CPqM-Paj8xMgcckuMNhjmZt2FKgI'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase