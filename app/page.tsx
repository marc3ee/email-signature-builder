"use client";

import EditorSidebar from "@/components/Editor";
import PreviewPane from "@/components/Preview";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 min-h-0">
        <div className="w-[380px] shrink-0 h-full">
          <EditorSidebar />
        </div>
        <div className="flex-1 h-full">
          <PreviewPane />
        </div>
      </div>
      <footer className="shrink-0 border-t border-surface-200 bg-white px-5 py-2 text-center text-xs text-surface-400">
        Social icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-surface-600 transition-colors">Icons8</a>
      </footer>
    </div>
  );
}