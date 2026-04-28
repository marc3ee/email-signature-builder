import { SignatureData } from "../types";
import { renderModern } from "./modern";
import { renderBold } from "./bold";
import { renderCompact } from "./compact";

export type TemplateRenderer = (data: SignatureData) => string;

export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  render: TemplateRenderer;
}

export const TEMPLATES: Record<string, TemplateConfig> = {
  modern: {
    id: "modern",
    name: "Modern",
    description: "Clean layout with photo sidebar and divider",
    render: renderModern,
  },
  bold: {
    id: "bold",
    name: "Bold",
    description: "Colored accent bar with uppercase name",
    render: renderBold,
  },
  compact: {
    id: "compact",
    name: "Compact",
    description: "Minimal single-line style, no photo",
    render: renderCompact,
  },
};

export function renderSignature(data: SignatureData): string {
  const template = TEMPLATES[data.templateId] ?? TEMPLATES.modern;
  return template.render(data);
}
