import { Column, Heading, Text } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/templates/resource/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "@/lib/i18n/types";

interface BlogPageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { lang } = await params;
  return generatePageMetadata("blog", lang);
}

export default async function Blog({ params }: BlogPageProps) {
  const { lang } = await params;

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={`/${lang}${blog.path}`}
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/${lang}${blog.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Posts lang={lang} />
      {newsletter.display && (
        <Column maxWidth="s" horizontal="center" gap="m">
          <Heading variant="heading-strong-l" align="center">
            {newsletter.title}
          </Heading>
          <Text variant="body-default-l" align="center">
            {newsletter.description}
          </Text>
          <Mailchimp newsletter={newsletter} lang={lang} />
        </Column>
      )}
    </Column>
  );
}
