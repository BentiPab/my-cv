import { IP } from "@/types/ip";
import { outsideFetch, outsidePost } from "@/utils/services";
import { Geo } from "@vercel/edge";

const sendUpdateMessage = async (message: string) => {
  await outsidePost<void>(`${process.env.CV_BOT_TOKEN_URL!}&text=${message}`);
};

export const sendNewVisitMessage = async (path: string, location: Geo) => {
  const message = `New visit to ${path}, location ${location.country} - ${location.city}`;
  await sendUpdateMessage(message);
};
