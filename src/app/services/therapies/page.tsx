import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments & Therapies | Kanchan Ayurvedic Upachar Kendra",
  description:
    "Ayurvedic treatments and therapies offered at Kanchan Ayurvedic Upachar Kendra, Naya Thimi, Bhaktapur, Nepal.",
};

type Service = {
  readonly name: string;
  readonly price: string;
};

type Category = {
  readonly id: string;
  readonly title: string;
  readonly services: readonly Service[];
};

// Service names and prices taken from the client's supplied price list (NPR).
// Reconfirm with the client before publication.
const categories: readonly Category[] = [
  {
    id: "massage-body",
    title: "Massage & Body Therapies",
    services: [
      { name: "Ayurvedic Massage", price: "Rs. 1,200" },
      { name: "Ayurvedic Massage with Therapy (Cupping, Tens)", price: "Rs. 1,500" },
      { name: "Potli Massage Therapy (Whole-body)", price: "Rs. 2,000" },
    ],
  },
  {
    id: "steam-sauna",
    title: "Steam & Sauna",
    services: [
      { name: "Single Herbal Steam", price: "Rs. 500" },
      { name: "Sauna/Steam (Single)", price: "Rs. 800" },
      { name: "Sauna/Steam (Group)", price: "Rs. 500" },
    ],
  },
  {
    id: "combinations",
    title: "Combination Treatments",
    services: [
      { name: "Ayurvedic Massage + Herbal Steam", price: "Rs. 1,500" },
      { name: "Ayurvedic Massage + Sauna/Steam", price: "Rs. 1,700" },
      { name: "Head Massage + Shiro-Dhara", price: "Rs. 700" },
      { name: "Basti + Tens/Cupping + Whole-body + Steam", price: "Rs. 2,000" },
    ],
  },
  {
    id: "multi-day",
    title: "Multi-Day Plans",
    services: [
      { name: "Shiro-Dhara (7 days package)", price: "Rs. 8,500" },
      { name: "Matra Basti (One week)", price: "Rs. 7,500" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Care",
    services: [
      { name: "Ayurvedic Facial", price: "Rs. 1,500" },
      { name: "Acupuncture", price: "Rs. 500" },
      { name: "Leech Therapy", price: "Rs. 500" },
      { name: "Kothi/Musa/Khil", price: "Rs. 500" },
      { name: "Detox Foot Spa", price: "Rs. 300" },
    ],
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function TherapiesPage() {
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

        <header className="mt-10 max-w-2xl">
          <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            Kanchan Ayurvedic Upachar Kendra
          </p>
          <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
            Treatments &amp; Therapies
          </h1>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed">
            A calm overview of the treatments offered at our centre in Naya
            Thimi, Bhaktapur, with prices in Nepalese rupees (NPR). Please get
            in touch to ask about any treatment.
          </p>
        </header>

        <div className="mt-14 border-t border-border sm:mt-20">
          {categories.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="grid gap-6 border-b border-border py-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-14"
            >
              <div>
                <Leaf
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="h-6 w-6 text-accent"
                />
                <h2
                  id={`${category.id}-heading`}
                  className="mt-4 font-heading text-3xl font-semibold leading-tight text-primary sm:text-4xl"
                >
                  {category.title}
                </h2>
              </div>

              <ul className="border-t border-border/70 lg:border-t-0">
                {category.services.map((service) => (
                  <li
                    key={service.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border/70 px-2 py-5 last:border-b-0 sm:px-4"
                  >
                    <span className="min-w-0 font-heading text-xl font-semibold text-primary sm:text-2xl">
                      {service.name}
                    </span>
                    <span className="font-body text-sm font-semibold tracking-wide text-primary">
                      <span className="sr-only">Price: </span>
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-body text-sm opacity-80">
          Prices are taken from the client&apos;s supplied list and require
          reconfirmation before publication.
        </p>
      </div>
    </main>
  );
}
