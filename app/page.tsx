"use client";

import { useState } from "react";
import EditorSidebar from "@/components/Editor";
import PreviewPane from "@/components/Preview";
import { Pencil, Eye } from "lucide-react";

export default function Home() {
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");

  return (
    <div className="flex h-screen flex-col">
      {/* Mobile tab switcher */}
      <div className="md:hidden flex items-center gap-1 px-3 py-2 border-b border-surface-200 bg-white">
        <button
          onClick={() => setMobileView("editor")}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
            mobileView === "editor"
              ? "bg-surface-900 text-white"
              : "bg-surface-100 text-surface-600"
          }`}
        >
          <Pencil size={13} />
          Edit
        </button>
        <button
          onClick={() => setMobileView("preview")}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
            mobileView === "preview"
              ? "bg-surface-900 text-white"
              : "bg-surface-100 text-surface-600"
          }`}
        >
          <Eye size={13} />
          Preview
        </button>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Editor sidebar */}
        <div
          className={`w-full md:w-[380px] md:shrink-0 h-full md:block ${
            mobileView === "editor" ? "block" : "hidden"
          }`}
        >
          <EditorSidebar />
        </div>

        {/* Preview */}
        <div
          className={`flex-1 min-w-0 h-full md:block ${
            mobileView === "preview" ? "block" : "hidden"
          }`}
        >
          <PreviewPane />
        </div>
      </div>

      {/* Attribution footer */}
      <footer className="shrink-0 border-t border-surface-200 bg-white px-5 py-2 text-center text-xs text-surface-400">
        Social icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-surface-600 transition-colors">Icons8</a>
      </footer>
    </div>
  );
}
