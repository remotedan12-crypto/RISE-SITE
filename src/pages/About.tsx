import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Clock,
  MessageSquare,
  Users,
  Phone,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

import logo from "@/assets/logo.jpg";
import ceoPhoto from "@/assets/ceo-rebecca.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


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

const values = [
  {
    icon: Clock,
    title: "Reliable, On-Time Service",
    description: "We show up when we say we will—every time.",
  },
  {
    icon: CheckCircle,
    title: "Detailed, High-Quality Cleaning",
    description:
      "Every surface, every corner, every detail matters to us.",
  },
  {
    icon: MessageSquare,
    title: "Honest Communication",
    description:
      "Clear, transparent communication from quote to completion.",
  },
  {
    icon: Heart,
    title: "A Personal, Caring Approach",
    description:
      "We treat every home and business as if it were our own.",
  },
];

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Rise and Shine Cleaning Services",
      "description": "Founded by Rebecca Hamilton, Rise & Shine provides reliable, honest cleaning for families, property managers, and business owners across Texas and Colorado.",
      "image": "https://riseandshinecs.com/favicon.png",
      "telephone": "+1-719-654-5761",
      "email": "Booking.riseandshine@gmail.com",
      "url": "https://riseandshinecs.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Colorado",
        "addressCountry": "US"
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title="About Rise & Shine Cleaning | Our Story & Mission"
        description="Founded by Rebecca Hamilton, Rise & Shine offers trusted cleaning for families and businesses. Learn about our values and commitment to quality cleaning."
        canonicalUrl="https://riseandshinecs.com/about"
        schema={aboutSchema}
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 gradient-hero-bg overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                More Than Just Cleaning
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Rise & Shine Cleaning Services, cleaning is more than just a
                job—it's a way to help people feel better in their homes and
                workplaces. We believe that a clean space brings peace of mind,
                comfort, and a fresh start to every day.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Founder Story with CEO Photo */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Founded on Hard Work & Heart
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* CEO Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
                  <img
                    src={ceoPhoto}
                    alt="Rebecca Hamilton - Founder & CEO"
                    className="relative w-72 h-80 md:w-80 md:h-96 object-cover object-top rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl px-5 py-3 shadow-lg border border-border/50">
                    <p className="font-bold text-foreground text-sm">Rebecca Hamilton</p>
                    <p className="text-muted-foreground text-xs">Founder & CEO</p>
                  </div>
                </div>
              </motion.div>

              {/* Story Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Rise & Shine was founded by{" "}
                    <strong className="text-foreground">Rebecca Hamilton</strong>,
                    a hardworking business owner and mother who built her company
                    from the ground up. What started as a simple goal—to provide
                    reliable, honest cleaning—quickly turned into a true passion
                    for helping families, property managers, and business owners
                    maintain spaces they can feel proud of.
                  </p>
                  <p>
                    Rebecca entered the cleaning industry in 2019 and discovered
                    that her work went far beyond scrubbing surfaces. She was
                    helping busy parents come home to a peaceful environment,
                    supporting property managers with fast, dependable turnovers,
                    and giving business owners a clean space to welcome their
                    clients.
                  </p>
                  <p>
                    After years of experience and growth, she took the leap to
                    build her own brand, focused on{" "}
                    <strong className="text-foreground">
                      trust, consistency, and genuine care
                    </strong>{" "}
                    for every client and every space.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Rise & Shine Is Known For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut" as const,
                }}
                className="card-elevated p-8 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 border-l-4 border-accent">
              <Users className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "We treat every home and business as if it were our own, because
                we know that behind every door is a family, a team, or a dream
                in progress. Our mission is simple: to create clean, comfortable
                spaces where people can truly relax, focus, and thrive."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials removed - now on Contact page */}

      {/* FAQ – Operational & Vendor Questions */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(0,1.2fr)] gap-12 items-start">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Vendor &amp; Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Answers for Property Teams
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From insurance and documentation to turnaround times and portfolio
              support, we built our model around what property managers and
              leasing leaders ask most.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Fully licensed, insured, and vendor‑ready for procurement teams.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Experience coordinating multi‑unit turns across portfolios.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Documentation and communication suited for corporate stakeholders.</span>
              </li>
            </ul>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Ready to Experience the Rise & Shine Difference?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let us show you what professional, caring cleaning looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" trackingName="About Footer - Get Quote">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1-719-654-5761">
                <Button variant="heroOutline" size="xl" trackingName="About Footer - Call Us">
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

export default About;
