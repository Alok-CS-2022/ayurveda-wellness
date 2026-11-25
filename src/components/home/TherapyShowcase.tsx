"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Droplets,
  Flower2,
  Footprints,
  HeartPulse,
  Leaf,
  Waves,
} from "lucide-react";

const therapies = [
  {
    name: "Ayurvedic Massage",
    label: "Traditional Body Care",
    href: "/services/therapies/ayurvedic-massage",
    Icon: Leaf,
    color: "from-[#DDE8D8] via-[#E9E7D9] to-[#F4E9D7]",
    accent: "#52755B",
    number: "01",
  },
  {
    name: "Herbal Steam",
    label: "Warmth & Relaxation",
    href: "/services/therapies/ayurvedic-massage-herbal-steam",
    Icon: Waves,
    color: "from-[#D9E7E0] via-[#E6ECE7] to-[#F1E7D9]",
    accent: "#568078",
    number: "02",
  },
  {
    name: "Potli Massage",
    label: "Herbal Compress Therapy",
    href: "/services/therapies/potli-massage-therapy",
    Icon: Flower2,
    color: "from-[#E8E0CE] via-[#F0E7D7] to-[#E2E9D9]",
    accent: "#9B8051",
    number: "03",
  },
  {
    name: "Ayurvedic Facial",
    label: "Facial Care",
    href: "/services/therapies/ayurvedic-facial",
    Icon: Droplets,
    color: "from-[#E9DFD8] via-[#F2E8DD] to-[#E7E5D9]",
    accent: "#A57968",
    number: "04",
  },
  {
    name: "Acupuncture",
    label: "Traditional Therapy",
    href: "/services/therapies/acupuncture",
    Icon: HeartPulse,
    color: "from-[#DCE4E2] via-[#E8EAE3] to-[#E9E1D7]",
    accent: "#627D78",
    number: "05",
  },
  {
    name: "Detox Foot Spa",
    label: "Foot Care Experience",
    href: "/services/therapies/detox-foot-spa",
    Icon: Footprints,
    color: "from-[#DFE6D6] via-[#E8E8DA] to-[#E8DFCF]",
    accent: "#75825A",
    number: "06",
  },
] as const;

export default function TherapyShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-therapy-card]");
    const distance = card ? card.offsetWidth + 20 : 320;

    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <section
      aria-labelledby="therapy-showcase-heading"
      className="overflow-hidden border-y border-primary/10 bg-[#EEEDE5] py-20 text-primary sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="flex items-center gap-4 font-body text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Discover the Experience
            </p>

            <h2
              id="therapy-showcase-heading"
              className="mt-5 font-heading text-4xl font-medium leading-tight sm:text-5xl"
            >
              A Closer Look at Our Therapies
            </h2>

            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-primary/75 sm:text-base">
              Discover different ways to explore Ayurvedic care through a
              calm, visual introduction to our treatment offerings.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll therapies left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll therapies right"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-label="Therapy showcase"
          tabIndex={0}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={{ scrollbarWidth: "thin" }}
        >
          {therapies.map((therapy) => {
            const Icon = therapy.Icon;

            return (
              <Link
                data-therapy-card
                key={therapy.number}
                href={therapy.href}
                className="group w-[280px] min-w-[280px] flex-none snap-start overflow-hidden rounded-xl border border-primary/10 bg-[#F8F6EF] transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-[310px] sm:min-w-[310px] motion-reduce:transition-none"
              >
                <div
                  className={`relative flex h-[310px] w-full items-center justify-center overflow-hidden bg-gradient-to-br sm:h-[350px] ${therapy.color}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-14 -top-14 h-56 w-56 rounded-full border border-white/70"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/60"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-7 top-7 font-heading text-lg opacity-60"
                  >
                    {therapy.number} / 06
                  </div>

                  <div
                    className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/75 bg-white/20 shadow-[0_20px_70px_rgba(35,61,50,0.08)] transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none sm:h-48 sm:w-48"
                    style={{ color: therapy.accent }}
                  >
                    <div className="absolute inset-4 rounded-full border border-current opacity-20" />
                    <Icon
                      aria-hidden="true"
                      strokeWidth={0.75}
                      className="h-24 w-24 sm:h-28 sm:w-28"
                    />
                  </div>

                  <span className="absolute bottom-7 left-7 rounded-full border border-primary/10 bg-white/55 px-4 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.15em]">
                    Visual Introduction
                  </span>
                </div>

                <div className="flex items-end justify-between gap-3 p-6">
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {therapy.label}
                    </p>
                    <h3 className="mt-2 font-heading text-[1.7rem] font-semibold leading-tight">
                      {therapy.name}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-4 font-body text-xs text-primary/60">
          Illustrative therapy visuals. Actual treatments and arrangements
          should be confirmed with the centre.
        </p>
      </div>
    </section>
  );
}

