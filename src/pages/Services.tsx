import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Sparkles,
  Home,
  Building2,
  Paintbrush,
  CalendarCheck,
  Package,
  Phone,
} from "lucide-react";
import cleanApartment from "@/assets/clean-apartment.jpg";
import qualityCheck from "@/assets/quality-check.jpg";
import heroApartment from "@/assets/hero-apartment.jpg";

const services = [
  {
    icon: Home,
    title: "Move-Out Cleaning",
    description:
      "Thorough, reliable move-out and turnover cleaning designed to leave the space spotless and ready for the next resident.",
    link: "/services/move-out-cleaning",
    image: cleanApartment,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Tackle built-up dirt, grime, and hidden dust, leaving your space truly refreshed from top to bottom.",
    link: "/services/deep-cleaning",
    image: qualityCheck,
  },
  {
    icon: Building2,
    title: "Window Cleaning",
    description:
      "Professional window cleaning that removes dirt, streaks, and buildup for crystal clear, natural light.",
    link: "/services/window-cleaning",
  },
  {
    icon: Paintbrush,
    title: "Post-Construction Cleaning",
    description:
      "Turn newly built or remodeled spaces into clean, move-in-ready environments.",
    link: "/services/post-construction-cleaning",
  },
  {
    icon: CalendarCheck,
    title: "Recurring Residential Cleaning",
    description:
      "Keep your home consistently clean, fresh, and comfortable with flexible scheduling.",
    link: "/services/recurring-cleaning",
  },
  {
    icon: Package,
    title: "Decluttering & Organizing",
    description:
      "Bring order, function, and peace of mind back into your home with professional organizing.",
    link: "/services/decluttering-organizing",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Reliable, high-quality commercial cleaning tailored to the needs of your business or property.",
    link: "/services/commercial-cleaning",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rise & Shine Cleaning Services",
    "description": "Professional residential, commercial, and property turnover cleaning in Texas and Colorado.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rise and Shine Cleaning Services",
      "url": "https://riseandshinecs.com",
      "telephone": "+1-719-654-5761",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Colorado",
        "addressCountry": "US"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <Layout>
      <SEO 
        title="Cleaning Services Texas & Colorado | Home & Commercial"
        description="Explore our full range of cleaning services: Move-out, deep cleaning, recurring residential, commercial, and more. Serving Austin, Denver, and beyond."
        canonicalUrl="https://riseandshinecs.com/services"
        schema={servicesSchema}
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroApartment}
            alt="Professional cleaning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Professional Cleaning Solutions for Every Need
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              From move-out cleanings to recurring residential service and
              commercial solutions, Rise & Shine delivers consistent,
              professional results every time.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" trackingName="Services Hero - Get a Free Quote">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Cleaning Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Click on any service below to learn more about what's included and
              get a personalized quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link
                  to={service.link}
                  className="block card-elevated card-hover p-8 h-full group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us and we'll help you find the perfect cleaning solution
              for your space. We provide honest, transparent pricing based on
              your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" trackingName="Services Footer - Request Estimate">
                  Request a Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="heroOutline" size="xl" trackingName="Services Footer - Call Us">
                  <Phone className="w-5 h-5" />
                  Call +1-719-654-5761
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
