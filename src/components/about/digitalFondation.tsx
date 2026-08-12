import SectionHeading from "./sectionHeading";

const foundations = [
  {
    number: "01",
    title: "Brand",
    description: "A professional identity people can trust.",
  },
  {
    number: "02",
    title: "Experience",
    description: "Simple and enjoyable experiences for visitors.",
  },
  {
    number: "03",
    title: "Visibility",
    description: "Help the right people find your business online.",
  },
  {
    number: "04",
    title: "Performance",
    description: "Fast and reliable on every device.",
  },
  {
    number: "05",
    title: "Security",
    description: "Protect your website and digital assets.",
  },
  {
    number: "06",
    title: "Analytics",
    description: "Understand what works and make better decisions.",
  },
  {
    number: "07",
    title: "Growth",
    description: "Keep improving as your business evolves.",
  },
];

export default function DigitalFoundation() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="More Than Just a Website"
          title="A digital foundation built for real growth."
          description="Your digital presence should help people find you, trust you, and choose your business."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#e9e7e3] bg-[#e9e7e3] sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((item) => (
            <article
              key={item.number}
              className="bg-white p-7 transition-colors hover:bg-[#faf9f7]"
            >
              <span className="text-xs text-[#9b8061]">{item.number}</span>

              <h3 className="mt-8 text-base font-medium text-[#151515]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6b6b6b]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
