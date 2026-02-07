import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "الأسعار",
  description:
    "أسعار كتابة المعاريض والخطابات – معروض، شكوى، طلب مساعدة مالية، تجنيس، نقل، علاج، توظيف، سكن، استرحام، منحة أرض. كتابة فقط أو مع الإرسال والمتابعة.",
  openGraph: {
    title: "الأسعار | معروضي",
    description: "أسعار خدمات كتابة المعاريض والخطابات الرسمية.",
    url: `${SITE_URL}/pricing`,
  },
  alternates: { canonical: `${SITE_URL}/pricing` },
};

export default function PricingLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
