import React from "react";
import { Column } from "@/once-ui/components";
import { LandingTemplate } from "@/components/templates/landing/base/LandingTemplate";
import { baseURL } from "@/app/resources";
import { generatePageMetadata } from "@/app/resources/metadata";
import { SupportedLanguage } from "@/lib/i18n/types";
import { Schema } from "@/once-ui/modules";

interface DentalPageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

export async function generateMetadata({ params }: DentalPageProps) {
  const { lang } = await params;
  return {
    title:
      lang === "en"
        ? "Dental Clinic Marketing Services - Teroka Digital"
        : lang === "my"
        ? "Perkhidmatan Pemasaran Klinik Pergigian - Teroka Digital"
        : "牙科诊所营销服务 - Teroka Digital",
    description:
      lang === "en"
        ? "Specialized digital marketing for dental clinics in Malaysia. Attract more patients with professional content and local SEO."
        : lang === "my"
        ? "Pemasaran digital khusus untuk klinik pergigian di Malaysia. Tarik lebih ramai pesakit dengan kandungan profesional dan SEO tempatan."
        : "马来西亚牙科诊所专业数字营销。通过专业内容和本地SEO吸引更多患者。",
  };
}

// Dental-specific packages
const dentalPackages = [
  {
    id: "dental-starter",
    name: "Patient Starter",
    price: 4450,
    description: "Basic digital presence for new dental practices",
    features: [
      "Professional Dental Website",
      "Google My Business Optimization",
      "Basic Patient Reviews Management",
      "Social Media Setup (Facebook & Instagram)",
      "Monthly Analytics Reporting",
    ],
    ctaText: "Start Growing",
    ctaLink: "/get-started?package=dental-starter&industry=dental",
  },
  {
    id: "dental-growth",
    name: "Practice Growth",
    price: 7500,
    description: "Complete marketing solution for established dental clinics",
    features: [
      "Advanced Dental Website with Booking",
      "Local SEO & Google Ads Management",
      "Patient Review Generation System",
      "Professional Content Creation",
      "Social Media Management",
      "Email Marketing for Patients",
      "Monthly Performance Reports",
    ],
    ctaText: "Most Popular",
    ctaLink: "/get-started?package=dental-growth&industry=dental",
  },
  {
    id: "dental-premium",
    name: "Multi-Location Premium",
    price: 0, // Custom pricing
    description: "Enterprise solution for dental clinic chains",
    features: [
      "Multi-Location Website Management",
      "Advanced Local SEO Strategy",
      "Comprehensive Digital Advertising",
      "Patient Retention Programs",
      "Staff Training & Support",
      "Custom Analytics Dashboard",
      "Dedicated Account Manager",
    ],
    ctaText: "Contact Us",
    ctaLink: "/contact?package=dental-premium&industry=dental",
  },
];

// Other dental practices (for industry selector)
const relatedIndustries = [
  {
    id: "healthcare",
    name: "Healthcare Clinics",
    description: "General healthcare and specialist clinic marketing",
    image: "/images/industries/healthcare.jpg",
    link: "/industry/healthcare",
  },
  {
    id: "beauty",
    name: "Beauty & Wellness",
    description: "Aesthetic clinics and wellness center marketing",
    image: "/images/industries/beauty.jpg",
    link: "/industry/beauty",
  },
  {
    id: "veterinary",
    name: "Veterinary Clinics",
    description: "Specialized marketing for animal healthcare",
    image: "/images/industries/veterinary.jpg",
    link: "/industry/veterinary",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description: "Physical therapy and rehabilitation marketing",
    image: "/images/industries/physiotherapy.jpg",
    link: "/industry/physiotherapy",
  },
  {
    id: "pharmacy",
    name: "Pharmacies",
    description: "Retail pharmacy and healthcare marketing",
    image: "/images/industries/pharmacy.jpg",
    link: "/industry/pharmacy",
  },
  {
    id: "optometry",
    name: "Optometry Clinics",
    description: "Eye care and vision center marketing",
    image: "/images/industries/optometry.jpg",
    link: "/industry/optometry",
  },
];

// Dental client testimonials
const dentalTestimonials = [
  {
    id: "dr-ahmad",
    name: "Dr. Ahmad Rahman",
    role: "Principal Dentist",
    company: "Rahman Family Dental",
    content:
      "Within 3 months, our new patient inquiries increased by 60%. Teroka Digital understands the dental industry and what patients look for when choosing a dentist.",
    image: "/images/testimonials/dr-ahmad.jpg",
  },
  {
    id: "dr-lim",
    name: "Dr. Sarah Lim",
    role: "Dental Director",
    company: "Smile Bright Dental Clinic",
    content:
      "Our online reviews went from 3.2 to 4.8 stars, and we're now fully booked 2 weeks in advance. Their patient review system really works.",
    image: "/images/testimonials/dr-lim.jpg",
  },
  {
    id: "dr-kumar",
    name: "Dr. Raj Kumar",
    role: "Orthodontist",
    company: "Kumar Orthodontics",
    content:
      "Finally, marketing that doesn't make us look unprofessional. Our website now reflects the quality of care we provide, and patients notice the difference.",
    image: "/images/testimonials/dr-kumar.jpg",
  },
];

