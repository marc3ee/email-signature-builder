import { SignatureData } from "../types";

const CDN = "https://cdn.jsdelivr.net/gh/dmhendricks/signature-social-icons/icons/round-flat-filled/50px";

const SOCIAL_ICONS: Record<string, { url: (data: SignatureData) => string; icon: string; label: string }> = {
  linkedin: {
    url: (d) => d.linkedin,
    icon: `${CDN}/linkedin.png`,
    label: "LinkedIn",
  },
  twitter: {
    url: (d) => d.twitter,
    icon: `${CDN}/twitter.png`,
    label: "Twitter",
  },
  instagram: {
    url: (d) => d.instagram,
    icon: `${CDN}/instagram.png`,
    label: "Instagram",
  },
  facebook: {
    url: (d) => d.facebook,
    icon: `${CDN}/facebook.png`,
    label: "Facebook",
  },
  youtube: {
    url: (d) => d.youtube,
    icon: `${CDN}/youtube.png`,
    label: "YouTube",
  },
  github: {
    url: (d) => d.github,
    icon: `${CDN}/github.png`,
    label: "GitHub",
  },
  tiktok: {
    url: (d) => d.tiktok,
    icon: `${CDN}/tiktok.png`,
    label: "TikTok",
  },
};

export function renderSocialIconsHtml(data: SignatureData): string {
  if (!data.showSocialIcons) return "";

  const icons = Object.entries(SOCIAL_ICONS)
    .filter(([, config]) => config.url(data).trim() !== "")
    .map(([, config]) => {
      const url = config.url(data);
      const size = data.iconSize;
      return `<a href="${url}" target="_blank" style="border-width: 0px; border: 0px; text-decoration: none; display: inline-block; margin-right: 4px;"><img src="${config.icon}" alt="${config.label}" title="${config.label}" width="${size}" height="${size}" style="border: none; width: ${size}px; max-width: ${size}px !important; height: ${size}px; max-height: ${size}px !important; display: block;" /></a>`;
    });

  if (icons.length === 0) return "";
  return icons.join("");
}
