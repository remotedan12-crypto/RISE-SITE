import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { motion } from "framer-motion";
import { 
  Trash2, 
  Brush, 
  Sparkles, 
  Eraser, 
  Star, 
  Clock,
  MoveHorizontal
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Original service images
import postConstructionDust from "@/assets/services/post-construction-dust.jpg";
import postConstructionClean from "@/assets/services/post-construction-clean.jpg";
import postConstructionTidy from "@/assets/services/post-construction-tidy.jpg";

// Gallery images
import img1 from "@/assets/post_construction/photo_5780483947413311198_w.jpg";
import img2 from "@/assets/post_construction/photo_5780483947413311203_w.jpg";
import img3 from "@/assets/post_construction/photo_5780483947413311204_w.jpg";
import img4 from "@/assets/post_construction/photo_5780483947413311205_w.jpg";
import img5 from "@/assets/post_construction/photo_5780483947413311206_w.jpg";
import img6 from "@/assets/post_construction/photo_5780483947413311207_w.jpg";
import img7 from "@/assets/post_construction/photo_5780483947413311209_w.jpg";
import img8 from "@/assets/post_construction/photo_5780483947413311210_w.jpg";
import img9 from "@/assets/post_construction/photo_5780483947413311211_w.jpg";
import img10 from "@/assets/post_construction/photo_5780483947413311212_w.jpg";
import img11 from "@/assets/post_construction/photo_5780483947413311214_w.jpg";
import img12 from "@/assets/post_construction/photo_5780483947413311215_w.jpg";
import img13 from "@/assets/post_construction/photo_5780483947413311217_w.jpg";

const sliderImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

const GallerySlider = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center font-black text-4xl md:text-5xl uppercase tracking-wider text-gray-900 mb-6">
            Our Post-Construction Gallery
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }} 
            className="text-gray-500 text-sm uppercase tracking-widest text-center mb-10 flex items-center justify-center gap-2"
          >
            <MoveHorizontal size={16} /> Swipe to explore
          </motion.p>
        </motion.div>

        <Swiper
          modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={0}
          className="w-full pb-12"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index} className="max-w-[320px] sm:max-w-[400px] md:max-w-[600px]">
              <div className="p-2 md:p-3 bg-white border border-gray-200 rounded-lg shadow-xl">
                <img
                  src={src}
                  alt={`Post-construction cleaning sample ${index + 1}`}
                  loading="lazy"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-sm"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const showcaseItems = [
  { icon: Trash2, text: "Complete dust and debris removal from all surfaces" },
  { icon: Brush, text: "Detailed cleaning of baseboards, trim, vents, and fixtures" },
  { icon: Sparkles, text: "Kitchen, bathroom, and floor deep-clean finishing" },
  { icon: Eraser, text: "Sticker, adhesive, and residue removal" },
  { icon: Star, text: "Inspection-ready final polishing" },
  { icon: Clock, text: "Fast turnaround for builders, homeowners, and project managers" },
];

const WorkShowcase = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-center font-bold text-3xl mb-6 text-gray-900">
          Exceptional Results You Can See
        </h3>

        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-600 mb-12">
          At Rise & Shine Cleaning Services, we transform post-construction chaos
          into polished, spotless, move-in-ready environments. From fine dust
          removal to final detailing, our team ensures every surface reflects the
          true quality of your newly completed project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                  <Icon size={28} />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

const PostConstructionCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Post-Construction Cleaning",
        title: "Post-Construction Cleaning",
        seoTitle:
          "Post-Construction Cleaning | Professional Site Cleanup Services",
        seoDescription:
          "Expert post-construction cleaning for new builds and renovations. We remove dust, debris, stickers, and residue to make your project move-in ready.",
        canonicalUrl:
          "https://riseandshinecs.com/services/post-construction-cleaning",

        description:
          "After construction or renovation, a project may appear complete—but hidden dust, debris, residue, and post-build mess often remain. At Rise & Shine Cleaning Services, we specialize in transforming newly built or remodeled properties into spotless, polished, move-in-ready spaces through detailed, professional post-construction cleaning.",

        images: [
          {
            src: postConstructionDust,
            alt: "Construction dust settlement",
          },
          {
            src: postConstructionClean,
            alt: "Post-construction cleaning service",
          },
          {
            src: postConstructionTidy,
            alt: "Tidy finished space after construction cleaning",
          },
        ],

        checklistTitle: "What's Included in Post-Construction Cleaning",

        checklistIntro:
          "Our comprehensive service targets every layer of construction dust, residue, and debris—ensuring your property is fresh, polished, and ready for occupancy.",

        checklistSections: [
          {
            title: "General Areas",
            items: [
              "Remove dust from walls, ceilings, baseboards, and trim",
              "Wipe doors, frames, handles, and light switches",
              "Clean vents, fixtures, and ceiling fans",
              "Vacuum, sweep, and mop all flooring surfaces",
            ],
          },
          {
            title: "Kitchen",
            items: [
              "Wipe and polish countertops and backsplashes",
              "Clean inside and outside of cabinets and drawers",
              "Clean sinks, faucets, and fixtures",
              "Exterior appliance cleaning",
              "Remove dust from corners, surfaces, and finishes",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Scrub and sanitize toilets, tubs, and showers",
              "Clean mirrors, sinks, vanities, and fixtures",
              "Wipe cabinets and drawers",
              "Mop and disinfect floors",
            ],
          },
          {
            title: "Detail Work",
            items: [
              "Clean interior windows, glass, and tracks",
              "Remove stickers, labels, and adhesive residue",
              "Final surface wipe-down for polished presentation",
            ],
          },
        ],

        perfectFor: {
          items: [
            "Newly built homes",
            "Renovated kitchens and bathrooms",
            "Commercial construction projects",
            "Property flips and remodels",
            "Pre-inspection and move-in preparation",
          ],
        },

        whyChoose: {
          items: [
            "Reliable scheduling that aligns with project deadlines",
            "Detailed, checklist-driven service",
            "Professional and insured cleaning specialists",
            "Trusted by contractors, builders, and property managers",
          ],
        },

        ctaTitle: "From Dusty Job Site to Move-In Ready",

        ctaDescription:
          "We take pride in transforming construction zones into beautifully finished spaces. Let Rise & Shine Cleaning Services handle the final stage of your project with precision, professionalism, and spotless results.",
          
        extraSections: (
          <>
            <GallerySlider />
            <WorkShowcase />
          </>
        ),
      }}
    />
  );
};

export default PostConstructionCleaning;
