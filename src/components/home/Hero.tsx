"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const EASE = [0.22, 1, 0.36, 1] as const;
const whatsappUrl = getWhatsAppUrl();

const primaryCta =
  "inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-body text-sm font-semibold tracking-wide text-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background";

const secondaryCta =
  "inline-flex h-12 items-center justify-center rounded-full border border-background/70 px-8 font-body text-sm font-semibold tracking-wide text-background transition-colors hover:bg-background/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background";

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  // Each item fades in and rises slightly. With reduced motion, no animation
  // props are returned at all, so content renders immediately in its final state.
  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[32rem] items-center overflow-hidden bg-primary text-background lg:h-[80vh] lg:max-h-[56rem] lg:min-h-[36rem]"
    >
      <Image
        src="/images/hero-massage.jpg"
        alt="Massage therapy in a calm treatment room"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] lg:object-center"
      />

      {/* Overlays: darker on the left behind the text, light elsewhere. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-primary/55 lg:bg-primary/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-10 hidden w-3/5 bg-linear-to-r from-primary/85 via-primary/55 to-transparent lg:block"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            {...reveal(0)}
            className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.28em] text-background"
          >
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            A Moment of Stillness
          </motion.p>

          <motion.h1
            {...reveal(0.12)}
            id="hero-heading"
            className="mt-6 font-heading text-5xl font-medium leading-[1.02] tracking-tight text-background sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Relax. Renew. Rejuvenate.
          </motion.h1>

          <motion.p
            {...reveal(0.24)}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-background/90 sm:text-lg"
          >
            Unhurried massage and Ayurvedic-inspired therapies, offered in a
            quiet setting designed to help you slow down, breathe, and feel at
            ease.
          </motion.p>

          <motion.div
            {...reveal(0.36)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/services/therapies" className={primaryCta}>
              Explore Our Therapies
            </Link>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryCta}
                aria-label="Inquire on WhatsApp, opens in a new tab"
              >
                Inquire on WhatsApp
              </a>
            ) : (
              <span
                className={`${secondaryCta} cursor-not-allowed opacity-50`}
                aria-label="WhatsApp inquiries are currently unavailable"
              >
                WhatsApp Unavailable
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

