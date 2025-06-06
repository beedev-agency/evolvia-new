"use client";

import { createClient } from "@/utils/supabase/client";
import { SettingsForm } from "@/components";

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <SettingsForm user={user} />;
}
