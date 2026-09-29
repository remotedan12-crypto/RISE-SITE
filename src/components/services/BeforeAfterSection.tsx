import beforeImg from "@/assets/services/declutter-before.jpg";
import afterImg from "@/assets/services/declutter-after.jpg";

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-3">
            Real Results
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Before & After Transformations
          </h2>

          <p className="text-muted-foreground text-lg">
            See how we turn cluttered, stressful spaces into clean, organized environments you’ll love.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* BEFORE */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              Before
            </span>

            <img
              src={beforeImg}
              alt="Before decluttering"
              className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* AFTER */}
          <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              After
            </span>

            <img
              src={afterImg}
              alt="After decluttering"
              className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;