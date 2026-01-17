import Link from "next/link";
import Section from "@frontend/layouts/common/Section";
import { buttonVariants } from "@frontend/components/ui/Button";
import { Image } from "@frontend/components/ui/Image";
import Magnet from "@app/components/Magnet/Magnet";
import FuzzyText from "@app/components/FuzzyText/FuzzyText";

export default function NotFound() {
  return (
    <Section className="container h-screen flex flex-col lg:flex-row items-center justify-center gap-8 py-[100px]">
      {/* GIF */}
      <Image
        src="https://i.pinimg.com/originals/9d/26/92/9d2692b51ebf08955da879128c57ab69.gif"
        alt="Menhera chan"
        shape="square"
        object="cover"
        className="max-w-[400px] h-max shadow-none"
      />

      {/* TEXT CONTENT */}
      <div className="space-y-6 text-center lg:text-left">
        {/* FUZZY TITLE (TEXT ONLY) */}
        <FuzzyText
          fontSize="clamp(56px, 8vw, 96px)"
          className="font-extrabold"
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover
        >
          Nothing Here!
        </FuzzyText>

        {/* NORMAL TEXT */}
        <p className="text-xl lg:text-2xl xl:text-2xl text-slate-300">
          The page you're looking for seems to be missing.
        </p>

        {/* BUTTON */}
        <Magnet padding={60} magnetStrength={6} speed={0.2}>
          <Link
            href="/"
            className={buttonVariants({ variant: "default", size: "max" })}
          >
            Return to homepage
          </Link>
        </Magnet>
      </div>
    </Section>
  );
}
