import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, MapPinned } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1D8KA2zHPQ/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/serviceriseshinecleaning",
    },
    {
      name: "Google Maps",
      icon: MapPinned,
      url: "https://share.google/0NHcmljeOGGbAuHBf",
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="xl:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Rise & Shine Cleaning Services"
                className="h-14 w-auto object-contain rounded-lg"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional residential, commercial, and property turnover cleaning across Texas and Colorado. Licensed, insured & vendor-ready.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Licensed</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Insured</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Vendor-Ready</span>
            </div>
          </div>

          {/* Cleaning Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Move-Out Cleaning", path: "/services/move-out-cleaning" },
                { name: "Deep Cleaning", path: "/services/deep-cleaning" },
                { name: "Window Cleaning", path: "/services/window-cleaning" },
                { name: "Post-Construction", path: "/services/post-construction-cleaning" },
                { name: "Recurring Cleaning", path: "/services/recurring-cleaning" },
                { name: "Decluttering", path: "/services/decluttering-organizing" },
                { name: "Commercial Cleaning", path: "/services/commercial-cleaning" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                <li>
                  <Link to="/cleaning-services-texas" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Texas
                  </Link>
                </li>
                <li>
                  <Link to="/house-cleaning-austin" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Austin
                  </Link>
                </li>
                <li>
                  <Link to="/house-cleaning-dallas" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Dallas
                  </Link>
                </li>
                <li>
                  <Link to="/cleaning-houston" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Houston
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link to="/cleaning-services-colorado" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Colorado
                  </Link>
                </li>
                <li>
                  <Link to="/cleaning-denver" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Denver
                  </Link>
                </li>
                <li>
                  <Link to="/cleaning-colorado-springs" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Colo. Springs
                  </Link>
                </li>
                <li>
                  <Link to="/house-cleaning-boulder" className="text-white/70 hover:text-accent transition-colors text-sm">
                    Boulder
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Why Choose Us", path: "/why-choose-us" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "Gallery", path: "/gallery" },
                { name: "Customer Reviews", path: "/reviews" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+1-719-654-5761" className="text-white hover:text-accent transition-colors text-sm font-medium">
                    +1-719-654-5761
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:Booking.riseandshine@gmail.com" className="text-white/70 hover:text-accent transition-colors text-sm break-all">
                    Booking.riseandshine@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  Mon–Sat: 8:00 AM – 5:30 PM
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm font-medium">
                  Texas & Colorado
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start text-white/50 text-sm gap-1">
              <p>
                © {currentYear} Rise & Shine Cleaning Services. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/contact" className="text-white/50 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-white/50 hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
