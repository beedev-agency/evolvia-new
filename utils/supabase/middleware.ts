// utils/supabase/middleware.ts
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    'https://pbjwjgjfjzizpczibxqs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiandqZ2pmanppenBjemlieHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5ODcwMjYsImV4cCI6MjA2NDU2MzAyNn0.XNKIYtXITWBn1lRVHcIMvnCf8ZW47e_iVCNlu_xMQe0',
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // 🚫 Bitno: Nemoj ništa pozivati između createServerClient i auth.getUser()
  // const { data: { user } } = await supabase.auth.getUser();
  // if (!user && !request.nextUrl.pathname.startsWith("/auth")) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/auth/login";
  //   return NextResponse.redirect(url);
  // }

  return response;
}
