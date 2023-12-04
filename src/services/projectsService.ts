import { Project } from "@/types/projects";
import { basicFetch } from "@/utils/services";

export const fetchAllProjects = async () => {
  const res = await basicFetch<Project[]>("projects");

  return res;
};

export const fetchProject = async (id: string) => {
  const res = await basicFetch<Project>(`projects/${id}`);

  return res;
};
