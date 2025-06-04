import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "../layout";

interface GalleryPageProps {
  params: {
    lang: SupportedLanguage;
  };
}

export async function generateMetadata({ params: { lang } }: GalleryPageProps) {
  return generatePageMetadata("gallery", lang);
}

export default function Gallery({ params: { lang } }: GalleryPageProps) {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
