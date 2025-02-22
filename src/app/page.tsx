"use client";

import AICard from "@/components/card-feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PopularSection from "@/components/popular-section";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Home() {
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
              Features built for scale
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

        <section id="pricing" className="container py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan thats right for you and start building amazing
              Discord bots today.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-lg border bg-background"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    ${plan.price}
                    <span className="ml-1 text-xl font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full">{plan.buttonText}</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="container py-12 md:py-24 lg:py-32">
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

const pricingPlans = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for small communities and hobbyists.",
    features: [
      "1 bot",
      "Up to 100 users",
      "Basic command set",
      "Community support",
    ],
    buttonText: "Start for Free",
  },
  {
    name: "Pro",
    price: 8,
    description: "Ideal for growing communities and businesses.",
    features: [
      "Unlimited bots",
      "Unlimited users",
      "Advanced commands",
      "Priority support",
      "Custom branding",
      "Analytics dashboard",
    ],
    buttonText: "Upgrade to Pro",
  },
] as const;
