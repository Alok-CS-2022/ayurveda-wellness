import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Leaf } from "lucide-react";

type Offering = {
  readonly slug: string;
  readonly name: string;
  readonly type: "Package" | "Combination";
  readonly duration: string;
  readonly price: string;
  readonly summary: string;
};

// Names, durations and prices taken from the client's supplied price list (NPR).
// Reconfirm with the client before publication.
const offerings: readonly Offering[] = [
  {
    slug: "shiro-dhara-seven-day",
    name: "Shiro-Dhara",
    type: "Package",
    duration: "7 days",
    price: "Rs. 8,500",
    summary:
      "Shiro-Dhara is offered at our centre as a seven-day package. The centre can share more details about how it is arranged on inquiry.",
  },
  {
    slug: "matra-basti-one-week",
    name: "Matra Basti",
    type: "Package",
    duration: "One week",
    price: "Rs. 7,500",
    summary:
      "Matra Basti is offered at our centre as a one-week package. The centre can share more details about how it is arranged on inquiry.",
  },
  {
    slug: "ayurvedic-massage-sauna-steam",
    name: "Ayurvedic Massage + Sauna/Steam",
    type: "Combination",
    duration: "Not specified",
    price: "Rs. 1,700",
    summary:
      "Ayurvedic massage combined with sauna or steam, offered as a single combination treatment. The centre can share more details on inquiry.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function findOffering(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export function generateStaticParams() {
  return offerings.map((o) => ({ slug: o.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offering = findOffering(slug);

  if (!offering) {
    return { title: "Not found | Kanchan Ayurvedic Upachar Kendra" };
  }

  return {
    title: `${offering.name} | Kanchan Ayurvedic Upachar Kendra`,
    description: `${offering.name} (${offering.type}) at Kanchan Ayurvedic Upachar Kendra, Naya Thimi, Bhaktapur, Nepal. ${offering.price}.`,
  };
}

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params;
  const offering = findOffering(slug);

  if (!offering) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 rounded-sm font-body text-sm font-semibold text-primary transition-opacity hover:opacity-80 ${focusRing}`}
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
          Back to Home
        </Link>

        <article className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <header className="min-w-0">
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              {offering.type}
            </p>
            <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              {offering.name}
            </h1>

            <div aria-hidden="true" className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-accent" />
              <Leaf className="h-5 w-5 text-accent" strokeWidth={1.25} />
            </div>

            <p className="mt-8 max-w-xl font-body text-base leading-relaxed">
              {offering.summary}
            </p>
          </header>

          <aside
            aria-labelledby="offering-details-heading"
            className="min-w-0 self-start rounded-lg border border-border bg-surface p-3"
          >
            <div className="relative overflow-hidden rounded-md border border-accent/60 px-6 py-9 sm:px-8">
              <Leaf
                aria-hidden="true"
                strokeWidth={1}
                className="pointer-events-none absolute right-4 top-4 h-14 w-14 rotate-12 text-accent/30"
              />
              <h2
                id="offering-details-heading"
                className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {offering.type} Details
              </h2>

              <dl className="mt-6 font-body text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] opacity-80">
                    Price (NPR)
                  </dt>
                  <dd className="mt-2 font-heading text-5xl font-semibold leading-none text-primary sm:text-6xl">
                    {offering.price}
                  </dd>
                </div>
                <div className="mt-6 border-t border-border pt-5">
                  <dt className="text-xs uppercase tracking-[0.15em] opacity-80">
                    Duration
                  </dt>
                  <dd className="mt-1 font-medium">{offering.duration}</dd>
                </div>
              </dl>

              <p className="mt-6 border-t border-border pt-5 font-body text-sm opacity-80">
                Prices are taken from the client&apos;s supplied price list and
                require confirmation before publication.
              </p>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}
