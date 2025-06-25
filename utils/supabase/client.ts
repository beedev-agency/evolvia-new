import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    'https://pbjwjgjfjzizpczibxqs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiandqZ2pmanppenBjemlieHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5ODcwMjYsImV4cCI6MjA2NDU2MzAyNn0.XNKIYtXITWBn1lRVHcIMvnCf8ZW47e_iVCNlu_xMQe0'
  )
}