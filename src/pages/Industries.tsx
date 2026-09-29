import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  Building2,
  Home,
  Users,
  ArrowRight,
  Clock,
  TrendingUp,
  Calendar,
  CheckCircle,
  Star,
  Shield,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Property Managers",
      subtitle: "Reduce Vacancy Time, Increase ROI",
      description: "Managing a portfolio of properties means every day a unit sits vacant costs money. Rise & Shine understands the urgency of turnover cleaning and delivers fast, reliable service that helps you minimize days-on-market.",
      benefits: [
        {
          icon: Clock,
          title: "24-48 Hour Turnarounds",
          description: "Fast cleaning without compromising quality, so you can schedule showings sooner.",
        },
        {
          icon: Calendar,
          title: "Flexible Scheduling",
          description: "We work around your move-out/move-in schedules and accommodate last-minute requests.",
        },
        {
          icon: Shield,
          title: "Vendor-Ready Documentation",
          description: "All insurance certificates, W-9s, and compliance documents ready when you need them.",
        },
        {
          icon: TrendingUp,
          title: "Portfolio Pricing",
          description: "Volume discounts for multiple properties. One invoice, one vendor, simplified accounting.",
        },
      ],
      testimonial: {
        quote: "Reliable turnover cleaning means faster leasing cycles and happier tenants from day one.",
        context: "What property managers tell us they value most",
      },
    },
    {
      icon: Home,
      title: "Realtors",
      subtitle: "Present Listings at Their Best",
      description: "First impressions matter in real estate. A spotless property photographs better, shows better, and sells faster. Rise & Shine helps you present every listing in its best possible light.",
      benefits: [
        {
          icon: Star,
          title: "Show-Ready Presentation",
          description: "Properties that sparkle attract more buyers and command better offers.",
        },
        {
          icon: Clock,
          title: "Pre-Listing Preparation",
          description: "Quick turnaround for open houses and professional photography sessions.",
        },
        {
          icon: CheckCircle,
          title: "Move-In Ready Condition",
          description: "Ensure buyers see a pristine property that's ready for immediate occupancy.",
        },
        {
          icon: TrendingUp,
          title: "Better Selling Outcomes",
          description: "Clean properties help justify asking prices and reduce buyer objections.",
        },
      ],
      testimonial: {
        quote: "Clean listings show better, photograph better, and sell faster—it's that simple.",
        context: "The realtor advantage with professional cleaning",
      },
    },
    {
      icon: Users,
      title: "Leasing Offices",
      subtitle: "Keep Move-In Ready Units Spotless",
      description: "Nothing loses a prospective tenant faster than showing a unit that isn't clean. Rise & Shine keeps your model units and available properties immaculate for every showing.",
      benefits: [
        {
          icon: CheckCircle,
          title: "Consistent Quality",
          description: "Every unit meets the same high standard—no surprises during tours.",
        },
        {
          icon: Calendar,
          title: "Regular Maintenance Cleaning",
          description: "Scheduled cleaning for model units and common areas between showings.",
        },
        {
          icon: Clock,
          title: "Quick Post-Showing Touch-Ups",
          description: "Fast refresh services to keep units pristine throughout the leasing process.",
        },
        {
          icon: Star,
          title: "First Impression Excellence",
          description: "Impress prospective tenants and improve lease conversion rates.",
        },
      ],
      testimonial: {
        quote: "Every showing is an opportunity—clean units convert more prospects into signed leases.",
        context: "Why leasing offices choose Rise & Shine",
      },
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Cleaning Solutions for Every Industry | Rise & Shine"
        description="Specialized cleaning for property management, real estate, commercial offices, and residential homes. We adapt to your industry's specific needs."
        canonicalUrl="https://riseandshinecs.com/industries"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 gradient-hero-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Industries We Serve</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Specialized Cleaning for Property Professionals
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We understand that property managers, realtors, and leasing offices have unique needs. Our services are tailored to help you reduce vacancy time, present properties at their best, and streamline your operations.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg" trackingName="Industries Hero - Partner With Us">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <div key={index} id={industry.title.toLowerCase().replace(" ", "-")}>
                {/* Industry Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{industry.title}</h2>
                    <p className="text-accent font-semibold">{industry.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
                  {industry.description}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="card-elevated p-6 flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial/Value Prop */}
                <div className="bg-secondary/50 rounded-2xl p-8 border-l-4 border-primary">
                  <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-3">
                    "{industry.testimonial.quote}"
                  </blockquote>
                  <p className="text-muted-foreground text-sm">— {industry.testimonial.context}</p>
                </div>

                {index < industries.length - 1 && (
                  <div className="border-b border-border/50 mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Streamline Your Turnover Process?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you manage one property or hundreds, Rise & Shine is ready to be your trusted cleaning partner across Texas and Colorado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" trackingName="Industries Footer - Get Started Today">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/checklist">
                <Button variant="heroOutline" size="xl" trackingName="Industries Footer - View Checklist">
                  View Our Checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
