import Card from "@/components/Card/Card";
import { ProjectService } from "@/services";
import CommonExpProjLayout from "../../components/Layouts/CommonExpProjLayout";

const Projects = async () => {
  const projects = await ProjectService.fetchAllProjects();
  return (
    <CommonExpProjLayout>
      {projects.map((p) => (
        <Card
          _id={p._id}
          key={p._id.toString()}
          name={p.name}
          status={p.status}
          image={p.image}
        />
      ))}
    </CommonExpProjLayout>
  );
};

export default Projects;
