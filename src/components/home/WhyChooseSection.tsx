import { motion } from "framer-motion";
import { Factory, Users, Shield, Clock, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "In-house Manufacturing",
    description: "Complete control over production with state-of-the-art machinery and skilled workforce.",
  },
  {
    icon: Users,
    title: "Bulk Order Expertise",
    description: "Specialized in handling large-scale orders for institutions and corporates efficiently.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage ensuring premium finish and durability.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to meeting deadlines with efficient production and logistics management.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description: "Using only the finest fabrics sourced from trusted suppliers for lasting quality.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Serving clients across India with reliable shipping and delivery solutions.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Why <span className="text-secondary">Arman Garments</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With years of experience and a commitment to excellence, we deliver 
            premium garments that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
