import SectionHeading from "@frontend/components/SectionHeading";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";
import Link from "@node_modules/next/link";
import LoopingImage from "@frontend/components/LoopingImage";
import { gameGifList } from "@frontend/ts/constants/game-gif-list";

export default function AboutGame() {
  return (
    <Section className="flex flex-col lg:flex-row justify-center items-center lg:text-slate-300">
      <LoopingImage imageList={gameGifList} />
      <div className="game">
        <SectionHeading name="No Code, No Life!" />
        <Paragraph className="lg:text-slate-400" variant="wide">
          {/* Last but not the least, also a significant part of my life is none
          other than gaming. I have been playing video games since I was a
          child, and it has always been my source of happiness. Without it, I
          may have never met wonderful people. I love playing{" "}
          <span className="text-primary font-semibold">Visual Novels</span> so
          much, the stories that give me different lessons and inspirations in
          my life. I also love playing{" "}
          <span className="text-primary font-semibold">Gacha Games</span>, I
          just love collecting different type of characters. Some of them had
          special place in my heart. I also play rhythm games especially{" "}
          <Link
            href="https://osu.ppy.sh/users/29025161"
            className="text-primary font-semibold hover:underline"
          >
            osu!
          </Link>
          <br />
          <br />I mostly play on{" "}
          <Link
            href="https://steamcommunity.com/id/moonbamiofficial/"
            className="text-primary font-semibold hover:underline"
          >
            Steam
          </Link>{" "}
          and spend most of my time in{" "}
          <span className="text-primary font-semibold">
            Umamusume: Pretty Derby
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold">
            Miscrits: World of Creatures
          </span>{" "}
          but I also play{" "}
          <span className="text-primary font-semibold">Left 4 Dead 2</span>{" "}
          especially with my friends. If I ever want to just chill after a long
          day, I would just play{" "}
          <span className="text-primary font-semibold">Stardew Valley</span> as
          this is my go-to whenever I want to relax. */}
          Last but not least, one of the most{" "}
          <span className="text-primary font-semibold">important</span> parts of
          my life is <span className="text-primary font-semibold">coding.</span>{" "}
          I started learning to code out of curiosity, and over time it became
          something I genuinely enjoy and feel connected to. Writing code gives
          me a sense of clarity and purpose, and it has helped me develop{" "}
          <span className="text-primary font-semibold">
            patience, discipline,
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold">problem-solving</span>{" "}
          skills.
          <br />
          <br />
          Through coding, I’ve learned how small logical steps can come together
          to build something meaningful. I enjoy working on{" "}
          <span className="text-primary font-semibold">full-stack</span>{" "}
          projects, structuring applications, and improving code step by step.
          Debugging challenges me to think deeply, while building features gives
          me <span className="text-primary font-semibold">satisfaction</span>{" "}
          and <span className="text-primary font-semibold">confidence.</span>{" "}
          Coding is also what connected me with like-minded people who share the
          same passion for learning and growth.
          <br />
          <br />
          Whether I’m building, fixing, or experimenting, coding remains my
          go-to activity whenever I want to{" "}
          <span className="text-primary font-semibold">
            focus, improve,
          </span>{" "}
          and create something{" "}
          <span className="text-primary font-semibold">valuable.</span>
        </Paragraph>
      </div>
    </Section>
  );
}
