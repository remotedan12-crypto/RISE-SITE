import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Shelsea Stone",
    text: "We use Rise & Shine every couple weeks. Always great work — we actually look forward to cleaning days!",
  },
  {
    name: "Anne Doerr",
    text: "We've used this cleaning service for years. Super reliable and always thorough.",
  },
  {
    name: "Kayla Higbee",
    text: "Trustworthy and hardworking staff. My home is always fresh and spotless after each visit.",
  },
  {
    name: "Hans Rosielle",
    text: "Rebecca and her team are wonderful. Their attention to detail is phenomenal.",
  },
  {
    name: "Beverly Flynn",
    text: "They clean our home and also handle move-out cleanings after tenants leave. Always excellent work.",
  },
  {
    name: "Jodie Boedigheimer",
    text: "Bi-monthly service has been fantastic. Always on time and consistently thorough.",
  },
  {
    name: "Karen Delgado",
    text: "They pay attention to details and clean even the areas we forget. My house always feels refreshed.",
  },
  {
    name: "Albert Schuler",
    text: "Professional, friendly and stress-free experience. My home looked amazing afterwards.",
  },
  {
    name: "Caralyn G.",
    text: "Friendly, professional and flexible with my schedule. My home feels like a five-star hotel after every cleaning.",
  },
  {
    name: "Heather Davis",
    text: "Prompt, friendly and reliable. They keep my home refreshed and easy to maintain.",
  },
  {
    name: "Rebecca Deep Clean Client",
    text: "Top-to-bottom deep clean before selling our home was flawless. Detailed, fast and professional.",
  },

  // NEW REVIEWS

  {
    name: "Stephanie B",
    text: "I can't say enough good things about Rebecca and her crew. They are punctual, communicative, and do a fantastic job every single time. The attention to detail is wonderful.",
  },
  {
    name: "Rachel Deering",
    text: "We have had the absolute best experience using Rise & Shine. The owner is professional and we feel completely safe with her team. They are thorough and always do a wonderful job.",
  },
  {
    name: "Sarah Brown",
    text: "The entire team is extremely professional and polite. Our house sparkles when they are finished.",
  },
  {
    name: "Mark Vondra",
    text: "Rebecca and team are the best. They’ve cleaned both our home and rental property, and everything was impeccably clean.",
  },
  {
    name: "Nicole D'Amico",
    text: "They did a beautiful job with a move-out clean. Thorough, quick, reasonably priced, and very friendly.",
  },
  {
    name: "Brian Gentry",
    text: "Rebecca and Kim have been nothing but a pleasure. They listen carefully and deliver exactly what you need.",
  },
  {
    name: "L C",
    text: "This company is awesome. Their work is perfection. Always on time, trustworthy, and reasonably priced.",
  },
  {
    name: "Tim F (Timber)",
    text: "Very professional and responsive. They show up on time, are thorough, and my house smells amazing after cleaning.",
  },
  {
    name: "Ann M. Walker",
    text: "Kim and Rebecca are a great team.",
  },
  {
    name: "Kaila Rutz",
    text: "Awesome staff and management. Trustworthy and honest.",
  },
  {
    name: "Jennifer Plumley",
    text: "Wonderful service. The deep clean is amazing — the house has never looked this good.",
  },
  {
    name: "Sheena Myers",
    text: "The team has been a blessing helping us stay on top of housekeeping. Huge help with our busy schedule.",
  },
  {
    name: "Norman Hittle",
    text: "We use them every couple weeks and always love the results. You know they're doing something right when you look forward to cleaning day.",
  },
  {
    name: "Shawna Rosielle",
    text: "Rebecca is the best. Deep cleaning, professional, reliable, and honest. Meets all expectations.",
  },


{
  name: "Marla G",
  text: "Rebecca and her team did a phenomenal job on our home. They were timely, professional, and very kind. I highly recommend them for a deep clean.",
},
{
  name: "Susan Masten",
  text: "I highly recommend Rise & Shine Cleaning Services. They are professional, thorough, and consistently do a great job.",
},
{
  name: "Kelly G",
  text: "I’ve used several cleaning services over the years, and Rise & Shine is by far the best. They are reliable, and my house always looks and smells amazing afterward.",
},
{
  name: "Ariel M",
  text: "The best cleaning service I’ve ever used. They are incredibly thorough and pay attention to every detail.",
},

// (Skipping duplicates like Stephanie B, Rachel Deering, etc. if already added earlier)

{
  name: "Mark Vondra",
  text: "Rebecca and her team are the best. They’ve cleaned both our home and rental property, and each time the results were impeccable.",
},
{
  name: "Nicole D'Amico",
  text: "They did a beautiful job with my move-out clean. Thorough, quick, reasonably priced, and very friendly.",
},
{
  name: "Brian Gentry",
  text: "Rebecca and Kim have been a pleasure to work with. They listen carefully and deliver exactly what you ask for.",
},
{
  name: "L C",
  text: "This company is outstanding. Their work is perfection. Always on time, trustworthy, and reasonably priced.",
},
{
  name: "Tim F (Timber)",
  text: "Very professional and responsive. They show up on time, are thorough, and my home smells amazing after each clean.",
},
{
  name: "Ann M. Walker",
  text: "Kim and Rebecca are a great team.",
},
{
  name: "Kaila Rutz",
  text: "Awesome staff and management. Trustworthy and honest.",
},
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Real Reviews from Real Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by families, property managers, and businesses for consistent,
            high-quality cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="card-elevated card-hover p-7 md:p-8"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-accent" />
                ))}
              </div>

              <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-6">
                {review.text}
              </p>

              <div className="font-semibold text-foreground">
                {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
