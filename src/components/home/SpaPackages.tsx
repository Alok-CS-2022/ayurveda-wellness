import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

type SpaPackage = {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly includes: readonly string[];
};

// Provisional examples only. Subject to client confirmation.
const packages: readonly SpaPackage[] = [
  {
    name: "Veda Vibe",
    slug: "veda-vibe",
    description:
      "A gentle introduction to Ayurvedic-inspired care, designed for a calm, restorative visit.",
    includes: ["Ayurvedic Massage", "Herbal Hair & Scalp Care"],
  },
  {
    name: "Nirvana Rituals",
    slug: "nirvana-rituals",
    description:
      "A longer, unhurried experience that pairs warm oils and stones with quiet time to rest.",
    includes: ["Hot Stone Therapy", "Shirodhara", "Ayurvedic Massage"],
  },
  {
    name: "Dhara Vibe",
    slug: "dhara-vibe",
    description:
      "A soothing combination centred on slow, rhythmic therapies and a sense of ease.",
    includes: ["Shirodhara", "Swedish Massage"],
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const CARD_NUMBERS = ["I", "II", "III"] as const;

export default function SpaPackages() {
  return (
    <section
      aria-labelledby="spa-packages-heading"
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            Curated Experiences
          </p>
          <h2
            id="spa-packages-heading"
            className="mt-4 font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl"
          >
            Spa Packages
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed">
            Explore curated wellness experiences that bring together massage and
            Ayurvedic-inspired therapies, each shaped around a single, unhurried
            visit.
          </p>
          <p className="mt-3 font-body text-sm opacity-80">
            Illustrative content: package names, inclusions, and descriptions are
            provisional and subject to client confirmation.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, index) => (
            <li key={pkg.slug} className="min-w-0">
              {/* Outer frame: the card itself. Inner frame: inset hairline in gold. */}
              <Link
                href={`/services/packages/${pkg.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface p-3 transition-colors duration-300 hover:border-accent ${focusRing}`}
              >
                <div className="relative flex h-full flex-col rounded-md border border-accent/60 px-6 pb-8 pt-9 transition-colors duration-300 group-hover:border-accent sm:px-8">
                  {/* Understated botanical detail, tucked into the corner. */}
                  <Leaf
                    aria-hidden="true"
                    strokeWidth={1}
                    className="pointer-events-none absolute right-4 top-4 h-14 w-14 rotate-12 text-accent/30 transition-transform duration-500 group-hover:rotate-[18deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-12"
                  />

                  {/* Eyebrow: numeral + rule */}
                  <p className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    <span aria-hidden="true">{CARD_NUMBERS[index] ?? index + 1}</span>
                    <span aria-hidden="true" className="h-px w-8 bg-accent" />
                    <span className="text-primary/80">Package</span>
                  </p>

                  <h3 className="mt-6 pr-12 font-heading text-4xl font-semibold leading-none text-primary sm:text-[2.75rem]">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 font-body text-[0.9375rem] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-7">
                    <p className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Sample inclusions
                      <span aria-hidden="true" className="h-px flex-1 bg-border" />
                    </p>
                    <ul className="mt-4 space-y-2 font-body text-sm">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rotate-45 border border-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pushed to the bottom so details and CTA align across cards. */}
                  <div className="mt-auto pt-8">
                    <dl className="grid grid-cols-2 gap-4 border-t border-border pt-5 font-body text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] opacity-80">
                          Duration
                        </dt>
                        <dd className="mt-1 font-medium">To be confirmed</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] opacity-80">
                          Price
                        </dt>
                        <dd className="mt-1 font-medium">On inquiry</dd>
                      </div>
                    </dl>

                    <span className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 font-body text-sm font-semibold tracking-wide text-background transition-opacity group-hover:opacity-90">
                      Explore Package
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                        strokeWidth={1.75}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
