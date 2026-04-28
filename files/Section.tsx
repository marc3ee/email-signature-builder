"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function Section({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-surface-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-semibold text-surface-800 hover:bg-surface-50 transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={`text-surface-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-4 space-y-3">{children}</div>}
    </div>
  );
}
