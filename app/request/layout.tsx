import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "طلب معروض",
  description:
    "قدم طلب كتابة معروض أو خطاب رسمي – معروضي يكتب لك معروض قوي ومؤثر للديوان الملكي أو أي جهة. استلام خلال 3 أيام.",
  openGraph: {
    title: "طلب معروض | معروضي",
    description: "قدم طلبك لكتابة معروض أو خطاب رسمي.",
    url: `${SITE_URL}/request`,
  },
  alternates: { canonical: `${SITE_URL}/request` },
};

export default function RequestLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
