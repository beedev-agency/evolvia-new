import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    'https://pbjwjgjfjzizpczibxqs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiandqZ2pmanppenBjemlieHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5ODcwMjYsImV4cCI6MjA2NDU2MzAyNn0.XNKIYtXITWBn1lRVHcIMvnCf8ZW47e_iVCNlu_xMQe0',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}