import ServicePageLayout from "@/components/services/ServicePageLayout";
import moveoutHero from "@/assets/services/moveout-hero.jpg";
import recurringLiving from "@/assets/services/recurring-living.jpg";
import qualityCheck from "@/assets/quality-check.jpg";

const AirbnbCleaning = () => {
  return (
    <ServicePageLayout
      data={{
        heroTag: "Airbnb Cleaning",
        title: "Airbnb & Vacation Rental Cleaning",
        description:
          "Keep your vacation rental guests happy and your reviews sparkling with our specialized Airbnb and short-term rental cleaning services. We understand the fast-paced nature of vacation rentals and deliver turnover services that exceed guest expectations.",
        images: [
          { src: moveoutHero, alt: "Pristine vacation rental property" },
          { src: recurringLiving, alt: "Airbnb living room setup" },
          { src: qualityCheck, alt: "Airbnb quality spot check" },
        ],
        checklistTitle: "Our Vacation Rental Turnover Checklist",
        checklistIntro:
          "We treat every turnover like it's a 5-star hotel opening. Here is how we ensure your property is guest-ready.",
        checklistSections: [
          {
            title: "Reset & Restock",
            items: [
              "Launder and swap all linens and towels",
              "Make beds to hotel standards",
              "Restock essentials (toilet paper, soap, coffee, etc.)",
              "Check for missing items or damages and report to host",
              "Reset furniture to standard layout",
            ],
          },
          {
            title: "Kitchen & Dining",
            items: [
              "Deep clean sinks and countertops",
              "Run dishwasher and put away clean dishes",
              "Wipe down exterior of all appliances",
              "Check fridge and toss left-behind food",
              "Clean coffee maker and microwave interior",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Sanitize tubs, showers, toilets, and sinks",
              "Remove all water spots from glass and mirrors",
              "Wipe down baseboards and floor edges",
              "Fold towels neatly (origami styles available)",
            ],
          },
          {
            title: "General Living Spaces",
            items: [
              "Dust all surfaces, TVs, and baseboards",
              "Vacuum all rugs and carpets thoroughly",
              "Mop all hard floors",
              "Clean smudges off windows and sliding doors",
            ],
          },
        ],
        perfectFor: {
          title: "The Hosts We Serve",
          items: [
            "Airbnb and VRBO hosts",
            "Short-term rental investors",
            "Property management companies",
            "Boutique vacation rentals",
          ],
        },
        whyChoose: {
          items: [
            "Fast turnarounds for same-day check-ins",
            "Damage and low inventory reporting",
            "Reliable scheduling you can depend on",
            "Hotel-grade cleaning standards",
          ],
        },
        ctaTitle: "Elevate Your Rental's Reviews",
        ctaDescription:
          "A spotless rental means 5-star reviews and repeat bookings. Schedule your turnover cleaning today.",
      }}
    />
  );
};

export default AirbnbCleaning;
