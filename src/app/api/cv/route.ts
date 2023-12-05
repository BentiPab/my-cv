import { CVController } from "@/controllers";

export const POST = async (req: Request) => {
  try {
    const res = await CVController.createCV();

    return Response.json(res);
  } catch (e) {
    return Response.json((e as Error).cause);
  }
};
