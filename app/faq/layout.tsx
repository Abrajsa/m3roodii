import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description:
    "أسئلة شائعة عن كتابة المعاريض والخطابات – أنواع المعاريض، وقت التسليم، طريقة الطلب، الدفع، التعديلات. معروضي.",
  openGraph: {
    title: "الأسئلة الشائعة | معروضي",
    description: "إجابات عن أسئلتك حول كتابة المعاريض والخطابات الرسمية.",
    url: `${SITE_URL}/faq`,
  },
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
