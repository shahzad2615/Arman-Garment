import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Scissors, Shirt, Ruler, Package, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Ruler,
    title: "Design & Planning",
    description: "We work with you to understand your requirements and create detailed designs",
  },
  {
    icon: Scissors,
    title: "Fabric Selection",
    description: "Premium fabrics are selected based on durability, comfort, and purpose",
  },
  {
    icon: Shirt,
    title: "Cutting & Stitching",
    description: "Precision cutting and expert stitching by our skilled tailoring team",
  },
  {
    icon: Package,
    title: "Quality & Packing",
    description: "Rigorous quality checks followed by careful packaging for delivery",
  },
];

const Manufacturing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              Manufacturing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our <span className="text-secondary">Manufacturing</span> Process
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From design to delivery, every step is carefully executed to ensure 
              the highest quality garments for your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Our <span className="text-secondary">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="card-premium text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <step.icon className="w-10 h-10 text-secondary" />
                  </motion.div>
                  <span className="text-4xl font-bold text-secondary/20 absolute top-4 left-4">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                State-of-the-Art <span className="text-secondary">Facility</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our 10,000+ sq. ft. manufacturing facility is equipped with modern 
                machinery and staffed by over 100 skilled workers. We have the 
                capacity to handle orders of any size while maintaining consistent quality.
              </p>
              <ul className="space-y-4">
                {[
                  "Industrial sewing machines for high-volume production",
                  "Computerized embroidery machines for precise logo work",
                  "Quality testing equipment for fabric and stitching",
                  "Climate-controlled storage for fabric preservation",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "10,000+", label: "Sq. Ft. Area" },
                { number: "100+", label: "Machines" },
                { number: "50,000+", label: "Monthly Capacity" },
                { number: "24/7", label: "Production" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="card-premium text-center"
                >
                  <p className="text-3xl font-bold text-secondary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
