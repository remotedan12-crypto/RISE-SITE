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
  Star,
} from "lucide-react";

const HouseCleaningNolanville = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rise and Shine Cleaning Services",
    url: "https://riseandshinecs.com/house-cleaning-nolanville",
    telephone: "+1-719-654-5761",
    email: "Booking.riseandshine@gmail.com",
    description:
      "Professional house cleaning in Nolanville, Texas. Recurring residential cleaning, deep cleaning, and move-out cleaning services by Rise and Shine.",
    areaServed: {
      "@type": "City",
      name: "Nolanville",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "House Cleaning in Nolanville",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recurring House Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deep House Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Move-Out Cleaning",
          },
        },
      ],
    },
    priceRange: "$$",
  };

  const benefits = [
    {
      icon: Star,
      title: "Consistent Quality",
      description:
        "Every house cleaning follows our standardized checklist, ensuring the same thorough results each visit.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description:
        "Full liability insurance and worker's compensation coverage gives Nolanville homeowners peace of mind.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Weekly, biweekly, or monthly cleaning schedules that adapt to your Nolanville lifestyle.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning Available",
      description:
        "Beyond regular maintenance, our deep cleaning tackles built-up grime in kitchens, bathrooms, and living areas.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="House Cleaning Nolanville TX | Best Local Cleaners"
        description="Top-rated house cleaning in Nolanville, Texas. We offer recurring, deep, and move-out cleaning for Nolanville homes and apartments."
        canonicalUrl="https://riseandshinecs.com/house-cleaning-nolanville"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative bg-background border-b border-border/40">
        <div className="container-wide pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Nolanville, Texas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6">
              Professional House Cleaning & Maid Services in Nolanville, TX
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Rise and Shine Cleaning Services provides professional house
              cleaning throughout Nolanville and the surrounding communities.
              Whether you need recurring residential cleaning, a thorough deep
              clean, or move-out preparation, our trained Nolanville teams deliver
              spotless results every time.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: BadgeCheck, text: "Background-Checked Teams" },
                { icon: Clock, text: "Flexible Schedules" },
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
                  Book Nolanville Cleaning
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
              Nolanville's Go-To House Cleaning Professionals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With growing communities in Nolanville, comes an increasing demand for professional house
              cleaning services that homeowners can depend on. Rise and Shine
              Cleaning Services meets that demand with reliable, checklist-driven
              residential cleaning designed specifically for Nolanville's diverse
              housing market.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our house cleaning in Nolanville covers every room of your home with
              meticulous attention to detail. Kitchens are cleaned from
              countertop to floor, including appliance exteriors, sink
              sanitization, and cabinet front wipe-downs. Bathrooms receive a
              thorough scrub covering tubs, showers, toilets, vanities, and
              mirrors. Living areas and bedrooms are dusted, vacuumed, and
              mopped, with special attention to high-touch surfaces like light
              switches, door handles, and baseboards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What makes our Nolanville house cleaning service stand apart is the
              consistency. We don't send a different crew every time — our
              scheduling system assigns trained, reliable teams to your home
              on a recurring basis. You'll know who's coming, when they're
              arriving, and exactly what will be cleaned according to our
              detailed cleaning checklist. That predictability is something
              busy Nolanville families and professionals truly value.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For Nolanville renters and landlords, our move-out cleaning services
              ensure properties are returned or listed in immaculate condition.
              We handle the intensive cleaning that goes beyond surface
              maintenance — inside appliances, behind fixtures, window tracks,
              and every corner that matters during inspection. Nolanville property
              managers appreciate our speed and reliability, with most
              turnovers completed within 24 to 48 hours.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rise and Shine serves all of{" "}
              <Link
                to="/cleaning-services-texas"
                className="text-primary hover:underline font-medium"
              >
                Texas
              </Link>{" "}
              and{" "}
              <Link
                to="/cleaning-services-colorado"
                className="text-primary hover:underline font-medium"
              >
                Colorado
              </Link>
              . For service outside Nolanville, explore our statewide options or
              check out our{" "}
              <Link
                to="/cleaning-denver"
                className="text-primary hover:underline font-medium"
              >
                Denver cleaning services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-secondary/20 border-t border-border/30">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Nolanville Homeowners Choose Rise and Shine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary/20 border-t border-border/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              What's Included in Nolanville House Cleaning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <HomeIcon className="w-5 h-5 text-primary" /> Kitchen & Dining
                </h3>
                <ul className="space-y-2">
                  {[
                    "Countertop and backsplash cleaning",
                    "Appliance exterior wipe-down",
                    "Sink sanitization and polish",
                    "Cabinet front cleaning",
                    "Floor vacuuming and mopping",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> Bathrooms &
                  Bedrooms
                </h3>
                <ul className="space-y-2">
                  {[
                    "Tub, shower, and toilet sanitization",
                    "Mirror and vanity cleaning",
                    "Surface dusting and organization",
                    "Baseboard and vent dusting",
                    "Vacuum and mop all floors",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-background border-t border-border/30">
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
                  Statewide cleaning coverage
                </p>
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
                <p className="text-sm text-muted-foreground">
                  Residential & commercial across CO
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
              Get Professional House Cleaning in Nolanville
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experience the Rise and Shine difference. Book your Nolanville house
              cleaning today and enjoy a spotless home every visit.
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

export default HouseCleaningNolanville;
