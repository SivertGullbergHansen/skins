import SteamProvider from "next-auth-steam";
import NextAuth from "next-auth/next";

import type { NextRequest } from "next/server";

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } }
) {
  const CALLBACK = new URL(
    "/api/auth/callback",
    process.env.NEXTAUTH_URL || "http://localhost:3000"
  );
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: CALLBACK.href,
      }),
    ],
  });
}

export { handler as GET, handler as POST };
