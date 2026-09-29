import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  BadgeCheck,
  Phone,
  Clock,
  Star,
  MapPin,
  Users,
  Building,
} from "lucide-react";
import heroImage from "@/assets/hero-apartment.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const services = [
    "Move-Out Cleaning",
    "Residential Cleaning",
    "Commercial Cleaning",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background border-b border-border/40">
      <div className="container-wide pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-xl space-y-6">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Professional Turnover Cleaning Teams
              </span>
            </div>

            {/* Headline */}
         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground">
  Fast, Reliable{" "}

  <span className="relative inline-block h-[1.2em] align-bottom overflow-hidden">
    
    {/* Invisible width keeper (prevents layout shift) */}
    <span className="invisible whitespace-nowrap">
      Commercial Cleaning
    </span>

    <AnimatePresence mode="wait">
      <motion.span
        key={services[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // smoother curve
        }}
        className="absolute left-0 top-0 text-primary whitespace-nowrap"
      >
        {services[index]}
      </motion.span>
    </AnimatePresence>

  </span>

  {" "}for High-Volume Properties
</h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built for property managers, realtors, and leasing offices that need
              consistent results, fast turnaround, and zero operational stress.
            </p>

            {/* Proof Points */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: BadgeCheck, text: "Vendor Approved" },
                { icon: MapPin, text: "Texas & Colorado Coverage" },
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

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact">
                <Button size="xl" variant="outline">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Call Block */}
            <a
              href="tel:+1-719-654-5761"
              className="flex items-center gap-3 pt-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Speak With Our Team
                </p>
                <p className="text-base font-bold text-foreground group-hover:text-primary">
                  +1-719-654-5761
                </p>
              </div>
            </a>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                1200+ Units Cleaned
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                24-48hr Turnaround
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                5★ Client Rating
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40">
              <img
                src={heroImage}
                alt="Modern cleaned apartment"
                className="w-full h-[420px] lg:h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-xl shadow-xl border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">
                    Same-Week Availability
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Fast turnover support
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;