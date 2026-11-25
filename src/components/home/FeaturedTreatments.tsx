"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { ArrowRight, Pause, Play } from "lucide-react";

type Treatment = {
  readonly name: string;
  readonly slug: string;
  readonly price: string;
};

// Services and prices taken from the client's supplied price list (NPR).
// Reconfirm with the client before publication.
const treatments: readonly Treatment[] = [
  { name: "Ayurvedic Massage", slug: "ayurvedic-massage", price: "Rs. 1,200" },
  {
    name: "Ayurvedic Massage + Herbal Steam",
    slug: "ayurvedic-massage-herbal-steam",
    price: "Rs. 1,500",
  },
  { name: "Potli Massage Therapy", slug: "potli-massage-therapy", price: "Rs. 2,000" },
  { name: "Ayurvedic Facial", slug: "ayurvedic-facial", price: "Rs. 1,500" },
  { name: "Acupuncture", slug: "acupuncture", price: "Rs. 500" },
  { name: "Detox Foot Spa", slug: "detox-foot-spa", price: "Rs. 300" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function FeaturedTreatments() {
  const reduceMotion = useReducedMotion() ?? false;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <section
      aria-labelledby="featured-treatments-heading"
      className="bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-20">
          {/* Media: sticky on desktop only. top offset clears the 72px navbar plus breathing room. */}
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            {/* Width is capped by available viewport height (100svh minus sticky offset and bottom gap),
                so the 4:5 ratio holds: max-width = height * 4/5. */}
            <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-lg bg-primary sm:aspect-[4/3] lg:aspect-[4/5] lg:max-w-[calc((100svh-9rem)*0.8)]">
              {reduceMotion ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/hero-massage.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <>
                  <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/videos/spa-treatment.mp4"
                    poster="/images/hero-massage.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    tabIndex={-1}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                  />
                  <button
                    type="button"
                    onClick={togglePlayback}
                    aria-label={playing ? "Pause background video" : "Play background video"}
                    className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-background transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                  >
                    {playing ? (
                      <Pause aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                    ) : (
                      <Play aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              Featured Treatments
            </p>
            <h2
              id="featured-treatments-heading"
              className="mt-4 font-heading text-4xl font-medium leading-tight text-primary sm:text-5xl"
            >
              Where Most People Start
            </h2>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed">
              A gentle introduction to massage and Ayurvedic-inspired therapies.
              Choose a treatment to learn more about what it involves.
            </p>
            <p className="mt-3 font-body text-sm opacity-80">
              Prices are taken from the client&apos;s supplied list and should be
              reconfirmed before publication.
            </p>

            <ul className="mt-10 border-t border-border">
              {treatments.map((t) => (
                <li key={t.slug} className="border-b border-border">
                  <Link
                    href={`/services/therapies/${t.slug}`}
                    className={`group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-2 py-6 transition-colors hover:bg-surface sm:px-4 ${focusRing}`}
                  >
                    <span className="font-heading text-2xl font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 sm:text-3xl">
                      {t.name}
                    </span>
                    <span className="font-body text-sm font-semibold tracking-wide text-primary">
                      <span className="sr-only">Price: </span>
                      {t.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/services/therapies"
              className={`mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 font-body text-sm font-semibold tracking-wide text-background transition-opacity hover:opacity-90 ${focusRing}`}
            >
              Explore All Therapies
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
