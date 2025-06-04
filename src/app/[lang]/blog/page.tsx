import { Column, Heading, Text } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/templates/resource/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "../layout";

interface BlogPageProps {
  params: {
    lang: SupportedLanguage;
  };
}

export async function generateMetadata({ params: { lang } }: BlogPageProps) {
  return generatePageMetadata("blog", lang);
}

export default function Blog({ params: { lang } }: BlogPageProps) {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${blog.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Posts />
      {newsletter.display && (
        <Column maxWidth="s" horizontal="center" gap="m">
          <Heading variant="heading-strong-l" align="center">
            {newsletter.title}
          </Heading>
          <Text variant="body-default-l" align="center">
            {newsletter.description}
          </Text>
          <Mailchimp newsletter={newsletter} />
        </Column>
      )}
    </Column>
  );
}
