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

const CleaningServicesColorado = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rise and Shine Cleaning Services",
    url: "https://riseandshinecs.com/cleaning-services-colorado",
    telephone: "+1-719-654-5761",
    email: "Booking.riseandshine@gmail.com",
    description:
      "Professional cleaning services throughout Colorado. Residential, commercial, and move-out turnover cleaning. Licensed, insured, and vendor-ready.",
    areaServed: {
      "@type": "State",
      name: "Colorado",
    },
    serviceArea: {
      "@type": "State",
      name: "Colorado",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services in Colorado",
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
      title: "Residential Cleaning in Colorado",
      description:
        "Weekly, biweekly, and monthly home cleaning for Colorado families who value consistency and a spotless living environment.",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning in Colorado",
      description:
        "Professional facility, office, and retail cleaning across Colorado with flexible scheduling and full vendor documentation.",
    },
    {
      icon: Sparkles,
      title: "Property Turnover Cleaning",
      description:
        "Rapid move-out and make-ready cleaning for Colorado property managers — units market-ready within 24–48 hours.",
    },
  ];

  const coloradoCities = [
    "Denver",
    "Colorado Springs",
    "Aurora",
    "Fort Collins",
    "Lakewood",
    "Thornton",
    "Arvada",
    "Pueblo",
    "Boulder",
    "Westminster",
  ];

  return (
    <Layout>
      <SEO
        title="Cleaning Services Colorado | Trusted Home Cleaners"
        description="Expert cleaning services throughout Colorado. Reliable residential, commercial, and property turnover cleaning you can count on."
        canonicalUrl="https://riseandshinecs.com/cleaning-services-colorado"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative bg-background border-b border-border/40">
        <div className="container-wide pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Serving All of Colorado
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6">
              Professional Cleaning Services for Homes & Businesses in Colorado
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Rise and Shine Cleaning Services provides dependable residential,
              commercial, and property turnover cleaning throughout Colorado.
              From Denver's urban properties to Colorado Springs' growing
              communities, our licensed and insured teams deliver exceptional
              results every time.
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
              Colorado's Trusted Cleaning Services Provider
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Colorado's dynamic real estate market and thriving business
              community demand cleaning services that are reliable, thorough,
              and scalable. Rise and Shine Cleaning Services was built to meet
              exactly that need. Whether you're a property manager overseeing
              dozens of rental units in Denver, a business owner maintaining
              office spaces in Colorado Springs, or a homeowner in Fort Collins
              looking for consistent residential cleaning, our Colorado cleaning
              teams are ready to deliver.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our cleaning services in Colorado cover three primary categories.
              Residential cleaning keeps homes across the state consistently
              fresh and comfortable through recurring weekly, biweekly, or
              monthly schedules. Commercial cleaning provides flexible,
              professional-grade maintenance for offices, retail spaces,
              restaurants, healthcare facilities, and other business
              environments. Our turnover and move-out cleaning services are
              specifically designed for property management professionals who
              need units market-ready fast, typically within 24 to 48 hours.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What truly differentiates Rise and Shine from other cleaning
              services in Colorado is our operations-first methodology. Every
              cleaning job is executed using standardized checklists developed
              from thousands of completed turnovers. Our teams are trained
              specifically for the Colorado market, understanding the unique
              challenges posed by the altitude, dry climate, and seasonal
              weather patterns that affect properties throughout the state.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We maintain full insurance coverage, worker's compensation, and
              all vendor-required documentation. Colorado property management
              companies appreciate that we can be onboarded as a vendor
              quickly, with W-9 forms and insurance certificates ready upon
              request. This operational readiness means less administrative
              burden for your team and faster time-to-clean for your
              properties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rise and Shine also serves{" "}
              <Link
                to="/cleaning-services-texas"
                className="text-primary hover:underline font-medium"
              >
                Texas
              </Link>
              , giving multi-state property portfolios the advantage of a
              single, consistent cleaning vendor. For Denver-specific service
              details, visit our{" "}
              <Link
                to="/cleaning-denver"
                className="text-primary hover:underline font-medium"
              >
                Denver cleaning services
              </Link>{" "}
              page.
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
              Cleaning Services Available Throughout Colorado
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by homeowners, businesses, and property managers across
              the Centennial State.
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

      {/* Colorado Cities */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Colorado Cities We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {coloradoCities.map((city) => (
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
              to="/cleaning-services-texas"
              className="card-elevated p-5 group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Cleaning Services in Texas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional cleaning across the Lone Star State
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
              Book Cleaning Services in Colorado Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From Denver to Colorado Springs, our teams are ready to make your
              property shine. Get a free quote today.
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

export default CleaningServicesColorado;
