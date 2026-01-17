import Grid from "@frontend/layouts/common/Grid";
import Section from "@frontend/layouts/common/Section";
import ProjectCard from "@frontend/components/project/ProjectCard";
import { ProjectType } from "@shared/types";

type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
  return (
    <Section>
      <Grid className="xl:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            href={`/projects/${project.slug}`}
            ariaLabel={project.title}
            src={project.src}
            alt={project.alt}
            title={project.title}
            desc={project.desc}
            website={project.website}
            linkedin={project.linkedin}
            github={project.github}
            tag={project.tag}
            tech={project.tech}
          />
        ))}
      </Grid>
    </Section>
  );
}
