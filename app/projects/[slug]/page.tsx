import { fetchData } from "@backend/hooks/fetchData";
import Section from "@frontend/layouts/common/Section";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import VisitBtn from "@frontend/components/buttons/VisitBtn";
import BackBtn from "@frontend/components/buttons/BackBtn";
import Footer from "@frontend/layouts/footer/Footer";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import ProjectTag from "@frontend/components/project/ProjectTag";
import ProjectStack from "@frontend/components/project/ProjectStack";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await fetchData(`/api/projects/${params.slug}`);

  return {
    title: project?.title || "Project",
    description: project?.desc || "",
  };
}

export default async function ProjectPageBySlug({
  params,
}: {
  params: { slug: string };
}) {
  const project = await fetchData(`/api/projects/${params.slug}`);

  if (!project) {
    return <div className="pt-32 text-center">Project not found</div>;
  }

  const sortedTags = project.tag?.sort();
  const sortedTechs = project.tech?.sort();

  return (
    <>
      <div className="container pt-[100px] lg:pt-[50px]">
        <Section>
          <Image
            src={project.src}
            alt={project.alt}
            className="shadow rounded-xl"
            variant="thumbnail"
          />

          <div className="flex gap-1 flex-wrap">
            {sortedTags?.map((tag: string, i: number) => (
              <ProjectTag key={i} tag={tag} />
            ))}
          </div>

          <h1 className="text-3xl font-bold">{project.title}</h1>
          <Paragraph>{project.desc}</Paragraph>

          <div className="flex gap-3">
            {project.github && <GitHubBtn href={project.github} />}
            {project.website && <VisitBtn href={project.website} />}
            <BackBtn href="/projects" />
          </div>

          <div className="flex gap-2 mt-4">
            {sortedTechs?.map((tech: string, i: number) => (
              <ProjectStack key={i} tech={tech} />
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
