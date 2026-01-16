import { Metadata } from "next";
import Projects from "@frontend/layouts/pages/project/Projects";
import BackToTop from "@frontend/components/buttons/BackToTop";
import Footer from "@frontend/layouts/footer/Footer";
import PageWrapper from "@frontend/layouts/common/PageWrapper";
import { projects } from "./data/projects"; // ✅ STATIC IMPORT

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  if (!projects || projects.length === 0) {
    return (
      <PageWrapper id="projects">
        <p className="text-center pt-32">No projects found</p>
      </PageWrapper>
    );
  }

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
