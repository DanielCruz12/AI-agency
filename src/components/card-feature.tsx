export default function AICard({
  className,
  title,
  description,
  video,
}: {
  className?: string;
  title: string;
  description: string;
  video: string;
}) {
  return (
    <div className={`h-full ${className}`}>
      <div className="h-full flex flex-col boxsha  rounded-lg bg-[#080808] border border-white/10 shadow-lg">
        {/* Video */}
        <div className="w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-t-lg"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* Texto */}
        <div className="flex flex-col flex-grow space-y-2 p-6">
          <h2 className="text-base md:text-xl font-semibold text-white">
            {title}
          </h2>
          <p className="text-white/40 text-base sm:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
