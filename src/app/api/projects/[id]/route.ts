import { ProjectsController } from "@/controllers";
import { connectDb } from "@/db";
import { Id } from "@/types/common";

export const GET = async (req: Request, { params }: { params: { id: Id } }) => {
  connectDb();
  const res = await ProjectsController.getProjectById(params.id);
  return Response.json(res);
};
