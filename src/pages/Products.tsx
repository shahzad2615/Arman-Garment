import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Search, Filter, X, Eye } from "lucide-react";

import schoolUniform from "@/assets/products/school-uniform.jpg";
import corporateWear from "@/assets/products/corporate-wear.jpg";
import hospitalUniform from "@/assets/products/hospital-uniform.jpg";
import hotelUniform from "@/assets/products/hotel-uniform.jpg";
import industrialWear from "@/assets/products/industrial-wear.jpg";

const categories = ["All", "School", "Corporate", "Hospital", "Hotel", "Industrial"];

const products = [
  { id: 1, name: "Classic School Blazer", category: "School", price: "₹1,200", image: schoolUniform, description: "Premium quality school blazer with institutional branding options" },
  { id: 2, name: "School Shirt & Tie Set", category: "School", price: "₹450", image: schoolUniform, description: "Comfortable cotton shirts with matching ties for students" },
  { id: 3, name: "Executive Business Suit", category: "Corporate", price: "₹4,500", image: corporateWear, description: "Tailored business suits for professionals" },
  { id: 4, name: "Corporate Polo Shirt", category: "Corporate", price: "₹650", image: corporateWear, description: "Branded polo shirts with custom logo embroidery" },
  { id: 5, name: "Medical Scrubs Set", category: "Hospital", price: "₹800", image: hospitalUniform, description: "Comfortable and hygienic medical scrubs" },
  { id: 6, name: "Lab Coat Premium", category: "Hospital", price: "₹950", image: hospitalUniform, description: "Professional lab coats for healthcare workers" },
  { id: 7, name: "Hotel Reception Suit", category: "Hotel", price: "₹3,200", image: hotelUniform, description: "Elegant suits for front desk staff" },
  { id: 8, name: "Housekeeping Uniform", category: "Hotel", price: "₹750", image: hotelUniform, description: "Practical and stylish housekeeping attire" },
  { id: 9, name: "Safety Coverall", category: "Industrial", price: "₹1,100", image: industrialWear, description: "High-visibility safety coveralls for industrial workers" },
  { id: 10, name: "Work Jacket", category: "Industrial", price: "₹850", image: industrialWear, description: "Durable work jackets with multiple pockets" },
  { id: 11, name: "School Sports Kit", category: "School", price: "₹600", image: schoolUniform, description: "Complete sports uniform set for schools" },
  { id: 12, name: "Corporate Blazer", category: "Corporate", price: "₹2,800", image: corporateWear, description: "Professional blazers with company branding" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Quality <span className="text-secondary">Uniforms</span> for Every Industry
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Browse our extensive collection of uniforms designed for schools, corporates, 
              healthcare, hospitality, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted sticky top-20 z-30 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-premium pl-12"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-foreground hover:bg-secondary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                          <Eye className="w-6 h-6 text-secondary-foreground" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-serif font-semibold text-foreground mt-1 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-secondary">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground mt-2 mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-3xl font-bold text-secondary mb-4">{selectedProduct.price}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
                <div className="flex gap-4">
                  <a href="/contact" className="btn-gold flex-1 text-center">
                    Get Quote
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="btn-outline-gold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Products;
