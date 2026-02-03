import { motion } from "framer-motion";
import { Building2, GraduationCap, Stethoscope, Hotel, Factory } from "lucide-react";

const clients = [
  { name: "ABC Corporation", type: "Corporate" },
  { name: "Delhi Public School", type: "Education" },
  { name: "Apollo Hospitals", type: "Healthcare" },
  { name: "Taj Hotels", type: "Hospitality" },
  { name: "Reliance Industries", type: "Industrial" },
  { name: "Infosys Ltd", type: "Corporate" },
  { name: "Mumbai University", type: "Education" },
  { name: "Max Healthcare", type: "Healthcare" },
  { name: "ITC Hotels", type: "Hospitality" },
  { name: "Tata Steel", type: "Industrial" },
];

const icons = {
  Corporate: Building2,
  Education: GraduationCap,
  Healthcare: Stethoscope,
  Hospitality: Hotel,
  Industrial: Factory,
};

export const ClientsSection = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-secondary">Valued Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proudly serving leading organizations across various industries
          </p>
        </motion.div>

        {/* Client Logos Marquee */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee">
            {[...clients, ...clients].map((client, index) => {
              const Icon = icons[client.type as keyof typeof icons];
              return (
                <motion.div
                  key={`${client.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 w-48 h-32 bg-card rounded-xl shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-elegant transition-all cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-secondary" />
                  <span className="text-sm font-medium text-foreground text-center px-4">
                    {client.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            "ISO 9001:2015",
            "Quality Certified",
            "Trusted Supplier",
            "Pan-India Service",
          ].map((badge, index) => (
            <div
              key={badge}
              className="px-6 py-3 rounded-full border-2 border-secondary/30 text-foreground font-medium"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
