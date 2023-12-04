import { Project } from "@/types/projects";
import { Schema, model, models } from "mongoose";

export const projectSchema = new Schema<Project>(
  {
    name: {
      type: String,
    },
    typeOfProject: { type: String },
    experience: { type: String },
    date: { type: Date },
    description: { type: String },
    skills: { type: [String] },
    status: { type: String },
    path: { type: String },
    repo: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProjectModel = models.Project || model<Project>("Project", projectSchema);

export default ProjectModel;
