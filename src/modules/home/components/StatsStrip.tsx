import { stats } from "../data/homeContent";
import { FadeIn } from "./FadeIn";

export function StatsStrip() {
  return (
    <FadeIn>
      <div className="border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              className={`px-5 py-8 md:px-12 md:py-10 ${
                index < stats.length - 1 ? "border-r border-border" : ""
              }`}
              key={stat.label}
            >
              <p className="font-display text-4xl font-extrabold leading-none text-foreground md:text-5xl">
                {stat.value}
                <span className="text-accent-strong dark:text-accent">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
