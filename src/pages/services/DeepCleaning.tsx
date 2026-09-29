import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { motion } from "framer-motion";
import { 
  Trash2, 
  Brush, 
  Sparkles, 
  Star, 
  Home, 
  MoveHorizontal,
  Droplets
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import deepCleaningHero from "@/assets/services/deep-cleaning-hero.jpg";
import deepCleaningBathroom from "@/assets/services/deep-cleaning-bathroom.jpg";
import qualityCheck from "@/assets/quality-check.jpg";

// Gallery images
import img1 from "@/assets/deep_cleaning/photo_5785185334579629498_w.jpg";
import img2 from "@/assets/deep_cleaning/photo_5785185334579629500_w.jpg";
import img3 from "@/assets/deep_cleaning/photo_5785185334579629501_w.jpg";
import img4 from "@/assets/deep_cleaning/photo_5785185334579629503_w.jpg";
import img5 from "@/assets/deep_cleaning/photo_5785185334579629504_w.jpg";
import img6 from "@/assets/deep_cleaning/photo_5785185334579629505_w.jpg";

const sliderImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
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
            Our Deep Cleaning Gallery
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
          initialSlide={2}
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
                  alt={`Deep cleaning sample ${index + 1}`}
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
  { icon: Trash2, text: "Removal of built-up dirt, grime, and hidden dust" },
  { icon: Brush, text: "Detailed scrubbing of baseboards, trim, and fixtures" },
  { icon: Sparkles, text: "Intensive kitchen, bathroom, and floor sanitization" },
  { icon: Droplets, text: "Elimination of stubborn soap scum and hard water stains" },
  { icon: Star, text: "Polishing of surfaces to restore their original shine" },
  { icon: Home, text: "Revitalizing neglected spaces for a healthier home environment" },
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
          At Rise & Shine Cleaning Services, we transform neglected spaces
          into pristine, spotless environments. From intensive scrubbing to 
          final detailing, our team ensures every surface reflects the
          true quality of a thorough deep clean.
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

const DeepCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Deep Cleaning",
        title: "Deep Cleaning",
        seoTitle: "Deep Cleaning Services | Detailed Home & Office Clean",
        seoDescription: "Get a thorough deep clean for your home or business. Our intensive cleaning tackles built-up grime in kitchens, bathrooms, and living spaces.",
        canonicalUrl: "https://riseandshinecs.com/services/deep-cleaning",
        description:
          "Sometimes your home or business needs more than just a quick surface clean. Our deep cleaning service is designed to tackle built-up dirt, grime, and hidden dust, leaving your space truly refreshed from top to bottom. At Rise & Shine Cleaning Services, deep cleaning is one of our specialties.",
        images: [
          { src: deepCleaningHero, alt: "Professional deep cleaning service" },
          { src: deepCleaningBathroom, alt: "Bathroom deep cleaning" },
          { src: qualityCheck, alt: "Quality inspection after deep cleaning" },
        ],
        checklistTitle: "What's Included in a Deep Cleaning",
        checklistIntro:
          "Our deep cleaning goes beyond standard maintenance and focuses on high-touch and often-overlooked areas.",
        checklistSections: [
          {
            title: "Kitchen",
            items: [
              "Scrub countertops and backsplash",
              "Clean exterior of appliances",
              "Deep clean sink and fixtures",
              "Wipe down cabinet fronts",
              "Clean inside microwave",
              "Detail edges, corners, and baseboards",
              "Vacuum and mop floors",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Scrub and disinfect tubs, showers, and toilets",
              "Remove soap scum and buildup",
              "Clean sinks, vanities, and mirrors",
              "Wipe cabinets and fixtures",
              "Sanitize all surfaces",
              "Detail baseboards and edges",
              "Mop and disinfect floors",
            ],
          },
          {
            title: "Bedrooms & Living Areas",
            items: [
              "Dust all surfaces, shelves, and décor",
              "Clean light switches, door handles, and high-touch areas",
              "Wipe doors and frames",
              "Dust baseboards and vents",
              "Vacuum and mop all floors",
            ],
          },
          {
            title: "Additional Detail Work",
            items: [
              "Remove cobwebs",
              "Dust ceiling fans and light fixtures",
              "Clean window sills and tracks",
              "Focus on corners, edges, and buildup areas",
            ],
          },
        ],
        perfectFor: {
          title: "When to Book a Deep Cleaning",
          items: [
            "First-time professional cleaning",
            "Seasonal or spring cleaning",
            "After a busy period or special event",
            "Before starting recurring maintenance service",
            "Preparing for guests or holidays",
          ],
        },
        whyChoose: {
          items: [
            "Thorough, detail-focused approach",
            "Reliable and professional team",
            "Insured service for your peace of mind",
            "Customized cleaning based on your needs",
          ],
        },
        ctaTitle: "Experience the Deep Clean Difference",
        ctaDescription:
          "A deep cleaning doesn't just make your space look better—it makes it feel fresher, healthier, and more comfortable. Schedule your deep cleaning today.",
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

export default DeepCleaning;