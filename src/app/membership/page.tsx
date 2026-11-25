import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Membership | Kanchan Ayurvedic Upachar Kendra",
  description:
    "Inquire about membership at Kanchan Ayurvedic Upachar Kendra in Naya Thimi, Bhaktapur, Nepal.",
};

const whatsappUrl = getWhatsAppUrl(
  "Namaste! I would like to know whether membership options are available at Kanchan Ayurvedic Upachar Kendra. Could you please share the details?"
);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const questions = [
  {
    number: "01",
    title: "Membership Availability",
    description:
      "Ask the centre whether a membership programme is currently offered.",
  },
  {
    number: "02",
    title: "Treatments & Plans",
    description:
      "Discuss which treatments or ongoing visit arrangements may be available.",
  },
  {
    number: "03",
    title: "Pricing & Details",
    description:
      "Request current pricing, terms, and any relevant information directly from the centre.",
  },
] as const;

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-10">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 rounded-sm font-body text-sm font-semibold text-primary transition-opacity hover:opacity-80 ${focusRing}`}
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
            <div>
              <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-accent"
                />
                Stay Connected
              </p>

              <h1 className="mt-6 max-w-2xl font-heading text-5xl font-medium leading-[1.02] text-primary sm:text-6xl lg:text-7xl">
                A Continuing Journey of Care
              </h1>

              <p className="mt-7 max-w-xl font-body text-base leading-relaxed sm:text-lg">
                Interested in visiting Kanchan Ayurvedic Upachar Kendra
                regularly? Connect with our centre to ask about
                membership availability and possible treatment
                arrangements.
              </p>

              <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-foreground/75">
                Membership plans, benefits, and pricing have not yet
                been confirmed for this website.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 font-body text-sm font-semibold text-background transition-opacity hover:opacity-90 ${focusRing}`}
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                    Ask About Membership
                    <span className="sr-only">
                      (opens in a new tab)
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex min-h-12 items-center rounded-full bg-primary/50 px-7 font-body text-sm font-semibold text-background">
                    WhatsApp currently unavailable
                  </span>
                )}

                <Link
                  href="/services/therapies"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 px-7 font-body text-sm font-semibold text-primary transition-colors hover:bg-surface ${focusRing}`}
                >
                  Explore Treatments
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-md border border-accent/60 p-8 sm:min-h-96 sm:p-10">
                <Leaf
                  aria-hidden="true"
                  strokeWidth={0.7}
                  className="pointer-events-none absolute -right-12 -top-10 h-56 w-56 rotate-12 text-accent/20"
                />

                <div>
                  <Sparkles
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className="h-7 w-7 text-accent"
                  />
                  <p className="mt-6 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Kanchan Ayurvedic Upachar Kendra
                  </p>
                </div>

                <div>
                  <p className="max-w-xs font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl">
                    Care, at your own pace.
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-7 block h-px w-16 bg-accent"
                  />
                  <p className="mt-5 font-body text-sm leading-relaxed text-foreground/75">
                    Naya Thimi, Bhaktapur, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="membership-details-heading"
        className="bg-background"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="max-w-2xl">
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-accent"
              />
              Membership Inquiries
            </p>
            <h2
              id="membership-details-heading"
              className="mt-5 font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl"
            >
              What Would You Like to Know?
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed">
              Our centre can answer questions about availability
              and any arrangements offered to returning visitors.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {questions.map((item) => (
              <li
                key={item.number}
                className="rounded-lg border border-border bg-surface px-7 py-9 sm:px-8"
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.number}
                </p>
                <h3 className="mt-6 font-heading text-3xl font-semibold leading-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl border-l-2 border-accent pl-5 font-body text-sm leading-relaxed text-foreground/75">
            This is a membership inquiry page, not an active
            membership registration or payment system.
            All membership terms require confirmation from
            the centre.
          </p>
        </div>
      </section>
    </main>
  );
}
