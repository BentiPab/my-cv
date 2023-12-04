import ExperienceModel from "@/db/schemas/experience";
import { Id } from "@/types/common";

export const getAllExperiences = async () => {
  return await ExperienceModel.aggregate([
    {
      $addFields: {
        endDate: {
          $ifNull: ["$endDate", new Date()],
        },
      },
    },
    {
      $sort: {
        endDate: -1,
      },
    },
  ]);
};

export const getExperienceById = async (id: Id) => {
  return await ExperienceModel.findById(id);
};
