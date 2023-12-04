import { Id } from "./common";

export type Experience = {
  _id: Id;
  company: string;
  mainRole: string;
  mainResponsibilities: string;
  projectScope?: string;
  clientBusiness?: string;
  technologies?: string[];
  startDate: Date;
  onSite: boolean;
  endDate?: Date;
  leaveReason?: string;
  relatedLinks?: string[];
  country: string;
  companyLogo: string;
  related: boolean;
};