// Dental-specific results
const dentalResults = [
  {
    id: "patient-acquisition",
    title: "New Patient Growth",
    description:
      "Average increase in new patient inquiries for our dental clinic clients",
    metrics: [
      { label: "New Patient Increase", value: "73%" },
      { label: "Average Timeline", value: "4 Months" },
      { label: "Client Retention", value: "95%" },
    ],
    image: "/images/results/dental-growth.jpg",
  },
  {
    id: "online-reputation",
    title: "Online Reputation Management",
    description:
      "Helping dental clinics build trust through reviews and professional presence",
    metrics: [
      { label: "Average Review Rating", value: "4.7★" },
      { label: "Review Response Rate", value: "100%" },
      { label: "Online Visibility Increase", value: "85%" },
    ],
    image: "/images/results/dental-reputation.jpg",
  },
];

// Dental-specific FAQs
const dentalFAQs = [
  {
    id: "dental-timeline",
    question: "How long before we see new patients from digital marketing?",
    answer:
      "Most dental clinics see an increase in inquiries within 4-6 weeks, with significant patient growth by month 3. Local SEO and Google My Business optimization typically show faster results than social media marketing.",
  },
  {
    id: "dental-compliance",
    question: "Do you understand dental marketing regulations in Malaysia?",
    answer:
      "Yes, we ensure all marketing content complies with Malaysian Dental Council guidelines and healthcare advertising regulations. We focus on educational content and patient testimonials rather than medical claims.",
  },
  {
    id: "dental-services",
    question:
      "Can you help market specific dental services like orthodontics or implants?",
    answer:
      "Absolutely. We create targeted campaigns for specialty services, optimize for relevant local searches, and develop content that educates patients about procedures while maintaining professional standards.",
  },
  {
    id: "dental-competition",
    question: "How do you help us stand out from other dental clinics?",
    answer:
      "We focus on your unique strengths - whether it's advanced technology, gentle care approach, family-friendly environment, or specialist expertise. We help communicate what makes your practice special to potential patients.",
  },
  {
    id: "dental-budget",
    question:
      "Is digital marketing worth the investment for a small dental practice?",
    answer:
      "Yes, especially in competitive areas. One new patient typically pays for 1-2 months of marketing investment. Our dental clients average 15-25 new patients per month from our marketing efforts.",
  },
];

export default async function DentalPage({ params }: DentalPageProps) {
  const { lang } = await params;

  const content = {
    en: {
      heroTitle:
        "Stop Losing Patients to Dental Clinics with Better Online Presence",
      heroDescription:
        "Attract more patients with professional dental marketing that builds trust. We help Malaysian dental clinics grow through proven digital strategies.",
      ctaTitle: "Ready to Grow Your Dental Practice?",
      ctaDescription:
        "Join 50+ dental clinics across Malaysia who trust us to attract quality patients. Professional marketing that respects your medical expertise.",
      ctaButtonText: "Get More Patients",
    },
    my: {
      heroTitle:
        "Berhenti Kehilangan Pesakit kepada Klinik Pergigian dengan Kehadiran Online Lebih Baik",
      heroDescription:
        "Tarik lebih ramai pesakit dengan pemasaran pergigian profesional yang membina kepercayaan. Kami membantu klinik pergigian Malaysia berkembang melalui strategi digital terbukti.",
      ctaTitle: "Bersedia untuk Mengembangkan Amalan Pergigian Anda?",
      ctaDescription:
        "Sertai 50+ klinik pergigian di seluruh Malaysia yang mempercayai kami untuk menarik pesakit berkualiti. Pemasaran profesional yang menghormati kepakaran perubatan anda.",
      ctaButtonText: "Dapatkan Lebih Ramai Pesakit",
    },
    cn: {
      heroTitle: "不要再让患者流失给在线形象更好的牙科诊所",
      heroDescription:
        "通过建立信任的专业牙科营销吸引更多患者。我们帮助马来西亚牙科诊所通过经过验证的数字策略实现增长。",
      ctaTitle: "准备发展您的牙科诊所了吗？",
      ctaDescription:
        "加入马来西亚50+家信赖我们吸引优质患者的牙科诊所。尊重您医疗专业知识的专业营销。",
      ctaButtonText: "获得更多患者",
    },
  };

  const currentContent = content[lang];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${lang}/industry/dental`}
        title="Dental Clinic Marketing Services - Teroka Digital"
        description="Specialized digital marketing for dental clinics in Malaysia. Attract more patients with professional content and local SEO."
        image={`${baseURL}/og?title=${encodeURIComponent(
          "Dental Clinic Marketing - Teroka Digital"
        )}`}
      />

      <LandingTemplate
        heroTitle={currentContent.heroTitle}
        heroDescription={currentContent.heroDescription}
        heroCtaText="View Dental Packages"
        heroCtaLink="#packages"
        heroImage="/images/hero/dental-hero.jpg"
        packages={dentalPackages}
        industries={relatedIndustries}
        testimonials={dentalTestimonials}
        results={dentalResults}
        faqs={dentalFAQs}
        ctaTitle={currentContent.ctaTitle}
        ctaDescription={currentContent.ctaDescription}
        ctaButtonText={currentContent.ctaButtonText}
        ctaButtonLink="/get-started?industry=dental"
      />
    </Column>
  );
}
