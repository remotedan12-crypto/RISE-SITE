import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Brush, 
  Sun, 
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

import windowCleaning from "@/assets/services/window-cleaning.jpg";
import windowCommercial from "@/assets/services/window-commercial.jpg";

// Gallery images
import img1 from "@/assets/window_cleaning/IMG-20260514-WA0153(1).jpg";
import img2 from "@/assets/window_cleaning/IMG-20260514-WA0154(1).jpg";
import img3 from "@/assets/window_cleaning/IMG-20260514-WA0155(1).jpg";
import img4 from "@/assets/window_cleaning/IMG-20260514-WA0156.jpg";

const sliderImages = [
  img1,
  img2,
  img3,
  img4,
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
            Our Window Cleaning Gallery
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
          initialSlide={1}
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
                  alt={`Window cleaning sample ${index + 1}`}
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
  { icon: Sparkles, text: "Streak-free, crystal-clear interior and exterior glass" },
  { icon: Brush, text: "Detailed cleaning of window tracks, sills, and frames" },
  { icon: Sun, text: "Maximize natural light and improve the look of your home" },
  { icon: Eraser, text: "Removal of smudges, fingerprints, and hard water spots" },
  { icon: Star, text: "Polished finish that elevates your property's curb appeal" },
  { icon: Clock, text: "Fast and reliable service for homes and businesses" },
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
          At Rise & Shine Cleaning Services, we restore clarity and shine
          to your windows, completely transforming your view. Our careful process
          ensures every pane is spotless, so you can enjoy natural light at its finest.
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

const WindowCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Window Cleaning",
        title: "Window Cleaning",
        seoTitle: "Window Cleaning Services | Professional Glass Cleaning",
        seoDescription: "Crystal clear window cleaning for homes and businesses. We clean interior and exterior windows, tracks, and screens for a streak-free finish.",
        canonicalUrl: "https://riseandshinecs.com/services/window-cleaning",
        description:
          "Clean windows can completely transform the look and feel of a home or business. At Rise & Shine Cleaning Services, our professional window cleaning service removes dirt, streaks, and buildup to leave your windows crystal clear and full of natural light.",
        images: [
          { src: windowCleaning, alt: "Professional window cleaning" },
          { src: windowCommercial, alt: "Commercial window cleaning service" },
        ],
        checklistTitle: "What's Included in Window Cleaning",
        checklistIntro:
          "Our service focuses on clarity, detail, and a streak-free finish.",
        checklistSections: [
          {
            title: "Interior Window Cleaning",
            items: [
              "Clean and polish glass for a streak-free shine",
              "Wipe window sills and frames",
              "Remove fingerprints, dust, and smudges",
            ],
          },
          {
            title: "Exterior Window Cleaning",
            items: [
              "Remove dirt, pollen, and buildup from glass",
              "Clean accessible exterior windows",
              "Detail edges for a clear, polished finish",
            ],
          },
          {
            title: "Additional Options",
            items: [
              "Screen cleaning",
              "Window track detailing",
              "High or hard-to-reach windows (based on accessibility)",
            ],
          },
        ],
        perfectFor: {
          items: [
            "Homes and apartments",
            "Storefronts and offices",
            "Move-in or move-out cleaning",
            "Seasonal or annual maintenance",
            "Real estate listings and showings",
          ],
        },
        whyChoose: {
          title: "Why Choose Rise & Shine for Window Cleaning",
          items: [
            "Streak-free, professional results",
            "Careful attention to detail",
            "Reliable scheduling",
            "Insured and professional service",
          ],
        },
        ctaTitle: "Let Your Windows Shine Again",
        ctaDescription:
          "Clean windows brighten your space, improve curb appeal, and make a lasting impression. Contact us today for a window cleaning quote.",
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

export default WindowCleaning;