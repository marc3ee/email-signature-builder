"use client";

import EditorSidebar from "@/components/Editor";
import PreviewPane from "@/components/Preview";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Editor sidebar — fixed width */}
      <div className="w-[380px] shrink-0 h-full">
        <EditorSidebar />
      </div>

      {/* Preview — fills remaining space */}
      <div className="flex-1 h-full">
        <PreviewPane />
      </div>
    </div>
  );
}
