import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "لماذا نحن",
  description:
    "لماذا تختار معروضي لكتابة المعاريض – خبرة، صيغ قوية ومؤثرة، سرية، تعديلات مجانية، استلام خلال 3 أيام. جدة، السعودية.",
  openGraph: {
    title: "لماذا نحن | معروضي",
    description: "مميزات اختيار معروضي لكتابة المعاريض والخطابات.",
    url: `${SITE_URL}/why-us`,
  },
  alternates: { canonical: `${SITE_URL}/why-us` },
};

export default function WhyUsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
