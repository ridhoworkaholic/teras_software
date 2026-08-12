interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "left" ? "text-left" : "mx-auto max-w-3xl text-center";

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#9b8061]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.045em] text-[#151515] sm:text-5xl lg:text-[56px]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-7 text-[#666] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
