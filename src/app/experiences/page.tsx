import { ExperienceService } from "@/services";
import CommonExpProjLayout from "../../components/Layouts/CommonExpProjLayout";
import Card from "@/components/Card/Card";

const Experiences = async () => {
  const experiences = await ExperienceService.fetchAllExperiences();

  return (
    <CommonExpProjLayout>
      {experiences.map((p) => (
        <Card
          _id={p._id}
          key={p._id.toString()}
          name={p.company}
          image={p.companyLogo}
        />
      ))}
    </CommonExpProjLayout>
  );
};

export default Experiences;
