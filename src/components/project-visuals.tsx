import Image from "next/image";

type ProjectVisualProps = {
  project: "loop" | "urbanpulse";
};

const visuals = {
  loop: {
    src: "/projects/loop-light-dashboard.png",
    alt: "LOOP light-mode command dashboard showing financial metrics, couriers, routes, and a live operations map",
    label: "LOOP / Command dashboard",
    meta: "Light mode · Product interface",
  },
  urbanpulse: {
    src: "/projects/urbanpulse-live.png",
    alt: "UrbanPulse municipal situation room showing city KPIs, issue filters, and an Istanbul maintenance map",
    label: "UrbanPulse / Situation room",
    meta: "Live demo · City-wide overview",
  },
} as const;

export function ProjectVisual({ project }: ProjectVisualProps) {
  const visual = visuals[project];

  return (
    <figure className={`product-visual product-visual-${project}`}>
      <div className="visual-window-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>{visual.label}</p>
      </div>
      <div className="product-shot">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={1440}
          height={900}
          sizes="(max-width: 1024px) 90vw, 55vw"
        />
      </div>
      <figcaption>
        <span>Authentic product view</span>
        <span>{visual.meta}</span>
      </figcaption>
    </figure>
  );
}
