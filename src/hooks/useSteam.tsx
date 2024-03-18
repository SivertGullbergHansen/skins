"use client";

import { SteamProfile } from "next-auth-steam";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export function useSteam() {
  const [steam, setSteam] = useState<undefined | null | SteamProfile>(
    undefined
  );

  useEffect(() => {
    getSession().then((res) => {
      setSteam(res ? (res.user as SteamProfile) : null);
    });
  }, []);

  return { steam };
}
