import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  Sparkles,
  Shield,
  Eye,
  ThumbsUp,
} from "lucide-react";
import qualityCheck from "@/assets/quality-check.jpg";

const Checklist = () => {
  const whyChecklist = [
    {
      icon: Shield,
      title: "Consistency",
      description: "Every unit receives the same thorough cleaning, regardless of which team member performs the service.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "You know exactly what's included and can verify each item has been completed.",
    },
    {
      icon: ThumbsUp,
      title: "Accountability",
      description: "Our checklist serves as documentation that the work was completed to standard.",
    },
    {
      icon: ClipboardCheck,
      title: "Inspection-Ready",
      description: "Properties cleaned to our checklist are prepared to pass even the most thorough inspections.",
    },
  ];

  const checklistAreas = [
    {
      area: "Kitchen",
      items: [
        "All countertops cleaned and sanitized",
        "Sink and faucet cleaned and polished",
        "Stovetop and burners degreased",
        "Oven interior cleaned (deep clean service)",
        "Microwave interior and exterior cleaned",
        "Refrigerator interior cleaned (deep clean service)",
        "Refrigerator exterior wiped down",
        "Dishwasher interior wiped (if applicable)",
        "Cabinet fronts wiped clean",
        "Cabinet interiors cleaned (deep clean service)",
        "Backsplash cleaned",
        "Light fixtures dusted",
        "Floor swept and mopped",
      ],
    },
    {
      area: "Bathrooms",
      items: [
        "Toilet bowl, seat, and exterior sanitized",
        "Bathtub/shower scrubbed and descaled",
        "Shower doors or curtain rod cleaned",
        "Sink and countertop sanitized",
        "Mirror cleaned streak-free",
        "Faucets polished",
        "Vanity cabinet wiped inside and out",
        "Medicine cabinet cleaned (if applicable)",
        "Exhaust fan vent dusted",
        "Light fixtures cleaned",
        "Towel bars and accessories wiped",
        "Floor swept and mopped",
      ],
    },
    {
      area: "Living Areas & Bedrooms",
      items: [
        "All surfaces dusted",
        "Ceiling fans and light fixtures dusted",
        "Window sills and tracks cleaned",
        "Blinds dusted or wiped",
        "Switch plates and door handles sanitized",
        "Doors wiped clean",
        "Baseboards wiped (deep clean service)",
        "Closet shelves and rods cleaned",
        "Floors vacuumed and/or mopped",
        "Carpet spots treated (if applicable)",
        "Air vents dusted",
        "Walls spot-cleaned for marks (deep clean service)",
      ],
    },
    {
      area: "Final Inspection",
      items: [
        "All light switches and outlets tested",
        "Windows checked for streaks",
        "No dust bunnies in corners",
        "No water spots on fixtures",
        "Pleasant, neutral scent throughout",
        "Thermostat and controls wiped",
        "Entry door and hardware cleaned",
        "Overall presentation assessed",
        "Photo documentation (if requested)",
        "Walkthrough completed and signed off",
      ],
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Professional Cleaning Checklist | What We Clean"
        description="View our comprehensive cleaning checklist. See exactly what's included in our standard, deep, and move-out cleaning services."
        canonicalUrl="https://riseandshinecs.com/checklist"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 gradient-hero-bg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Quality Assurance</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Our Detailed Cleaning Checklist
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every Rise & Shine cleaning follows our comprehensive checklist. This ensures consistent, inspection-ready results for every property, every time. No shortcuts, no surprises.
              </p>
              <Link to="/contact">
                <Button variant="accent" size="lg" trackingName="Checklist Hero - Book Cleaning">
                  Book Your Cleaning
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={qualityCheck}
                  alt="Quality inspection"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">40+ Point Checklist</div>
                    <div className="text-sm text-muted-foreground">Every cleaning, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Checklist Matters */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Power of Process
            </h2>
            <p className="text-muted-foreground text-lg">
              Our checklist isn't just a list—it's our commitment to quality and your guarantee of consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChecklist.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Detail */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">What's Covered</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Area-by-Area Breakdown
            </h2>
            <p className="text-muted-foreground text-lg">
              Here's exactly what our team inspects and cleans during every turnover service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checklistAreas.map((section, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{section.area}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 border border-border/50 text-center">
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Note:</strong> Items marked "(deep clean service)" are included in our Move-Out Deep Cleaning package. Standard Turnover Cleaning includes all other items.
            </p>
            <Link to="/services" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              Compare our services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Checklist-Driven Quality
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Ready to see what consistent, professional cleaning looks like? Book your first service and experience the Rise & Shine difference.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" trackingName="Checklist Footer - Schedule Cleaning">
                Schedule Your Cleaning
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checklist;
