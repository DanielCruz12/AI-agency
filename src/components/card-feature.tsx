export default function AICard() {
  return (
    <div className="w-full p-4">
      <div className="rounded-lg bg-black border border-white/10 overflow-hidden">
        {/* Window Controls */}
        <div className="px-4 py-3 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="font-mono text-white">StgNa 7QUik1</div>
                <div className="font-mono text-white/90">sPPhxcaq</div>
                <div className="font-mono text-white/90">D 3eDH T</div>
                <div className="font-mono text-white/80">1gh JWanW</div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <div className="font-mono text-white">SFi wBNdi4ilpsoPy</div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 sm:mt-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Build your AI development portfolio
            </h2>
            <p className="text-white/80 text-base sm:text-lg">
              Position yourself at the forefront of artificial intelligence with
              the Botpress Hub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
