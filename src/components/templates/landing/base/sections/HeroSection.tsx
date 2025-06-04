import { Flex, Text, Button } from "@/once-ui/components";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n/provider";
import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  image?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ image }) => {
  const t = useTranslations();

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <Flex
        className={styles.heroContent}
        direction="row"
        gap="16"
        vertical="center"
        horizontal="space-between"
        mobileDirection="column"
      >
        {/* Text Content */}
        <Flex
          direction="column"
          gap="8"
          maxWidth={600}
          className={styles.heroText}
        >
          <Text
            id="hero-title"
            variant="heading-strong-xl"
            onBackground="neutral-strong"
            className={styles.title}
          >
            {t("home.hero.title")}
          </Text>

          <Text
            variant="body-default-xl"
            onBackground="neutral-medium"
            className={styles.description}
          >
            {t("home.hero.subtitle")}
          </Text>

          <Flex gap="4" className={styles.ctaContainer}>
            <Button
              href="/contact"
              variant="primary"
              size="l"
              className={styles.ctaButton}
            >
              {t("home.hero.cta")}
            </Button>
          </Flex>
        </Flex>

        {/* Hero Image */}
        {image && (
          <Flex className={styles.heroImage} maxWidth={500}>
            <Image
              src={image}
              alt={t("home.hero.title")}
              width={500}
              height={400}
              className={styles.image}
              priority
            />
          </Flex>
        )}
      </Flex>
    </section>
  );
};
