import ProjectExperienceLayout from "@/components/Layouts/ProjectExperienceLayout";
import { ProjectService } from "@/services";
import { formatDate } from "@/utils/date";
import Image from "next/image";

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const {
    name,
    image,
    repo,
    experience,
    typeOfProject,
    path,
    skills,
    status,
    date,
    description,
  } = await ProjectService.fetchProject(params.id);
  const imageComponent = (
    <Image src={image} alt={name} fill className="object-cover" />
  );

  const items = (
    <>
      <div>Date: {formatDate(date)}</div>
      <div>Experience: {experience}</div>
      <div>
        Url:{" "}
        {path ? (
          <a className="text-blue-600" href={path}>
            {name} Link
          </a>
        ) : (
          "Not yet deployed/API Dropped"
        )}
      </div>
      <div>
        Repo:{" "}
        {repo ? (
          <a className="text-blue-600" href={repo}>
            Repo Link
          </a>
        ) : (
          "Not yet deployed"
        )}
      </div>
      {skills && <div>Client Business: {skills.join(", ")}</div>}
      <div>Type of Project: {typeOfProject}</div>
      <div>Description: {description}</div>
      <div className={`capitalize`}>Status: {status}</div>
    </>
  );

  return (
    <ProjectExperienceLayout
      imageComponent={imageComponent}
      items={items}
      title={name}
    />
  );
};

export default ProjectPage;
