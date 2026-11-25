import Link from "next/link";
import { ArrowUpRight, Leaf, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const whatsappUrl = getWhatsAppUrl();

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Naya%20Thimi%2C%20Bhaktapur%2C%20Nepal";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-accent"
              />
              Visit & Connect
            </p>

            <h2
              id="contact-heading"
              className="mt-5 max-w-xl font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl"
            >
              Your Wellness Journey Begins Here
            </h2>

            <p className="mt-6 max-w-lg font-body text-base leading-relaxed">
              Have a question about our Ayurvedic treatments or
              treatment plans? Connect with Kanchan Ayurvedic
              Upachar Kendra to learn more before your visit.
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
                  Inquire on WhatsApp
                  <span className="sr-only">
                    (opens in a new tab)
                  </span>
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center rounded-full bg-primary/50 px-7 font-body text-sm font-semibold text-background">
                  WhatsApp unavailable
                </span>
              )}

              <Link
                href="/services/therapies"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 px-7 font-body text-sm font-semibold text-primary transition-colors hover:bg-background ${focusRing}`}
              >
                Explore Treatments
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-3">
            <div className="relative rounded-md border border-accent/60 px-7 py-10 sm:px-10 sm:py-12">
              <Leaf
                aria-hidden="true"
                strokeWidth={1}
                className="pointer-events-none absolute right-5 top-5 h-16 w-16 rotate-12 text-accent/30"
              />

              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Find Our Centre
              </p>

              <h3 className="mt-5 max-w-xs font-heading text-3xl font-semibold leading-tight text-primary sm:text-4xl">
                Kanchan Ayurvedic Upachar Kendra
              </h3>

              <div className="mt-8 flex items-start gap-3 border-t border-border pt-7">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-body text-sm font-semibold text-primary">
                    Our Location
                  </p>
                  <address className="mt-2 font-body text-base leading-relaxed not-italic">
                    Naya Thimi
                    <br />
                    Bhaktapur, Nepal
                  </address>
                </div>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-9 inline-flex items-center gap-2 rounded-sm font-body text-sm font-semibold text-primary underline decoration-accent underline-offset-4 transition-opacity hover:opacity-75 ${focusRing}`}
              >
                View Naya Thimi on Google Maps
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                <span className="sr-only">
                  (opens in a new tab)
                </span>
              </a>

              <p className="mt-4 font-body text-xs leading-relaxed text-foreground/70">
                Map shows the general area, not a verified
                pin for the centre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
