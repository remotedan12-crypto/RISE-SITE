
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Industries from "./pages/Industries";
import Checklist from "./pages/Checklist";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MoveOutCleaning from "./pages/services/MoveOutCleaning";
import DeepCleaning from "./pages/services/DeepCleaning";
import WindowCleaning from "./pages/services/WindowCleaning";
import PostConstructionCleaning from "./pages/services/PostConstructionCleaning";
import RecurringCleaning from "./pages/services/RecurringCleaning";
import DeclutteringOrganizing from "./pages/services/DeclutteringOrganizing";
import CommercialCleaning from "./pages/services/CommercialCleaning";
import WhyChooseUs from "./pages/WhyChooseUs";
import HowItWorks from "./pages/HowItWorks";
import Reviews from "./pages/Reviews";
import { useTracking } from "./hooks/useTracking";
import CleaningServicesTexas from "./pages/locations/CleaningServicesTexas";
import CleaningServicesColorado from "./pages/locations/CleaningServicesColorado";
import StandardCleaning from "./pages/services/StandardCleaning";
import AirbnbCleaning from "./pages/services/AirbnbCleaning";
import MoveInCleaning from "./pages/services/MoveInCleaning";
import SpringCleaning from "./pages/services/SpringCleaning";
import CleaningColoradoSprings from "./pages/locations/CleaningColoradoSprings";
import HouseCleaningBelton from "./pages/locations/HouseCleaningBelton";
import HouseCleaningTemple from "./pages/locations/HouseCleaningTemple";
import HouseCleaningKilleen from "./pages/locations/HouseCleaningKilleen";
import HouseCleaningNolanville from "./pages/locations/HouseCleaningNolanville";
import HouseCleaningCopperasCove from "./pages/locations/HouseCleaningCopperasCove";
import HouseCleaningGatesville from "./pages/locations/HouseCleaningGatesville";
import HouseCleaningHarkerHeights from "./pages/locations/HouseCleaningHarkerHeights";
import HouseCleaningSalado from "./pages/locations/HouseCleaningSalado";
import HouseCleaningFalcon from "./pages/locations/HouseCleaningFalcon";
import HouseCleaningPeyton from "./pages/locations/HouseCleaningPeyton";
import HouseCleaningBlackForest from "./pages/locations/HouseCleaningBlackForest";
import HouseCleaningFountain from "./pages/locations/HouseCleaningFountain";

const queryClient = new QueryClient();

// Tracker component to use the hook inside Router context
const Tracker = () => {
  useTracking();
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Tracker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/move-out-cleaning" element={<MoveOutCleaning />} />
            <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
            <Route path="/services/window-cleaning" element={<WindowCleaning />} />
            <Route path="/services/post-construction-cleaning" element={<PostConstructionCleaning />} />
            <Route path="/services/recurring-cleaning" element={<RecurringCleaning />} />
            <Route path="/services/decluttering-organizing" element={<DeclutteringOrganizing />} />
            <Route path="/services/commercial-cleaning" element={<CommercialCleaning />} />
            <Route path="/services/standard-cleaning" element={<StandardCleaning />} />
            <Route path="/services/airbnb-cleaning" element={<AirbnbCleaning />} />
            <Route path="/services/move-in-cleaning" element={<MoveInCleaning />} />
            <Route path="/services/spring-cleaning" element={<SpringCleaning />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* Location Pages */}
            <Route path="/cleaning-services-texas" element={<CleaningServicesTexas />} />
            <Route path="/cleaning-services-colorado" element={<CleaningServicesColorado />} />
            <Route path="/cleaning-colorado-springs" element={<CleaningColoradoSprings />} />
            <Route path="/house-cleaning-belton" element={<HouseCleaningBelton />} />
            <Route path="/house-cleaning-temple" element={<HouseCleaningTemple />} />
            <Route path="/house-cleaning-killeen" element={<HouseCleaningKilleen />} />
            <Route path="/house-cleaning-nolanville" element={<HouseCleaningNolanville />} />
            <Route path="/house-cleaning-copperas-cove" element={<HouseCleaningCopperasCove />} />
            <Route path="/house-cleaning-gatesville" element={<HouseCleaningGatesville />} />
            <Route path="/house-cleaning-harker-heights" element={<HouseCleaningHarkerHeights />} />
            <Route path="/house-cleaning-salado" element={<HouseCleaningSalado />} />
            <Route path="/house-cleaning-falcon" element={<HouseCleaningFalcon />} />
            <Route path="/house-cleaning-peyton" element={<HouseCleaningPeyton />} />
            <Route path="/house-cleaning-black-forest" element={<HouseCleaningBlackForest />} />
            <Route path="/house-cleaning-fountain" element={<HouseCleaningFountain />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

 
 
