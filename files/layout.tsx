import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signature Builder — Gmail Email Signatures",
  description:
    "Design, customize, and install professional HTML email signatures for Gmail. No coding required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-surface-50 text-surface-800">
        {children}
      </body>
    </html>
  );
}
