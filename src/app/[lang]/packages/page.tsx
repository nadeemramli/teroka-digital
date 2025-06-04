import React from "react";
import { Column, Heading, Text } from "@/once-ui/components";
import { LandingTemplate } from "@/components/templates/landing/base/LandingTemplate";
import { baseURL } from "@/app/resources";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "@/lib/i18n/types";
import { Schema } from "@/once-ui/modules";

interface PackagesPageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: PackagesPageProps) {
  const { lang } = await params;
  return generatePageMetadata("packages", lang);
}

// Teroka Digital Package Data
const terokaPackages = [
  {
    id: "try-out",
    name: "Try Out",
    price: 4450,
    description:
      "Basic marketing solutions for businesses starting their digital journey",
    features: [
      "Basic Website Development",
      "Local SEO Setup",
      "Social Media Setup",
      "Basic Content Creation",
      "Analytics Setup",
    ],
    ctaText: "Get Started",
    ctaLink: "/get-started?package=try-out",
  },
  {
    id: "growth",
    name: "Growth",
    price: 7500,
    description:
      "Comprehensive marketing package for businesses ready to scale",
    features: [
      "Advanced Website Development",
      "Full SEO Strategy",
      "Social Media Management",
      "Content Strategy & Creation",
      "Google & Facebook Ads",
      "Advanced Analytics & Reporting",
    ],
    ctaText: "Most Popular",
    ctaLink: "/get-started?package=growth",
  },
  {
    id: "partner",
    name: "Partner",
    price: 0, // Custom pricing
    description:
      "Tailored solutions for established businesses seeking full-service partnership",
    features: [
      "Custom Website Development",
      "Enterprise SEO Strategy",
      "Full Social Media Strategy",
      "Premium Content Creation",
      "Full Digital Advertising",
      "Enterprise Analytics",
      "Business Strategy Consulting",
    ],
    ctaText: "Contact Us",
    ctaLink: "/contact?package=partner",
  },
];

const targetIndustries = [
  {
    id: "dental",
    name: "Dental Clinics",
    description: "Specialized marketing for dental practices and clinics",
    image: "/images/industries/dental.jpg",
    link: "/industry/dental",
  },
  {
    id: "restaurant",
    name: "Restaurants & F&B",
    description: "Food & beverage marketing that drives foot traffic",
    image: "/images/industries/restaurant.jpg",
    link: "/industry/restaurant",
  },
  {
    id: "legal",
    name: "Law Firms",
    description: "Professional legal marketing that builds trust",
    image: "/images/industries/legal.jpg",
    link: "/industry/legal",
  },
  {
    id: "interior",
    name: "Interior Design",
    description: "Showcase your designs and attract ideal clients",
    image: "/images/industries/interior.jpg",
    link: "/industry/interior-design",
  },
  {
    id: "professional",
    name: "Professional Services",
    description: "B2B marketing for consultants and service providers",
    image: "/images/industries/professional.jpg",
    link: "/industry/professional-services",
  },
  {
    id: "retail",
    name: "Retail Business",
    description: "Drive sales and build customer loyalty",
    image: "/images/industries/retail.jpg",
    link: "/industry/retail",
  },
];

const clientTestimonials = [
  {
    id: "dental-clinic",
    name: "Dr. Ahmad Rahman",
    role: "Founder",
    company: "Rahman Dental Clinic",
    content:
      "Within 3 months, our patient inquiries increased by 60%. Teroka Digital understands traditional businesses like ours.",
    image: "/images/testimonials/ahmad.jpg",
  },
  {
    id: "restaurant-owner",
    name: "Lisa Wong",
    role: "Owner",
    company: "Wong's Family Restaurant",
    content:
      "We went from struggling to fill tables to having weekend bookings full for the next month. Their content actually works.",
    image: "/images/testimonials/lisa.jpg",
  },
  {
    id: "law-firm",
    name: "Dato' Siti Aishah",
    role: "Managing Partner",
    company: "Aishah & Associates",
    content:
      "Professional, reliable, and they deliver results. Finally, marketing that doesn't compromise our firm's reputation.",
    image: "/images/testimonials/siti.jpg",
  },
];

const businessResults = [
  {
    id: "lead-generation",
    title: "Lead Generation Success",
    description:
      "Average increase in qualified inquiries for our traditional business clients",
    metrics: [
      { label: "Increase in Inquiries", value: "65%" },
      { label: "Average Timeline", value: "90 Days" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    image: "/images/results/leads.jpg",
  },
  {
    id: "online-presence",
    title: "Professional Online Presence",
    description:
      "Transforming traditional businesses with modern digital marketing",
    metrics: [
      { label: "Websites Launched", value: "100+" },
      { label: "Industries Served", value: "15+" },
      { label: "Years Experience", value: "5+" },
    ],
    image: "/images/results/presence.jpg",
  },
];

const packageFAQs = [
  {
    id: "pricing",
    question: "How much do your services cost?",
    answer:
      "We offer three main packages: Try Out (RM4,450), Growth (RM7,500), and Partner (Custom pricing). Each package is designed to meet different business needs and budgets.",
  },
  {
    id: "timeline",
    question: "How long does it take to see results?",
    answer:
      "While some results can be seen within the first month, significant improvements typically take 3-6 months. We focus on sustainable, long-term growth rather than quick wins.",
  },
  {
    id: "process",
    question: "What is your process?",
    answer:
      "Our process starts with a thorough analysis of your business, followed by strategy development, implementation, and continuous optimization based on data and results.",
  },
  {
    id: "customization",
    question: "Can I customize the packages?",
    answer:
      "Yes, our packages can be customized to better suit your specific needs. Contact us to discuss your requirements and we'll create a tailored solution.",
  },
  {
    id: "support",
    question: "What kind of support do you provide?",
    answer:
      "We provide dedicated support through regular meetings, email, and phone. Our team is always available to address your questions and concerns.",
  },
];

export default async function PackagesPage({ params }: PackagesPageProps) {
  const { lang } = await params;

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${lang}/packages`}
        title="Marketing Packages for Traditional Businesses - Teroka Digital"
        description="Choose from our Try Out (RM4,450), Growth (RM7,500), or Partner (Custom) packages. Professional marketing solutions for Malaysian traditional businesses."
        image={`${baseURL}/og?title=${encodeURIComponent(
          "Marketing Packages - Teroka Digital"
        )}`}
      />

      <LandingTemplate
        heroTitle="Marketing Packages That Actually Work for Traditional Businesses"
        heroDescription="Stop losing customers to competitors who look more professional online. Choose the package that fits your business needs and budget."
        heroCtaText="View All Packages"
        heroCtaLink="#packages"
        heroImage="/images/hero/packages-hero.jpg"
        packages={terokaPackages}
        industries={targetIndustries}
        testimonials={clientTestimonials}
        results={businessResults}
        faqs={packageFAQs}
        ctaTitle="Ready to Dominate Your Local Market?"
        ctaDescription="Join 100+ Malaysian businesses who trust us with their growth. Pick your package and let's get started."
        ctaButtonText="Get Started Today"
        ctaButtonLink="/get-started"
      />
    </Column>
  );
}
