"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { NavDropdown, NavLink } from "./navData";

type DropdownProps = {
  dropdown: NavDropdown;
  /** Highlights the trigger when the current route belongs to this dropdown. */
  active?: boolean;
};

type PanelProps = {
  id: string;
  label: string;
  items: readonly NavLink[];
  reduceMotion: boolean;
  duration: number;
  onSelect: () => void;
};

const triggerBase =
  "inline-flex items-center gap-1.5 rounded-sm px-1 py-2 font-body text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const linkClass =
  "block rounded-sm px-4 py-2.5 font-body text-sm text-foreground transition-colors hover:bg-background hover:text-primary focus-visible:bg-background focus-visible:text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary";

// Rendered as the direct child of AnimatePresence. useIsPresent() turns false as
// soon as the exit animation starts, so the panel becomes inert (unfocusable and
// hidden from assistive tech) while it fades out.
function DropdownPanel({
  id,
  label,
  items,
  reduceMotion,
  duration,
  onSelect,
}: PanelProps) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      id={id}
      role="group"
      aria-label={label}
      inert={!isPresent}
      initial={reduceMotion ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
      transition={{ duration, ease: "easeOut" }}
      className="absolute left-0 top-full z-50 mt-3 min-w-56 rounded-lg border border-border bg-surface p-2 shadow-sm"
    >
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-label={item.ariaLabel}
              onClick={onSelect}
              className={linkClass}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesDropdown({ dropdown, active = false }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const panelId = useId();

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        // Outside click: do not steal focus from whatever the user clicked.
        close(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      // Restore focus to the trigger only if focus is currently inside this dropdown.
      const focusInside = containerRef.current?.contains(document.activeElement) ?? false;
      close(focusInside);
    }

    // Close when keyboard focus leaves the dropdown (Tab / Shift+Tab past the ends).
    function onFocusIn(event: FocusEvent) {
      if (!containerRef.current?.contains(event.target as Node)) close(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open, close]);

  const duration = reduceMotion ? 0 : 0.18;

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={dropdown.ariaLabel}
        onClick={() => setOpen((value) => !value)}
        className={`${triggerBase} ${
          active || open
            ? "text-primary underline decoration-accent decoration-2 underline-offset-8"
            : "text-foreground hover:text-primary"
        }`}
      >
        {dropdown.label}
        <motion.span
          aria-hidden="true"
          className="inline-flex"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration }}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={1.75} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <DropdownPanel
            id={panelId}
            label={dropdown.ariaLabel ?? dropdown.label}
            items={dropdown.items}
            reduceMotion={reduceMotion}
            duration={duration}
            onSelect={() => close(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
