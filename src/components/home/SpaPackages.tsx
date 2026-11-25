import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

type SpaPackage = {
  readonly name: string;
  readonly variant?: string;
  readonly slug: string;
  readonly kind: "Package" | "Combination";
  readonly description: string;
  readonly duration: string;
  readonly price: string;
};

// Entries and prices taken from the client's supplied price list (NPR).
// Reconfirm with the client before publication.
const packages: readonly SpaPackage[] = [
  {
    name: "Shiro-Dhara",
    variant: "7-Day Package",
    slug: "shiro-dhara-seven-day",
    kind: "Package",
    description:
      "Shiro-Dhara offered as a seven-day package. Please enquire for scheduling and for what each visit involves.",
    duration: "7 days",
    price: "Rs. 8,500",
  },
  {
    name: "Matra Basti",
    variant: "One Week",
    slug: "matra-basti-one-week",
    kind: "Package",
    description:
      "Matra Basti offered as a one-week plan. Please enquire for details on how the course is arranged.",
    duration: "One week",
    price: "Rs. 7,500",
  },
  {
    name: "Ayurvedic Massage + Sauna/Steam",
    slug: "ayurvedic-massage-sauna-steam",
    kind: "Combination",
    description:
      "Ayurvedic massage paired with sauna or steam, offered as a single combination treatment rather than a multi-day plan.",
    duration: "Not specified",
    price: "Rs. 1,700",
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
            Treatment Plans &amp; Combinations
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed">
            Longer courses of Ayurvedic care and combined treatments from our
            price list, for those who would like to go beyond a single session.
          </p>
          <p className="mt-3 font-body text-sm opacity-80">
            Prices come from the client-supplied list and require reconfirmation
            before publication.
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

                  {/* Eyebrow: numeral + rule + kind */}
                  <p className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    <span aria-hidden="true">{CARD_NUMBERS[index] ?? index + 1}</span>
                    <span aria-hidden="true" className="h-px w-8 bg-accent" />
                    <span className="text-primary/80">{pkg.kind}</span>
                  </p>

                  <h3 className="mt-6 pr-12 font-heading text-3xl font-semibold leading-tight text-primary sm:text-4xl">
                    {pkg.name}
                  </h3>
                  {pkg.variant ? (
                    <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                      {pkg.variant}
                    </p>
                  ) : null}
                  <p className="mt-4 font-body text-[0.9375rem] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Pushed to the bottom so price, duration and CTA align across cards. */}
                  <div className="mt-auto pt-8">
                    <dl className="grid grid-cols-2 items-end gap-4 border-t border-border pt-5 font-body text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] opacity-80">
                          Price (NPR)
                        </dt>
                        <dd className="mt-1 font-heading text-3xl font-semibold leading-none text-primary">
                          {pkg.price}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] opacity-80">
                          Duration
                        </dt>
                        <dd className="mt-1 font-medium">{pkg.duration}</dd>
                      </div>
                    </dl>

                    <span className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 font-body text-sm font-semibold tracking-wide text-background transition-opacity group-hover:opacity-90">
                      Explore {pkg.kind}
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
