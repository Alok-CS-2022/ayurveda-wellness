import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Get to know Kanchan Ayurvedic Upachar Kendra, an Ayurvedic wellness centre in Naya Thimi, Bhaktapur, Nepal.",
};

const whatsappUrl = getWhatsAppUrl(
  "Namaste! I would like to learn more about Kanchan Ayurvedic Upachar Kendra and its treatments."
);

const offerings = [
  {
    icon: Leaf,
    title: "Ayurvedic Therapies",
    description:
      "Explore our selection of Ayurvedic massage and traditional treatment offerings.",
  },
  {
    icon: Sparkles,
    title: "Wellness Experiences",
    description:
      "Discover treatments including herbal steam, facials, and relaxing care experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Guidance",
    description:
      "Reach out to our centre to ask about available treatments, pricing, and appointments.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-primary/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:px-10">
          <div>
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-accent"
              />
              About Our Centre
            </p>

            <h1 className="mt-7 max-w-2xl font-heading text-5xl font-medium leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
              A Place for Ayurvedic Care &amp; Wellness
            </h1>

            <p className="mt-7 max-w-xl font-body text-base leading-relaxed sm:text-lg">
              Welcome to Kanchan Ayurvedic Upachar Kendra, an
              Ayurvedic wellness centre located in Naya Thimi,
              Bhaktapur, Nepal.
            </p>

            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/75">
              Explore our range of treatments, from Ayurvedic
              massages and herbal steam experiences to wellness
              therapies and treatment packages. We invite you
              to get in touch to learn more about the options
              available at our centre.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services/therapies"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 font-body text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Explore Our Therapies
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-primary/30 px-7 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Contact Us
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-primary/10 bg-surface p-4 sm:p-6">
            <div className="flex min-h-96 flex-col items-center justify-center rounded-md border border-accent/40 px-8 py-14 text-center">
              <div className="rounded-full border border-accent/30 bg-background p-5 shadow-sm">
                <Image
                  src="/images/kanchan-logo.png"
                  alt="Kanchan Ayurvedic Upachar Kendra official logo"
                  width={150}
                  height={150}
                  className="h-32 w-32 rounded-full object-contain sm:h-40 sm:w-40"
                  priority
                />
              </div>

              <p className="mt-8 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Kanchan Ayurvedic Upachar Kendra
              </p>

              <p className="mt-4 font-heading text-3xl font-medium text-primary sm:text-4xl">
                Health Naturally...
                <br />
                Life Better...
              </p>

              <div className="mt-7 flex items-center gap-2 font-body text-sm text-foreground/70">
                <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
                Naya Thimi, Bhaktapur
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="offerings-heading"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            Discover Kanchan
          </p>

          <h2
            id="offerings-heading"
            className="mt-6 font-heading text-4xl font-medium text-primary sm:text-5xl"
          >
            What You Can Explore With Us
          </h2>

          <p className="mt-5 font-body text-base leading-relaxed text-foreground/75">
            Get to know our treatments and contact the centre
            for further information before your visit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offerings.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-lg border border-primary/10 bg-surface px-8 py-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-background">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.4}
                  className="h-6 w-6 text-primary"
                />
              </div>

              <h3 className="mt-7 font-heading text-3xl font-semibold text-primary">
                {title}
              </h3>

              <p className="mt-4 font-body text-sm leading-relaxed text-foreground/75">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-primary/10 bg-background px-6 py-12 text-foreground sm:px-8 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Visit or Connect
            </p>
            <h2 className="mt-4 max-w-xl font-heading text-4xl font-medium leading-tight sm:text-5xl" >
              We Would Love to Hear From You
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-foreground/75">
              Naya Thimi, Bhaktapur, Nepal
            </p>
          </div>

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-primary px-7 font-body text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              Inquire on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}




