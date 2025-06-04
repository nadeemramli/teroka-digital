import { home, about, blog, work, gallery } from "./content";
import { baseURL } from "./config";
import { SupportedLanguage } from "../[lang]/layout";

// Language-specific metadata for each page
export const pageMetadata = {
  home: {
    en: {
      title: home.title,
      description: home.description,
      ogTitle: "Teroka Digital - Digital Marketing Solutions for Traditional Businesses",
      ogDescription: "Transform your traditional business with our effective digital marketing solutions in Malaysia.",
      twitterTitle: "Teroka Digital - Digital Marketing Solutions",
      twitterDescription: "Transform your traditional business with our effective digital marketing solutions.",
    },
    my: {
      title: "Teroka Digital - Perkhidmatan Pemasaran Digital untuk Perniagaan Tradisional",
      description: "Kami membantu perniagaan tradisional di Malaysia berkembang dengan penyelesaian pemasaran digital yang berkesan.",
      ogTitle: "Teroka Digital - Penyelesaian Pemasaran Digital untuk Perniagaan Tradisional",
      ogDescription: "Transformasi perniagaan tradisional anda dengan penyelesaian pemasaran digital kami yang berkesan di Malaysia.",
      twitterTitle: "Teroka Digital - Penyelesaian Pemasaran Digital",
      twitterDescription: "Transformasi perniagaan tradisional anda dengan penyelesaian pemasaran digital kami yang berkesan.",
    },
    cn: {
      title: "Teroka Digital - 传统企业的数字营销服务",
      description: "我们帮助马来西亚的传统企业通过有效的数字营销解决方案实现增长。",
      ogTitle: "Teroka Digital - 传统企业的数字营销解决方案",
      ogDescription: "通过我们在马来西亚的有效数字营销解决方案，助力您的传统企业转型。",
      twitterTitle: "Teroka Digital - 数字营销解决方案",
      twitterDescription: "通过我们有效的数字营销解决方案，助力您的传统企业转型。",
    },
  },
  about: {
    en: {
      title: about.title,
      description: about.description,
      ogTitle: "About Teroka Digital - Digital Marketing Agency in Malaysia",
      ogDescription: "Learn about our mission to help traditional businesses thrive in the digital age.",
      twitterTitle: "About Teroka Digital",
      twitterDescription: "Learn about our mission to help traditional businesses thrive in the digital age.",
    },
    my: {
      title: "Tentang Teroka Digital - Agensi Pemasaran Digital di Malaysia",
      description: "Ketahui tentang misi kami untuk membantu perniagaan tradisional berkembang dalam era digital.",
      ogTitle: "Tentang Teroka Digital - Agensi Pemasaran Digital di Malaysia",
      ogDescription: "Ketahui tentang misi kami untuk membantu perniagaan tradisional berkembang dalam era digital.",
      twitterTitle: "Tentang Teroka Digital",
      twitterDescription: "Ketahui tentang misi kami untuk membantu perniagaan tradisional berkembang dalam era digital.",
    },
    cn: {
      title: "关于 Teroka Digital - 马来西亚数字营销机构",
      description: "了解我们帮助传统企业在数字时代蓬勃发展的使命。",
      ogTitle: "关于 Teroka Digital - 马来西亚数字营销机构",
      ogDescription: "了解我们帮助传统企业在数字时代蓬勃发展的使命。",
      twitterTitle: "关于 Teroka Digital",
      twitterDescription: "了解我们帮助传统企业在数字时代蓬勃发展的使命。",
    },
  },
  blog: {
    en: {
      title: blog.title,
      description: blog.description,
      ogTitle: "Teroka Digital Blog - Digital Marketing Insights",
      ogDescription: "Latest insights and tips on digital marketing for traditional businesses in Malaysia.",
      twitterTitle: "Teroka Digital Blog",
      twitterDescription: "Latest insights and tips on digital marketing for traditional businesses.",
    },
    my: {
      title: "Blog Teroka Digital - Pandangan Pemasaran Digital",
      description: "Pandangan dan petua terkini tentang pemasaran digital untuk perniagaan tradisional di Malaysia.",
      ogTitle: "Blog Teroka Digital - Pandangan Pemasaran Digital",
      ogDescription: "Pandangan dan petua terkini tentang pemasaran digital untuk perniagaan tradisional di Malaysia.",
      twitterTitle: "Blog Teroka Digital",
      twitterDescription: "Pandangan dan petua terkini tentang pemasaran digital untuk perniagaan tradisional.",
    },
    cn: {
      title: "Teroka Digital 博客 - 数字营销见解",
      description: "马来西亚传统企业数字营销的最新见解和技巧。",
      ogTitle: "Teroka Digital 博客 - 数字营销见解",
      ogDescription: "马来西亚传统企业数字营销的最新见解和技巧。",
      twitterTitle: "Teroka Digital 博客",
      twitterDescription: "传统企业数字营销的最新见解和技巧。",
    },
  },
  work: {
    en: {
      title: work.title,
      description: work.description,
      ogTitle: "Our Work - Teroka Digital Case Studies",
      ogDescription: "Explore our successful digital marketing campaigns for traditional businesses in Malaysia.",
      twitterTitle: "Our Work - Teroka Digital",
      twitterDescription: "Explore our successful digital marketing campaigns for traditional businesses.",
    },
    my: {
      title: "Kerja Kami - Kajian Kes Teroka Digital",
      description: "Terokai kempen pemasaran digital kami yang berjaya untuk perniagaan tradisional di Malaysia.",
      ogTitle: "Kerja Kami - Kajian Kes Teroka Digital",
      ogDescription: "Terokai kempen pemasaran digital kami yang berjaya untuk perniagaan tradisional di Malaysia.",
      twitterTitle: "Kerja Kami - Teroka Digital",
      twitterDescription: "Terokai kempen pemasaran digital kami yang berjaya untuk perniagaan tradisional.",
    },
    cn: {
      title: "我们的作品 - Teroka Digital 案例研究",
      description: "探索我们为马来西亚传统企业打造的成功数字营销活动。",
      ogTitle: "我们的作品 - Teroka Digital 案例研究",
      ogDescription: "探索我们为马来西亚传统企业打造的成功数字营销活动。",
      twitterTitle: "我们的作品 - Teroka Digital",
      twitterDescription: "探索我们为传统企业打造的成功数字营销活动。",
    },
  },
  gallery: {
    en: {
      title: gallery.title,
      description: gallery.description,
      ogTitle: "Gallery - Teroka Digital Portfolio",
      ogDescription: "View our portfolio of digital marketing work for traditional businesses in Malaysia.",
      twitterTitle: "Gallery - Teroka Digital",
      twitterDescription: "View our portfolio of digital marketing work for traditional businesses.",
    },
    my: {
      title: "Galeri - Portfolio Teroka Digital",
      description: "Lihat portfolio kerja pemasaran digital kami untuk perniagaan tradisional di Malaysia.",
      ogTitle: "Galeri - Portfolio Teroka Digital",
      ogDescription: "Lihat portfolio kerja pemasaran digital kami untuk perniagaan tradisional di Malaysia.",
      twitterTitle: "Galeri - Teroka Digital",
      twitterDescription: "Lihat portfolio kerja pemasaran digital kami untuk perniagaan tradisional.",
    },
    cn: {
      title: "作品集 - Teroka Digital 作品展示",
      description: "查看我们为马来西亚传统企业打造的数字营销作品集。",
      ogTitle: "作品集 - Teroka Digital 作品展示",
      ogDescription: "查看我们为马来西亚传统企业打造的数字营销作品集。",
      twitterTitle: "作品集 - Teroka Digital",
      twitterDescription: "查看我们为传统企业打造的数字营销作品集。",
    },
  },
} as const;

// Helper function to generate metadata for a page
export function generatePageMetadata(page: keyof typeof pageMetadata, lang: SupportedLanguage) {
  const metadata = pageMetadata[page][lang];
  const path = {
    home: "/",
    about: "/about",
    blog: "/blog",
    work: "/work",
    gallery: "/gallery",
  }[page];

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      url: `https://${baseURL}${path}`,
      siteName: "Teroka Digital",
      locale: lang === "en" ? "en_US" : lang === "my" ? "ms_MY" : "zh_CN",
      type: "website",
      images: [
        {
          url: `https://${baseURL}/og?title=${encodeURIComponent(metadata.ogTitle)}`,
          width: 1200,
          height: 630,
          alt: metadata.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.twitterTitle,
      description: metadata.twitterDescription,
      images: [`https://${baseURL}/og?title=${encodeURIComponent(metadata.twitterTitle)}`],
    },
    alternates: {
      canonical: `https://${baseURL}${path}`,
      languages: {
        "en-US": `https://${baseURL}${path}`,
        "ms-MY": `https://${baseURL}/my${path}`,
        "zh-CN": `https://${baseURL}/cn${path}`,
      },
    },
  };
} 