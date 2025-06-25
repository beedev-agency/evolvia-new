import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <div className="h-screen grid grid-cols-12 items-center">
      <div className="col-span-3 relative h-full"></div>
      <div className="col-span-9 px-20">{children}</div>
    </div>
  );
}
