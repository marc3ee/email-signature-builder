import { SignatureData } from "../types";
import { ensureProtocol } from "../url";

// Icons8 OMG-IMG service - direct PNG URLs that work in email clients
// Format: https://img.icons8.com/{style}/{size}/{name}
// Attribution required: https://icons8.com (add to your site footer)
const SOCIAL_ICONS: Record<string, { url: (data: SignatureData) => string; iconName: string; label: string }> = {
  linkedin: {
    url: (d) => d.linkedin,
    iconName: "linkedin",
    label: "LinkedIn",
  },
  twitter: {
    url: (d) => d.twitter,
    iconName: "twitterx",
    label: "X (Twitter)",
  },
  instagram: {
    url: (d) => d.instagram,
    iconName: "instagram-new",
    label: "Instagram",
  },
  facebook: {
    url: (d) => d.facebook,
    iconName: "facebook",
    label: "Facebook",
  },
  youtube: {
    url: (d) => d.youtube,
    iconName: "youtube-play",
    label: "YouTube",
  },
  github: {
    url: (d) => d.github,
    iconName: "github",
    label: "GitHub",
  },
  tiktok: {
    url: (d) => d.tiktok,
    iconName: "tiktok",
    label: "TikTok",
  },
};

export function renderSocialIconsHtml(data: SignatureData): string {
  if (!data.showSocialIcons) return "";

  const icons = Object.entries(SOCIAL_ICONS)
    .filter(([, config]) => config.url(data).trim() !== "")
    .map(([, config]) => {
      const url = ensureProtocol(config.url(data));
      const size = data.iconSize;
      const imgSize = size * 2;
      const iconUrl = `https://img.icons8.com/color/${imgSize}/${config.iconName}.png`;
      return `<a href="${url}" target="_blank" style="border: 0; text-decoration: none; display: inline-block; margin-right: 4px;"><img src="${iconUrl}" alt="${config.label}" title="${config.label}" width="${size}" height="${size}" style="border: 0; width: ${size}px; height: ${size}px; display: block;" /></a>`;
    });

  if (icons.length === 0) return "";
  return icons.join("");
}

