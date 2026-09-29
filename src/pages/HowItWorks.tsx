import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Book or Request a Quote",
    description: "Contact us with your property details and timeline. Get a transparent quote within hours.",
  },
  {
    step: "02",
    title: "Schedule Your Cleaning",
    description: "Choose a time that works for your turnover schedule. We accommodate tight deadlines.",
  },
  {
    step: "03",
    title: "Professional Turnover Cleaning",
    description: "Our trained team delivers thorough, consistent results using commercial-grade equipment.",
  },
  {
    step: "04",
    title: "Final Checklist Inspection",
    description: "Every unit passes our detailed quality checklist before we hand back the keys.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <SEO 
        title="How It Works | Our Professional Cleaning Process"
        description="Learn about our seamless cleaning process, from booking your free quote to our checklist-driven service and final quality inspection."
        canonicalUrl="https://riseandshinecs.com/how-it-works"
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
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Simple Process, Professional Results
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From booking to final inspection, we make turnover cleaning effortless.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </div>
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
              Book your first cleaning today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="xl" trackingName="HowItWorks Footer - Book Now">
                  Book Now <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="outline" size="xl" trackingName="HowItWorks Footer - Call Us">
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

export default HowItWorks;
