import { useState } from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GalleryCard from "@/components/gallery/GalleryCard";
import ImageZoomDialog from "@/components/gallery/ImageZoomDialog";

import declutterPantry from "@/assets/services/declutter-pantry.jpg";
import declutterOrganized from "@/assets/services/declutter-organized.jpg";

import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";

// ==========================================
// EASY TO UPDATE BEFORE & AFTER IMAGES
// Just replace the imports and variables
// ==========================================
interface BeforeAfterItem {
  id: number;
  before: string;
  after: string;
  title: string;
  description: string;
  category: string;
  highlight?: string;
}

const declutteringProjects: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Storage Room Overhaul",
    description: "Complete clearing, sorting, and systematic arrangement of storage items for easy access and visibility.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773932749/IMG-20260318-WA0029_3_j8t2a7.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773932851/IMG-20260318%20-WA0030_2_gkb3rr.jpg",
    category: "Storage Room",
    highlight: "Full Transformation"
  },
  {
    id: 2,
    title: "Bedroom Space Recovery",
    description: "Clearing excessive clutter and restoring the bedroom to a peaceful, organized resting environment.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773933050/IMG-20260318-WA0032_3_m90be3.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773933198/IMG-20260318-WA0033_2_aqzbxx.jpg",
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Children's Playroom Reset",
    description: "Sorting scattered toys into purposeful, categorized bins that make cleanup time easy and fun for kids.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773933654/IMG-20260318-WA0035_4_qvyzpe.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773933790/IMG-20260318-WA0055_2_jvljbt.jpg",
    category: "Playroom",
    highlight: "Kid Friendly"
  },
  {
    id: 4,
    title: "Kitchen Counter Decluttering",
    description: "Removing visual clutter from countertops and creating functional zones for daily meal preparation.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773933990/IMG-20260318-WA0057_2_pa2b0x.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934064/IMG-20260318-WA0043_2_alxdcg.jpg",
    category: "Kitchen",
  },
  {
    id: 5,
    title: "Passage Way Clearance",
    description: "Opening up blocked hallways by removing stacked boxes and items to ensure safe, clear walkways.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934277/IMG-20260318-WA0063_1_n8snxl.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934348/IMG-20260318-WA0047_1_sqxbtt.jpg",
    category: "Hallway",
  },
  {
    id: 6,
    title: "Office Workspace Optimization",
    description: "Eliminating paper piles and disorganization to create a structured, focus-enhancing office environment.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934452/IMG-20260318-WA0059_2_o7aq58.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934569/IMG-20260318-WA0053_1_s0okjb.jpg",
    category: "Office",
    highlight: "Productivity Boost"
  },
  {
    id: 7,
    title: "Pantry & Dish Organization",
    description: "Systematic arrangement of dishes and pantry elements to maximize space and aesthetic appeal.",
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934665/IMG-20260318-WA0049_1_o5zvr4.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773934818/IMG-20260318-WA0051_1_ktzpzv.jpg",
    category: "Organization",
  }
];

const AdvancedBeforeAfter = () => {
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-24 relative bg-background overflow-hidden border-t border-border/40">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-background to-background -z-10" />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm uppercase tracking-wide mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Real Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Before & After Transformations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium"
          >
            See the dramatic difference a professional organizing session can make. We turn chaotic, stressful rooms into calm, functional spaces.
          </motion.p>
        </div>

        {/* Gallery Grid Format (Same as Gallery.tsx) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {declutteringProjects.map((project, index) => (
            <GalleryCard
              key={project.id}
              item={{ ...project, before: project.before, after: project.after }}
              index={index}
              categoryName={project.category}
              onViewClick={() => {
                setSelectedItem(project);
                setDialogOpen(true);
              }}
            />
          ))}
        </div>

        {/* Image Zoom Dialog */}
        <ImageZoomDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          item={selectedItem}
          categoryName={selectedItem?.category}
        />
      </div>
    </section>
  );
};

const DeclutteringOrganizing = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Decluttering & Organizing",
        title: "Decluttering & Organizing",
        seoTitle: "Decluttering & Organizing Services | Home Organization",
        seoDescription: "Professional decluttering and home organization services. We help you reclaim your space and create a more functional, stress-free home environment.",
        canonicalUrl: "https://riseandshinecs.com/services/decluttering-organizing",
        description:
          "A clean home starts with an organized space. At Rise & Shine Cleaning Services, our decluttering and organizing services are designed to bring order, function, and peace of mind back into your home. We help you clear the excess, create practical systems, and transform chaotic areas into spaces that feel calm, efficient, and easy to maintain.",
        images: [
          { src: declutterPantry, alt: "Organized pantry" },
          { src: declutterOrganized, alt: "Decluttered and organized space" },
        ],
        checklistTitle: "What We Offer",
        checklistSections: [
          {
            title: "Home Organization",
            items: [
              "Kitchens and pantries",
              "Closets and wardrobes",
              "Bedrooms and living areas",
              "Bathrooms and storage spaces",
              "Home offices and desks",
            ],
          },
          {
            title: "Decluttering Support",
            items: [
              "Sorting and categorizing items",
              "Creating keep, donate, and discard piles",
              "Practical storage solutions",
              "Easy-to-maintain organizing systems",
            ],
          },
          {
            title: "Move Preparation & Reset",
            items: [
              "Pre-move decluttering",
              "Unpacking and organizing in new homes",
              "Post-renovation or seasonal resets",
            ],
          },
        ],
        perfectFor: {
          title: "Our Approach",
          items: [
            "We work side-by-side with you to understand your needs, routines, and goals",
            "Systems that are neat, functional, and easy to maintain",
            "Personalized solutions tailored to your lifestyle",
          ],
        },
        extraSections: <AdvancedBeforeAfter />,
        whyChoose: {
          title: "Benefits of Decluttering & Organizing",
          items: [
            "Less stress and visual clutter",
            "More usable space in your home",
            "Easier daily routines",
            "A cleaner, more peaceful environment",
          ],
        },
        ctaTitle: "Transform Your Space Today",
        ctaDescription:
          "Let us help you turn overwhelmed spaces into organized, comfortable areas you can truly enjoy. Contact Rise & Shine Cleaning Services to schedule your decluttering and organizing session.",
      }}
    />
  );
};

export default DeclutteringOrganizing;
