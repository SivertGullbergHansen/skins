"use client";

import { SteamProfile } from "next-auth-steam";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export function useSteam() {
  const [steam, setSteam] = useState<null | SteamProfile>(null);

  useEffect(() => {
    getSession().then((res) => {
      console.log(res);
      if (res) setSteam(res.user as SteamProfile);
    });
  }, []);

  return { steam };
}
