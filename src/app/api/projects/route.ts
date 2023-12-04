import { ProjectsController } from "@/controllers";
import { connectDb } from "@/db";

export const GET = async (req: Request) => {
  connectDb();
  const res = await ProjectsController.getAllProjects();
  return Response.json(res);
};
