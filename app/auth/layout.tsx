import Image from "next/image";
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

  if (user) redirect("/account");

  return (
    <div className="h-screen grid grid-cols-12 items-center">
      <div className="col-span-7 relative h-full">
        <Image
          src="/rand.png"
          fill
          alt="sing up image"
          sizes="100wv"
          className="w-full h-full"
        />
      </div>
      <div className="col-span-5 px-20">{children}</div>
    </div>
  );
}
