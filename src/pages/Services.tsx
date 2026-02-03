import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Scissors, Shirt, Building2, Brush, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scissors,
    title: "Custom Stitching",
    description: "Tailored uniforms made to your exact specifications and measurements. We work with you to create the perfect fit for your team.",
    features: ["Custom measurements", "Design consultation", "Sample approval", "Size variations"],
  },
  {
    icon: Building2,
    title: "Bulk Manufacturing",
    description: "Large-scale uniform production for institutions and corporations. Competitive pricing for bulk orders with consistent quality.",
    features: ["Volume discounts", "Consistent quality", "Timely delivery", "Inventory management"],
  },
  {
    icon: Shirt,
    title: "OEM Services",
    description: "Private label manufacturing for brands and retailers. We produce under your brand name with complete confidentiality.",
    features: ["Private labeling", "Brand customization", "Quality assurance", "Packaging options"],
  },
  {
    icon: Brush,
    title: "Logo Embroidery",
    description: "Professional embroidery services for company logos, names, and designs. Multiple embroidery styles available.",
    features: ["Computerized embroidery", "Multiple color options", "Durable finish", "Fast turnaround"],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Comprehensive <span className="text-secondary">Services</span> for Your Needs
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From custom stitching to bulk manufacturing, we offer a complete range 
              of garment services to meet your organization's requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <service.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-gold">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-navy/80 text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss your requirements and get a customized quote.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary-custom group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
