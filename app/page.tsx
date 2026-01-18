import { Suspense } from "react";
import EmailBtn from "@frontend/components/buttons/EmailBtn";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import LinkedInBtn from "@frontend/components/buttons/LinkedInBtn";
import SkeletonScreenHome from "@frontend/components/skeleton-screens/SkeletonScreenHome";
import TechStackSlider from "@frontend/layouts/TechStackSlider";
import LifeStatus from "@frontend/components/LifeStatus";
import TiltedCard from "@app/components/TiltedCard/TiltedCard";
import AnimatedRoleText from "@app/components/DecryptedText/AnimatedRoleText";
import ScrollFloat from "@app/components/ScrollFloat/ScrollFloat";
import Contact from "@app/contact/page";
import About from "./about/page";
import LightRays from "./components/LightRays/LightRays";

const HomePage = async () => {
  return (
    <Suspense fallback={<SkeletonScreenHome />}>
      {/* 🔹 HOME SECTION */}
      <section
        id="home"
        className="container pt-24 sm:pt-28 lg:pt-32 pb-10 relative z-10 overflow-hidden min-h-screen"
      >
        {/* CONTENT */}
        <div className="w-full h-full relative flex flex-col justify-center lg:justify-between items-center gap-16 lg:gap-20">
          <div className="w-full flex flex-col xl:flex-row items-center gap-10 lg:gap-16">
            {/* TEXT */}
            <div className="relative z-10 w-full flex flex-col items-center xl:items-start gap-5 max-w-[600px] text-center xl:text-left">
              <LifeStatus status="Open to work" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                I am <span className="text-primary">Sidhique</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-400">
                Pursuing a career of being a{" "}
                <strong>
                  <AnimatedRoleText />
                </strong>
              </p>

              <div className="flex flex-wrap justify-center xl:justify-start gap-4 sm:gap-6">
                <GitHubBtn href="https://github.com/sideque" />
                <EmailBtn href="mailto:xidhique@gmail.com" />
                <LinkedInBtn href="https://www.linkedin.com/in/sidhiee" />
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] aspect-square rounded-lg overflow-hidden">
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

        {/* Optional Scroll Animation */}
        {/* 
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          React Bits
        </ScrollFloat>
        */}
      </section>

      {/* <Contact /> */}
      {/* <About /> */}
    </Suspense>
  );
};

export default HomePage;
