import Section from "@frontend/layouts/common/Section";
import ImageCredits from "@frontend/components/ImageCredits";
import { ageCalc } from "@frontend/ts/utils/age-calc";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";
import GlareHover from "@app/components/GlareHover/GlareHover";
import ShinyText from "@app/components/ShinyText/ShinyText";

const age = ageCalc("2004-07-15");

export default function AboutPersonal() {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end">
        <div style={{ height: "450px", position: "relative" }}>
          <GlareHover
            width="100%"
            height="100%"
            glareColor="#ffffff"
            glareOpacity={0.5}
            glareAngle={-50}
            glareSize={350}
            autoPlay={true}
            playOnce={false}
            transitionDuration={2000}
          >
            <Image
              src="/images/pages/about/about.PNG"
              alt="Sidhique"
              shape="tv"
            />
          </GlareHover>
        </div>
        <ImageCredits
          name="nonasukki"
          href="https://www.instagram.com/nonasukki/"
        />
      </div>
      <div className="xl:col-span-2 personal">
          <SectionHeading>
            <ShinyText
              text="This is me"
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
          I am{" "}
          <span className="text-primary font-semibold">Aboobakkar Sidhque</span>
          , a passionate{" "}
          <span className="text-primary font-semibold">{age} years old</span>{" "}
          full-stack{" "}
          <span className="text-primary font-semibold">MERN Developer</span>{" "}
          with a frontend specialty born in the country of{" "}
          <span className="text-primary font-semibold">The India</span>. I like
          doing things on my own but I love whenever I get to do things with
          other people. I am always open to new{" "}
          <span className="text-primary font-semibold">
            opportunities and collaborations
          </span>
          , so feel free to reach out to me anytime. Let's create something that
          makes people love!
          <br />
          <br />
          The letter <span className="text-primary font-semibold">L</span> is
          inspired by <span className="text-primary font-semibold">L</span> from
          <span className="text-primary font-semibold"> Death Note, </span>a
          character I deeply admire. He represents{" "}
          <span className="text-primary font-semibold"> logic,curiosity, </span>{" "}
          and deep analytical{" "}
          <span className="text-primary font-semibold"> thinking. </span> His
          habit of questioning everything and observing the smallest details
          reflects the{" "}
          <span className="text-primary font-semibold"> mindset </span> I value
          as a <span className="text-primary font-semibold"> developer. </span>{" "}
          However, you can just call me{" "}
          <span className="text-primary font-semibold"> L, </span>{" "}
          <span className="text-primary font-semibold"> Sidhique, </span> or
          whichever you prefer.
        </Paragraph>
      </div>
    </Section>
  );
}
