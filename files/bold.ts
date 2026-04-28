import { SignatureData } from "../types";
import { renderSocialIconsHtml } from "./social-icons";

export function renderBold(data: SignatureData): string {
  const s = {
    font: `font-family: ${data.fontFamily}; font-size: ${data.fontSize}px; color: ${data.textColor}; line-height: ${data.lineHeight};`,
    name: `font-size: ${data.nameFontSize + 2}px; font-weight: 700; color: ${data.primaryColor}; margin: 0; padding: 0; text-transform: uppercase; letter-spacing: 1px;`,
    title: `font-size: ${data.fontSize}px; color: ${data.secondaryColor}; margin: 0; padding: 0;`,
    link: `color: ${data.linkColor}; text-decoration: none;`,
    muted: `font-size: ${data.fontSize - 1}px; color: ${data.secondaryColor};`,
  };

  const headshotRadius =
    data.headshotShape === "circle" ? "50%" :
    data.headshotShape === "rounded" ? "8px" : "0";

  const contactParts: string[] = [];
  if (data.phone) contactParts.push(`<a href="tel:${data.phone}" style="${s.link}">${data.phone}</a>`);
  if (data.email) contactParts.push(`<a href="mailto:${data.email}" style="${s.link}">${data.email}</a>`);
  if (data.website) {
    const label = data.website.replace(/^https?:\/\//, "");
    contactParts.push(`<a href="${data.website}" style="${s.link}">${label}</a>`);
  }

  const pronounsHtml = data.showPronouns && data.pronouns
    ? ` <span style="font-size: ${data.fontSize - 1}px; color: ${data.secondaryColor}; text-transform: none; letter-spacing: 0;">(${data.pronouns})</span>`
    : "";

  const titleParts: string[] = [];
  if (data.jobTitle) titleParts.push(data.jobTitle);
  if (data.department) titleParts.push(data.department);
  if (data.company) titleParts.push(data.company);

  const contactHtml = contactParts.length > 0
    ? `<tr><td style="padding-top: 4px; ${s.muted}">${contactParts.join(" &nbsp;· &nbsp;")}</td></tr>`
    : "";

  const addressHtml = data.showAddress && data.address
    ? `<tr><td style="padding-top: 2px; ${s.muted}">${data.address}</td></tr>`
    : "";

  const socialHtml = data.showSocialIcons
    ? `<tr><td style="padding-top: 8px;">${renderSocialIconsHtml(data)}</td></tr>`
    : "";

  const ctaHtml = data.ctaText && data.ctaUrl
    ? `<tr><td style="padding-top: 10px;"><a href="${data.ctaUrl}" target="_blank" style="display: inline-block; padding: 7px 20px; background-color: ${data.ctaBgColor}; color: ${data.ctaTextColor}; text-decoration: none; font-size: ${data.fontSize}px; font-weight: 700; font-family: ${data.fontFamily}; text-transform: uppercase; letter-spacing: 0.5px;">${data.ctaText}</a></td></tr>`
    : "";

  const logoHtml = data.showLogo && data.logoUrl
    ? `<tr><td style="padding-top: 10px;"><img src="${data.logoUrl}" width="${data.logoWidth}" style="display: block;" /></td></tr>`
    : "";

  return `<table cellpadding="0" cellspacing="0" border="0" style="${s.font}"><tr>${
    data.showHeadshot && data.headshotUrl
      ? `<td style="vertical-align: top; padding-right: 14px;"><img src="${data.headshotUrl}" width="${data.headshotSize}" height="${data.headshotSize}" style="border-radius: ${headshotRadius}; display: block; object-fit: cover;" /></td>`
      : ""
  }<td style="border-left: 3px solid ${data.primaryColor}; padding-left: 12px; vertical-align: top;"><table cellpadding="0" cellspacing="0" border="0"><tr><td style="${s.name}">${data.fullName}${pronounsHtml}</td></tr>${
    titleParts.length > 0
      ? `<tr><td style="${s.title}">${titleParts.join(" | ")}</td></tr>`
      : ""
  }${contactHtml}${addressHtml}${socialHtml}${ctaHtml}${logoHtml}</table></td></tr></table>`;
}
