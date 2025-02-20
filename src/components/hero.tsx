import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Build Discord Bots{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              With No Code
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Quinx empowers you to create powerful Discord bots easily and
            quickly, without writing a single line of code.
          </p>
          <a
            href="#get-started"
            className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out inline-block"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
