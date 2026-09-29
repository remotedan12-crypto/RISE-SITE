import ServicePageLayout from "@/components/services/ServicePageLayout";
import recurringLiving from "@/assets/services/recurring-living.jpg";
import recurringKitchen from "@/assets/services/recurring-kitchen.jpg";
import qualityCheck from "@/assets/quality-check.jpg";

const StandardCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Standard Cleaning",
        title: "Standard House Cleaning",
        description:
          "Maintain a fresh, welcoming home with our comprehensive standard house cleaning service. Perfect for regular upkeep, our standard clean ensures your living spaces remain tidy, sanitized, and comfortable for you and your family.",
        images: [
          { src: recurringLiving, alt: "Clean and tidy living room" },
          { src: recurringKitchen, alt: "Spotless kitchen counters" },
          { src: qualityCheck, alt: "Quality inspection for standard cleaning" },
        ],
        checklistTitle: "What's Included in a Standard Clean",
        checklistIntro:
          "Our standard cleaning keeps your home beautiful and hygienic by covering all the essential surfaces and rooms.",
        checklistSections: [
          {
            title: "Living Areas & Bedrooms",
            items: [
              "Dust surfaces, furniture, and décor",
              "Vacuum carpets and rugs",
              "Mop hard floors",
              "Wipe down mirrors and glass fixtures",
              "Empty wastebaskets",
              "Make beds (upon request)",
            ],
          },
          {
            title: "Kitchen",
            items: [
              "Wipe down exterior of appliances",
              "Clean countertops and sink",
              "Clean inside the microwave",
              "Vacuum and mop floor",
              "Empty trash",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Scrub and sanitize toilets, showers, and tubs",
              "Clean vanity and mirrors",
              "Mop floors",
              "Restock supplies (if provided)",
            ],
          },
        ],
        perfectFor: {
          title: "When to Book a Standard Cleaning",
          items: [
            "Weekly or bi-weekly home maintenance",
            "Keeping your home consistently clean and fresh",
            "General upkeep between deeper cleanings",
            "Saving time for busy professionals and families",
          ],
        },
        whyChoose: {
          items: [
            "Trusted, background-checked professionals",
            "Consistent quality with every visit",
            "Eco-friendly cleaning supplies available upon request",
            "Flexible scheduling that works for you",
          ],
        },
        ctaTitle: "Experience a Consistently Clean Home",
        ctaDescription:
          "Let us handle the chores so you can enjoy your free time. Book your standard house cleaning today.",
      }}
    />
  );
};

export default StandardCleaning;
