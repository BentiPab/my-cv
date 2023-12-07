import { basicPost } from "@/utils/services";

export const fetchCVDocument = async () => {
  const res = await basicPost<string>("cv");

  return res;
};
