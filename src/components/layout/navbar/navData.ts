// Centralized navigation configuration. Data only: no JSX, components, or handlers.

export type NavLink = {
  readonly type: "link";
  readonly label: string;
  readonly href: string;
  /** Optional longer label for screen readers when `label` alone is ambiguous. */
  readonly ariaLabel?: string;
};

export type NavDropdown = {
  readonly type: "dropdown";
  readonly id: string;
  readonly label: string;
  readonly ariaLabel?: string;
  readonly items: readonly NavLink[];
};

/** Identifiers for non-route actions. The Navbar component maps these to handlers. */
export type NavActionId = "search";

export type NavAction = {
  readonly type: "action";
  readonly id: NavActionId;
  readonly label: string;
  readonly ariaLabel: string;
};

export type NavItem = NavLink | NavDropdown;

export type NavCta = NavLink & {
  readonly variant: "primary";
};

export const servicesDropdown: NavDropdown = {
  type: "dropdown",
  id: "services",
  label: "Services",
  ariaLabel: "Services menu",
  items: [
    { type: "link", label: "Therapies", href: "/services/therapies" },
    { type: "link", label: "Packages", href: "/services/packages" },
  ],
};

export const moreDropdown: NavDropdown = {
  type: "dropdown",
  id: "more",
  label: "More",
  ariaLabel: "More menu",
  items: [
    { type: "link", label: "Reviews", href: "/#reviews" },
    { type: "link", label: "Blog", href: "/blog" },
    { type: "link", label: "Contact Us", href: "/contact" },
    { type: "link", label: "Customer Support", href: "/support" },
  ],
};

/** Primary navigation, in display order. Links and dropdowns only. */
export const primaryNav: readonly NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  servicesDropdown,
  { type: "link", label: "Membership", href: "/membership" },
  { type: "link", label: "About Us", href: "/about" },
  moreDropdown,
];

/** Non-route actions. Search opens a UI control rather than navigating. */
export const navActions: readonly NavAction[] = [
  {
    type: "action",
    id: "search",
    label: "Search",
    ariaLabel: "Open search",
  },
];





