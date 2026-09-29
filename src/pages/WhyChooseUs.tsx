import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  Zap,
  ClipboardCheck,
  MapPin,
  BadgeCheck,
  ArrowRight,
  Phone,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Weekly home cleanings, daily commercial service, or fast property turnovers — we work around your schedule.",
  },
  {
    icon: Shield,
    title: "Licensed, Insured & Trusted",
    description:
      "Background-checked professionals delivering safe, reliable cleaning for homes, offices, and commercial facilities.",
  },
  {
    icon: ClipboardCheck,
    title: "Consistent Quality Standards",
    description:
      "Structured cleaning checklists ensure every home and business receives the same high-level results every visit.",
  },
  {
    icon: Zap,
    title: "Professional Equipment & Products",
    description:
      "Commercial-grade tools and effective cleaning solutions designed for deep, hygienic results.",
  },
  {
    icon: MapPin,
    title: "Reliable Local Teams",
    description:
      "Dedicated crews serving residential neighborhoods and commercial properties with consistent, dependable service.",
  },
  {
    icon: BadgeCheck,
    title: "Built for Homes & Businesses",
    description:
      "Whether it’s a family home, office, restaurant, school, or rental property — we tailor cleaning to your space.",
  },
];


const WhyChooseUs = () => {
  return (
    <Layout>
      <SEO 
        title="Why Choose Rise & Shine | Trusted Cleaning Experts"
        description="Discover why homeowners and property managers trust Rise & Shine. From checklist-driven quality to being fully insured and vendor-ready."
        canonicalUrl="https://riseandshinecs.com/why-choose-us"
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Why Homeowners & Businesses Choose Rise & Shine
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From recurring residential cleaning to commercial facilities and property turnovers, we deliver reliable, high-quality cleaning with professional standards you can trust every time.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-elevated card-hover p-8"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experience the Rise & Shine difference for your property portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
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

export default WhyChooseUs;
