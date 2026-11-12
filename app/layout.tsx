import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swiftly Marketplace: business software for African businesses",
  description:
    "Every Swiftly product in one place: microfinance, accounting, payroll, CRM, projects, checklists and the Swiftly for Tobacco systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
