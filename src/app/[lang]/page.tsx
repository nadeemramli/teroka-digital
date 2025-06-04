import React from "react";
import { Column } from "@/once-ui/components";
import { LandingTemplate } from "@/components/templates/landing/base/LandingTemplate";
import { baseURL, routes } from "@/app/resources";
import { Schema } from "@/once-ui/modules";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "@/lib/i18n/types";

interface HomePageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { lang } = await params;
  return generatePageMetadata("home", lang);
}

// Teroka Digital's core packages
const terokaPackages = [
  {
    id: "try-out",
    name: "Try Out",
    price: 4450,
    description:
      "Perfect for skeptical business owners - test drive success with low risk",
    features: [
      "Professional Website Development",
      "Local SEO Setup & Optimization",
      "Google My Business Management",
      "Social Media Presence Setup",
      "Basic Content Creation",
      "Monthly Analytics Reports",
    ],
    ctaText: "Start Here",
    ctaLink: "/get-started?package=try-out",
  },
  {
    id: "growth",
    name: "Growth",
    price: 7500,
    description:
      "Complete marketing solution - everything traditional businesses need without complexity",
    features: [
      "Advanced Website with Booking System",
      "Complete SEO Strategy & Management",
      "Social Media Management & Content",
      "Google & Facebook Ads Management",
      "Content Strategy & Regular Creation",
      "Email Marketing & Customer Retention",
      "Comprehensive Analytics & Reporting",
      "Monthly Strategy Consultations",
    ],
    ctaText: "Most Popular",
    ctaLink: "/get-started?package=growth",
  },
  {
    id: "partner",
    name: "Partner",
    price: 0, // Custom pricing
    description:
      "Strategic partnership for established businesses ready to dominate their market",
    features: [
      "Enterprise Website Development",
      "Advanced Multi-Location SEO",
      "Complete Digital Strategy & Execution",
      "Custom Content & Brand Development",
      "Advanced Analytics & Insights",
      "Dedicated Account Management",
      "Business Strategy Consulting",
      "Staff Training & Support",
    ],
    ctaText: "Let's Talk",
    ctaLink: "/contact?package=partner",
  },
];

// Target industries for Teroka Digital
const targetIndustries = [
  {
    id: "dental",
    name: "Dental Clinics",
    description:
      "Attract more patients with professional dental marketing that builds trust",
    image: "/images/industries/dental.jpg",
    link: "/industry/dental",
  },
  {
    id: "restaurant",
    name: "Restaurants & F&B",
    description:
      "Fill more tables with food marketing that drives foot traffic and online orders",
    image: "/images/industries/restaurant.jpg",
    link: "/industry/restaurant",
  },
  {
    id: "legal",
    name: "Law Firms & Legal",
    description:
      "Professional legal marketing that builds authority and attracts quality clients",
    image: "/images/industries/legal.jpg",
    link: "/industry/legal",
  },
  {
    id: "interior",
    name: "Interior Design",
    description:
      "Showcase your designs and attract ideal clients with stunning visual marketing",
    image: "/images/industries/interior.jpg",
    link: "/industry/interior-design",
  },
  {
    id: "professional",
    name: "Professional Services",
    description: "B2B marketing that positions you as the expert in your field",
    image: "/images/industries/professional.jpg",
    link: "/industry/professional-services",
  },
  {
    id: "retail",
    name: "Retail Business",
    description:
      "Drive sales and build customer loyalty with retail-focused marketing strategies",
    image: "/images/industries/retail.jpg",
    link: "/industry/retail",
  },
];

// Client success stories and testimonials
const clientTestimonials = [
  {
    id: "ahmad-dental",
    name: "Dr. Ahmad Rahman",
    role: "Dental Clinic Owner",
    company: "Rahman Family Dental",
    content:
      "Within 3 months, our patient inquiries increased by 60%. Teroka Digital understands traditional businesses like ours and what actually works.",
    image: "/images/testimonials/ahmad.jpg",
  },
  {
    id: "lisa-restaurant",
    name: "Lisa Wong",
    role: "Restaurant Owner",
    company: "Wong's Family Restaurant",
    content:
      "We went from struggling to fill tables to having weekend bookings full for the next month. Their marketing actually brings customers through the door.",
    image: "/images/testimonials/lisa.jpg",
  },
  {
    id: "siti-legal",
    name: "Dato' Siti Aishah",
    role: "Managing Partner",
    company: "Aishah & Associates",
    content:
      "Finally, marketing that doesn't compromise our firm's reputation. Professional, reliable, and they deliver results that matter to law firms.",
    image: "/images/testimonials/siti.jpg",
  },
];

