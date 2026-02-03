import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import schoolUniform from "@/assets/products/school-uniform.jpg";
import corporateWear from "@/assets/products/corporate-wear.jpg";
import hospitalUniform from "@/assets/products/hospital-uniform.jpg";
import hotelUniform from "@/assets/products/hotel-uniform.jpg";
import industrialWear from "@/assets/products/industrial-wear.jpg";

const categories = [
  {
    id: 1,
    name: "School Uniforms",
    description: "Complete school uniform solutions for institutions",
    image: schoolUniform,
  },
  {
    id: 2,
    name: "Corporate Wear",
    description: "Professional attire for business environments",
    image: corporateWear,
  },
  {
    id: 3,
    name: "Hospital Uniforms",
    description: "Comfortable and hygienic healthcare attire",
    image: hospitalUniform,
  },
  {
    id: 4,
    name: "Hotel Staff Wear",
    description: "Elegant hospitality industry uniforms",
    image: hotelUniform,
  },
  {
    id: 5,
    name: "Industrial Wear",
    description: "Durable safety workwear for industries",
    image: industrialWear,
  },
];

export const ProductCategoriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Product <span className="text-secondary">Categories</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all group"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  {category.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-secondary text-sm font-medium group/link"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {categories.slice(3, 5).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  {category.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-secondary text-sm font-medium group/link"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
