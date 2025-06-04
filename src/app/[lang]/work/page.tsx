import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import { Projects } from "@/components/templates/landing/case-studies/Projects";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "@/lib/i18n/types";

interface WorkPageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: WorkPageProps) {
  const { lang } = await params;
  return generatePageMetadata("work", lang);
}

export default async function Work({ params }: WorkPageProps) {
  const { lang } = await params;

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${lang}${work.path}`}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/${lang}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects lang={lang} />
    </Column>
  );
}
