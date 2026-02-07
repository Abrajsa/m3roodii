import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "خدمات كتابة المعاريض والخطابات – معروض للديوان الملكي، طلب مساعدة مالية، تجنيس، نقل، شكوى، علاج، توظيف، سكن، زواج من أجنبية، استرحام، سداد دين، إعفاء مخالفات، منحة أرض، ومزيد.",
  openGraph: {
    title: "خدماتنا | معروضي",
    description: "جميع خدمات كتابة المعاريض والخطابات الرسمية.",
    url: `${SITE_URL}/services`,
  },
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
