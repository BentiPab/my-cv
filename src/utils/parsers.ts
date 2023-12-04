import { Id } from "@/types/common";
import { Experience } from "@/types/experiences";
import { Project } from "@/types/projects";

export const parseCamelCase = (camel: string) =>
  camel.replace(/([A-Z])/g, " $1");

export const parseToItems = (
  obj: Project | Experience
): {
  value: string | string[] | Id;
  label: string;
}[] => {
  const keys = Object.keys(obj).filter((k) => k !== "_id" && k !== "image");

  const items = keys.map((k) => {
    const value = obj[k as keyof typeof obj];
    const label = parseCamelCase(k);

    if (!value) {
      return { label, value: "-" };
    }

    if (Array.isArray(value) && !["relatedLinks"].includes(k)) {
      return { label, value: value.join(", ") };
    }

    return { value, label };
  });

  return items;
};
