interface SplitSectionProps {
  imagePosition?: "left" | "right";
  imageSrc?: string;
  children: React.ReactNode;
  bgClass?: string;
}

export default function SplitSection({
  imagePosition = "left",
  imageSrc,
  children,
  bgClass = "bg-background",
}: SplitSectionProps) {
  const isRight = imagePosition === "right";

  return (
    <section className={`${bgClass} overflow-hidden py-16 md:py-24`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-6 items-center`}>

        {/* Image */}
        {imageSrc && (
          <div
            className={`relative overflow-hidden rounded-2xl ${
              isRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <img
              src={imageSrc}
              alt="section"
              className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Text content */}
        <div
          className={`flex flex-col justify-center ${
            isRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
