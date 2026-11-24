import Link from "next/link";
import { Leaf, Menu, Search } from "lucide-react";
import DesktopNav from "./DesktopNav";
import { bookNowCta, navActions } from "./navData";

// Search comes from navData so its label stays centralized.
const searchAction = navActions.find((action) => action.id === "search");

// Disabled-state rules: no hover colour change, default cursor, reduced opacity.
const iconButton =
  "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors enabled:hover:bg-surface enabled:hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-40";

const ctaClass =
  "inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 font-body text-[0.8125rem] font-semibold tracking-wide text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:h-10 lg:px-6";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem] lg:px-10">
        <Link
          href="/"
          aria-label="Himalayan Wellness, home"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Leaf aria-hidden="true" className="h-[1.125rem] w-[1.125rem] text-accent" strokeWidth={1.5} />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl font-semibold tracking-[0.14em] text-primary sm:text-[1.375rem]">
              HIMALAYAN
            </span>
            <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.32em] text-foreground/70">
              Wellness
            </span>
          </span>
        </Link>

        <DesktopNav />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5 lg:gap-3">
          {/* Disabled until the search interaction is implemented in a later step. */}
          <button
            type="button"
            disabled
            aria-label={searchAction?.ariaLabel ?? "Open search"}
            className={iconButton}
          >
            <Search aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
          </button>

          <Link
            href={bookNowCta.href}
            aria-label={bookNowCta.ariaLabel}
            className={ctaClass}
          >
            {bookNowCta.label}
          </Link>

          {/* Disabled until the mobile menu is implemented in a later step. Hidden on desktop. */}
          <button
            type="button"
            disabled
            aria-label="Open menu"
            className={`${iconButton} lg:hidden`}
          >
            <Menu aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
}
