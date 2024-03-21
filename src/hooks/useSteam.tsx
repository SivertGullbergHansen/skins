"use client";

import { SteamProfile } from "next-auth-steam";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function useSteam() {
  const session = useSession();
  const [steam, setSteam] = useState<SteamProfile | undefined | null>(
    undefined
  );

  useEffect(() => {
    if (session.status === "loading") return;
    if (session.data) {
      const data: SteamProfile = (session.data.user as any).steam;

      setSteam(data);
    } else setSteam(null);
  }, [session.data, session.status, steam]);

  return steam;
}

export { useSteam };
