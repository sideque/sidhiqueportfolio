import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";

export default function AboutProgramming() {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:order-last xl:col-span-2 premium:col-span-3 flex flex-col items-end">
        <Image
          src="/images/pages/about/code.jpeg"
          alt="Programming"
          shape="tv"
        />
        <ImageCredits name="Akhila" href="https://www.instagram.com/__akhila__t/" />
      </div>
      <div className="xl:order-first xl:col-span-2 programming">
        <SectionHeading name="Programming" />
        <Paragraph variant="wide">
          I started my journey without much clarity or direction, unsure of
          where I was headed in the world of programming. Through a{" "}
          <span className="text-primary font-semibold">
            brototype-style self-learning approach
          </span>
          , I learned to rely on{" "}
          <span className="text-primary font-semibold">
            discipline, consistency, and hands-on practice
          </span>{" "}
          rather than shortcuts. Working on{" "}
          <span className="text-primary font-semibold">
            real-world projects
          </span>{" "}
          taught me how to think practically, solve problems, and improve step
          by step.
          <br />
          <br />
          Over time, I developed a strong appreciation for{" "}
          <span className="text-primary font-semibold">
            clean structure and organized workflows
          </span>
          —from managing files to writing readable, maintainable code. What
          began as uncertainty has evolved into a clear goal: becoming a{" "}
          <span className="text-primary font-semibold">
            skilled and reliable software engineer
          </span>
          , driven by growth, consistency, and quality.
        </Paragraph>
      </div>
    </Section>
  );
}
