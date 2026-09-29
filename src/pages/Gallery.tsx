import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryCard from "@/components/gallery/GalleryCard";
import GalleryProcess from "@/components/gallery/GalleryProcess";
import ImageZoomDialog from "@/components/gallery/ImageZoomDialog";

// Import images
import beforeToilet from "@/assets/before-toilet.jpg";
import afterToilet from "@/assets/after-toilet.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";
import beforeOven from "@/assets/before-oven.jpg";
import afterOven from "@/assets/after-oven.jpg";
import beforeTile from "@/assets/before-tile.jpg";
import afterTile from "@/assets/after-tile.jpg";
import beforeShower from "@/assets/before-shower.jpg";
import afterShower from "@/assets/after-shower.jpg";

interface BeforeAfterItem {
  id: number;
  before: string;
  after: string;
  title: string;
  description: string;
  category: string;
  highlight?: string;
}

const categories = [
  { id: "all", name: "All Projects" },
  { id: "bathroom", name: "Bathroom" },
  { id: "kitchen", name: "Kitchen" },
  { id: "living", name: "Living Areas" },
  { id: "laundry", name: "Laundry" },
  { id: "appliances", name: "Appliances" },
];

const items: BeforeAfterItem[] = [
  {
    id: 1,
    before: beforeToilet,
    after: afterToilet,
    title: "Deep Toilet Restoration",
    description: "Complete sanitization and removal of stubborn stains, mineral deposits, and bacteria for a like-new finish.",
    category: "bathroom",
    highlight: "Most Popular",
  },
  {
    id: 3,
    before: beforeLiving,
    after: afterLiving,
    title: "Floor Stain Removal",
    description: "Professional Tiles cleaning removes deep stains, pet odors, and embedded dirt for tenant-ready floors.",
    category: "living",
  },
  {
    id: 4,
    before: beforeTile,
    after: afterTile,
    title: "Bathroom Tile & Grout",
    description: "Professional tile restoration and grout whitening that eliminates mold, mildew, and years of discoloration.",
    category: "bathroom",
  },
  {
    id: 5,
    before: beforeOven,
    after: afterOven,
    title: "Bathroom Sink Deep Cleaning",
    description: "Complete degreasing and interior restoration.",
    category: "living",
    highlight: "Before Move-In",
  },
  {
    id: 6,
    before: beforeShower,
    after: afterShower,
    title: "Bedroom Restoration",
    description: "Hard water stain removal and glass polishing that restores crystal clarity to shower enclosures.",
    category: "living",
  },
  {
    id: 9,
    before: beforeLiving,
    after: afterLiving,
    title: "Commercial Office Detail",
    description: "Deep carpet cleaning and sanitizing workstations for a productive environment.",
    category: "living",
  },

  // ==========================================
  // REAL KITCHEN TRANSFORMATIONS
  // ==========================================
  {
    id: 10,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773935864/IMG-20260319-WA0016_2_o9zh1s.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773935942/IMG-20260319-WA0015_2_boqdu7.jpg",
    title: "Stovetop Deep Degrease",
    description: "Complete removal of heavy grease, burnt-on food, and stubborn splatters to restore the original shine.",
    category: "kitchen",
    highlight: "Featured",
  },
  {
    id: 11,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936053/IMG-20260319-WA0018_3_qfulax.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936131/IMG-20260319-WA0019_1_n4jmb8.jpg",
    title: "Countertop Revitalization",
    description: "Thorough sanitization and polishing of kitchen surfaces, eliminating stains and sticky residues.",
    category: "kitchen",
  },
  {
    id: 12,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936215/IMG-20260319-WA0022_1_jwrsf0.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936262/IMG-20260319-WA0021_1_b4to7u.jpg",
    title: "Cabinet Interior Scrub",
    description: "Detailed wipedown of cabinet shelves and drawers to prepare the kitchen for its new occupants.",
    category: "kitchen",
  },
  {
    id: 13,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936393/IMG-20260319-WA0024_1_ggum49.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936394/IMG-20260319-WA0023_1_xdx0e6.jpg",
    title: "Oven Grime Removal",
    description: "Heavy-duty cleaning of the oven interior, safely lifting baked-on carbon without toxic fumes.",
    category: "kitchen",
  },
  {
    id: 14,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936493/IMG-20260319-WA0025_1_vfq4mz.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936493/IMG-20260319-WA0026_1_ouaiga.jpg",
    title: "Appliance Polish & Shine",
    description: "Streak-free polishing of exterior appliances, wiping away fingerprints and hard water spots.",
    category: "kitchen",
    highlight: "Move-Out Clean",
  },
  {
    id: 15,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936671/IMG-20260319-WA0027_1_drrimw.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936671/IMG-20260319-WA0028_1_yqci3j.jpg",
    title: "Kitchen Sink Descaling",
    description: "Elimination of tough mineral buildup around the sink basin and faucet fixtures.",
    category: "kitchen",
  },
  {
    id: 16,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936672/IMG-20260319-WA0029_1_tsvxht.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936672/IMG-20260319-WA0030_1_wnwfij.jpg",
    title: "Backsplash Deep Clean",
    description: "Detailed scrubbing of the tile backsplash to remove unnoticed oil droplets and cooking remnants.",
    category: "kitchen",
  },
  {
    id: 17,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936677/IMG-20260319-WA0031_1_y3evig.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773936678/IMG-20260319-WA0032_1_bbzqj9.jpg",
    title: "Corner & Baseboard Detail",
    description: "Intensive cleaning of tight kitchen corners and baseboards where dust and crumbs hide.",
    category: "kitchen",
  },

  // ==========================================
  // LAUNDRY TRANSFORMATIONS
  // ==========================================
  {
    id: 18,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773937374/IMG-20260319-WA0058_vapgto.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773937373/IMG-20260319-WA0059_jniwp0.jpg",
    title: "Laundry Room Deep Clean",
    description: "Complete removal of lint buildup, detergent spills, and grime from surfaces and machines.",
    category: "laundry",
    highlight: "New",
  },
  {
    id: 19,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773937373/IMG-20260319-WA0035_pn5487.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773937373/IMG-20260319-WA0036_nbzmsx.jpg",
    title: "Washer Exterior Polish",
    description: "Detailed wipedown of laundry appliances, removing hard water stains and soap scum.",
    category: "laundry",
  },
  {
    id: 20,
    before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773937373/IMG-20260319-WA0060_r60yti.jpg",
    after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773937374/IMG-20260319-WA0061_ngqkt1.jpg",
    title: "Laundry Floor Restoration",
    description: "Intensive scrubbing of laundry room floors, lifting embedded dirt and restoring original color.",
    category: "laundry",
  },


// ==========================================
// BATHROOM TRANSFORMATIONS (UPDATED)
// ==========================================
{
  id: 21,
  before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938234/IMG-20260319-WA0038_e4tlsw.jpg",
  after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938233/IMG-20260319-WA0042_fajqhu.jpg",
  title: "Full Bathroom Deep Clean",
  description: "Complete removal of grime, bacteria, and buildup across all surfaces, restoring a fresh and hygienic space.",
  category: "bathroom",
  highlight: "Featured",
},
{
  id: 22,
  before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938233/IMG-20260319-WA0037_uurizo.jpg",
  after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938232/IMG-20260319-WA0097_cwytmj.jpg",
  title: "Shower & Wall Restoration",
  description: "Elimination of soap scum, limescale, and stains from tiles and fixtures for a spotless finish.",
  category: "bathroom",
},
{
  id: 23,
  before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938231/IMG-20260319-WA0053_fzlss9.jpg",
  after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938231/IMG-20260319-WA0051_hd8khk.jpg",
  title: "Bathtub Deep Restoration",
  description: "Heavy-duty scrubbing to remove embedded stains and restore the tub’s original brightness.",
  category: "bathroom",
},
{
  id: 24,
  before: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938227/IMG-20260319-WA0048_j4uvo6.jpg",
  after: "https://res.cloudinary.com/dsyjitfzq/image/upload/v1773938221/IMG-20260319-WA0072_whp64r.jpg",
  title: "Sink & Fixture Detail",
  description: "Precision cleaning of sink areas and fixtures, removing water stains and hidden dirt buildup.",
  category: "bathroom",
  highlight: "Move-Out Clean",
},


];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredItems = activeCategory === "all"
    ? items
    : items.filter(item => item.category === activeCategory);

  const getCategoryName = (categoryId: string) =>
    categories.find(c => c.id === categoryId)?.name;

  return (
    <Layout>
      <SEO 
        title="Cleaning Before & After Gallery | See Our Results"
        description="Browse our project gallery to see the dramatic cleaning transformations. Before and after photos of kitchens, bathrooms, and property turnovers."
        canonicalUrl="https://riseandshinecs.com/gallery"
      />
      <GalleryHero />

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border/50 sticky top-20 z-40 backdrop-blur-md">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                categoryName={getCategoryName(item.category)}
                onViewClick={() => {
                  setSelectedItem(item);
                  setDialogOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Dialog */}
      <ImageZoomDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        item={selectedItem}
        categoryName={selectedItem ? getCategoryName(selectedItem.category) : undefined}
      />

      <GalleryProcess />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container-wide">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Property Transformation?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join hundreds of property managers who trust Rise & Shine for their turnover cleaning needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="shadow-xl" trackingName="Gallery Footer - Get Quote">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link to="/checklist">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground" trackingName="Gallery Footer - View Checklist">
                  View Our Checklist
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
