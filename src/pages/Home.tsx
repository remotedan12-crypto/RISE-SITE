import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import {
  Building2,
  Home as HomeIcon,
  Users,
  ArrowRight,
  Phone,
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  Target,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rise and Shine Cleaning Services",
    "url": "https://riseandshinecs.com",
    "telephone": "+1-719-654-5761",
    "email": "Booking.riseandshine@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Colorado",
      "addressCountry": "US"
    },
    "serviceArea": [
      {
        "@type": "State",
        "name": "Colorado"
      },
      {
        "@type": "State",
        "name": "Texas"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Cleaning",
            "description": "Recurring weekly, biweekly, and monthly home cleaning for homeowners."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "description": "Office, retail, and facility cleaning for businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move-Out & Turnover Cleaning",
            "description": "Fast property turnover cleaning for property managers and realtors."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning",
            "description": "Thorough deep cleaning for homes and commercial spaces."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:30"
    },
    "sameAs": [
      "https://www.facebook.com/share/1D8KA2zHPQ/",
      "https://www.instagram.com/serviceriseshinecleaning"
    ],
    "image": "https://riseandshinecs.com/favicon.ico",
    "description": "Rise and Shine Cleaning Services provides professional residential, commercial, and property turnover cleaning across Texas and Colorado. Licensed, insured, and vendor-ready.",
    "priceRange": "$$"
  };

  const faqs = [
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and carry comprehensive liability insurance as well as worker's compensation coverage. We can provide certificates of insurance upon request and meet all standard vendor requirements for property management companies.",
    },
    {
      question: "Do you meet property management vendor requirements?",
      answer: "Absolutely. We're vendor-ready with all necessary documentation including insurance certificates, W-9 forms, and we're familiar with major property management software systems. We can integrate seamlessly with your existing workflows.",
    },
    {
      question: "How fast can you complete a turnover?",
      answer: "Most standard unit turnovers are completed within 24-48 hours. For larger properties or deep cleaning requirements, we can provide accurate timelines during the quote process. We understand vacancy costs money and prioritize speed without sacrificing quality.",
    },
    {
      question: "Do you service multiple units or portfolios?",
      answer: "Yes, we specialize in working with property managers who have multiple units. We offer portfolio pricing, dedicated scheduling, and can handle simultaneous turnovers across different properties. Volume discounts are available.",
    },
    {
      question: "Do you work in both Texas and Colorado?",
      answer: "Yes, we proudly serve properties across Texas and Colorado. Our multi-state coverage means you can rely on one consistent vendor for all your properties, regardless of location within these states.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  const cleaningServices = [
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description:
        "Reliable cleaning for offices, schools, restaurants, dealerships, churches, and commercial spaces with flexible scheduling.",
    },
    {
      icon: HomeIcon,
      title: "Recurring Residential Cleaning",
      description:
        "Weekly, biweekly, and monthly home cleaning designed to keep your space consistently clean and stress-free.",
    },
    {
      icon: Sparkles,
      title: "Move-Out & Turnover Cleaning",
      description:
        "Fast, detailed property turnover cleaning for property managers, realtors, and rental units.",
    },
  ];


  const whoWeAre = [
    {
      icon: Target,
      title: "Operations-Driven",
      description:
        "We operate like a logistics partner — not just cleaners — structured around schedules and SLAs.",
    },
    {
      icon: Users,
      title: "Trained Teams",
      description:
        "Checklist-driven staff trained specifically for property turnovers and leasing expectations.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Vendor Partner",
      description:
        "Fully insured, vendor-ready, and experienced with professional property workflows.",
    },
  ];
  const industries = [
    {
      icon: HomeIcon,
      title: "Homeowners & Families",
      description:
        "Recurring residential cleaning that keeps your home fresh, organized, and stress-free.",
      link: "/residential-cleaning",
    },
    {
      icon: Building2,
      title: "Businesses & Commercial Spaces",
      description:
        "Flexible commercial cleaning for offices, schools, restaurants, dealerships, and more.",
      link: "/commercial-cleaning",
    },
    {
      icon: Users,
      title: "Property Managers & Realtors",
      description:
        "Fast and reliable turnover cleaning for rental units, listings, and property portfolios.",
      link: "/turnover-cleaning",
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Professional Cleaning Services Texas & Colorado | Rise & Shine"
        description="Rise & Shine provides expert residential, commercial, and move-out cleaning in Texas and Colorado. Licensed, insured, and vendor-ready for property managers."
        canonicalUrl="https://riseandshinecs.com/"
        schema={[localBusinessSchema, faqSchema]}
      />
      <HeroSection />
      {/* Who We Serve – Industry-Focused Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-[1.3fr_minmax(0,1.2fr)] gap-12 items-start">
          {/* Copy / Positioning */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Cleaning for Homes & Businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Rise & Shine provides reliable residential, commercial, and property turnover cleaning designed to keep homes comfortable and businesses running smoothly. From recurring home cleaning to commercial facilities and real estate turnovers, we deliver consistent, high-quality results.

            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  1
                </span>
                <p>
                  <span className="font-semibold text-foreground">
                    Portfolio-ready vendor:
                  </span>{" "}
                  documentation, insurance, and W‑9s prepared for procurement and
                  onboarding.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  2
                </span>
                <p>
                  <span className="font-semibold text-foreground">
                    Turnover-first mindset:
                  </span>{" "}
                  scheduling optimized around move‑out / move‑in windows to
                  reduce vacancy days.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  3
                </span>
                <p>
                  <span className="font-semibold text-foreground">
                    Consistent field execution:
                  </span>{" "}
                  checklist‑driven teams and documented quality control on every
                  unit.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {industries.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="card-elevated p-6 group h-full flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  View details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* What Cleaning We Do */}
      <section className="section-padding bg-secondary/20 border-t border-border/30">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Residential, Commercial & Property Cleaning Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Our cleaning services are designed specifically for property managers,
              leasing teams, and real estate professionals who need consistent,
              high-quality execution across every unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cleaningServices.map((service, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Professional Cleaning Partner Built for Scale
            </h2>
            <p className="text-muted-foreground text-lg">
              Rise & Shine was built to support modern property operations. We focus
              on speed, reliability, and consistent execution so your teams can keep
              units moving without delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoWeAre.map((item, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Operational metrics */}
      <section className="py-16 bg-secondary/40 border-y border-border/40">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "24–48 hrs", label: "Average Turnaround", helper: "From move‑out to market‑ready" },
              { value: "2 States", label: "Active Regions", helper: "Texas & Colorado coverage" },
              { value: "100%", label: "Licensed & Insured", helper: "Vendor‑ready documentation" },
              { value: "5★", label: "Quality Score", helper: "Checklist‑driven inspections" },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-left"
              >
                <div className="text-sm font-medium text-accent mb-1 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.helper}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Service Areas — Location Pages */}
      <section className="section-padding bg-background border-t border-border/30">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rise and Shine Cleaning Services in Texas & Colorado
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you need a cleaning service in Texas or Colorado, Rise and Shine delivers professional residential cleaning, commercial facility maintenance, and fast property turnovers. Our licensed and insured teams serve homeowners, businesses, and property managers across both states — from house cleaning in Austin to full-service cleaning in Denver and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/cleaning-services-texas"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Cleaning Services in Texas
                </h3>
                <p className="text-sm text-muted-foreground">Statewide coverage</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            <Link
              to="/cleaning-services-colorado"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Cleaning Services in Colorado
                </h3>
                <p className="text-sm text-muted-foreground">Full-state service</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            <Link
              to="/house-cleaning-austin"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  House Cleaning Austin
                </h3>
                <p className="text-sm text-muted-foreground">Austin, TX</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            <Link
              to="/cleaning-denver"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Cleaning Denver
                </h3>
                <p className="text-sm text-muted-foreground">Denver, CO</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </section>


      {/* Final CTA - Light blue tint */}
      <section className="section-padding bg-primary/[0.03] border-t border-border/30">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready for a Cleaner Home or Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join property professionals across Texas and Colorado who trust Rise & Shine for their turnover cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="xl" trackingName="Home Footer - Book Now">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="outline" size="xl" trackingName="Home Footer - Call Us">
                  <Phone className="w-5 h-5" />
                  Call +1-719-654-5761
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
