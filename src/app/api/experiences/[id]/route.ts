import { ExperiencesController, ProjectsController } from "@/controllers";
import { connectDb } from "@/db";
import { Id } from "@/types/common";

export const GET = async (req: Request, { params }: { params: { id: Id } }) => {
  connectDb();
  const res = await ExperiencesController.getExperienceById(params.id);
  return Response.json(res);
};
