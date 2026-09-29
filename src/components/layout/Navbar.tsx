import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const serviceLinks = [
  { name: "All Services", path: "/services" },
  { name: "Standard Cleaning", path: "/services/standard-cleaning" },
  { name: "Deep Cleaning", path: "/services/deep-cleaning" },
  { name: "Move-In Cleaning", path: "/services/move-in-cleaning" },
  { name: "Move-Out Cleaning", path: "/services/move-out-cleaning" },
  { name: "Airbnb Cleaning", path: "/services/airbnb-cleaning" },
  { name: "Spring Cleaning", path: "/services/spring-cleaning" },
  { name: "Window Cleaning", path: "/services/window-cleaning" },
  { name: "Post-Construction", path: "/services/post-construction-cleaning" },
  { name: "Recurring Cleaning", path: "/services/recurring-cleaning" },
  { name: "Decluttering & Organizing", path: "/services/decluttering-organizing" },
  { name: "Commercial Cleaning", path: "/services/commercial-cleaning" },
];

const locationLinks = [
  {
    name: "Texas",
    path: "#",
    subItems: [
      { name: "Texas (Statewide)", path: "/cleaning-services-texas" },
      { name: "Belton, TX", path: "/house-cleaning-belton" },
      { name: "Temple, TX", path: "/house-cleaning-temple" },
      { name: "Killeen, TX", path: "/house-cleaning-killeen" },
      { name: "Nolanville, TX", path: "/house-cleaning-nolanville" },
      { name: "Copperas Cove, TX", path: "/house-cleaning-copperas-cove" },
      { name: "Gatesville, TX", path: "/house-cleaning-gatesville" },
      { name: "Harker Heights, TX", path: "/house-cleaning-harker-heights" },
      { name: "Salado, TX", path: "/house-cleaning-salado" },
    ],
  },
  {
    name: "Colorado",
    path: "#",
    subItems: [
      { name: "Colorado (Statewide)", path: "/cleaning-services-colorado" },
      { name: "Colorado Springs, CO", path: "/cleaning-colorado-springs" },
      { name: "Falcon, CO", path: "/house-cleaning-falcon" },
      { name: "Peyton, CO", path: "/house-cleaning-peyton" },
      { name: "Black Forest, CO", path: "/house-cleaning-black-forest" },
      { name: "Fountain, CO", path: "/house-cleaning-fountain" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileTexasOpen, setMobileTexasOpen] = useState(false);
  const [mobileColoradoOpen, setMobileColoradoOpen] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true, dropdownItems: serviceLinks },
    { name: "Locations", path: "#", hasDropdown: true, dropdownItems: locationLinks },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    (path !== "#" && location.pathname === path) || (path !== "#" && path !== "/" && location.pathname.startsWith(path + "/"));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
    setMobileTexasOpen(false);
    setMobileColoradoOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (type: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (type === "Services") {
      setServicesOpen(true);
      setLocationsOpen(false);
    } else if (type === "Locations") {
      setLocationsOpen(true);
      setServicesOpen(false);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setLocationsOpen(false);
    }, 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-primary/20 blur opacity-0 group-hover:opacity-100 transition" />
              <img
                src={logo}
                alt="Rise & Shine Cleaning Services"
                className="relative h-12 w-12 object-cover rounded-xl shadow-sm group-hover:scale-105 transition"
              />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm">Rise & Shine</p>
              <p className="text-xs text-muted-foreground">Cleaning Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-muted/40 p-1 rounded-xl" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => link.path === "#" && e.preventDefault()}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition inline-flex items-center gap-1 ${
                      isActive(link.path)
                        ? "bg-white shadow text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        (link.name === "Services" && servicesOpen) || 
                        (link.name === "Locations" && locationsOpen) 
                          ? "rotate-180" 
                          : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  {((link.name === "Services" && servicesOpen) || (link.name === "Locations" && locationsOpen)) && (
                    <div className="absolute top-full left-0 mt-1 w-64 max-h-[80vh] overflow-y-auto overflow-x-visible bg-white rounded-xl shadow-xl border border-border/50 py-2 animate-in fade-in slide-in-from-top-2 z-50">
                      {link.dropdownItems?.map((dropdownLink) => (
                        <div key={dropdownLink.name} className="relative group/sub">
                          {dropdownLink.subItems ? (
                            <>
                              <div className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary cursor-pointer transition-colors">
                                {dropdownLink.name}
                                <ChevronRight className="w-4 h-4" />
                              </div>
                              {/* Nested Dropdown */}
                              <div className="hidden group-hover/sub:block absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-xl border border-border/50 py-2 z-50">
                                {dropdownLink.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className={`block px-4 py-2 text-sm transition-colors ${
                                      location.pathname === subItem.path
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-foreground/80 hover:bg-muted hover:text-primary"
                                    }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              to={dropdownLink.path}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                location.pathname === dropdownLink.path
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-foreground/80 hover:bg-muted hover:text-primary"
                              }`}
                            >
                              {dropdownLink.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive(link.path)
                      ? "bg-white shadow text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+1-719-654-5761"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
            >
              <Phone className="w-4 h-4" />
              +1-719-654-5761
            </a>
            <Link to="/contact">
              <Button size="default" className="shadow-md">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-in fade-in slide-in-from-top-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => {
                      if (link.name === "Services") {
                        setMobileServicesOpen(!mobileServicesOpen);
                      } else if (link.name === "Locations") {
                        setMobileLocationsOpen(!mobileLocationsOpen);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        (link.name === "Services" && mobileServicesOpen) || 
                        (link.name === "Locations" && mobileLocationsOpen)
                          ? "rotate-180" 
                          : ""
                      }`}
                    />
                  </button>
                  {((link.name === "Services" && mobileServicesOpen) || (link.name === "Locations" && mobileLocationsOpen)) && (
                    <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-primary/20 pl-4">
                      {link.dropdownItems?.map((dropdownLink) => (
                        <div key={dropdownLink.name}>
                          {dropdownLink.subItems ? (
                            <>
                              <button
                                onClick={() => {
                                  if (dropdownLink.name === "Texas") setMobileTexasOpen(!mobileTexasOpen);
                                  if (dropdownLink.name === "Colorado") setMobileColoradoOpen(!mobileColoradoOpen);
                                }}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-foreground/80"
                              >
                                <span>{dropdownLink.name}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    (dropdownLink.name === "Texas" && mobileTexasOpen) || 
                                    (dropdownLink.name === "Colorado" && mobileColoradoOpen)
                                      ? "rotate-180" 
                                      : ""
                                  }`}
                                />
                              </button>
                              {((dropdownLink.name === "Texas" && mobileTexasOpen) || 
                                (dropdownLink.name === "Colorado" && mobileColoradoOpen)) && (
                                <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/10 pl-3">
                                  {dropdownLink.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      onClick={() => setIsOpen(false)}
                                      className={`block px-3 py-1.5 rounded-lg text-sm ${
                                        location.pathname === subItem.path
                                          ? "text-primary font-medium bg-primary/5"
                                          : "text-foreground/60"
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={dropdownLink.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-3 py-2 rounded-lg text-sm ${
                                location.pathname === dropdownLink.path
                                  ? "text-primary font-medium bg-primary/5"
                                  : "text-foreground/70"
                              }`}
                            >
                              {dropdownLink.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
              <a
                href="tel:+1-719-654-5761"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                +1-719-654-5761
              </a>
              <div className="px-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
