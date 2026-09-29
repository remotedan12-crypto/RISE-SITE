import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ZoomIn, ZoomOut, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageZoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    before: string;
    after: string;
    title: string;
    description: string;
    category: string;
    highlight?: string;
  } | null;
  categoryName?: string;
}

const ImageZoomDialog = ({ open, onOpenChange, item, categoryName }: ImageZoomDialogProps) => {
  const [activeImage, setActiveImage] = useState<"before" | "after">("before");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  if (!item) return null;

  const images = [
    { key: "before" as const, src: item.before, label: "Before" },
    { key: "after" as const, src: item.after, label: "After" },
  ];

  const currentImage = images.find((img) => img.key === activeImage)!;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setZoomPosition({ x: 50, y: 50 });
  };

  const navigate = (direction: "prev" | "next") => {
    setActiveImage(activeImage === "before" ? "after" : "before");
    setIsZoomed(false);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { onOpenChange(val); setIsZoomed(false); setActiveImage("before"); }}>
      <DialogContent className="max-w-7xl max-h-[95vh] p-0 overflow-hidden rounded-3xl border-none bg-background/95 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-gradient-to-r from-background to-secondary/30">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full">
                {categoryName}
              </span>
              {item.highlight && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                  <Star className="w-3 h-3 fill-accent" />
                  {item.highlight}
                </span>
              )}
            </div>
            <h3 className="font-bold text-xl text-foreground mt-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-xl">{item.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleZoom}
              className="rounded-full w-10 h-10 border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Main Image Area */}
        <div className="relative flex-1 flex flex-col">
          <div className="flex-1 relative bg-muted/20 flex items-center justify-center overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                className={`relative w-full max-h-[60vh] flex items-center justify-center px-16 py-4 ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                initial={{ opacity: 0, x: activeImage === "after" ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeImage === "after" ? -60 : 60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                onClick={toggleZoom}
                onMouseMove={handleMouseMove}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-h-[58vh]">
                  <img
                    src={currentImage.src}
                    alt={`${currentImage.label} - ${item.title}`}
                    className="w-full h-full object-contain transition-transform duration-300"
                    style={
                      isZoomed
                        ? {
                            transform: "scale(2.5)",
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          }
                        : {}
                    }
                    draggable={false}
                  />
                  {/* Label Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 backdrop-blur-sm text-sm font-bold rounded-full uppercase tracking-wider shadow-lg ${
                      activeImage === "before"
                        ? "bg-destructive/90 text-destructive-foreground"
                        : "bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    {currentImage.label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center justify-center gap-4 px-6 py-4 bg-secondary/30 border-t border-border/50">
            {images.map((img) => (
              <button
                key={img.key}
                onClick={() => { setActiveImage(img.key); setIsZoomed(false); }}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  activeImage === img.key
                    ? "ring-3 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-lg"
                    : "opacity-60 hover:opacity-90 hover:scale-102"
                }`}
              >
                <img
                  src={img.src}
                  alt={`${img.label} thumbnail`}
                  className="w-24 h-18 md:w-32 md:h-24 object-cover"
                  draggable={false}
                />
                <div
                  className={`absolute bottom-0 inset-x-0 py-1 text-center text-[10px] font-bold uppercase tracking-wider ${
                    img.key === "before"
                      ? "bg-destructive/80 text-destructive-foreground"
                      : "bg-primary/80 text-primary-foreground"
                  }`}
                >
                  {img.label}
                </div>
              </button>
            ))}

            {/* Zoom Hint */}
            <div className="hidden md:flex items-center gap-2 ml-4 px-3 py-2 bg-muted/50 rounded-lg">
              <ZoomIn className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Click image to zoom • Hover to pan</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
