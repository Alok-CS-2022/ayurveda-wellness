import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Leaf } from "lucide-react";

type Treatment = {
  readonly slug: string;
  readonly name: string;
  readonly price: string;
};

// Names and prices taken from the client's supplied price list (NPR).
// Reconfirm with the client before publication.
const treatments: readonly Treatment[] = [
  { slug: "ayurvedic-massage", name: "Ayurvedic Massage", price: "Rs. 1,200" },
  {
    slug: "ayurvedic-massage-herbal-steam",
    name: "Ayurvedic Massage + Herbal Steam",
    price: "Rs. 1,500",
  },
  { slug: "potli-massage-therapy", name: "Potli Massage Therapy", price: "Rs. 2,000" },
  { slug: "ayurvedic-facial", name: "Ayurvedic Facial", price: "Rs. 1,500" },
  { slug: "acupuncture", name: "Acupuncture", price: "Rs. 500" },
  { slug: "detox-foot-spa", name: "Detox Foot Spa", price: "Rs. 300" },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function findTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = findTreatment(slug);

  if (!treatment) {
    return { title: "Treatment not found | Kanchan Ayurvedic Upachar Kendra" };
  }

  return {
    title: `${treatment.name} | Kanchan Ayurvedic Upachar Kendra`,
    description: `${treatment.name} at Kanchan Ayurvedic Upachar Kendra, Naya Thimi, Bhaktapur, Nepal. ${treatment.price}.`,
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = findTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
        <Link
          href="/services/therapies"
          className={`inline-flex items-center gap-2 rounded-sm font-body text-sm font-semibold text-primary transition-opacity hover:opacity-80 ${focusRing}`}
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
          Back to Treatments &amp; Therapies
        </Link>

        <article className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <header className="min-w-0">
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              Kanchan Ayurvedic Upachar Kendra
            </p>
            <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              {treatment.name}
            </h1>

            <div aria-hidden="true" className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-accent" />
              <Leaf className="h-5 w-5 text-accent" strokeWidth={1.25} />
            </div>

            <p className="mt-8 max-w-xl font-body text-base leading-relaxed">
              Our centre in Naya Thimi, Bhaktapur, can share more details about{" "}
              {treatment.name} on inquiry. Please get in touch with the centre
              to ask about this treatment.
            </p>
          </header>

          <aside
            aria-labelledby="treatment-price-heading"
            className="min-w-0 self-start rounded-lg border border-border bg-surface p-3"
          >
            <div className="relative overflow-hidden rounded-md border border-accent/60 px-6 py-9 sm:px-8">
              <Leaf
                aria-hidden="true"
                strokeWidth={1}
                className="pointer-events-none absolute right-4 top-4 h-14 w-14 rotate-12 text-accent/30"
              />
              <h2
                id="treatment-price-heading"
                className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary"
              >
                Price (NPR)
              </h2>
              <p className="mt-4 font-heading text-5xl font-semibold leading-none text-primary sm:text-6xl">
                {treatment.price}
              </p>
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
