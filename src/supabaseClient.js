import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://leraardlkwvpueiukdrh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlcmFhcmRsa3d2cHVlaXVrZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4NzExMzMsImV4cCI6MTk5MjQ0NzEzM30.cK260gVOgwC5dn94DG_I4I6FMgbX1JFICIEjsfPIsWs'
export const supabase = createClient(supabaseUrl, supabaseKey)
