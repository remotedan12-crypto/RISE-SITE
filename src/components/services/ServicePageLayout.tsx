import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

interface ChecklistSection {
  title: string;
  items: string[];
}

interface ServicePageData {
  heroTag: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  checklistTitle?: string;
  checklistIntro?: string;
  checklistSections: ChecklistSection[];
  perfectFor?: {
    title?: string;
    items: string[];
  };
  whyChoose?: {
    title?: string;
    items: string[];
  };
  scheduleOptions?: {
    title: string;
    description: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
  extraSections?: React.ReactNode;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicePageLayout = ({ data }: { data: ServicePageData }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rise and Shine Cleaning Services"
    },
    "areaServed": ["Texas", "Colorado"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": data.title,
      "itemListElement": data.checklistSections.flatMap(section => 
        section.items.slice(0, 3).map(item => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": item
          }
        }))
      )
    }
  };

  return (
    <Layout>
      <SEO 
        title={data.title}
        description={data.description}
        breadcrumbTitle={data.heroTag}
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 gradient-hero-bg overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {data.heroTag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {data.description}
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

      {/* Image Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className={`grid gap-6 ${data.images.length === 3 ? "grid-cols-1 md:grid-cols-3" : data.images.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"}`}>
            {data.images.map((img, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden shadow-xl group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[300px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Options (if provided) */}
      {data.scheduleOptions && (
        <section className="section-padding bg-secondary/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Flexible Scheduling
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Cleaning Schedule
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.scheduleOptions.map((option, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card-elevated p-8 text-center card-hover"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Checklist Section */}
      <section className={`section-padding ${data.scheduleOptions ? "bg-background" : "bg-secondary/50"}`}>
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {data.checklistTitle || `What's Included in ${data.title}`}
            </h2>
            {data.checklistIntro && (
              <p className="text-muted-foreground text-lg">{data.checklistIntro}</p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.checklistSections.map((section, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-elevated p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border/50">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Sections */}
      {data.extraSections}

      {/* Perfect For & Why Choose */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.perfectFor && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-elevated p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {data.perfectFor.title || "Perfect For"}
                </h3>
                <ul className="space-y-4">
                  {data.perfectFor.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {data.whyChoose && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-elevated p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {data.whyChoose.title || "Why Choose Rise & Shine"}
                </h3>
                <ul className="space-y-4">
                  {data.whyChoose.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
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
              {data.ctaTitle}
            </h2>
            <p className="text-white/80 text-lg mb-8">{data.ctaDescription}</p>
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

export default ServicePageLayout;
