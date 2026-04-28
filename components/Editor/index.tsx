"use client";

import { useSignatureStore } from "@/lib/store";
import { FONT_OPTIONS, COLOR_THEMES } from "@/lib/types";
import { TEMPLATES } from "@/lib/templates";
import { Section } from "./Section";
import { Field, Toggle, ColorField, SelectField, SliderField } from "./Fields";
import { RotateCcw } from "lucide-react";

export default function EditorSidebar() {
  const { data, setField, setFields, reset } = useSignatureStore();

  return (
    <aside className="w-full h-full overflow-y-auto bg-white border-r border-surface-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-surface-200">
        <h1 className="text-base font-bold text-surface-900 tracking-tight">Signature Builder</h1>
        <button onClick={reset} className="text-surface-400 hover:text-surface-600 transition-colors" title="Reset to defaults"><RotateCcw size={15} /></button>
      </div>

      <Section title="Template" defaultOpen={true}>
        <div className="grid grid-cols-3 gap-2">
          {Object.values(TEMPLATES).map((t) => (
            <button key={t.id} type="button" onClick={() => setField("templateId", t.id)} className={`rounded-lg border-2 p-2.5 text-center text-xs font-medium transition-all ${data.templateId === t.id ? "border-accent bg-accent/5 text-accent" : "border-surface-200 text-surface-500 hover:border-surface-300"}`}>{t.name}</button>
          ))}
        </div>
      </Section>

      <Section title="Personal Info" defaultOpen={true}>
        <Field label="Full Name" value={data.fullName} onChange={(v) => setField("fullName", v)} />
        <Field label="Job Title" value={data.jobTitle} onChange={(v) => setField("jobTitle", v)} />
        <Field label="Department" value={data.department} onChange={(v) => setField("department", v)} placeholder="Optional" />
        <Field label="Company" value={data.company} onChange={(v) => setField("company", v)} />
        <div className="flex items-end gap-2">
          <div className="flex-1"><Field label="Pronouns" value={data.pronouns} onChange={(v) => setField("pronouns", v)} placeholder="e.g. she/her" /></div>
          <div className="pb-0.5"><Toggle label="" checked={data.showPronouns} onChange={(v) => setField("showPronouns", v)} /></div>
        </div>
      </Section>

      <Section title="Contact Details">
        <Field label="Email" value={data.email} onChange={(v) => setField("email", v)} type="email" />
        <Field label="Phone" value={data.phone} onChange={(v) => setField("phone", v)} type="tel" />
        <Field label="Mobile" value={data.mobile} onChange={(v) => setField("mobile", v)} type="tel" placeholder="Optional" />
        <Field label="Website" value={data.website} onChange={(v) => setField("website", v)} placeholder="https://..." />
        <div className="flex items-end gap-2">
          <div className="flex-1"><Field label="Address" value={data.address} onChange={(v) => setField("address", v)} placeholder="Optional" /></div>
          <div className="pb-0.5"><Toggle label="" checked={data.showAddress} onChange={(v) => setField("showAddress", v)} /></div>
        </div>
      </Section>

      <Section title="Social Links">
        <Toggle label="Show social icons" checked={data.showSocialIcons} onChange={(v) => setField("showSocialIcons", v)} />
        {data.showSocialIcons && (<>
          <Field label="LinkedIn" value={data.linkedin} onChange={(v) => setField("linkedin", v)} placeholder="https://linkedin.com/in/..." />
          <Field label="Twitter / X" value={data.twitter} onChange={(v) => setField("twitter", v)} placeholder="https://x.com/..." />
          <Field label="Instagram" value={data.instagram} onChange={(v) => setField("instagram", v)} placeholder="https://instagram.com/..." />
          <Field label="Facebook" value={data.facebook} onChange={(v) => setField("facebook", v)} placeholder="https://facebook.com/..." />
          <Field label="YouTube" value={data.youtube} onChange={(v) => setField("youtube", v)} placeholder="https://youtube.com/..." />
          <Field label="GitHub" value={data.github} onChange={(v) => setField("github", v)} placeholder="https://github.com/..." />
          <Field label="TikTok" value={data.tiktok} onChange={(v) => setField("tiktok", v)} placeholder="https://tiktok.com/@..." />
        </>)}
      </Section>

      <Section title="Images">
        <Toggle label="Show headshot" checked={data.showHeadshot} onChange={(v) => setField("showHeadshot", v)} />
        {data.showHeadshot && (<>
          <Field label="Headshot URL" value={data.headshotUrl} onChange={(v) => setField("headshotUrl", v)} placeholder="https://..." />
          <SelectField label="Shape" value={data.headshotShape} onChange={(v) => setField("headshotShape", v as "circle" | "square" | "rounded")} options={[{ label: "Circle", value: "circle" }, { label: "Rounded", value: "rounded" }, { label: "Square", value: "square" }]} />
          <SliderField label="Size" value={data.headshotSize} onChange={(v) => setField("headshotSize", v)} min={40} max={150} />
        </>)}
        <Toggle label="Show logo" checked={data.showLogo} onChange={(v) => setField("showLogo", v)} />
        {data.showLogo && (<>
          <Field label="Logo URL" value={data.logoUrl} onChange={(v) => setField("logoUrl", v)} placeholder="https://..." />
          <SliderField label="Logo width" value={data.logoWidth} onChange={(v) => setField("logoWidth", v)} min={40} max={300} />
        </>)}
      </Section>

      <Section title="Colors">
        <div className="space-y-1.5">
          <span className="text-xs font-medium text-surface-500 uppercase tracking-wide">Quick Themes</span>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(COLOR_THEMES).map(([key, theme]) => (
              <button key={key} type="button" onClick={() => setFields(theme)} className="flex items-center gap-1.5 rounded-md border border-surface-200 px-2 py-1 text-xs text-surface-600 hover:border-surface-300 transition-colors">
                <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: theme.primaryColor }} />{theme.label}
              </button>
            ))}
          </div>
        </div>
        <ColorField label="Primary (name)" value={data.primaryColor} onChange={(v) => setField("primaryColor", v)} />
        <ColorField label="Secondary (title)" value={data.secondaryColor} onChange={(v) => setField("secondaryColor", v)} />
        <ColorField label="Body text" value={data.textColor} onChange={(v) => setField("textColor", v)} />
        <ColorField label="Links" value={data.linkColor} onChange={(v) => setField("linkColor", v)} />
      </Section>

      <Section title="Typography">
        <SelectField label="Font" value={data.fontFamily} onChange={(v) => setField("fontFamily", v)} options={FONT_OPTIONS} />
        <SliderField label="Name size" value={data.nameFontSize} onChange={(v) => setField("nameFontSize", v)} min={12} max={28} />
        <SliderField label="Body size" value={data.fontSize} onChange={(v) => setField("fontSize", v)} min={10} max={18} />
        <SliderField label="Line height" value={data.lineHeight} onChange={(v) => setField("lineHeight", v)} min={1} max={2} step={0.1} unit="" />
      </Section>

      <Section title="Divider">
        <Toggle label="Show divider" checked={data.showDivider} onChange={(v) => setField("showDivider", v)} />
        {data.showDivider && (<>
          <SelectField label="Style" value={data.dividerStyle} onChange={(v) => setField("dividerStyle", v as "solid" | "dashed" | "dotted" | "none")} options={[{ label: "Solid", value: "solid" }, { label: "Dashed", value: "dashed" }, { label: "Dotted", value: "dotted" }, { label: "None", value: "none" }]} />
          <ColorField label="Divider color" value={data.dividerColor} onChange={(v) => setField("dividerColor", v)} />
          <SliderField label="Divider width" value={data.dividerWidth} onChange={(v) => setField("dividerWidth", v)} min={1} max={4} />
        </>)}
      </Section>

      <Section title="Icon Styling">
        <SliderField label="Icon size" value={data.iconSize} onChange={(v) => setField("iconSize", v)} min={14} max={28} />
        <ColorField label="Icon color" value={data.iconColor} onChange={(v) => setField("iconColor", v)} />
      </Section>

      <Section title="Call to Action">
        <Field label="Button text" value={data.ctaText} onChange={(v) => setField("ctaText", v)} placeholder="e.g. Book a meeting" />
        <Field label="Button URL" value={data.ctaUrl} onChange={(v) => setField("ctaUrl", v)} placeholder="https://..." />
        {data.ctaText && (<>
          <ColorField label="Button color" value={data.ctaBgColor} onChange={(v) => setField("ctaBgColor", v)} />
          <ColorField label="Button text color" value={data.ctaTextColor} onChange={(v) => setField("ctaTextColor", v)} />
        </>)}
      </Section>
    </aside>
  );
}
