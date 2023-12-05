import { CVController } from "@/controllers";
import path from "path";

export const POST = async (req: Request) => {
  try {
    //const res = await CVController.createCV();
    const res = {
      cwd: path.join(process.env.NEXT_PUBLIC_BASE_URL!, "/cv.html"),
      other: path.resolve("cv.html"),
    };
    return Response.json(res);
  } catch (e) {
    return Response.json((e as Error).cause);
  }
};
