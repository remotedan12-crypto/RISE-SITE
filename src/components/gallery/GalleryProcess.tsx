import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Assessment", desc: "Thorough inspection and documentation of property condition" },
  { step: "02", title: "Preparation", desc: "Professional-grade equipment and eco-friendly solutions ready" },
  { step: "03", title: "Execution", desc: "Systematic deep cleaning following our 50+ point checklist" },
  { step: "04", title: "Inspection", desc: "Final walkthrough and quality verification before handover" },
];

const GalleryProcess = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-wide">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Achieve These Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Our systematic approach ensures consistent, professional-grade results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors h-full">
                <div className="text-4xl font-extrabold text-primary/20 mb-4">{item.step}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryProcess;
