import { Experience } from "@/types/experiences";
import { basicFetch } from "@/utils/services";

export const fetchAllExperiences = async () => {
  const res = await basicFetch<Experience[]>("experiences");

  return res;
};

export const fetchExperience = async (id: string) => {
  const res = await basicFetch<Experience>(`experiences/${id}`);

  return res;
};
