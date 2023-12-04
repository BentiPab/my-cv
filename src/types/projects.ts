import { Id } from "./common";

export type Project = {
  _id: Id;
  name: string;
  typeOfProject: string;
  experience: string;
  date: Date;
  description: string;
  skills: string[];
  status: string;
  path?: string;
  repo?: string;
  image: string;
};
