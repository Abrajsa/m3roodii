import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "كيفية الطلب",
  description:
    "كيف تطلب معروض من معروضي – خطوات الطلب، الدفع، استلام المعروض خلال 3 أيام. دليل شراء خدمة كتابة المعاريض.",
  openGraph: {
    title: "كيفية الطلب | معروضي",
    description: "خطوات طلب كتابة معروض أو خطاب رسمي من معروضي.",
    url: `${SITE_URL}/how-to-buy`,
  },
  alternates: { canonical: `${SITE_URL}/how-to-buy` },
};

export default function HowToBuyLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
