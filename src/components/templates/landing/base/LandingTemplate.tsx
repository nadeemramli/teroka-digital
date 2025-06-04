import { Flex } from "@/once-ui/components";
import { HeroSection } from "./sections/HeroSection";
import { PackageOverview } from "./sections/PackageOverview";
import { IndustrySelector } from "./sections/IndustrySelector";
import { SocialProof } from "./sections/SocialProof";
import { ResultsShowcase } from "./sections/ResultsShowcase";
import { FAQSection } from "./sections/FAQSection";
import { CallToAction } from "./sections/CallToAction";
import styles from "./LandingTemplate.module.scss";

interface LandingTemplateProps {
  // Hero Section
  heroTitle: string;
  heroDescription: string;
  heroCtaText: string;
  heroCtaLink: string;
  heroImage?: string;

  // Package Overview
  packages: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
  }>;

  // Industry Selector
  industries: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
  }>;

  // Social Proof
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
  }>;

  // Results Showcase
  results: Array<{
    id: string;
    title: string;
    description: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
    image?: string;
  }>;

  // FAQ Section
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;

  // Call to Action
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

export const LandingTemplate: React.FC<LandingTemplateProps> = ({
  heroTitle,
  heroDescription,
  heroCtaText,
  heroCtaLink,
  heroImage,
  packages,
  industries,
  testimonials,
  results,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
}) => {
  return (
    <Flex
      as="main"
      direction="column"
      className={styles.landingTemplate}
      role="main"
    >
      {/* Hero Section */}
      <HeroSection image={heroImage} />

      {/* Package Overview */}
      <PackageOverview packages={packages} />

      {/* Industry Selector */}
      <IndustrySelector industries={industries} />

      {/* Social Proof */}
      <SocialProof testimonials={testimonials} />

      {/* Results Showcase */}
      <ResultsShowcase results={results} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Call to Action */}
      <CallToAction
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
        buttonLink={ctaButtonLink}
      />
    </Flex>
  );
};
