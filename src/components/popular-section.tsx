import { ArrowUpRight } from "lucide-react";
import {
  WhatsAppIcon,
  GoogleCalendarIcon,
  TelegramIcon,
  Openai,
  DeepSeek,
  Gemini,
} from "./icons";
import { motion } from "framer-motion";

export default function PopularSection() {
  const integrations = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon className="h-6 w-6 text-green-500" />,
    },
    {
      name: "Telegram",
      icon: <TelegramIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Google Calendar",
      icon: <GoogleCalendarIcon className="h-6 w-6 text-gray-300" />,
    },
  ];

  const providers = [
    { name: "OpenAI", icon: <Openai className="h-6 w-6 text-gray-300" /> },
    { name: "DeepSeek", icon: <DeepSeek className="h-6 w-6 text-gray-300" /> },
    { name: "Gemini", icon: <Gemini className="h-6 w-6 text-gray-300" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex gap-4"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr,2fr] p-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Trending on Botpress
          </h1>
          <p className="text-lg text-gray-400">
            The largest ecosystem to build production-ready AI agents.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
            Try now <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Top Integraciones
            </h2>
            <div className="space-y-4">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center justify-between rounded-lg bg-[#1d1d1d] p-4 transition-colors hover:bg-[#252525]"
                >
                  <div className="flex items-center gap-3">
                    {integration.icon}
                    <span className="text-white">{integration.name}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Providers Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Top LLM Proveedores
            </h2>
            <div className="space-y-4">
              {providers.map((provider) => (
                <div
                  key={provider.name}
                  className="flex items-center justify-between rounded-lg bg-[#1d1d1d] p-4 transition-colors hover:bg-[#252525]"
                >
                  <div className="flex items-center gap-3">
                    {provider.icon}
                    <span className="text-white">{provider.name}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
