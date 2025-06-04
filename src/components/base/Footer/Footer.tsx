"use client";

import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import { useLanguage, useTranslations } from "@/lib/i18n/provider";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslations();

  // Define footer navigation structure with language-aware routes
  const footerNavigation = {
    services: {
      key: "services",
      items: [
        { key: "website", href: `/${language}/services/website-development` },
        { key: "ads", href: `/${language}/services/ads-management` },
        { key: "creative", href: `/${language}/services/creative-strategy` },
        { key: "content", href: `/${language}/services/content-branding` },
        { key: "experience", href: `/${language}/client-experience` },
      ],
    },
    industries: {
      key: "industries",
      items: [
        { key: "dental", href: `/${language}/industry/dental` },
        { key: "restaurant", href: `/${language}/industry/restaurant` },
        { key: "legal", href: `/${language}/industry/legal` },
        { key: "interior", href: `/${language}/industry/interior-design` },
        {
          key: "professional",
          href: `/${language}/industry/professional-services`,
        },
        { key: "retail", href: `/${language}/industry/retail` },
      ],
    },
    resources: {
      key: "resources",
      items: [
        { key: "audit", href: `/${language}/resources/marketing-audit` },
        { key: "mistakes", href: `/${language}/resources/marketing-mistakes` },
        { key: "templates", href: `/${language}/resources/templates` },
        { key: "seo", href: `/${language}/resources/local-seo` },
        { key: "calendar", href: `/${language}/resources/content-calendar` },
        { key: "calculator", href: `/${language}/resources/roi-calculator` },
      ],
    },
    company: {
      key: "company",
      items: [
        { key: "about", href: `/${language}/about` },
        { key: "cases", href: `/${language}/case-studies` },
        { key: "blog", href: `/${language}/blog` },
        { key: "contact", href: `/${language}/contact` },
        { key: "start", href: `/${language}/get-started` },
      ],
    },
    legal: {
      key: "legal",
      items: [
        { key: "privacy", href: "/privacy" },
        { key: "terms", href: "/terms" },
        { key: "refund", href: "/refund" },
        { key: "cookies", href: "/cookies" },
      ],
    },
  };

  return (
    <Flex
      as="footer"
      fillWidth
      paddingY="xl"
      paddingX="l"
      horizontal="center"
      data-border="rounded"
    >
      <Flex maxWidth="m" fillWidth gap="xl">
        <Flex fillWidth gap="xl" wrap>
          {Object.values(footerNavigation).map((section) => (
            <Flex key={section.key} direction="column" gap="m">
              <Text variant="label-default-s" onBackground="neutral-weak">
                {t(`footer.${section.key}.title`)}
              </Text>
              <Flex direction="column" gap="s">
                {section.items.map((item) => (
                  <SmartLink key={item.key} href={item.href}>
                    {t(`footer.${section.key}.${item.key}`)}
                  </SmartLink>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap="m" horizontal="end">
          <Text variant="label-default-s" onBackground="neutral-weak">
            {t("footer.social.title")}
          </Text>
          <Flex gap="s">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    variant="tertiary"
                    size="l"
                  />
                )
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
