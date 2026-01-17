import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Button, buttonVariants } from "@frontend/components/ui/Button";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Grid from "@frontend/layouts/common/Grid";
import Section from "@frontend/layouts/common/Section";
import Link from "@node_modules/next/link";

export default function AboutEducation() {
  return (
    <Section>
      <Grid className="grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-x-6 2xl:gap-x-12 2xl:gap-y-16">
        {/* 1 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/schools.jpg"
              alt="BEMUP Anjarakkandy"
              shape="tv"
            />
            <ImageCredits
              name="BEMUP school Anjarakkandy"
              href="https://stackschools.com/schools/14756/bemups-anjarakandy"
            />
          </div>
          <div className="gradeschool">
            <SectionHeading name="grade school" />
            <Paragraph variant="wide">
              I began my education at{" "}
              <span className="text-primary font-semibold">
                BEMUP School Anjarakkandy
              </span>{" "}
              as an elementary student. During my early years, I was naturally
              curious and eager to learn, always interested in understanding how
              things worked. My time at{" "}
              <span className="text-primary font-semibold">
                BEMUP School Anjarakkandy
              </span>{" "}
              played an important role in shaping my mindset and values. Even
              today, many memories from those years remain vivid, often
              reminding me of the foundations of who I am now.
            </Paragraph>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/mambarm.jpg"
              alt="Mambaram High School"
              shape="tv"
            />
            <ImageCredits
              name="Mambarm High School"
              href="https://www.instagram.com/mambaram.ormakal/"
            />
          </div>
          <div className="highschool">
            <SectionHeading name="High School" />
            <Paragraph variant="wide">
              I continued my high school education at{" "}
              <span className="text-primary font-semibold">Mambram HSS,</span>{" "}
              where I studied from 8th to 10th grade. These years played an
              important role in strengthening my discipline, responsibility, and
              independence. High school was a phase of growth and
              self-awareness, where I learned to adapt, face challenges, and
              develop a more focused mindset toward my future. The experiences
              from Mambram HSS helped shape my approach to learning and personal
              development.
            </Paragraph>
          </div>
        </div>

        {/* 3 */}
        {/* <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/geanhs.jpg"
              alt="General Emilio Aguinal Natioinal High School"
              shape="tv"
            />
            <ImageCredits
              name="GEANHS"
              href="https://www.facebook.com/photo.php?fbid=10155496640846831&id=159346766830&set=a.10155496640916831"
            />
          </div>
          <div className="highschool">
            <SectionHeading name="High School" />
            <Paragraph variant="wide">
              I continued my high school years to another school and also
              graduated in{" "}
              <span className="text-primary font-semibold">
                General Emilio Aguinaldo National High School
              </span>
              . I can confidently say that this school years are probably my
              best school years. I have experienced a lot of things that I can't
              forget. Pure and genuine happiness, sadness, frustration and more.
              One of the years that has a huge influence in my character
              development.
            </Paragraph>
          </div>
        </div> */}

        {/* 4 */}
        {/* <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/ucc.jpg"
              alt="Unida Christian Colleges"
              shape="tv"
            />
            <ImageCredits
              name="UCC Official"
              href="https://www.facebook.com/UnidaChristianCollegesOfficial"
            />
          </div>
          <div className="shs">
            <SectionHeading name="Senior High School" />
            <Paragraph variant="wide">
              An additional 2-year program was added to the Philippine education
              system. I have chosen TVL-ICT as my strand in the school of{" "}
              <span className="text-primary font-semibold">
                Unida Christian Colleges
              </span>
              . Though, I only experience a year in this school due to the
              pandemic, I still learned a lot of new things that made me a
              better person. I also have a lot of experience here that I won't
              ever forget that also shaped the person of who am I now.
            </Paragraph>
          </div>
        </div> */}

        {/* 5 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/brototype.jpg"
              alt="Brototype - Kinfra Kakkanchery"
              shape="tv"
            />
            <ImageCredits
              name="Brototype"
              href="https://www.linkedin.com/company/brototype"
            />
          </div>
          <div className="college">
            <SectionHeading name="Institute" />
            <Paragraph variant="wide">
              I am currently on my main learning journey at{" "}
              <span className="text-primary font-semibold">Brototype,</span>{" "}
              where I am training to become a{" "}
              <span className="text-primary font-semibold">
                full-stack software engineer.
              </span>{" "}
              This phase of my life has been transformative, taking place in a
              real-world office setup that emphasizes professionalism,
              responsibility, and self-discipline. Instead of a classroom-style
              environment, the focus is on hands-on development, independent
              thinking, and building production-level projects. Through this
              journey, I have strengthened my technical skills,{" "}
              <span className="text-primary font-semibold">
                improved my problem-solving mindset,
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">
                developed the habit of learning every day. Brototype{" "}
              </span>{" "}
              has taught me how to take ownership of my growth, work
              consistently in a professional environment, and approach
              challenges with clarity and confidence. This experience is shaping
              me not just as a developer, but as a reliable{" "}
              <span className="text-primary font-semibold">
                full-stack software engineer.
              </span>{" "}
            </Paragraph>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full h-full flex flex-col justify-center">
          <div>
            <SectionHeading name="Seeking My Next Opportunity!" />
            <Paragraph variant="wide">
              My journey so far has equipped me with the skills and mindset
              needed to take on new challenges, both personally and
              professionally. I’m eager to continue learning, improving, and
              pushing my limits as a developer. I am actively seeking new
              projects and opportunities where I can contribute, grow, and
              collaborate with passionate people. If you have an interesting
              idea, a project to discuss, or simply want to connect, I’d be
              happy to hear from you.
            </Paragraph>
          </div>
          <Link
            href="/contact"
            className={`${buttonVariants({ variant: "default" })} ml-auto mt-10`}
          >
            Get in touch
          </Link>
        </div>
      </Grid>
    </Section>
  );
}
