import { Suspense } from "react";
import EmailBtn from "@frontend/components/buttons/EmailBtn";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import SkeletonScreenHome from "@frontend/components/skeleton-screens/SkeletonScreenHome";
import TechStackSlider from "@frontend/layouts/TechStackSlider";
import LifeStatus from "@frontend/components/LifeStatus";
import TiltedCard from "@app/components/TiltedCard/TiltedCard";
import AnimatedRoleText from "@app/components/DecryptedText/AnimatedRoleText";

const HomePage = async () => {
  return (
    <Suspense fallback={<SkeletonScreenHome />}>
      <section
        id="home"
        className="container pt-32 pb-10 relative overflow-hidden"
      >
        {/* CONTENT */}
        <div className="w-full h-full relative flex flex-col justify-around lg:justify-between items-center gap-20">
          <div className="w-full flex flex-col justify-evenly items-center xl:flex-row gap-5 gap-y-16">
            {/* TEXT */}
            <div className="relative z-10 w-full flex flex-col items-center xl:items-start gap-5 max-w-[600px]">
              <LifeStatus status="Open to work" />

              <h1 className="text-center xl:text-left text-6xl font-bold">
                I am <span className="text-primary">Sidhique</span>
              </h1>

              <p className="text-xl text-slate-400">
                Pursuing a career of being a{" "}
                <strong>
                  <AnimatedRoleText />
                </strong>
              </p>

              <div className="flex gap-6">
                <GitHubBtn href="https://github.com/sideque" />
                <EmailBtn href="mailto:xidhique@gmail.com" />
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative z-10 w-full max-w-[450px] aspect-square rounded-lg overflow-hidden">
              <TiltedCard
                imageSrc="/images/pages/about/Home.jpg"
                altText="I am Sidhique"
                containerWidth="100%"
                containerHeight="100%"
                imageWidth="100%"
                imageHeight="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
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
