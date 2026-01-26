import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";
import ShinyText from "@app/components/ShinyText/ShinyText";

export default function ExpIntern() {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end order-2">
        <Image
          src="/images/pages/experience/oc.jpeg"
          alt="Emirnex Tech Solutions Logo"
          shape="tv"
        />
        <ImageCredits
          name="Emirnex Tech Solutions Logo"
          href="https://www.instagram.com/emirnex.tech"
        />
      </div>

      <div className="xl:col-span-2 order-1">
        <SectionHeading>
          <ShinyText
            text="Startup & Freelance Experience"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </SectionHeading>
        <Paragraph variant="wide">
          I gained valuable{" "}
          <span className="text-primary font-semibold">
            industry experience
          </span>{" "}
          as part of{" "}
          <span className="text-primary font-semibold">
            Emirnex Tech Solutions
          </span>
          , a{" "}
          <span className="text-primary font-semibold">
            Dubai-based startup freelance team
          </span>
          . Working in a real startup environment helped me understand{" "}
          <span className="text-primary font-semibold">
            professional workflows
          </span>{" "}
          and effective{" "}
          <span className="text-primary font-semibold">team collaboration</span>
          . I contributed to projects involving{" "}
          <span className="text-primary font-semibold">
            web development, e-commerce websites, digital marketing,
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold">branding solutions</span>
          . This experience strengthened my ability to handle{" "}
          <span className="text-primary font-semibold">
            client requirements
          </span>
          , manage tasks efficiently, and adapt to evolving project needs,
          enhancing my{" "}
          <span className="text-primary font-semibold">
            technical skills, problem-solving ability,
          </span>{" "}
          and professional confidence.
        </Paragraph>
      </div>
    </Section>
  );
}
