import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  BadgeCheck,
  Clock,
  CheckCircle2,
  Sparkles,
  Building2,
  Home as HomeIcon,
} from "lucide-react";

const CleaningServicesTexas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rise and Shine Cleaning Services",
    url: "https://riseandshinecs.com/cleaning-services-texas",
    telephone: "+1-719-654-5761",
    email: "Booking.riseandshine@gmail.com",
    description:
      "Professional cleaning services across Texas including residential, commercial, and property turnover cleaning. Licensed, insured, and vendor-ready.",
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    serviceArea: {
      "@type": "State",
      name: "Texas",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services in Texas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Move-Out & Turnover Cleaning",
          },
        },
      ],
    },
    priceRange: "$$",
  };

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Cleaning in Texas",
      description:
        "Recurring weekly, biweekly, or monthly house cleaning for Texas homeowners who need consistency and reliability.",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning in Texas",
      description:
        "Office, retail, restaurant, and facility cleaning for Texas businesses with flexible scheduling and vendor-ready documentation.",
    },
    {
      icon: Sparkles,
      title: "Move-Out & Turnover Cleaning",
      description:
        "Fast property turnovers for Texas property managers and realtors — from move-out to market-ready in 24–48 hours.",
    },
  ];

  const texasCities = [
    "Austin",
    "Dallas",
    "Houston",
    "San Antonio",
    "Fort Worth",
    "El Paso",
    "Arlington",
    "Plano",
    "Lubbock",
    "Corpus Christi",
  ];

  return (
    <Layout>
      <SEO
        title="Cleaning Services Texas | Residential & Commercial"
        description="Professional cleaning services across Texas. From house cleaning in Austin to commercial care statewide. Licensed, insured, and reliable."
        canonicalUrl="https://riseandshinecs.com/cleaning-services-texas"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative bg-background border-b border-border/40">
        <div className="container-wide pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Serving All of Texas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6">
              Top-Rated Residential & Commercial Cleaning Services in Texas
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From Austin to Dallas and everywhere in between, Rise and Shine
              Cleaning Services delivers dependable residential, commercial, and
              property turnover cleaning throughout the state of Texas. We're
              licensed, insured, and built to scale with your property needs.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: BadgeCheck, text: "Vendor Approved" },
                { icon: Clock, text: "24–48hr Turnaround" },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary rounded-full border border-border/60"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="outline" size="xl">
                  <Phone className="w-5 h-5" />
                  Call +1-719-654-5761
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Texas Trusts Rise and Shine for Cleaning Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Texas is a state of big spaces and fast-moving real estate.
              Whether you manage a portfolio of rental units in Austin, oversee
              commercial facilities in Dallas, or simply want a sparkling clean
              home in San Antonio, Rise and Shine Cleaning Services is your
              reliable partner. We understand that cleaning service in Texas
              needs to be fast, thorough, and professional — every single time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Texas cleaning teams specialize in three core areas:
              residential cleaning for homeowners and families, commercial
              cleaning for offices and business spaces, and move-out or
              turnover cleaning for property managers and real estate
              professionals. Each service line is designed with the specific
              demands of the Texas market in mind, from the humidity of the
              Gulf Coast to the dusty plains of West Texas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What sets us apart from other cleaning services in Texas is our
              operational approach. We don't just show up and clean — we
              operate like a logistics partner. Every job follows a detailed
              checklist, every team is trained and insured, and every project
              is documented for accountability. Property managers in Texas
              appreciate that we come vendor-ready with all necessary
              documentation, insurance certificates, and W-9 forms prepared
              for onboarding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For residential clients across Texas, our recurring cleaning
              plans keep homes consistently clean without the hassle of
              managing multiple vendors. Choose weekly, biweekly, or monthly
              schedules that fit your lifestyle. Our deep cleaning services
              tackle the built-up grime that regular maintenance misses,
              making them perfect for seasonal refreshes or pre-event
              preparations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rise and Shine also proudly serves{" "}
              <Link
                to="/cleaning-services-colorado"
                className="text-primary hover:underline font-medium"
              >
                Colorado
              </Link>{" "}
              in addition to Texas, giving multi-state property managers the
              convenience of a single trusted cleaning vendor across both
              regions. Looking for service in a specific Texas city? Check out
              our{" "}
              <Link
                to="/house-cleaning-austin"
                className="text-primary hover:underline font-medium"
              >
                Austin house cleaning
              </Link>{" "}
              page for localized service information.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary/20 border-t border-border/30">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cleaning Services We Offer Across Texas
            </h2>
            <p className="text-muted-foreground text-lg">
              Every cleaning service is backed by trained teams, detailed
              checklists, and full insurance coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
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

      {/* Texas Cities */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Texas Cities We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {texasCities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 px-4 py-3 bg-secondary/30 rounded-lg border border-border/40"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-secondary/20 border-t border-border/30">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Explore Our Other Service Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/cleaning-services-colorado"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Cleaning Services in Colorado
                </h3>
                <p className="text-sm text-muted-foreground">
                  Residential & commercial cleaning statewide
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            <Link
              to="/house-cleaning-austin"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  House Cleaning in Austin
                </h3>
                <p className="text-sm text-muted-foreground">
                  Expert home cleaning in Austin, TX
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
            <Link
              to="/cleaning-denver"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Cleaning Services in Denver
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full-service cleaning for Denver, CO
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/[0.03] border-t border-border/30">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready for Professional Cleaning in Texas?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join property professionals and homeowners across Texas who trust
              Rise and Shine for reliable, high-quality cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="outline" size="xl">
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

export default CleaningServicesTexas;
