import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: "شروط وأحكام استخدام موقع معروضي وخدمات كتابة المعاريض والخطابات.",
  openGraph: {
    title: "الشروط والأحكام | معروضي",
    url: `${SITE_URL}/terms`,
  },
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
