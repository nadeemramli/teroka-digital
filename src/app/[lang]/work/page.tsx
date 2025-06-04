import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import { Projects } from "@/components/templates/landing/case-studies/Projects";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "../layout";

interface WorkPageProps {
  params: {
    lang: SupportedLanguage;
  };
}

export async function generateMetadata({ params: { lang } }: WorkPageProps) {
  return generatePageMetadata("work", lang);
}

export default function Work({ params: { lang } }: WorkPageProps) {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
    </Column>
  );
}
