import FAQSection from "@/components/sections/faq/faq-section";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "faq");
}

const FAQPage = () => {
  return (
    <>
      <JsonLd data={faqSchema} />
      <main>
        <FAQSection />
      </main>
    </>
  );
};

export default FAQPage;
