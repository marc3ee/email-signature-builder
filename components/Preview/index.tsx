"use client";

import { useState, useCallback } from "react";
import { useSignatureStore } from "@/lib/store";
import { renderSignature } from "@/lib/templates";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewPane() {
  const data = useSignatureStore((s) => s.data);
  const html = renderSignature(data);
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState<"preview" | "html">("preview");

  const handleCopy = useCallback(async () => {
    try {
      const blob = new Blob([html], { type: "text/html" });
      const item = new ClipboardItem({ "text/html": blob });
      await navigator.clipboard.write([item]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [html]);

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-surface-200 bg-white">
        <div className="flex items-center gap-1 bg-surface-100 rounded-lg p-0.5">
          <button
            onClick={() => setView("preview")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              view === "preview"
                ? "bg-white text-surface-800 shadow-sm"
                : "text-surface-500 hover:text-surface-700"
            }`}
          >
            <Eye size={13} />
            Preview
          </button>
          <button
            onClick={() => setView("html")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              view === "html"
                ? "bg-white text-surface-800 shadow-sm"
                : "text-surface-500 hover:text-surface-700"
            }`}
          >
            <Code size={13} />
            Source code
          </button>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            copied
              ? "bg-emerald-500 text-white"
              : "bg-surface-900 text-white hover:bg-surface-800"
          }`}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Signature"}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-surface-50 p-6">
        {view === "preview" ? (
          /* Mock email compose frame */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 overflow-hidden">
              {/* Fake email header */}
              <div className="px-5 py-3 border-b border-surface-100 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-surface-400 w-10">To</span>
                  <div className="flex-1 h-5 bg-surface-50 rounded" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-surface-400 w-10">Subject</span>
                  <div className="flex-1 h-5 bg-surface-50 rounded" />
                </div>
              </div>

              {/* Email body area */}
              <div className="px-5 py-4">
                <div className="space-y-1 mb-6">
                  <div className="h-3 bg-surface-50 rounded w-3/4" />
                  <div className="h-3 bg-surface-50 rounded w-full" />
                  <div className="h-3 bg-surface-50 rounded w-5/6" />
                  <div className="h-3 bg-surface-50 rounded w-2/3" />
                </div>

                {/* Signature */}
                <div className="pt-4 border-t border-surface-100">
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>
            </div>

            {/* Paste instructions */}
            <div className="mt-4 text-center">
              <p className="text-xs text-surface-400">
                Click <strong>Copy Signature</strong> → Gmail Settings → Signature → Paste
              </p>
            </div>
          </div>
        ) : (
          /* HTML source view */
          <div className="max-w-2xl mx-auto">
             <p className="text-xs text-surface-400 mb-3 text-center">For developer use only. To add your signature to Gmail, use the <strong>Copy Signature</strong> button on the Preview tab.</p>
            <pre className="bg-surface-900 text-surface-100 rounded-xl p-5 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap break-all font-mono">
              {html}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
