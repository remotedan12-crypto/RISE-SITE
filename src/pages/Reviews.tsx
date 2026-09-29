import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, CheckCircle2, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const reviews = [
  {
    id: 1,
    name: "Savannah Serda",
    content: "Found the ad for the business on Facebook and reach out, Rebecca immediately reached out to me and was so good with communication and ensuring I was helped at a time that worked best for me. I was unable to be there and she made sure I saw her work after by sending photos. Love my service and would come back again!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 2,
    name: "Gwen Nieberlein",
    content: "I recently had the pleasure of hiring a newly established cleaning company, and I was absolutely blown away by the experience. Even though the business is new, the owner clearly brings years of experience to the table—and it shows in every detail. She was able to fit me into her schedule quickly and arrived right on time... My entire house smelled amazing when she was done, and both the bathroom and kitchen were spotless. But what impressed me the most? The doors. She managed to make them white again... Book her. You’ll be glad you did.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 3,
    name: "Karen Delgado",
    content: "I had such a great experience! The team was so friendly and lovely to work with, and they showed up right on time. They were professional but also made the whole process feel really easy and stress-free. My home looks and feels amazing after their visit. I can tell they really take pride in their work. I’ll definitely be booking with them again and highly recommend them!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer", "Highly Recommended"],
  },
  {
    id: 4,
    name: "Naomi Williams",
    content: "I hired Rise & Shine Cleaning Services before, and I was really impressed with how great her work was. She did an awesome job and made everything super easy for me. You can tell she really cares about what she does, and the results were even better than I expected. This business is honestly amazing, and I would definitely come back again.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 5,
    name: "Katie Vowles",
    content: "Rebecca is amazing and is so kind! She will treat your house like her own. My house smelled amazing and looked great!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 6,
    name: "Kati Resur",
    content: "Kim has been cleaning my place for many months under a different company. Recent change and wanted to drop a review to help them along. Communication is always seamless and easy. Payment is easy as well. Kim does a wonderful job and is so kind. She is also very considerate of my home, belongings, and pets.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 7,
    name: "Chera Hope",
    content: "Amazing and thorough, very trustworthy, have used Rebecca for years for my business cleaning. Attention to detail. I have been through many cleaners and I have peace of mind with Rebecca! Top notch, I highly recommend.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer", "Business Cleaning"],
  },
  {
    id: 8,
    name: "Jodie Boedigheimer",
    content: "Rebecca and her team are amazing! They arrive on time and complete the cleaning in a timely manner. They pay attention to details and do a thorough job cleaning even the spaces I sometimes forget about. My house is clean and refreshed when they leave.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 9,
    name: "Heather Davis",
    content: "Rebecca did a deep clean on my whole house top to bottom before we sold it, and a move out clean after we sold it. She paid special attention to blinds, baseboards, window seals and areas we often don't think about cleaning regularly. She worked fast, yet carefully and my house smelled so good and looked so shiny. She is also so sweet and professional.",
    rating: 5,
    verified: true,
    badges: ["Deep Cleaning", "Move Out Clean"],
  },
  {
    id: 10,
    name: "Megan Brand",
    content: "The team is great and reliable. I feel so relaxed like a weight was lifted off my shoulders by the time they are done. My husband and I both work from home which always makes having a cleaning team more difficult in the past, it doesn't slow them down and we found a way to work around each other.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 11,
    name: "Shawna Rosielle",
    content: "Rebecca is the best. Deep cleaning, professional, reliable and honest. Meets all expectations and we'll never have anyone else clean our home. 5 stars!!!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer", "Deep Cleaning"],
  },
  {
    id: 12,
    name: "Albert Schuler",
    content: "Very friendly, very professional, always quick to reply when I message. very energetic, enthusiastic, and keen employees. Left the house clean and smelling fresh, almost feels like my home is a 5 star hotel every time they clean! Very willing to work with my busy schedule. Near perfect in every regard.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 13,
    name: "Hans Rosielle",
    content: "Have worked with Rebecca and Kim for multiple years. They are excellent. They clean both our home and after tenants move out when their lease is up.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer", "Move Out Clean"],
  },
  {
    id: 14,
    name: "Sheena Myers",
    content: "The team has been a blessing to my family is helping us stay on top of our housekeeping. It’s nice having the extra help now that we are both working full time. Thank you for everything!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 15,
    name: "Jennifer Plumley",
    content: "Wonderful service! The deep clean is amazing- the house has never looked this good. Would highly recommend. They are professional and efficient.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer", "Deep Cleaning"],
  },
  {
    id: 16,
    name: "Caralyn G.",
    content: "I have been using this company to clean my home for about 6 months. They are prompt, friendly and they do a great job at keeping my home refreshed and easy for me to maintain.",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 17,
    name: "Anne Doerr",
    content: "Great cleaners! Trustworthy, hard working staff. They always leave my house fresh and spotless! Thank you Rise & Shine!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
  {
    id: 18,
    name: "Norman Hittle",
    content: "We use Rise & Shine for cleanings every couple weeks. Always think their work is great! You know they're doing something right when you're looking forward to cleaning days!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer", "Recurring Service"],
  },
  {
    id: 19,
    name: "Pat Smith",
    content: "I have used Rebecca and staff for the past 4 years for all my housecleaning needs. They are professional, kind, friendly, punctual and very thorough with the cleaning. I highly recommend them. They do an amazing job!!",
    rating: 5,
    verified: true,
    badges: ["Verified Customer"],
  },
{
  id: 20,
  name: "Shelsea Stone",
  content: "We've used this cleaning service for a couple of years now. They are super reliable and thorough!",
  rating: 5,
  verified: true,
  badges: ["Verified Customer", "Long-Term Client"],
},
{
  id: 21,
  name: "Beverly Flynn",
  content: "I have been pleased with the bi-monthly service that I receive. Their cleaners are always on time and do a thorough job cleaning my home.",
  rating: 5,
  verified: true,
  badges: ["Verified Customer", "Recurring Service"],
},
{
  id: 22,
  name: "Kayla Higbee",
  content: "Rebecca and her team are wonderful! The attention to detail is phenomenal.",
  rating: 5,
  verified: true,
  badges: ["Verified Customer"],
},
{
  id: 23,
  name: "Amber C.",
  date: "March 10",
  content: "Rebecca and her staff are so kind, communicative, and thorough! They helped get my house move-out ready so I can list it. Would hire again and again!",
  rating: 5,
  verified: true,
  badges: ["Verified Customer", "Move-Out Clean"],
},
{
  id: 24,
  name: "Regan W.",
  date: "March 12",
  content: "These ladies did an amazing job on my home. It looked and smelled great! They even sent me pictures and videos when they were done since I was not home at the time.",
  rating: 5,
  verified: true,
  badges: ["Verified Customer"],
},
{
  id: 25,
  name: "Shawna R.",
  date: "March 3",
  content: "I will never hire anyone else but this company to come into my house and clean. You will be missing out on the quality of clean you want if you don’t!",
  rating: 5,
  verified: false,
  badges: [],
},
{
  id: 26,
  name: "Jackie R.",
  date: "March 9",
  content: "Rebecca was wonderful to work with. She took the time to listen and truly understood what I needed. We came up with a plan and worked together. She has excellent communication and organization skills, gave great recommendations, and even helped hang artwork. I highly recommend her for refreshing your home and giving you peace of mind!",
  rating: 5,
  verified: true,
  badges: ["Verified Customer", "Premium Service"],
},
];

