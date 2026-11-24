"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ServicesDropdown from "./ServicesDropdown";
import { primaryNav, type NavDropdown, type NavLink } from "./navData";

// Active-state rules: "/" matches exactly; other links match their own path or any child path.
// Hash links such as "/#reviews" are never treated as active routes.
function isActive(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isDropdownActive(pathname: string, dropdown: NavDropdown): boolean {
  return dropdown.items.some((item) => isActive(pathname, item.href));
}

const itemBase =
  "inline-flex items-center gap-1.5 rounded-sm px-1 py-2 font-body text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const itemState = (active: boolean) =>
  active
    ? "text-primary underline decoration-accent decoration-2 underline-offset-8"
    : "text-foreground hover:text-primary";

function DesktopLink({ item, pathname }: { item: NavLink; pathname: string }) {
  const active = isActive(pathname, item.href);
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      aria-label={item.ariaLabel}
      className={`${itemBase} ${itemState(active)}`}
    >
      {item.label}
    </Link>
  );
}

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-8 xl:gap-10">
        {primaryNav.map((item) => (
          <li key={item.type === "dropdown" ? item.id : item.href}>
            {item.type === "dropdown" ? (
              <ServicesDropdown
                dropdown={item}
                active={isDropdownActive(pathname, item)}
              />
            ) : (
              <DesktopLink item={item} pathname={pathname} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
