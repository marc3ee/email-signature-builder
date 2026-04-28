import { SignatureData } from "../types";

// Using imgur-hosted icons or similar permanent CDN URLs
// These are simple, clean social icons that work in all email clients
const SOCIAL_ICONS: Record<string, { url: (data: SignatureData) => string; icon: string; label: string }> = {
  linkedin: {
    url: (d) => d.linkedin,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png",
    label: "LinkedIn",
  },
  twitter: {
    url: (d) => d.twitter,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png",
    label: "Twitter",
  },
  instagram: {
    url: (d) => d.instagram,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png",
    label: "Instagram",
  },
  facebook: {
    url: (d) => d.facebook,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png",
    label: "Facebook",
  },
  youtube: {
    url: (d) => d.youtube,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/youtube-icon-2x.png",
    label: "YouTube",
  },
  github: {
    url: (d) => d.github,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/github-icon-2x.png",
    label: "GitHub",
  },
  tiktok: {
    url: (d) => d.tiktok,
    icon: "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/tiktok-icon-2x.png",
    label: "TikTok",
  },
};

export function renderSocialIconsHtml(data: SignatureData): string {
  if (!data.showSocialIcons) return "";

  const icons = Object.entries(SOCIAL_ICONS)
    .filter(([, config]) => config.url(data).trim() !== "")
    .map(([, config]) => {
      const url = config.url(data);
      return `<a href="${url}" target="_blank" style="text-decoration: none; margin-right: 6px; display: inline-block;"><img src="${config.icon}" alt="${config.label}" width="${data.iconSize}" height="${data.iconSize}" style="display: block; border: 0;" /></a>`;
    });

  if (icons.length === 0) return "";
  return icons.join("");
}
