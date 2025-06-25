// utils/supabase/createClient.ts
export const runtime = "nodejs";

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies() // ⛔️ NE treba `await`, `cookies()` NIJE async!

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
          } catch (e) {
            // Ovo je u redu – kada se koristi iz server komponenti, Next ne dozvoljava pisanje cookies
            // Middleware će odraditi refresh sesije
          }
        },
      },
    }
  )
}
