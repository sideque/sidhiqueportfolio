import { Metadata } from "next";
import { useFetch } from "@backend/hooks/useFetch";
import Projects from "@frontend/layouts/pages/project/Projects";
import BackToTop from "@frontend/components/buttons/BackToTop";
import Footer from "@frontend/layouts/footer/Footer";
import PageWrapper from "@frontend/layouts/common/PageWrapper";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  // ✅ FETCH DATA HERE (SERVER COMPONENT)
  const projects = await useFetch("/api/projects");

  return (
    <>
      <BackToTop id={"#projects"} />
      <PageWrapper id="projects">
        {/* ✅ PASS DATA AS PROP */}
        <Projects projects={projects} />
      </PageWrapper>
      <Footer />
    </>
  );
}
