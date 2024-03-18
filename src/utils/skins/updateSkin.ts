import { decode } from "next-auth/jwt";
import { models } from "../db";
import { SteamProfile } from "next-auth-steam";

export async function postData(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const type: "skin" | "gloves" | "knife" | "agent" | null = searchParams.get(
    "type"
  ) as any;

  if (!process.env.NEXTAUTH_SECRET) {
    return Response.json({ message: "Website missing environment variable!" });
  }

  if (!token || !type) {
    return Response.json({ message: "Missing parameter!" });
  }

  const decoded = (await decode({
    secret: process.env.NEXTAUTH_SECRET,
    token,
  })) as SteamProfile | null;

  if (!decoded) {
    return Response.json({ message: "Invalid token!" });
  }

  switch (type) {
    case "agent":
      break;

    case "gloves":
      break;

    case "knife":
      break;

    case "skin":
      break;
  }

  return Response.json({});
}
