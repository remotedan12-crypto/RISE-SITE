import React from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { motion } from "framer-motion";
import { 
  Trash2, 
  Brush, 
  Sparkles, 
  Key, 
  CheckCircle, 
  Clock,
  MoveHorizontal
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Original service images for the layout
import moveoutHero from "@/assets/services/moveout-hero.jpg";
import moveoutKitchen from "@/assets/services/moveout-kitchen.jpg";
import cleanApartment from "@/assets/clean-apartment.jpg";

// Correct Move-Out Gallery images from your assets folder
import sliderImg1 from "@/assets/move_out_cleaning/IMG-20260514-WA0106(1).jpg";
import sliderImg2 from "@/assets/move_out_cleaning/IMG-20260514-WA0108.jpg";
import sliderImg3 from "@/assets/move_out_cleaning/IMG-20260514-WA0110.jpg";
import sliderImg4 from "@/assets/move_out_cleaning/IMG-20260514-WA0112.jpg";
import sliderImg5 from "@/assets/move_out_cleaning/IMG-20260514-WA0114.jpg";
import sliderImg6 from "@/assets/move_out_cleaning/IMG-20260514-WA0116.jpg";
import sliderImg7 from "@/assets/move_out_cleaning/IMG-20260514-WA0118.jpg";
import sliderImg8 from "@/assets/move_out_cleaning/IMG-20260514-WA0120.jpg";

const sliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
  sliderImg8,
];

const GallerySlider = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-center font-black text-4xl md:text-5xl uppercase tracking-wider text-gray-900 mb-6">
          Our Move-Out Gallery
        </h2>
        <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-6"></div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ delay: 0.3 }} 
        className="text-gray-500 text-sm uppercase tracking-widest text-center mb-10 flex items-center justify-center gap-2"
      >
        <MoveHorizontal size={16} /> Swipe to explore
      </motion.p>

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
                alt={`Move-out cleaning sample ${index + 1}`}
                loading="lazy"
                className="w-full h-[350px] md:h-[500px] object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const showcaseItems = [
  { icon: CheckCircle, text: "Ensuring properties are spotless for full deposit returns" },
  { icon: Clock, text: "Rapid turnover times for property managers and realtors" },
  { icon: Sparkles, text: "Intensive interior appliance and cabinet cleaning" },
  { icon: Trash2, text: "Removal of accumulated dust, dirt, and scuff marks" },
  { icon: Brush, text: "Revitalizing floors and carpets for the next resident" },
  { icon: Key, text: "Stress-free final walkthroughs with guaranteed quality" },
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
          Ready for the Next Resident
        </h3>

        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-600 mb-12">
          At Rise & Shine Cleaning Services, we take the stress out of moving. 
          Our detailed property turnovers guarantee a pristine environment 
          that leaves landlords happy and new tenants amazed.
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

const MoveOutCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Move-Out Cleaning",
        title: "Move-Out Cleaning",
        seoTitle: "Move-Out Cleaning Services | Fast Property Turnovers",
        seoDescription: "Professional move-out and property turnover cleaning. We help property managers and realtors reduce vacancy days with fast, detailed cleaning.",
        canonicalUrl: "https://riseandshinecs.com/services/move-out-cleaning",
        description:
          "Moving can be stressful, and the last thing you want to worry about is cleaning the entire property before you hand over the keys. At Rise & Shine Cleaning Services, we provide thorough, reliable move-out and turnover cleaning designed to leave the space spotless and ready for the next resident.",
        images: [
          { src: moveoutHero, alt: "Professional move-out cleaning" },
          { src: moveoutKitchen, alt: "Kitchen deep cleaning" },
          { src: cleanApartment, alt: "Clean apartment ready for move-in" },
        ],
        checklistTitle: "What's Included in a Move-Out Cleaning",
        checklistIntro:
          "Our move-out service is a top-to-bottom deep cleaning of the entire property, including:",
        checklistSections: [
          {
            title: "Kitchen",
            items: [
              "Clean inside and outside of cabinets and drawers",
              "Wipe down countertops and backsplash",
              "Clean sink and fixtures",
              "Exterior of appliances",
              "Inside oven, refrigerator, and microwave (if requested)",
              "Mop and sanitize floors",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Scrub and disinfect toilets, tubs, and showers",
              "Clean sinks, vanities, and mirrors",
              "Wipe cabinets and drawers",
              "Sanitize all surfaces",
              "Mop and disinfect floors",
            ],
          },
          {
            title: "Bedrooms & Living Areas",
            items: [
              "Dust all surfaces, shelves, and baseboards",
              "Wipe doors, frames, and light switches",
              "Clean inside closets",
              "Vacuum and mop all floors",
            ],
          },
          {
            title: "Throughout the Home",
            items: [
              "Remove cobwebs",
              "Clean interior windows and tracks",
              "Wipe down vents and fixtures",
              "Final walkthrough for a polished finish",
            ],
          },
        ],
        perfectFor: {
          items: [
            "Tenants moving out of a rental",
            "Homeowners preparing to sell",
            "Property managers and leasing offices",
            "Realtors preparing listings",
            "Post-renovation or vacant properties",
          ],
        },
        whyChoose: {
          title: "Why Choose Rise & Shine for Move-Out Cleaning",
          items: [
            "Reliable scheduling to meet move-out deadlines",
            "Detailed, checklist-based cleaning",
            "Professional and insured service",
            "Trusted by homeowners, realtors, and property managers",
          ],
        },
        ctaTitle: "Ready for a Stress-Free Move-Out?",
        ctaDescription:
          "Contact us today for a move-out cleaning quote and let us handle the final clean while you focus on your move.",
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

export default MoveOutCleaning;