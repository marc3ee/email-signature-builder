import { SignatureData } from "../types";
import { ensureProtocol } from "../url";
import { renderSocialIconsHtml } from "./social-icons";

export function renderCompact(data: SignatureData): string {
  const s = {
    font: `font-family: ${data.fontFamily}; font-size: ${data.fontSize}px; color: ${data.textColor}; line-height: ${data.lineHeight};`,
    name: `font-size: ${data.nameFontSize}px; font-weight: 700; color: ${data.primaryColor};`,
    link: `color: ${data.linkColor}; text-decoration: none;`,
    muted: `font-size: ${data.fontSize - 1}px; color: ${data.secondaryColor};`,
    sep: `<span style="color: ${data.dividerColor};"> &nbsp;|&nbsp; </span>`,
  };

  const pronounsHtml = data.showPronouns && data.pronouns
    ? ` <span style="font-size: ${data.fontSize - 1}px; color: ${data.secondaryColor};">(${data.pronouns})</span>`
    : "";

  // Line 1: Name · Title · Company
  const line1Parts: string[] = [`<span style="${s.name}">${data.fullName}${pronounsHtml}</span>`];
  if (data.jobTitle) line1Parts.push(`<span style="${s.muted}">${data.jobTitle}</span>`);
  if (data.company) line1Parts.push(`<span style="${s.muted}">${data.company}</span>`);

  // Line 2: Contact info
  const line2Parts: string[] = [];
  if (data.phone) line2Parts.push(`<a href="tel:${data.phone}" style="${s.link}">${data.phone}</a>`);
  if (data.email) line2Parts.push(`<a href="mailto:${data.email}" style="${s.link}">${data.email}</a>`);
  if (data.website) {
    const label = data.website.replace(/^https?:\/\//, "");
    line2Parts.push(`<a href="${ensureProtocol(data.website)}" style="${s.link}">${label}</a>`);
  }

  const dividerHtml = data.showDivider && data.dividerStyle !== "none"
    ? `<tr><td style="padding: 6px 0;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-top: ${data.dividerWidth}px ${data.dividerStyle} ${data.dividerColor}; font-size: 1px; line-height: 1px;">&nbsp;</td></tr></table></td></tr>`
    : "";

  const addressHtml = data.showAddress && data.address
    ? `<tr><td style="${s.muted}">${data.address}</td></tr>`
    : "";

  const socialHtml = data.showSocialIcons
    ? `<tr><td style="padding-top: 6px;">${renderSocialIconsHtml(data)}</td></tr>`
    : "";

  const ctaHtml = data.ctaText && data.ctaUrl
    ? `<tr><td style="padding-top: 8px;"><a href="${ensureProtocol(data.ctaUrl)}" target="_blank" style="display: inline-block; padding: 5px 14px; background-color: ${data.ctaBgColor}; color: ${data.ctaTextColor}; text-decoration: none; border-radius: 3px; font-size: ${data.fontSize - 1}px; font-family: ${data.fontFamily};">${data.ctaText}</a></td></tr>`
    : "";

  const logoHtml = data.showLogo
    ? `<tr><td style="padding-top: 8px;"><img src="https://a3brands.com/images/logo/a3brands-logo.png" width="120" style="display: block;" /></td></tr>`
    : "";

  return `<table cellpadding="0" cellspacing="0" border="0" style="${s.font}"><tr><td><table cellpadding="0" cellspacing="0" border="0"><tr><td>${line1Parts.join(s.sep)}</td></tr>${dividerHtml}${
    line2Parts.length > 0 ? `<tr><td style="${s.muted}">${line2Parts.join(s.sep)}</td></tr>` : ""
  }${addressHtml}${socialHtml}${ctaHtml}${logoHtml}</table></td></tr></table>`;
}

