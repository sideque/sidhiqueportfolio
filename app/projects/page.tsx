import { Metadata } from "next";
import { fetchData } from "@backend/hooks/fetchData";
import Projects from "@frontend/layouts/pages/project/Projects";
import BackToTop from "@frontend/components/buttons/BackToTop";
import Footer from "@frontend/layouts/footer/Footer";
import PageWrapper from "@frontend/layouts/common/PageWrapper";
import { ProjectType } from "@shared/types";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects: ProjectType[] = await fetchData("/api/projects");

  return (
    <>
      <BackToTop id="#projects" />
      <PageWrapper id="projects">
        <Projects projects={projects} />
      </PageWrapper>
      <Footer />
    </>
  );
}