// Business results showcase
const businessResults = [
  {
    id: "lead-generation",
    title: "More Customers, Guaranteed",
    description:
      "Average increase in qualified inquiries for traditional businesses working with us",
    metrics: [
      { label: "Average Lead Increase", value: "65%" },
      { label: "Timeline to Results", value: "90 Days" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    image: "/images/results/leads.jpg",
  },
  {
    id: "professional-presence",
    title: "Professional Online Presence",
    description:
      "We've helped 100+ traditional Malaysian businesses look as professional online as they are in person",
    metrics: [
      { label: "Businesses Transformed", value: "100+" },
      { label: "Industries Served", value: "15+" },
      { label: "Years of Experience", value: "5+" },
    ],
    image: "/images/results/presence.jpg",
  },
];

// Frequently asked questions
const businessFAQs = [
  {
    id: "different",
    question: "How are you different from other marketing agencies?",
    answer:
      "We specialize in traditional businesses, not trendy startups. We understand your challenges, speak your language, and focus on results that matter to established business owners - more customers and predictable growth.",
  },
  {
    id: "results",
    question: "How quickly will I see results?",
    answer:
      "Most clients see increased inquiries within 4-6 weeks, with significant growth by month 3. We focus on sustainable, long-term results rather than quick wins that don't last.",
  },
  {
    id: "pricing",
    question: "Why should I pay for marketing when I can do it myself?",
    answer:
      "You're great at running your business - marketing is ours. While you focus on serving customers, we handle the complexity of digital marketing. One new customer typically pays for months of our service.",
  },
  {
    id: "local",
    question: "Do you understand the Malaysian market?",
    answer:
      "Absolutely. We're Malaysian-based and understand local culture, behavior, and what converts here. All our case studies and success stories are from Malaysian businesses like yours.",
  },
  {
    id: "commitment",
    question: "Do I need to sign a long-term contract?",
    answer:
      "We prefer month-to-month arrangements because we believe our results should speak for themselves. Most clients stay because the marketing works, not because they're locked into contracts.",
  },
];

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  // Multi-language content
  const content = {
    en: {
      heroTitle:
        "Stop Losing Customers to Competitors Who Look More Professional Online",
      heroDescription:
        "We turn traditional business owners into marketing winners with done-for-you content and creative that actually converts - without the overhead of a full marketing team.",
      ctaTitle: "Ready to Dominate Your Local Market?",
      ctaDescription:
        "Join 100+ Malaysian businesses who trust us with their growth. Professional marketing that works while you focus on what you do best.",
      ctaButtonText: "Get Started Today",
    },
    my: {
      heroTitle:
        "Berhenti Kehilangan Pelanggan kepada Pesaing yang Kelihatan Lebih Profesional Online",
      heroDescription:
        "Kami menjadikan pemilik perniagaan tradisional sebagai pemenang pemasaran dengan kandungan dan kreatif siap guna yang benar-benar bertukar - tanpa overhed pasukan pemasaran penuh.",
      ctaTitle: "Bersedia untuk Menguasai Pasaran Tempatan Anda?",
      ctaDescription:
        "Sertai 100+ perniagaan Malaysia yang mempercayai kami dengan pertumbuhan mereka. Pemasaran profesional yang berfungsi semasa anda fokus pada apa yang anda lakukan terbaik.",
      ctaButtonText: "Mulakan Hari Ini",
    },
    cn: {
      heroTitle: "不要再让客户流失给看起来更专业的在线竞争对手",
      heroDescription:
        "我们通过实际转换的现成内容和创意，将传统企业主变成营销赢家 - 无需完整营销团队的开销。",
      ctaTitle: "准备主导您的本地市场了吗？",
      ctaDescription:
        "加入100+信任我们促进其增长的马来西亚企业。专业营销在您专注于最擅长的事情时有效运作。",
      ctaButtonText: "今天开始",
    },
  };

  const currentContent = content[lang];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${lang}`}
        title="Digital Marketing for Traditional Businesses - Teroka Digital"
        description={currentContent.heroDescription}
        image={`${baseURL}/og?title=${encodeURIComponent(
          "Teroka Digital - Marketing for Traditional Businesses"
        )}`}
      />

      <LandingTemplate
        heroTitle={currentContent.heroTitle}
        heroDescription={currentContent.heroDescription}
        heroCtaText="View Our Packages"
        heroCtaLink="/packages"
        heroImage="/images/hero/traditional-business-hero.jpg"
        packages={terokaPackages}
        industries={targetIndustries}
        testimonials={clientTestimonials}
        results={businessResults}
        faqs={businessFAQs}
        ctaTitle={currentContent.ctaTitle}
        ctaDescription={currentContent.ctaDescription}
        ctaButtonText={currentContent.ctaButtonText}
        ctaButtonLink="/get-started"
      />
    </Column>
  );
}
