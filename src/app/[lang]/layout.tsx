import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style, font, home } from "@/app/resources";
import { LanguageProvider } from "@/lib/i18n/provider";
import { loadTranslations } from "@/lib/i18n/translations";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage, supportedLanguages } from "@/lib/i18n/types";

import {
  Background,
  Column,
  Flex,
  ThemeProvider,
  ToastProvider,
} from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";

// Language metadata
const languageMetadata = {
  en: {
    title: home.title,
    description: home.description,
  },
  my: {
    title:
      "Teroka Digital - Perkhidmatan Pemasaran Digital untuk Perniagaan Tradisional",
    description:
      "Kami membantu perniagaan tradisional di Malaysia berkembang dengan penyelesaian pemasaran digital yang berkesan.",
  },
  cn: {
    title: "Teroka Digital - 传统企业的数字营销服务",
    description:
      "我们帮助马来西亚的传统企业通过有效的数字营销解决方案实现增长。",
  },
} as const;

interface LanguageLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: LanguageLayoutProps) {
  const { lang } = await params;
  return generatePageMetadata("home", lang);
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  // Load translations for the current language
  const translations = await loadTranslations(lang);

  return (
    <html
      lang={lang}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable
      )}
      data-theme={style.theme}
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
    >
      <head></head>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>
          <ToastProvider>
            <LanguageProvider
              initialLanguage={lang}
              translations={translations}
            >
              <Flex
                fillWidth
                direction="column"
                style={{ minHeight: "100vh" }}
                background="page"
              >
                <Background
                  position="fixed"
                  mask={{
                    x: effects.mask.x,
                    y: effects.mask.y,
                    radius: effects.mask.radius,
                    cursor: effects.mask.cursor,
                  }}
                  gradient={{
                    display: effects.gradient.display,
                    opacity: effects.gradient.opacity as opacity,
                    x: effects.gradient.x,
                    y: effects.gradient.y,
                    width: effects.gradient.width,
                    height: effects.gradient.height,
                    tilt: effects.gradient.tilt,
                    colorStart: effects.gradient.colorStart,
                    colorEnd: effects.gradient.colorEnd,
                  }}
                  dots={{
                    display: effects.dots.display,
                    opacity: effects.dots.opacity as opacity,
                    size: effects.dots.size as SpacingToken,
                    color: effects.dots.color,
                  }}
                  grid={{
                    display: effects.grid.display,
                    opacity: effects.grid.opacity as opacity,
                    color: effects.grid.color,
                    width: effects.grid.width,
                    height: effects.grid.height,
                  }}
                  lines={{
                    display: effects.lines.display,
                    opacity: effects.lines.opacity as opacity,
                    size: effects.lines.size as SpacingToken,
                    thickness: effects.lines.thickness,
                    angle: effects.lines.angle,
                    color: effects.lines.color,
                  }}
                />
                <Flex fillWidth minHeight="16" hide="s"></Flex>
                <Header />
                <Flex
                  zIndex={0}
                  fillWidth
                  paddingY="l"
                  paddingX="l"
                  horizontal="center"
                  flex={1}
                >
                  <Flex horizontal="center" fillWidth minHeight="0">
                    <RouteGuard>{children}</RouteGuard>
                  </Flex>
                </Flex>
                <Footer />
              </Flex>
            </LanguageProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
