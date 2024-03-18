import { models } from "../db";

export async function getData(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("steamid");

  if (!id) return Response.json({ message: "Missing steamid!" });

  const data = await models.wp_player_skins.findAll({
    where: { steamid: id },
    include: [
      {
        model: models.wp_player_agents,
      },
      {
        model: models.wp_player_gloves,
      },
      {
        model: models.wp_player_knife,
      },
    ],
  });

  return Response.json({ data });
}
