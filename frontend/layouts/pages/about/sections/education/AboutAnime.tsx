import SectionHeading from "@frontend/components/SectionHeading";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";
import Link from "@node_modules/next/link";
import LoopingImage from "@frontend/components/LoopingImage";
import { animeGifList } from "@frontend/ts/constants/anime-gif-list";

export default function AboutAnime() {
  return (
    <Section className="flex flex-col lg:flex-row justify-center items-center lg:text-slate-300">
      <LoopingImage imageList={animeGifList} />
      <div className="anime">
        <SectionHeading name="Anime だいすき！" />
        <Paragraph className="lg:text-slate-400" variant="wide">
          Anime is a significant part of my life and has strongly influenced my
          mindset and creativity. I’m mainly drawn to intense, story-driven
          series focused on action, psychology, and philosophy{" "}
          <span className="font-semibold text-primary">
            rather than romance.
          </span>{" "}
          
          Shows like Demon Slayer, Attack on Titan, Death Note, <span className="font-semibold text-primary">
           Vinland Saga,
          </span>{" "}
          and One Punch Man inspire discipline, resilience, and critical
          thinking.
          <br />
          <br />
          The way characters observe situations, adapt under pressure, and grow
          through challenges reflects how I approach problem-solving and
          development. Anime, for me, is more than entertainment—it’s a source of perspective and motivation.
          {/* You can check out my{" "}
          <Link
            href="https://anilist.co/user/Moonbami/"
            className="font-semibold text-primary hover:underline"
            target="_blank"
          >
            AniList
          </Link>{" "}
          profile to see my detailed anime tracking. */}
        </Paragraph>
      </div>
    </Section>
  );
}
