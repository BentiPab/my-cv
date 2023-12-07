import { IP } from "@/types/ip";
import { outsideFetch, outsidePost } from "@/utils/services";

const sendUpdateMessage = async (message: string) => {
  await outsidePost<void>(`${process.env.CV_BOT_TOKEN_URL!}&text=${message}`);
};
export const getUserLocation = async () => {
  const res = await outsideFetch<IP>(process.env.IP_URL!);
  const location = `${res.country_name} ${res.city ? `- ${res.city}` : ""}`;
  return location;
};

export const sendNewVisitMessage = async (path: string) => {
  const location = await getUserLocation();
  const message = `New visit to ${path}, location ${location}`;
  await sendUpdateMessage(message);
};

export const sendNewCVDownload = async () => {
  const location = await getUserLocation();
  const message = `New CV download location ${location}`;
  await sendUpdateMessage(message);
};
