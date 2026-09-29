import { useState, useCallback } from "react";
import { ArrowRight, CheckCircle2, Maximize2, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryCardProps {
  item: {
    id: number;
    before: string;
    after: string;
    title: string;
    description: string;
    category: string;
    highlight?: string;
  };
  categoryName?: string;
  index: number;
  onViewClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const LazyImage = ({ src, alt, className, loading = "lazy" }: { src: string; alt: string; className: string; loading?: "lazy" | "eager" }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = useCallback(() => setLoaded(true), []);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading={loading}
        onLoad={handleLoad}
        decoding="async"
      />
    </div>
  );
};

const GalleryCard = ({ item, categoryName, index, onViewClick }: GalleryCardProps) => {
  return (
    <motion.div
      className="group relative bg-background/80 backdrop-blur-sm rounded-3xl border border-border/30 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index % 3}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Before/After Images */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-1.5 p-2">
          {/* Before */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <LazyImage
              src={item.before}
              alt={`Before - ${item.title}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-destructive/90 backdrop-blur-sm text-destructive-foreground text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
              Before
            </div>
          </div>

          {/* After */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <LazyImage
              src={item.after}
              alt={`After - ${item.title}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
              After
            </div>
          </div>
        </div>

        {/* Divider Arrow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background rounded-full shadow-xl flex items-center justify-center z-10 border-2 border-primary/30"
          whileHover={{ scale: 1.2, borderColor: "hsl(var(--primary))" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded-full">
                {categoryName}
              </span>
              {item.highlight && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-[10px] font-bold rounded-full border border-accent/20">
                  <Star className="w-3 h-3 fill-accent" />
                  {item.highlight}
                </span>
              )}
            </div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={onViewClick}
          className="w-full mt-2 rounded-xl border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary group/btn transition-all duration-300"
        >
          <Maximize2 className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
          View Full Comparison
          <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        </Button>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
