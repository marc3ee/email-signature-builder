import { SignatureData } from "../types";
import { ensureProtocol } from "../url";
import { renderSocialIconsHtml } from "./social-icons";

export function renderModern(data: SignatureData): string {
  const s = {
    font: `font-family: ${data.fontFamily}; font-size: ${data.fontSize}px; color: ${data.textColor}; line-height: ${data.lineHeight};`,
    name: `font-size: ${data.nameFontSize}px; font-weight: 700; color: ${data.primaryColor}; margin: 0; padding: 0;`,
    title: `font-size: ${data.fontSize}px; color: ${data.secondaryColor}; margin: 0; padding: 0;`,
    link: `color: ${data.linkColor}; text-decoration: none;`,
    muted: `font-size: ${data.fontSize - 1}px; color: ${data.secondaryColor};`,
  };

  const headshotRadius =
    data.headshotShape === "circle" ? "50%" :
    data.headshotShape === "rounded" ? "8px" : "0";

  const dividerHtml = data.showDivider && data.dividerStyle !== "none"
    ? `<tr><td style="padding: 8px 0;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-top: ${data.dividerWidth}px ${data.dividerStyle} ${data.dividerColor}; font-size: 1px; line-height: 1px;">&nbsp;</td></tr></table></td></tr>`
    : "";

  const contactParts: string[] = [];
  if (data.phone) contactParts.push(`<a href="tel:${data.phone}" style="${s.link}">${data.phone}</a>`);
  if (data.email) contactParts.push(`<a href="mailto:${data.email}" style="${s.link}">${data.email}</a>`);
  if (data.website) {
    const label = data.website.replace(/^https?:\/\//, "");
    contactParts.push(`<a href="${ensureProtocol(data.website)}" style="${s.link}">${label}</a>`);
  }

  const contactHtml = contactParts.length > 0
    ? `<tr><td style="padding-top: 2px; ${s.muted}">${contactParts.join(`<span style="color: ${data.dividerColor};"> &nbsp;|&nbsp; </span>`)}</td></tr>`
    : "";

  const addressHtml = data.showAddress && data.address
    ? `<tr><td style="padding-top: 2px; ${s.muted}">${data.address}</td></tr>`
    : "";

  const socialHtml = data.showSocialIcons
    ? `<tr><td style="padding-top: 8px;">${renderSocialIconsHtml(data)}</td></tr>`
    : "";

  const ctaHtml = data.ctaText && data.ctaUrl
    ? `<tr><td style="padding-top: 10px;"><a href="${ensureProtocol(data.ctaUrl)}" target="_blank" style="display: inline-block; padding: 6px 16px; background-color: ${data.ctaBgColor}; color: ${data.ctaTextColor}; text-decoration: none; border-radius: 4px; font-size: ${data.fontSize}px; font-family: ${data.fontFamily};">${data.ctaText}</a></td></tr>`
    : "";

  const logoHtml = data.showLogo && data.logoUrl
    ? `<tr><td style="padding-top: 10px;"><img src="${data.logoUrl}" width="${data.logoWidth}" style="display: block;" /></td></tr>`
    : "";

  const pronounsHtml = data.showPronouns && data.pronouns
    ? ` <span style="font-size: ${data.fontSize - 1}px; color: ${data.secondaryColor};">(${data.pronouns})</span>`
    : "";

  const titleParts: string[] = [];
  if (data.jobTitle) titleParts.push(data.jobTitle);
  if (data.department) titleParts.push(data.department);
  if (data.company) titleParts.push(data.company);

  return `<table cellpadding="0" cellspacing="0" border="0" style="${s.font}"><tr>${
    data.showHeadshot && data.headshotUrl
      ? `<td style="vertical-align: top; padding-right: 14px;"><img src="${data.headshotUrl}" width="${data.headshotSize}" height="${data.headshotSize}" style="border-radius: ${headshotRadius}; display: block; object-fit: cover;" /></td>`
      : ""
  }<td style="vertical-align: top;"><table cellpadding="0" cellspacing="0" border="0"><tr><td style="${s.name}">${data.fullName}${pronounsHtml}</td></tr>${
    titleParts.length > 0
      ? `<tr><td style="${s.title}">${titleParts.join(" Â· ")}</td></tr>`
      : ""
  }${dividerHtml}${contactHtml}${addressHtml}${socialHtml}${ctaHtml}${logoHtml}</table></td></tr></table>`;
}

