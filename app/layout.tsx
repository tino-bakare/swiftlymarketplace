import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
// The variable entry point loads one file. "geist/font/serif" would emit and
// preload all five Serif files (Regular, Square, Triangle, Heart and VF).
import { GeistSerif } from "geist/font/serif/variable";
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
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistSerif.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh type-body-regular">{children}</body>
    </html>
  );
}
