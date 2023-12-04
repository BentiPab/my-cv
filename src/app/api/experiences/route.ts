import { ExperiencesController } from "@/controllers";
import { connectDb } from "@/db";

export const GET = async (req: Request) => {
  connectDb();
  const res = await ExperiencesController.getAllExperiences();
  return Response.json(res);
};
