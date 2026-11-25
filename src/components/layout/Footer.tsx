import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const whatsappUrl = getWhatsAppUrl();

const links = [
  { label: "Home", href: "/" },
  { label: "Treatments & Therapies", href: "/services/therapies" },
  { label: "Treatment Plans", href: "/services/packages" },
  { label: "Contact", href: "/#contact" },
] as const;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background";

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="grid gap-12 border-b border-background/20 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              aria-label="Kanchan Ayurvedic Upachar Kendra, home"
              className={`inline-flex items-start gap-3 rounded-sm ${focusRing}`}
            >
              <Image
                src="/images/kanchan-logo.png"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full bg-background object-contain"
              />
              <span className="flex flex-col">
                <span className="font-heading text-3xl font-semibold tracking-[0.1em] text-background">
                  KANCHAN
                </span>
                <span className="font-body text-[0.625rem] uppercase tracking-[0.14em] text-background/75">
                  Ayurvedic Upachar Kendra
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-background/80">
              Explore Ayurvedic treatments and wellness offerings at our centre
              in Naya Thimi, Bhaktapur, Nepal.
            </p>

            <p className="mt-5 font-heading text-xl italic text-accent">
              Health Naturally... Life Better...
            </p>
          </div>

          <div>
            <h2 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Explore
            </h2>
            <nav aria-label="Footer navigation" className="mt-6">
              <ul className="space-y-4">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`rounded-sm font-body text-sm text-background/85 transition-colors hover:text-background ${focusRing}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Visit & Connect
            </h2>

            <p className="mt-6 flex items-start gap-3 font-body text-sm leading-relaxed text-background/85">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.5}
              />
              <span>
                Naya Thimi
                <br />
                Bhaktapur, Nepal
              </span>
            </p>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-2 rounded-sm font-body text-sm font-semibold text-background transition-colors hover:text-accent ${focusRing}`}
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Inquire on WhatsApp
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <p className="mt-6 font-body text-sm text-background/65">
                WhatsApp inquiries are currently unavailable.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 font-body text-xs text-background/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kanchan Ayurvedic Upachar Kendra.
          </p>
          <p>
            Website prototype · Services and prices subject to confirmation
          </p>
        </div>
      </div>
    </footer>
  );
}


