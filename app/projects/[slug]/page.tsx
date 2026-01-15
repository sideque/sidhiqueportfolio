import { Metadata } from "next";
import { useFetch } from "@backend/hooks/useFetch";
import Section from "@frontend/layouts/common/Section";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import VisitBtn from "@frontend/components/buttons/VisitBtn";
import BackBtn from "@frontend/components/buttons/BackBtn";
import Footer from "@frontend/layouts/footer/Footer";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import ProjectTag from "@frontend/components/project/ProjectTag";
import ProjectStack from "@frontend/components/project/ProjectStack";

export default async function ProjectPageBySlug({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ API returns SINGLE project
  const project = await useFetch(`/api/projects/${params.slug}`);

  if (!project) {
    return <div className="pt-32 text-center">Project not found</div>;
  }

  const sortedTags = project.tag?.sort((a: string, b: string) =>
    a.localeCompare(b),
  );

  const sortedTechs = project.tech?.sort((a: string, b: string) =>
    a.localeCompare(b),
  );

  return (
    <>
      <div className="container pt-[100px] lg:pt-[50px]">
        <Section>
          <div className="w-full max-w-[1000px] mx-auto space-y-4">
            <Image
              src={project.src}
              alt={project.alt}
              className="shadow rounded-xl"
              variant="thumbnail"
              size="thumbnail"
              shape="tv"
            />

            <div className="w-full flex flex-wrap gap-1">
              {sortedTags?.map((tagItem: string, index: number) => (
                <ProjectTag key={index} tag={tagItem}>
                  {tagItem}
                </ProjectTag>
              ))}
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-x-8 xl:gap-x-12">
              <div className="mb-6">
                <h1 className="font-bold text-3xl lg:text-4xl mb-1">
                  {project.title}
                </h1>
                <Paragraph variant="wide">{project.desc}</Paragraph>
              </div>

              <div className="flex lg:flex-col gap-4">
                {project.github && (
                  <GitHubBtn href={project.github.toString()} />
                )}
                {project.website && (
                  <VisitBtn href={project.website} />
                )}
                <BackBtn href="/projects" />
              </div>
            </div>

            <div className="w-full hidden lg:flex items-center gap-1 mt-4">
              <h3 className="capitalize mr-2 text-slate-400">
                powered by
              </h3>
              {sortedTechs?.map((techItem: string, index: number) => (
                <ProjectStack key={index} tech={techItem} />
              ))}
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
