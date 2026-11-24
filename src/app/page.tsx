import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import SpaPackages from "@/components/home/SpaPackages";

// TEMPORARY design-system preview below Spa Packages. Not the final homepage.
// Navbar is rendered here for visual QA only; it will move to the root layout.

// Token bridge: each class reads your global CSS variable and falls back to the
// brand hex, so the page renders correctly even if a token name differs.
// If your globals.css uses different variable names, edit only this block.
const font = {
  heading: "font-[family-name:var(--font-heading,Cormorant_Garamond,serif)]",
  body: "font-[family-name:var(--font-body,Manrope,sans-serif)]",
};
const bg = {
  forest: "bg-[var(--color-forest,#233D32)]",
  ivory: "bg-[var(--color-ivory,#F7F3EA)]",
  gold: "bg-[var(--color-gold,#B79365)]",
  sage: "bg-[var(--color-sage,#DCE3D6)]",
  charcoal: "bg-[var(--color-charcoal,#302D29)]",
};
const text = {
  forest: "text-[var(--color-forest,#233D32)]",
  ivory: "text-[var(--color-ivory,#F7F3EA)]",
  charcoal: "text-[var(--color-charcoal,#302D29)]",
};
const border = {
  forest: "border-[var(--color-forest,#233D32)]",
  sage: "border-[var(--color-sage,#DCE3D6)]",
};

const colors = [
  { name: "Forest Green", hex: "#233D32", swatch: `${bg.forest} ${text.ivory}` },
  { name: "Warm Ivory", hex: "#F7F3EA", swatch: `${bg.ivory} ${text.charcoal} border ${border.sage}` },
  { name: "Muted Gold", hex: "#B79365", swatch: `${bg.gold} ${text.charcoal}` },
  { name: "Soft Sage", hex: "#DCE3D6", swatch: `${bg.sage} ${text.charcoal}` },
  { name: "Charcoal", hex: "#302D29", swatch: `${bg.charcoal} ${text.ivory}` },
];

const therapies = [
  {
    name: "Abhyanga",
    note: "Sample · 60 min",
    body: "A slow, rhythmic massage with warm herbal oils, inspired by traditional Ayurvedic practice.",
  },
  {
    name: "Shirodhara",
    note: "Sample · 45 min",
    body: "A calm, unhurried ritual of warm oil poured in a gentle stream, offered in a quiet setting.",
  },
  {
    name: "Dosha Consultation",
    note: "Sample · 30 min",
    body: "A conversation about your routine, rhythms, and preferences to shape a considered experience.",
  },
];

const sectionLabel = `${font.body} text-xs font-semibold uppercase tracking-[0.2em] ${text.forest}`;

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${bg.ivory} ${text.charcoal} ${font.body}`}>
        <Hero />
        <FeaturedTreatments />
        <SpaPackages />

        {/* Colors */}
        <section
          aria-labelledby="colors-heading"
          className={`border-t ${border.sage}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <p className={sectionLabel}>Palette</p>
            <h2
              id="colors-heading"
              className={`${font.heading} ${text.forest} mt-4 text-4xl font-medium sm:text-5xl`}
            >
              Brand Colors
            </h2>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {colors.map((c) => (
                <li key={c.hex}>
                  <div className={`${c.swatch} flex h-32 items-end rounded-lg p-4`}>
                    <span className="text-sm font-semibold">{c.hex}</span>
                  </div>
                  <p className="mt-3 text-base font-medium">{c.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Typography */}
        <section
          aria-labelledby="type-heading"
          className={`border-t ${border.sage}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <p className={sectionLabel}>Typography</p>
            <h2
              id="type-heading"
              className={`${font.heading} ${text.forest} mt-4 text-4xl font-medium sm:text-5xl`}
            >
              Type Scale
            </h2>
            <dl className="mt-12 divide-y divide-[var(--color-sage,#DCE3D6)]">
              <div className="grid gap-3 py-8 lg:grid-cols-[200px_1fr] lg:gap-10">
                <dt className="text-sm">
                  Display
                  <br />
                  <span className="opacity-80">Cormorant Garamond · Medium</span>
                </dt>
                <dd className={`${font.heading} ${text.forest} text-6xl font-medium leading-none sm:text-7xl`}>
                  Stillness
                </dd>
              </div>
              <div className="grid gap-3 py-8 lg:grid-cols-[200px_1fr] lg:gap-10">
                <dt className="text-sm">
                  Headline
                  <br />
                  <span className="opacity-80">Cormorant Garamond · Medium</span>
                </dt>
                <dd className={`${font.heading} ${text.forest} text-4xl font-medium sm:text-5xl`}>
                  Rituals shaped by tradition
                </dd>
              </div>
              <div className="grid gap-3 py-8 lg:grid-cols-[200px_1fr] lg:gap-10">
                <dt className="text-sm">
                  Title
                  <br />
                  <span className="opacity-80">Cormorant Garamond · Semibold</span>
                </dt>
                <dd className={`${font.heading} ${text.forest} text-2xl font-semibold sm:text-3xl`}>
                  A quiet space to begin
                </dd>
              </div>
              <div className="grid gap-3 py-8 lg:grid-cols-[200px_1fr] lg:gap-10">
                <dt className="text-sm">
                  Body
                  <br />
                  <span className="opacity-80">Manrope · Regular</span>
                </dt>
                <dd className="max-w-xl text-base leading-relaxed">
                  Good typography lets the content breathe. Body text is set in
                  Manrope for clarity, with generous line height and comfortable
                  line length for easy reading on every screen.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Sample therapy cards */}
        <section
          aria-labelledby="cards-heading"
          className={`border-t ${border.sage}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <p className={sectionLabel}>Card Preview</p>
            <h2
              id="cards-heading"
              className={`${font.heading} ${text.forest} mt-4 text-4xl font-medium sm:text-5xl`}
            >
              Sample Therapies
            </h2>
            <p className="mt-4 text-sm opacity-80">
              Placeholder content for layout testing only.
            </p>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {therapies.map((t) => (
                <li key={t.name}>
                  <article className={`${bg.sage} flex h-full flex-col rounded-lg p-8`}>
                    <span aria-hidden className={`h-px w-10 ${bg.gold}`} />
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em]">
                      {t.note}
                    </p>
                    <h3
                      className={`${font.heading} ${text.forest} mt-3 text-3xl font-semibold`}
                    >
                      {t.name}
                    </h3>
                    <p className="mt-4 leading-relaxed">{t.body}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
