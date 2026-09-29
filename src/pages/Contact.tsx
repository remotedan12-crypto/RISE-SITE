import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  Building2,
  Home,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { useTracking } from "@/hooks/useTracking";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const { toast } = useToast();
  const { trackEvent } = useTracking();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Rise and Shine Cleaning Services",
      "telephone": "+1-719-654-5761",
      "email": "Booking.riseandshine@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Colorado",
        "addressCountry": "US"
      }
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, company, propertyType, message } = formData;
    const subject = encodeURIComponent(
      `New Inquiry from ${name} - ${company}`
    );

    const body = encodeURIComponent(
      `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Property Type: ${propertyType}
Message:
${message}
      `
    );

    try {
      if (supabase) {
        // Save to Supabase (only columns that exist in the leads table)
        const { error } = await supabase.from('leads').insert({
          name,
          email,
          service: propertyType,
          date: new Date().toISOString()
        });

        if (error) {
          console.error("Error saving lead:", error);
        }
      } else {
        console.warn("Supabase is not configured; opening email fallback only.");
      }

      trackEvent('Lead Submitted', { service: propertyType, company });

      toast({
        title: "Inquiry Sent",
        description: "We've received your request and will get back to you soon.",
      });

      // Fallback to mailto for user confirmation/backup
      window.location.href = `mailto:Booking.riseandshine@gmail.com?subject=${subject}&body=${body}`;

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        propertyType: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("Error saving lead:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed and carry comprehensive liability insurance as well as worker's compensation coverage.",
    },
    {
      question: "Do you meet property management vendor requirements?",
      answer:
        "Absolutely. We're vendor-ready with all necessary documentation including insurance certificates and W-9 forms.",
    },
    {
      question: "How fast can you complete a turnover?",
      answer:
        "Most standard unit turnovers are completed within 24-48 hours depending on property size.",
    },
    {
      question: "Do you service multiple units or portfolios?",
      answer:
        "Yes, we offer portfolio pricing and can handle simultaneous turnovers across properties.",
    },
    {
      question: "Do you work in both Texas and Colorado?",
      answer:
        "Yes, we proudly serve properties across Texas and Colorado.",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "719-654-5761",
      link: "tel:719-654-5761",
    },
    {
      icon: Mail,
      title: "Email",
      content: "Booking.riseandshine@gmail.com",
      link: "mailto:Booking.riseandshine@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon–Sat: 8:00 AM – 5:30 PM",
      link: null,
    },
    {
      icon: MapPin,
      title: "Service Areas",
      content: "Texas & Colorado",
      link: null,
    },
  ];

  const propertyTypes = [
    { value: "", label: "Select your industry" },
    { value: "property-manager", label: "Property Manager" },
    { value: "realtor", label: "Realtor" },
    { value: "leasing-office", label: "Leasing Office" },
    { value: "other", label: "Other" },
  ];

  return (
    <Layout>
      <SEO 
        title="Contact Us | Get a Free Cleaning Quote Today"
        description="Ready for a cleaner space? Contact Rise & Shine Cleaning Services for a free quote on residential, commercial, or turnover cleaning in Texas and Colorado."
        canonicalUrl="https://riseandshinecs.com/contact"
        schema={contactSchema}
      />

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about working with Rise & Shine.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* <TestimonialsSection /> */}


      {/* HERO */}
      <section className="relative py-12 md:py-32 gradient-hero-bg">
        <div className="container-wide max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule Your Cleaning
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below or contact us directly. We typically respond
            within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 card-elevated p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Full Name *</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Phone *</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label>Company</Label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <Label>Industry *</Label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-lg border px-4"
                >
                  {propertyTypes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label>Tell Us About Your Needs *</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>

              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending..." : "Send Request"}
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="card-elevated p-6 flex gap-4">
                <item.icon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link}>{item.content}</a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MAP */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide card-elevated overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.4899999999998!2d-104.8213!3d38.8339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRise%20%26%20Shine%20Cleaning%20Services!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Location"
          />
        </div>
      </section>


    </Layout>
  );
};

export default Contact;
