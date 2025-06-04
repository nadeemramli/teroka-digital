import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "@/lib/i18n/types";

interface GalleryPageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: GalleryPageProps) {
  const { lang } = await params;
  return generatePageMetadata("gallery", lang);
}

export default async function Gallery({ params }: GalleryPageProps) {
  const { lang } = await params;

  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={`/${lang}${gallery.path}`}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/${lang}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
