import type { Metadata } from "next";
import { SITE_URL } from "../../lib/seo";
import { services } from "../../data/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return { title: "الخدمة غير موجودة" };
  }

  const shortDesc =
    service.description.split("\n").find((l) => l.trim().length > 20 && !l.startsWith("✔") && !l.startsWith("✅"))?.slice(0, 155) ||
    `كتابة ${service.title} – معروض قوي ومؤثر من معروضي. استلام خلال 3 أيام.`;

  return {
    title: service.title,
    description: shortDesc,
    openGraph: {
      title: `${service.title} | معروضي`,
      description: shortDesc,
      url: `${SITE_URL}/service/${slug}`,
    },
    alternates: { canonical: `${SITE_URL}/service/${slug}` },
    keywords: [
      service.title,
      "كتابة معروض",
      "معروضي",
      "خطاب رسمي",
      "الديوان الملكي",
      "جدة",
      "السعودية",
    ].join(", "),
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export default function ServiceSlugLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
