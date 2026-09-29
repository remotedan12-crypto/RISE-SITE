import ServicePageLayout from "@/components/services/ServicePageLayout";
import moveoutHero from "@/assets/services/moveout-hero.jpg";
import moveoutKitchen from "@/assets/services/moveout-kitchen.jpg";
import qualityCheck from "@/assets/quality-check.jpg";

const MoveInCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Move-In Cleaning",
        title: "Move-In Cleaning Services",
        description:
          "Moving into a new home is an exciting milestone, but cleaning up after previous occupants shouldn't be on your to-do list. Our move-in cleaning services ensure your new space is deeply sanitized, spotless, and truly ready for a fresh start.",
        images: [
          { src: moveoutHero, alt: "Spotless empty home ready for move-in" },
          { src: moveoutKitchen, alt: "Sanitized empty kitchen cupboards" },
          { src: qualityCheck, alt: "Detailed move-in inspection" },
        ],
        checklistTitle: "What's Included in a Move-In Cleaning",
        checklistIntro:
          "Before you unpack your boxes, let our team scrub every inch of your new home. This deep clean focuses on areas usually covered by furniture.",
        checklistSections: [
          {
            title: "Kitchen",
            items: [
              "Deep clean inside and outside of all cabinets and drawers",
              "Sanitize countertops and backsplashes",
              "Scrub and polish sinks and fixtures",
              "Clean inside the refrigerator, oven, and microwave",
              "Wipe down baseboards and sweep/mop floors",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Deep clean and disinfect tubs, showers, and toilets",
              "Scrub away any left-behind soap scum or mildew",
              "Clean inside vanities and medicine cabinets",
              "Polish mirrors, hardware, and fixtures",
            ],
          },
          {
            title: "Bedrooms & Living Areas",
            items: [
              "Thoroughly vacuum carpets, especially edges",
              "Wash all hard floors",
              "Wipe down all baseboards, window sills, and door frames",
              "Clean interior windows (reachable) and blinds",
              "Remove dust and cobwebs from ceilings and corners",
            ],
          },
        ],
        perfectFor: {
          title: "When to Book a Move-In Cleaning",
          items: [
            "Before unpacking boxes in your newly purchased home",
            "Transitioning into a new apartment or rental",
            "After post-purchase renovations are complete",
            "When you want peace of mind that a new space is hygienic",
          ],
        },
        whyChoose: {
          items: [
            "Detailed cleaning inside cabinets and appliances",
            "Trained professionals who don't cut corners",
            "Flexible scheduling around your moving dates",
            "100% satisfaction guarantee",
          ],
        },
        ctaTitle: "Start Fresh in Your New Home",
        ctaDescription:
          "Make sure your new home feels like yours from day one. Book our move-in cleaning services before the moving truck arrives.",
      }}
    />
  );
};

export default MoveInCleaning;