const Reviews = () => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rise and Shine Cleaning Services",
    "image": "https://riseandshinecs.com/favicon.png",
    "url": "https://riseandshinecs.com",
    "telephone": "+1-719-654-5761",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Colorado",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "26"
    }
  };

  return (
    <Layout>
      <SEO 
        title="Customer Reviews | See What Our Clients Say"
        description="Read real feedback from our satisfied clients. Discover why we have a 5-star reputation for quality and reliability in Texas and Colorado."
        canonicalUrl="https://riseandshinecs.com/reviews"
        schema={reviewSchema}
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 lg:py-32 gradient-hero-bg overflow-hidden flex flex-col justify-center items-center">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm uppercase tracking-wide mb-8">
              <Star className="w-4 h-4 fill-current" />
              Customer Reviews
              <Star className="w-4 h-4 fill-current" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-8 drop-shadow-sm">
              Trusted by Homeowners <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                & Businesses
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 font-medium pb-2">
              Real feedback from real clients who trust Rise & Shine for recurring
              residential cleaning, commercial spaces, and move-out services.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-accent font-semibold bg-background/50 backdrop-blur-md py-4 px-8 rounded-2xl border border-border/50 shadow-sm inline-flex">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-sm" />
                ))}
              </div>
              <div className="h-6 w-px bg-border hidden sm:block"></div>
              <span className="text-foreground text-lg flex items-center gap-2">
                5.0 Average Rating
                <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500/20" />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Reviews Section */}
      <section className="py-24 relative bg-background overflow-hidden border-t border-border/40">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/5 via-background to-background -z-10" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/3 -z-10" />
        
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            >
              Hear From Our Happy Clients
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Don't just take our word for it—see what our amazing clients have to say about their experience.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="group relative bg-card hover:bg-card/80 border border-border/60 hover:border-accent/50 shadow-sm hover:shadow-xl rounded-[1.5rem] p-6 md:p-8 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none text-accent transform group-hover:scale-110 group-hover:-rotate-6">
                  <Quote size={120} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex sm:justify-between sm:items-start flex-col gap-4 mb-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-accent/10 shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground flex items-center gap-1.5 mb-0.5 line-clamp-1">
                          {review.name}
                          {review.verified && (
                            <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-500/20 shrink-0" />
                          )}
                        </h3>
                        {/* Rating */}
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, idx) => (
                            <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  {review.badges && review.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {review.badges.map((badge, idx) => (
                        <span key={idx} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent/10 text-accent border border-accent/20 flex items-center gap-1 backdrop-blur-sm">
                          {badge.includes('Verified') ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <Star className="w-3 h-3 fill-current" />
                          )}
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative flex-grow">
                    <Quote className="absolute -left-2 -top-2 w-6 h-6 text-accent/20 rotate-180" />
                    <p className="text-foreground/80 text-[15px] leading-relaxed font-medium pl-5 italic">
                      "{review.content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-black/10 backdrop-blur-sm border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md">
              Ready to Experience the Same Quality?
            </h2>

            <p className="text-white/90 text-xl md:text-2xl mb-10 font-medium">
              Join homeowners and businesses who trust Rise & Shine for reliable,
              professional cleaning services.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="w-full sm:w-auto h-16 px-10 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <a href="tel:+1-719-654-5761">
                <Button variant="outline" size="xl" className="w-full sm:w-auto h-16 px-10 rounded-full text-lg font-bold border-white/40 text-white hover:bg-white hover:text-accent shadow-xl hover:scale-105 transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1-719-654-5761
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
