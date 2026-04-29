// â”€â”€â”€ Signature Data Model â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Single source of truth for every customizable field in the signature.

export interface SignatureData {
  // Identity
  fullName: string;
  jobTitle: string;
  department: string;
  company: string;
  pronouns: string;

  // Contact
  email: string;
  phone: string;
  website: string;
  address: string;

  // Social links (empty string = hidden)
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
  youtube: string;
  github: string;
  tiktok: string;

  // Images
  headshotUrl: string;
  headshotShape: "square" | "circle" | "rounded";
  headshotSize: number;
  logoUrl: string;
  logoWidth: number;

  // Design
  templateId: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  linkColor: string;
  fontFamily: string;
  fontSize: number;
  nameFontSize: number;
  lineHeight: number;
  dividerStyle: "solid" | "dashed" | "dotted" | "none";
  dividerColor: string;
  dividerWidth: number;
  iconSize: number;
  iconColor: string;

  // Toggles
  showHeadshot: boolean;
  showLogo: boolean;
  showSocialIcons: boolean;
  showDivider: boolean;
  showAddress: boolean;
  showPronouns: boolean;

  // CTA
  ctaText: string;
  ctaUrl: string;
  ctaBgColor: string;
  ctaTextColor: string;
}

export const DEFAULT_SIGNATURE: SignatureData = {
  fullName: "Jane Doe",
  jobTitle: "Product Designer",
  department: "",
  company: "A3 Brands",
  pronouns: "she/her",

  email: "jane@a3brands.com",
  phone: "+1 (555) 123-4567",
  website: "https://a3brands.com",
  address: "123 Main St, San Francisco, CA",

  linkedin: "https://linkedin.com/in/janedoe",
  twitter: "",
  instagram: "",
  facebook: "",
  youtube: "",
  github: "",
  tiktok: "",

  headshotUrl: "",
  headshotShape: "circle",
  headshotSize: 90,
  logoUrl: "",
  logoWidth: 120,

  templateId: "modern",
  primaryColor: "#1A1A1A",
  secondaryColor: "#6B7280",
  textColor: "#374151",
  linkColor: "#2563EB",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: 13,
  nameFontSize: 16,
  lineHeight: 1.4,
  dividerStyle: "solid",
  dividerColor: "#E5E7EB",
  dividerWidth: 1,
  iconSize: 18,
  iconColor: "#6B7280",

  showHeadshot: false,
  showLogo: false,
  showSocialIcons: true,
  showDivider: true,
  showAddress: false,
  showPronouns: false,

  ctaText: "",
  ctaUrl: "",
  ctaBgColor: "#2563EB",
  ctaTextColor: "#FFFFFF",
};

// Gmail-safe font stacks
export const FONT_OPTIONS = [
  { label: "Sans Serif (Arial)", value: "Arial, Helvetica, sans-serif" },
  { label: "Modern (Verdana)", value: "Verdana, Geneva, sans-serif" },
  { label: "Classic (Georgia)", value: "Georgia, 'Times New Roman', serif" },
  { label: "Professional (Tahoma)", value: "Tahoma, Geneva, sans-serif" },
  { label: "Typewriter (Courier)", value: "'Courier New', Courier, monospace" },
  { label: "Elegant (Palatino)", value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" },
  { label: "Readable (Trebuchet)", value: "'Trebuchet MS', Helvetica, sans-serif" },
];

// Color themes for one-click styling
export const COLOR_THEMES = {
  slate: { label: "Slate", primaryColor: "#1E293B", secondaryColor: "#64748B", linkColor: "#1E293B", dividerColor: "#CBD5E1" },
  ocean: { label: "Ocean", primaryColor: "#0077B6", secondaryColor: "#00B4D8", linkColor: "#0077B6", dividerColor: "#90E0EF" },
  forest: { label: "Forest", primaryColor: "#2D6A4F", secondaryColor: "#52B788", linkColor: "#2D6A4F", dividerColor: "#95D5B2" },
  sunset: { label: "Sunset", primaryColor: "#C2410C", secondaryColor: "#EA580C", linkColor: "#C2410C", dividerColor: "#FED7AA" },
  berry: { label: "Berry", primaryColor: "#7C3AED", secondaryColor: "#A78BFA", linkColor: "#7C3AED", dividerColor: "#DDD6FE" },
  midnight: { label: "Midnight", primaryColor: "#1D3557", secondaryColor: "#457B9D", linkColor: "#1D3557", dividerColor: "#A8DADC" },
  charcoal: { label: "Charcoal", primaryColor: "#171717", secondaryColor: "#737373", linkColor: "#171717", dividerColor: "#D4D4D4" },
  rose: { label: "Rose", primaryColor: "#BE123C", secondaryColor: "#F43F5E", linkColor: "#BE123C", dividerColor: "#FECDD3" },
};

