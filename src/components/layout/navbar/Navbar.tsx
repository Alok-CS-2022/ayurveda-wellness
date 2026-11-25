"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, Search, MessageCircle, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import { navActions, servicesDropdown } from "./navData";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const searchAction = navActions.find((action) => action.id === "search");
const whatsappUrl = getWhatsAppUrl();

const mobileLinks = [
  { label: "Home", href: "/" },
  ...servicesDropdown.items,
];

const iconButton =
  "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors enabled:hover:bg-surface enabled:hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-40";

const ctaClass =
  "inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-4 font-body text-[0.8125rem] font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:h-10 lg:px-5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 sm:gap-6 sm:px-8 lg:h-[4.5rem] lg:px-10">
        <Link
          href="/"
          aria-label="Kanchan Ayurvedic Upachar Kendra, home"
          onClick={() => setMenuOpen(false)}
          className="inline-flex min-w-0 shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Leaf
            aria-hidden="true"
            className="h-[1.125rem] w-[1.125rem] shrink-0 text-accent"
            strokeWidth={1.5}
          />
          <span className="flex flex-col whitespace-nowrap leading-none">
            <span className="font-heading text-xl font-semibold tracking-[0.12em] text-primary sm:text-[1.5rem]">
              KANCHAN
            </span>
            <span className="mt-1 font-body text-[0.5rem] font-medium uppercase tracking-[0.1em] text-foreground/70 sm:text-[0.5625rem] sm:tracking-[0.14em]">
              Ayurvedic Upachar Kendra
            </span>
          </span>
        </Link>

        <DesktopNav />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5 lg:gap-3">
          <button
            type="button"
            disabled
            aria-label={searchAction?.ariaLabel ?? "Open search"}
            className={`${iconButton} hidden lg:inline-flex`}
          >
            <Search
              aria-hidden="true"
              className="h-[1.125rem] w-[1.125rem]"
              strokeWidth={1.75}
            />
          </button>

          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inquire on WhatsApp, opens in a new tab"
              className={`${ctaClass} hidden sm:inline-flex`}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="WhatsApp contact number awaiting confirmation"
              className={`${ctaClass} hidden cursor-not-allowed opacity-50 sm:inline-flex`}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
          )}

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={`${iconButton} lg:hidden`}
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 pb-6 pt-3 sm:px-8 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col">
            {mobileLinks.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href} className="border-b border-border">
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="block rounded-sm py-4 font-body text-sm font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-6 max-w-7xl">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`${ctaClass} w-full sm:w-auto`}
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Inquire on WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <span className="font-body text-sm text-foreground/70">
                WhatsApp inquiries are currently unavailable.
              </span>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
