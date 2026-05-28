export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  {
    label: "Baby Names",
    href: "/baby-names",
    children: [
      { label: "Girl", href: "/girl" },
      { label: "Boy", href: "/boy" },
      { label: "Unisex", href: "/unisex" },
    ],
  },
  { label: "Character & Group Names", href: "/character-group-names" },
  { label: "Last Names", href: "/last-names" },
  { label: "Middle names", href: "/middle-names" },
  {
    label: "Pet Names",
    href: "/pet-names",
    children: [
      { label: "Cat", href: "/cat" },
      { label: "Dog", href: "/dog" },
      { label: "Others", href: "/others" },
    ],
  },
  { label: "Usernames", href: "/usernames" },
];

const FOOTER_LABELS: string[] = [
  "Baby Names",
  "Pet Names",
  "Girl",
  "Unisex",
  "Cat",
  "Other",
  "Dog",
  "Boy",
  "Names",
  "Character & Group Names",
  "Last Names",
  "Usernames",
  "Middle names",
  "Misc",
];

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const FOOTER_CATEGORIES: NavChild[] = FOOTER_LABELS.map((label) => ({
  label,
  href: `/${slugify(label)}`,
}));
