import ServicePageLayout from "@/components/services/ServicePageLayout";
import recurringLiving from "@/assets/services/recurring-living.jpg";
import recurringKitchen from "@/assets/services/recurring-kitchen.jpg";

const RecurringCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Recurring Residential Cleaning",
        title: "Recurring Residential Cleaning",
        seoTitle: "Recurring Residential Cleaning | Weekly & Biweekly",
        seoDescription: "Keep your home consistently clean with our recurring cleaning services. Flexible weekly, biweekly, or monthly schedules to fit your lifestyle.",
        canonicalUrl: "https://riseandshinecs.com/services/recurring-cleaning",
        description:
          "At Rise & Shine Cleaning Services, our recurring residential cleaning is designed to keep your home consistently clean, fresh, and comfortable. With flexible scheduling and reliable service, we help busy families and homeowners maintain a spotless space without the stress.",
        images: [
          { src: recurringLiving, alt: "Clean living room" },
          { src: recurringKitchen, alt: "Kitchen countertop cleaning" },
        ],
        scheduleOptions: [
          {
            title: "Weekly Cleaning",
            description:
              "Ideal for busy households that want their home consistently clean and organized.",
          },
          {
            title: "Biweekly Cleaning",
            description:
              "Our most popular option, perfect for maintaining a clean and comfortable home.",
          },
          {
            title: "Monthly Cleaning",
            description:
              "A great choice for lighter-use homes or those who want regular upkeep.",
          },
        ],
        checklistTitle: "What's Included in Recurring Cleaning",
        checklistSections: [
          {
            title: "Kitchen",
            items: [
              "Wipe countertops and backsplash",
              "Clean sink and fixtures",
              "Exterior of appliances",
              "Wipe cabinet fronts",
              "Vacuum and mop floors",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Scrub and disinfect toilets, tubs, and showers",
              "Clean sinks, vanities, and mirrors",
              "Sanitize surfaces and fixtures",
              "Mop and disinfect floors",
            ],
          },
          {
            title: "Bedrooms & Living Areas",
            items: [
              "Dust surfaces, furniture, and décor",
              "Wipe high-touch areas (light switches, handles)",
              "Make beds (if requested)",
              "Vacuum carpets and rugs",
              "Mop hard floors",
            ],
          },
          {
            title: "General Areas",
            items: [
              "Empty trash bins",
              "Light tidying of surfaces",
              "Final walkthrough for a fresh, polished finish",
            ],
          },
        ],
        whyChoose: {
          title: "Why Choose Recurring Service",
          items: [
            "A consistently clean and comfortable home",
            "Less buildup, easier maintenance",
            "Reliable, scheduled service you can count on",
            "More time for family, work, and relaxation",
          ],
        },
        ctaTitle: "Let Us Keep Your Home Spotless",
        ctaDescription:
          "Let us handle the cleaning so you can enjoy your home. Contact Rise & Shine Cleaning Services today to set up your recurring schedule.",
      }}
    />
  );
};

export default RecurringCleaning;
