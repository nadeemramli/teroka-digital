"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage, useTranslations } from "@/lib/i18n/provider";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "./Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, about, blog, work, gallery } from "@/app/resources/content";
import { ThemeToggle } from "@/components/utils/ThemeToggle";
import { LanguageSwitcher } from "@/components/utils/LanguageSwitcher";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

function TimeDisplay({ timeZone, locale = "en-GB" }: TimeDisplayProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(locale, {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone, locale]);

  return <>{time}</>;
}

export const Header = () => {
  const pathname = usePathname() ?? "";
  const { language } = useLanguage();

  // Helper function to get the current path without language prefix
  const getPathWithoutLang = (path: string) => {
    return path.replace(/^\/[^\/]+/, "");
  };

  // Helper function to check if a path matches the current route
  const isCurrentRoute = (route: string) => {
    const pathWithoutLang = getPathWithoutLang(pathname);
    return pathWithoutLang === route || pathWithoutLang.startsWith(route);
  };

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href={`/${language}`}
                  selected={pathname === `/${language}`}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href={`/${language}/about`}
                    label={about.label}
                    selected={isCurrentRoute("/about")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href={`/${language}/about`}
                    selected={isCurrentRoute("/about")}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href={`/${language}/work`}
                    label={work.label}
                    selected={isCurrentRoute("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href={`/${language}/work`}
                    selected={isCurrentRoute("/work")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href={`/${language}/blog`}
                    label={blog.label}
                    selected={isCurrentRoute("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href={`/${language}/blog`}
                    selected={isCurrentRoute("/blog")}
                  />
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href={`/${language}/gallery`}
                    label={gallery.label}
                    selected={isCurrentRoute("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href={`/${language}/gallery`}
                    selected={isCurrentRoute("/gallery")}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
            <LanguageSwitcher />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
