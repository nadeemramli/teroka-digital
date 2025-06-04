import { Column, Heading, Text, Button, Flex } from "@/once-ui/components";
import React from "react";

interface ServiceTemplateProps {
  // Service Hero
  serviceName: string;
  serviceDescription: string;
  mainBenefit: string;
  heroCtaText: string;
  heroCtaLink: string;
  heroImage?: string;

  // Process Breakdown
  processSteps: Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    deliverables: string[];
  }>;

  // Service Benefits
  benefits: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;

  // Pricing Section
  pricing: {
    startingPrice: number;
    priceDescription: string;
    whatsIncluded: string[];
    packageOptions?: Array<{
      name: string;
      price: number;
      description: string;
      features: string[];
    }>;
  };

  // Service Testimonials
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
    results?: string;
  }>;

  // FAQ
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;

  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  serviceName,
  serviceDescription,
  mainBenefit,
  heroCtaText,
  heroCtaLink,
  heroImage,
  processSteps,
  benefits,
  pricing,
  testimonials,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
}) => {
  return (
    <Column as="main" role="main" gap="xl" paddingY="xl">
      {/* Service Hero - Simplified Version */}
      <Column gap="l" paddingY="xl" maxWidth="m" horizontal="center">
        <Heading variant="display-strong-l" wrap="balance">
          {serviceName}
        </Heading>
        <Text variant="heading-default-xl" wrap="balance">
          {serviceDescription}
        </Text>
        <Text variant="body-default-l" wrap="balance">
          {mainBenefit}
        </Text>
        <Button variant="primary" size="l" href={heroCtaLink} arrowIcon>
          {heroCtaText}
        </Button>
      </Column>

      {/* Process Breakdown - Simplified Version */}
      <Column gap="l" paddingY="xl">
        <Heading variant="display-strong-m" align="center">
          Our Process
        </Heading>
        <Flex gap="l" wrap>
          {processSteps.map((step, index) => (
            <Column key={step.id} gap="s" flex="1">
              <Heading variant="heading-strong-l">
                {index + 1}. {step.title}
              </Heading>
              <Text variant="body-default-m">{step.description}</Text>
              <Text variant="label-default-s" color="accent">
                Duration: {step.duration}
              </Text>
            </Column>
          ))}
        </Flex>
      </Column>

      {/* Service Benefits - Simplified Version */}
      <Column gap="l" paddingY="xl">
        <Heading variant="display-strong-m" align="center">
          Benefits
        </Heading>
        <Flex gap="l" wrap>
          {benefits.map((benefit) => (
            <Column key={benefit.id} gap="s" flex="1">
              <Heading variant="heading-strong-l">{benefit.title}</Heading>
              <Text variant="body-default-m">{benefit.description}</Text>
            </Column>
          ))}
        </Flex>
      </Column>

      {/* Pricing Section - Simplified Version */}
      <Column gap="l" paddingY="xl">
        <Heading variant="display-strong-m" align="center">
          Pricing
        </Heading>
        <Column gap="m" maxWidth="s" horizontal="center">
          <Heading variant="heading-strong-xl">
            Starting from RM{pricing.startingPrice.toLocaleString()}
          </Heading>
          <Text variant="body-default-l" align="center">
            {pricing.priceDescription}
          </Text>
          <Column gap="s">
            {pricing.whatsIncluded.map((item, index) => (
              <Text key={index} variant="body-default-m">
                ✓ {item}
              </Text>
            ))}
          </Column>
        </Column>
      </Column>

      {/* Service Testimonials - Simplified Version */}
      {testimonials.length > 0 && (
        <Column gap="l" paddingY="xl">
          <Heading variant="display-strong-m" align="center">
            What Our Clients Say
          </Heading>
          <Flex gap="l" wrap>
            {testimonials.map((testimonial) => (
              <Column
                key={testimonial.id}
                gap="s"
                flex="1"
                padding="l"
                background="surface"
              >
                <Text variant="body-default-m" style={{ fontStyle: "italic" }}>
                  &ldquo;{testimonial.content}&rdquo;
                </Text>
                <Column gap="xs">
                  <Text variant="label-default-m" weight="strong">
                    {testimonial.name}
                  </Text>
                  <Text variant="label-default-s" color="accent">
                    {testimonial.role}, {testimonial.company}
                  </Text>
                </Column>
              </Column>
            ))}
          </Flex>
        </Column>
      )}

      {/* FAQ Section - Simplified Version */}
      {faqs.length > 0 && (
        <Column gap="l" paddingY="xl">
          <Heading variant="display-strong-m" align="center">
            Frequently Asked Questions
          </Heading>
          <Column gap="m" maxWidth="m" horizontal="center">
            {faqs.map((faq) => (
              <Column key={faq.id} gap="s" padding="l" background="surface">
                <Heading variant="heading-strong-m">{faq.question}</Heading>
                <Text variant="body-default-m">{faq.answer}</Text>
              </Column>
            ))}
          </Column>
        </Column>
      )}

      {/* Get Started CTA - Simplified Version */}
      <Column gap="l" paddingY="xl" align="center">
        <Heading variant="display-strong-m" align="center">
          {ctaTitle}
        </Heading>
        <Text variant="body-default-l" align="center">
          {ctaDescription}
        </Text>
        <Button variant="primary" size="l" href={ctaButtonLink} arrowIcon>
          {ctaButtonText}
        </Button>
      </Column>
    </Column>
  );
};
