'use client'
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export default function PricingSection() {
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
        "Analytics dashboard",
      ],
      buttonText: "Upgrade to Pro",
    },
    {
      name: "Debuggin",
      price: 100,
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
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex flex-col items-center justify-center gap-4 text-center"
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan thats right for you and start building amazing Discord
          bots today.
        </p>
      </motion.div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
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
              <p className="mt-4 text-muted-foreground">{plan.description}</p>
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
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
                {plan.buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
