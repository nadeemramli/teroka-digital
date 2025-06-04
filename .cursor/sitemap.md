# Teroka Digital Sitemap

```mermaid
graph TD
    %% Root
    Root[Teroka Digital] --> Home[Homepage /]
    Root --> Packages[Packages /packages]
    Root --> About[About /about]
    Root --> Contact[Contact /contact]
    Root --> GetStarted[Get Started /get-started]
    Root --> CaseStudies[Case Studies /case-studies]
    Root --> Blog[Blog /blog]

    %% Industry Pages
    Root --> Industries[Industries]
    Industries --> Dental[Dental /industry/dental]
    Industries --> Restaurant[Restaurant /industry/restaurant]
    Industries --> Legal[Legal /industry/legal]
    Industries --> InteriorDesign[Interior Design /industry/interior-design]
    Industries --> ProfessionalServices[Professional Services /industry/professional-services]
    Industries --> Retail[Retail /industry/retail]

    %% Location Pages
    Root --> Locations[Locations]
    Locations --> KL[Kuala Lumpur /location/kuala-lumpur]
    Locations --> Selangor[Selangor /location/selangor]
    Locations --> Johor[Johor /location/johor]
    Locations --> Penang[Penang /location/penang]
    Locations --> Melaka[Melaka /location/melaka]
    Locations --> Sabah[Sabah /location/sabah]
    Locations --> Sarawak[Sarawak /location/sarawak]

    %% Service Pages
    Root --> Services[Services]
    Services --> WebsiteDev[Website Development /services/website-development]
    Services --> AdsManagement[Ads Management /services/ads-management]
    Services --> CreativeStrategy[Creative Strategy /services/creative-strategy]
    Services --> ContentBranding[Content Branding /services/content-branding]
    Services --> ClientExperience[Client Experience /client-experience]

    %% Resources
    Root --> Resources[Resources]
    Resources --> MarketingAudit[Marketing Audit /resources/marketing-audit]
    Resources --> MarketingMistakes[5 Marketing Mistakes /resources/marketing-mistakes]
    Resources --> Templates[Industry Templates /resources/templates]
    Resources --> LocalSEO[Local SEO Checklist /resources/local-seo]
    Resources --> ContentCalendar[Content Calendar /resources/content-calendar]
    Resources --> ROICalculator[ROI Calculator /resources/roi-calculator]

    %% Legal Pages
    Root --> LegalPages[Legal]
    LegalPages --> Privacy[Privacy Policy /privacy]
    LegalPages --> Terms[Terms of Service /terms]
    LegalPages --> Refund[Refund Policy /refund]
    LegalPages --> Cookies[Cookie Policy /cookies]

    %% Utility Pages
    Root --> UtilityPages[Utility]
    UtilityPages --> ThankYou[Thank You /thank-you]
    UtilityPages --> NotFound[404 /404]
    UtilityPages --> SitemapXML[Sitemap /sitemap.xml]

    %% Language Variations
    Home --> HomeEN[/en]
    Home --> HomeMY[/my]
    Home --> HomeCN[/cn]

    %% Styling
    classDef priority1 fill:#f9f,stroke:#333,stroke-width:2px
    classDef priority2 fill:#bbf,stroke:#333,stroke-width:2px
    classDef priority3 fill:#bfb,stroke:#333,stroke-width:2px

    %% Priority Classes
    class Home,Packages,About,Contact,GetStarted,CaseStudies,Blog,Industries,Locations,Services,LegalPages priority1
    class Resources priority2
    class UtilityPages priority3
```

## Page Templates by Category

### Landing Pages (Template: 'landing')
- Homepage (/)
- Industry Pages (/industry/*)
- Location Pages (/location/*)
- Packages Page (/packages)

### Service Pages (Template: 'service')
- Website Development (/services/website-development)
- Ads Management (/services/ads-management)
- Creative Strategy (/services/creative-strategy)
- Content Branding (/services/content-branding)
- Client Experience (/client-experience)

### Resource Pages (Template: 'resource')
- Blog (/blog)
- Marketing Audit (/resources/marketing-audit)
- Marketing Mistakes Guide (/resources/marketing-mistakes)
- Industry Templates (/resources/templates)
- Local SEO Checklist (/resources/local-seo)
- Content Calendar (/resources/content-calendar)
- ROI Calculator (/resources/roi-calculator)

### Utility Pages (Template: 'utility')
- About (/about)
- Contact (/contact)
- Get Started (/get-started)
- Case Studies (/case-studies)
- Legal Pages (/privacy, /terms, /refund, /cookies)
- Thank You Pages (/thank-you/*)
- 404 Page (/404)

## Development Priority

1. **Priority 1 (Weeks 1-4)**
   - Homepage
   - Packages Page
   - About Page
   - Contact Page
   - Get Started Page
   - Case Studies
   - Blog
   - Industry Pages
   - Location Pages
   - Legal Pages

2. **Priority 2 (Weeks 5-8)**
   - Service Pages
   - Resources Library
   - Marketing Audit
   - Marketing Mistakes Guide
   - Industry Templates
   - Local SEO Checklist

3. **Priority 3 (Weeks 9-12)**
   - Content Calendar
   - ROI Calculator
   - Thank You Pages
   - 404 Page
   - Sitemap

## Template Components

Each page template includes:

1. **Base Components**
   - Header
   - Footer
   - Navigation
   - Language Switcher
   - Cookie Notice

2. **Section Components**
   - Hero
   - Features
   - Pricing
   - Contact
   - Testimonials
   - FAQ
   - CTA

3. **Page-Specific Components**
   - Industry Selector
   - Location Map
   - Package Comparison
   - Case Study Showcase
   - Resource Download
   - Contact Form
   - ROI Calculator 