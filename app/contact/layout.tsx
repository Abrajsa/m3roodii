import type { Metadata } from "next";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع معروضي – واتساب، هاتف، بريد. جدة، المملكة العربية السعودية. لطلب كتابة معروض أو استفسار عن الخدمات.",
  openGraph: {
    title: "تواصل معنا | معروضي",
    description: "تواصل معنا عبر واتساب أو الهاتف. جدة، السعودية.",
    url: `${SITE_URL}/contact`,
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
