import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Building2,
  Car,
  Baby,
  Church,
  UtensilsCrossed,
  Home,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import commercialWorkspace from "@/assets/services/commercial-workspace.webp";

const industries = [
  {
    icon: Building2,
    title: "Offices",
    items: [
      "Daily or weekly maintenance cleaning",
      "Dusting, trash removal, and surface sanitation",
      "Breakroom and restroom cleaning",
      "Floor care and vacuuming",
    ],
  },
  {
    icon: Car,
    title: "Car Dealerships",
    items: [
      "Showroom cleaning and polishing",
      "Office and customer lounge cleaning",
      "Restroom sanitation",
      "Floor maintenance for high-traffic areas",
    ],
  },
  {
    icon: Baby,
    title: "Daycares & Schools",
    items: [
      "Classroom and common area cleaning",
      "Restroom sanitation",
      "High-touch surface disinfection",
      "Floor care and trash removal",
    ],
  },
  {
    icon: Church,
    title: "Churches & Places of Worship",
    items: [
      "Sanctuary and seating area cleaning",
      "Fellowship halls and classrooms",
      "Restroom cleaning and sanitation",
      "Entryway and floor maintenance",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    items: [
      "Dining area cleaning",
      "Restroom sanitation",
      "Floor cleaning and degreasing",
      "Surface disinfection for high-touch areas",
    ],
  },
  {
    icon: Home,
    title: "Property Management & Real Estate",
    items: [
      "Move-out and turnover cleaning",
      "Model home and listing preparation",
      "Common area cleaning",
      "Reliable scheduling for quick turnovers",
    ],
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

const CommercialCleaning = () => {
  const commercialSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Cleaning",
    "description": "Reliable, high-quality commercial cleaning tailored to the needs of your business or property across Texas and Colorado.",
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
    "serviceType": "Commercial Cleaning",
    "areaServed": [
      { "@type": "State", "name": "Colorado" },
      { "@type": "State", "name": "Texas" }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Commercial Cleaning Services | Office & Facility Care"
        description="Reliable commercial cleaning for offices, schools, and retail. Custom cleaning plans to keep your business professional and sanitary."
        canonicalUrl="https://riseandshinecs.com/services/commercial-cleaning"
        schema={commercialSchema}
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 gradient-hero-bg overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Commercial Cleaning
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Commercial Cleaning Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Rise & Shine Cleaning Services, we provide reliable, high-quality commercial cleaning tailored to the needs of your business or property. A clean environment not only creates a strong first impression, but also supports the health, safety, and productivity of your staff, clients, and visitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={commercialWorkspace}
              alt="Commercial cleaning workspace"
              className="w-full h-[300px] md:h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tailored Cleaning for Every Business
            </h2>
            <p className="text-muted-foreground text-lg">
              We work with a wide range of commercial clients and offer flexible scheduling, including daytime, evening, and weekend services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="card-elevated p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included in Commercial Cleaning
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Dusting and surface cleaning",
                "Trash removal and liner replacement",
                "Restroom cleaning and sanitation",
                "Breakroom or kitchen area cleaning",
                "Vacuuming carpets and rugs",
                "Mopping and floor care",
                "High-touch surface disinfection",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Businesses Choose Rise & Shine
              </h3>
              <ul className="space-y-4">
                {[
                  "Reliable, consistent service",
                  "Flexible cleaning schedules",
                  "Professional, insured team",
                  "Detailed, checklist-based cleaning",
                  "Trusted by property managers and business owners",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                We understand that every business has different needs, and we customize our cleaning plans to fit your space, schedule, and budget.
              </p>
            </motion.div>
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
              Ready for Professional Commercial Cleaning?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact Rise & Shine Cleaning Services today to request a commercial cleaning quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="heroOutline" size="xl">
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

export default CommercialCleaning;
