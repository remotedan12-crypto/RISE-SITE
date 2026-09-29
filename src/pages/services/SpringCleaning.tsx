import ServicePageLayout from "@/components/services/ServicePageLayout";
import deepCleaningHero from "@/assets/services/deep-cleaning-hero.jpg";
import declutterOrganized from "@/assets/services/declutter-organized.jpg";
import qualityCheck from "@/assets/quality-check.jpg";

const SpringCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Spring Cleaning",
        title: "Seasonal Spring Cleaning",
        description:
          "Shake off the dust of the seasons and deeply refresh your living spaces. Our seasonal spring cleaning is an intensive, top-to-bottom scrub designed to reset your home environment, whether it's actually springtime or just time for a major reset.",
        images: [
          { src: deepCleaningHero, alt: "Top-to-bottom spring cleaning" },
          { src: declutterOrganized, alt: "Organized and deeply cleaned space" },
          { src: qualityCheck, alt: "Thorough quality inspection" },
        ],
        checklistTitle: "Our Comprehensive Spring Clean Approach",
        checklistIntro:
          "Spring cleaning means hitting the tough spots. We reach the high corners, the low baseboards, and everywhere in between.",
        checklistSections: [
          {
            title: "Whole Home Refresh",
            items: [
              "Wipe down all baseboards, doors, and doorframes",
              "Dust and wipe ceiling fans and light fixtures",
              "Remove dust and cobwebs reaching up to vaulted ceilings",
              "Clean window sills, tracks, and interior glass",
              "Vacuum upholstered furniture and under cushions",
            ],
          },
          {
            title: "Deep Kitchen Sanitize",
            items: [
              "Deep clean stovetop and oven exterior",
              "Clean inside the microwave and behind small appliances",
              "Wipe down all cabinet fronts and hardware",
              "Scrub sink and polish all metal fixtures",
            ],
          },
          {
            title: "Intensive Bathroom Scrub",
            items: [
              "Eradicate mold/mildew buildup around tubs and showers",
              "Deep scrub grout lines in easily accessible areas",
              "Sanitize toilets, paying special attention to the base and behind",
              "Clean inside empty drawers/cabinets (if requested)",
            ],
          },
        ],
        perfectFor: {
          title: "When to Book a Spring Cleaning",
          items: [
            "The traditional 'Spring Cleaning' season reset",
            "Preparing your home for holiday guests",
            "Getting ready to host a major event or party",
            "Whenever standard cleaning isn't cutting it anymore",
          ],
        },
        whyChoose: {
          items: [
            "Heavy-duty cleaning for forgotten spaces",
            "Specialized equipment and products for tough grime",
            "Tailored checklists so we focus on your priorities",
            "Creates a healthier, allergen-reduced environment",
          ],
        },
        ctaTitle: "Ready for a Fresh Start?",
        ctaDescription:
          "Breathe easier with a deeply refreshed home. Contact us today to schedule your intensive seasonal spring cleaning.",
      }}
    />
  );
};

export default SpringCleaning;
