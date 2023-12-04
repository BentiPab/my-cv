import ProjectExperienceLayout from "@/components/Layouts/ProjectExperienceLayout";
import { ExperienceService } from "@/services";
import { formatDate } from "@/utils/date";
import { parseToItems } from "@/utils/parsers";
import { format } from "date-fns";
import Image from "next/image";

const ExperiencePage = async ({ params }: { params: { id: string } }) => {
  const {
    company,
    companyLogo,
    country,
    clientBusiness,
    technologies,
    projectScope,
    startDate,
    endDate,
    onSite,
    leaveReason,
    relatedLinks,
    mainRole,
    mainResponsibilities,
  } = await ExperienceService.fetchExperience(params.id);
  const imageComponent = (
    <Image src={companyLogo} alt={company} fill className="object-cover" />
  );

  const items = (
    <>
      <div>Country: {country}</div>
      <div>Main Role: {mainRole}</div>
      <div>Main Responsibilities: {mainResponsibilities}</div>
      {projectScope && <div>Project Scope: {projectScope}</div>}
      {clientBusiness && <div>Client Business: {clientBusiness}</div>}
      <div>Start Date: {formatDate(startDate)}</div>
      {endDate && <div>End Date: {formatDate(endDate)}</div>}
      {leaveReason && <div>Leave Reason: {leaveReason}</div>}
      {!!technologies?.length && (
        <div>Technologies: {technologies.join(", ") || "-"}</div>
      )}
      <div>Work Mode: {onSite ? "On Site" : "Remote"}</div>
      {!!relatedLinks?.length && (
        <div>
          Related Links:{" "}
          {relatedLinks.map((rl, i) => {
            const isLast = relatedLinks.length === i + 1;
            return (
              <a className="text-blue-700" key={rl} href={rl}>
                Link {i + 1}
                {!isLast && ", "}
              </a>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <ProjectExperienceLayout
      imageComponent={imageComponent}
      items={items}
      title={company}
    />
  );
};

export default ExperiencePage;
