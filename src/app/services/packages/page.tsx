import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatment Plans & Combinations | Kanchan Ayurvedic Upachar Kendra",
  description:
    "Explore treatment plans and combinations at Kanchan Ayurvedic Upachar Kendra in Naya Thimi, Bhaktapur.",
};

type Offering = {
  readonly name: string;
  readonly slug: string;
  readonly type: "Package" | "Combination";
  readonly duration: string;
  readonly price: string;
  readonly description: string;
};

// Based on the client's supplied price list.
// All prices require confirmation before public launch.
const offerings: readonly Offering[] = [
  {
    name: "Shiro-Dhara",
    slug: "shiro-dhara-seven-day",
    type: "Package",
    duration: "7 days",
    price: "Rs. 8,500",
    description:
      "A seven-day Shiro-Dhara package. Please contact the centre for further details about the treatment plan.",
  },
  {
    name: "Matra Basti",
    slug: "matra-basti-one-week",
    type: "Package",
    duration: "One week",
    price: "Rs. 7,500",
    description:
      "A one-week Matra Basti plan. The centre can provide details about the treatment arrangements on inquiry.",
  },
  {
    name: "Ayurvedic Massage + Sauna/Steam",
    slug: "ayurvedic-massage-sauna-steam",
    type: "Combination",
    duration: "Not specified",
    price: "Rs. 1,700",
    description:
      "An offering that combines Ayurvedic massage with sauna or steam. Contact the centre for details.",
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:opacity-80 ${focusRing}`}
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Home
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            Kanchan Ayurvedic Upachar Kendra
          </p>

          <h1 className="mt-5 font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
            Treatment Plans &amp; Combinations
          </h1>

          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed">
            Explore our listed Ayurvedic treatment plans and combinations.
            Select an offering to view its price and available details.
          </p>

          <p className="mt-4 font-body text-sm opacity-75">
            Prices are based on the client-supplied list and require
            reconfirmation before publication.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {offerings.map((offering, index) => (
            <li key={offering.slug} className="min-w-0">
              <Link
                href={`/services/packages/${offering.slug}`}
                className={`group flex h-full flex-col rounded-lg border border-border bg-surface p-3 transition-colors hover:border-accent ${focusRing}`}
              >
                <div className="relative flex h-full flex-col rounded-md border border-accent/60 px-6 pb-8 pt-9 transition-colors group-hover:border-accent sm:px-8">
                  <Leaf
                    aria-hidden="true"
                    strokeWidth={1}
                    className="pointer-events-none absolute right-4 top-4 h-14 w-14 rotate-12 text-accent/30"
                  />

                  <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                    <span className="ml-3 text-primary/80">
                      {offering.type}
                    </span>
                  </p>

                  <h2 className="mt-7 pr-8 font-heading text-3xl font-semibold leading-tight text-primary sm:text-4xl">
                    {offering.name}
                  </h2>

                  <p className="mt-5 font-body text-sm leading-relaxed">
                    {offering.description}
                  </p>

                  <div className="mt-auto pt-10">
                    <dl className="border-t border-border pt-5">
                      <div>
                        <dt className="font-body text-xs uppercase tracking-[0.15em] opacity-75">
                          Duration
                        </dt>
                        <dd className="mt-1 font-body text-sm font-medium">
                          {offering.duration}
                        </dd>
                      </div>

                      <div className="mt-5">
                        <dt className="font-body text-xs uppercase tracking-[0.15em] opacity-75">
                          Listed Price
                        </dt>
                        <dd className="mt-1 font-heading text-3xl font-semibold text-primary">
                          {offering.price}
                        </dd>
                      </div>
                    </dl>

                    <span className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 font-body text-sm font-semibold text-background transition-opacity group-hover:opacity-90">
                      Explore Details
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
