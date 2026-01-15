import { Suspense } from "react";
import EmailBtn from "@frontend/components/buttons/EmailBtn";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import SkeletonScreenHome from "@frontend/components/skeleton-screens/SkeletonScreenHome";
import TechStackSlider from "@frontend/layouts/TechStackSlider";
import { Image } from "@frontend/components/ui/Image";
import ImageCredits from "@frontend/components/ImageCredits";
import LifeStatus from "@frontend/components/LifeStatus";
import TiltedCard from "@app/components/TiltedCard/TiltedCard";
import DecryptedText from "@app/components/DecryptedText/DecryptedText";
import AnimatedRoleText from "@app/components/DecryptedText/AnimatedRoleText";

const HomePage = async () => {

  return (
    <Suspense fallback={<SkeletonScreenHome />}>
      <section id="home" className="container pt-32 pb-10">
        {/* wraps the introduction and the tech stacks */}
        <div className="w-full h-full relative flex flex-col justify-around lg:justify-between items-center gap-20">
          {/* wraps the intro */}
          <div className="w-full flex flex-col justify-evenly items-center xl:flex-row gap-5 gap-y-16">
            <div className="relative w-full flex flex-col items-center xl:items-start gap-5 max-w-[600px]">
              <div className="flex flex-col items-center xl:items-start">
                <LifeStatus status="Open to work" />
                <h1 className="text-center xl:text-left text-6xl px-1 font-bold tracking-tight mt-2 mb-5">
                  I am <span className="text-primary">Sidhique</span>
                </h1>
                <p className="text-center xl:text-left text-xl xl:text-2xl px-2 text-slate-400 font-medium">
                  Pursuing a career of being a{" "}
                  <strong>
                    <AnimatedRoleText />
                  </strong>
                </p>
              </div>
              <div className="flex gap-6">
                <GitHubBtn href="https://github.com/sideque" />
                <EmailBtn href="mailto:xidhique@gmail.com" />
              </div>
            </div>
            <div className="relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[550px] aspect-square flex flex-col items-end rounded-lg overflow-hidden">
              <TiltedCard
                imageSrc="/images/pages/about/Home.jpg"
                altText="I am Sidhique"
                containerWidth="100%"
                containerHeight="100%"
                imageWidth="100%"
                imageHeight="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
              />

              <ImageCredits
                phrase="Image source in"
                href="https://github.com/sideque"
                name="GitHub README"
              />
            </div>
          </div>
          <TechStackSlider />
        </div>
      </section>
    </Suspense>
  );
};

export default HomePage;
