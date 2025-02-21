import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center justify-center gap-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center rounded-full px-4 text-sm font-medium"
      >
        <div className=" px-4 ">
          <div className="rounded border-b border-[#37FF8B] px-4 py-2">
            <p
              className="text-center text-xs font-medium text-[#A1E3CB] md:text-base"
              style={{
                textShadow: "0 0 10px rgba(161, 227, 203, 0.2)",
              }}
            >
              Community support, daily live office hours, and thousands of
              builders - all on Discord.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className=" font-bold text-5xl lg:text-8xl leading-[1.15] lg:leading-[1.2]"
      >
        The Complete AI Agent Platform
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-[750px] text-center text-xl md:text-2xl text-muted-foreground "
      >
        Botpress is an all-in-one platform for building AI agents powered by the
        latest LLMs.
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4"
      >
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#008cff] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#008cff]">
          Try now <ArrowUpRight className="h-4 w-4" />
        </button>
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
          Start Building <ArrowUpRight className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}
