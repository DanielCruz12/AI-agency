"use client";

import AICard from "@/components/card-feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PopularSection from "@/components/popular-section";
import PricingSection from "@/components/pricing-section";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <SiteHeader />
      <main className="max-w-6xl w-full px-2">
        <section className="bgParticles px-2 flex min-h-screen w-full flex-col items-center justify-center ">
          <Hero />
        </section>
        <div className="my-12"></div>

        <section className=" w-full ">
          <PopularSection />
        </section>

        <section className="container space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            {t("hero.title")}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Quinx provides all the tools you need to create powerful Discord
              bots that can scale to millions of users.
            </p>
          </motion.div>
          <div className=" grid grid-cols-12 gap-4">
            {features.map((feature, index) => (
              <div key={index} className={feature.className}>
                <AICard {...feature} />
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section id="pricing" className="bgParticles py-12 md:py-24">
          <PricingSection />
        </section>

        <section className=" py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Create your first Discord bot in minutes. No credit card required.
            </p>
            <Button size="lg" className="mt-4">
              Start Building Now
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const features = [
  {
    title: "AI Integration",
    description:
      "Seamless integration with AI technologies, enabling you to build intelligent and automated solutions.",
    icon: "ai-icon",
    className: "col-span-12 md:col-span-7",
    video: "/ai-2.mp4",
    image: "ai-image.png",
  },
  {
    title: "Scalability",
    description:
      "Built to scale with your growing community, ensuring a smooth user experience as your community expands and evolves.",
    icon: "scale-icon",
    className: "col-span-12 md:col-span-5",
    video: "/ai-5.mp4",
    image: "scale-image.png",
  },
  {
    title: "Security",
    description:
      "Top-notch security measures to protect your data, ensuring your community's information is safe and secure from potential threats.",
    icon: "security-icon",
    className: "col-span-12 md:col-span-5",
    video: "/ai-1.mp4",
    image: "security-image.png",
  },
  {
    title: "Customization",
    description:
      "Tailor your bot to fit your community's unique needs and preferences, with a range of customization options at your fingertips.",
    icon: "custom-icon",
    className: "col-span-12 md:col-span-7",
    video: "/ai-3.mp4",
    image: "custom-image.png",
  },
];
