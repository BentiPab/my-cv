import ProjectModel from "@/db/schemas/project";
import { Id } from "@/types/common";

export const getAllProjects = async () => {
  return await ProjectModel.aggregate([{ $sort: { date: 1 } }]);
};

export const getProjectById = async (id: Id) => {
  return await ProjectModel.findById(id);
};
