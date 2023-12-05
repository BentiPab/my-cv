import { CVController } from "@/controllers";
import { connectDb } from "@/db";

export const POST = async (req: Request) => {
  const res = await CVController.createCV();

  return Response.json(res);
};
