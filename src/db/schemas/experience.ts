import { Experience } from "@/types/experiences";
import { Schema, model, models } from "mongoose";

export const experienceSchema = new Schema<Experience>(
  {
    company: {
      type: String,
    },
    mainRole: { type: String },
    mainResponsibilities: { type: String },
    startDate: { type: Date },
    projectScope: { type: String },
    technologies: { type: [String] },
    clientBusiness: { type: String },
    onSite: { type: Boolean },
    endDate: { type: Date },
    leaveReason: { type: String },
    relatedLinks: { type: [String] },
    country: { type: String },
    companyLogo: { type: String },
    related: { type: Boolean },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ExperienceModel =
  models.Experience || model<Experience>("Experience", experienceSchema);

export default ExperienceModel;
