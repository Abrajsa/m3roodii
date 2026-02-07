import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "معروضي – فريق متخصص في كتابة المعاريض والخطابات الرسمية. خبرة في الكتابة للديوان الملكي والجهات الحكومية. كتابة معروض قوي ومؤثر.",
  openGraph: {
    title: "من نحن | معروضي",
    description:
      "فريق متخصص في كتابة المعاريض والخطابات الرسمية. خبرة في الكتابة للديوان الملكي والجهات الحكومية.",
    url: `${SITE_URL}/about`,
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
