import Section from "@frontend/layouts/common/Section";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import VisitBtn from "@frontend/components/buttons/VisitBtn";
import LinkedInBtn from "@frontend/components/buttons/LinkedInBtn";
import BackBtn from "@frontend/components/buttons/BackBtn";
import Footer from "@frontend/layouts/footer/Footer";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import ProjectTag from "@frontend/components/project/ProjectTag";
import ProjectStack from "@frontend/components/project/ProjectStack";
import { Metadata } from "next";
import { projects } from "../data/projects";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: project?.title ?? "Project",
    description: project?.desc ?? "",
  };
}

export default function ProjectPageBySlug({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="pt-32 text-center">Project not found</div>;
  }

  return (
    <>
      <div className="container pt-24 pb-20">
        <Section>

          {/* 🔹 PROJECT IMAGE */}
          <div className="mb-8">
            <Image
              src={project.src}
              alt={project.alt}
              className="w-full rounded-2xl shadow-lg"
              variant="thumbnail"
            />
          </div>

          {/* 🔹 TAGS */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(project.tag ?? []).map((tag, i) => (
              <ProjectTag key={i} tag={tag}>
                {tag}
              </ProjectTag>
            ))}
          </div>

          {/* 🔹 TITLE */}
          <h1 className="text-4xl font-bold mb-4">
            {project.title}
          </h1>

          {/* 🔹 DESCRIPTION */}
          <Paragraph className="max-w-3xl mb-8">
            {project.desc}
          </Paragraph>

          {/* 🔹 ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-10">
            {project.github && <GitHubBtn href={project.github} />}
            {project.website && <VisitBtn href={project.website} />}
            {project.linkedin && <LinkedInBtn href={project.linkedin} />}
            <BackBtn href="/projects" />
          </div>

          {/* 🔹 TECH STACK */}
          <div className="flex flex-wrap gap-3">
            {(project.tech ?? []).map((tech, i) => (
              <ProjectStack key={i} tech={tech} />
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
