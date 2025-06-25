// middleware.ts
import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
  runtime: 'nodejs', // 👈 Bitno za Supabase SSR
}

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}
