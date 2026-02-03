import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Fabric for School Uniforms",
    excerpt: "A comprehensive guide to selecting durable and comfortable fabrics for school uniforms that last the entire academic year.",
    category: "Tips & Guides",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
  },
  {
    id: 2,
    title: "The Importance of Corporate Dress Code",
    excerpt: "Understanding how professional attire impacts workplace culture and employee confidence in corporate settings.",
    category: "Corporate",
    date: "January 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
  },
  {
    id: 3,
    title: "Sustainability in Garment Manufacturing",
    excerpt: "How we're implementing eco-friendly practices in our manufacturing process to reduce environmental impact.",
    category: "Industry News",
    date: "January 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600",
  },
  {
    id: 4,
    title: "Hospital Uniform Standards: What You Need to Know",
    excerpt: "Key considerations for healthcare uniforms including hygiene, comfort, and professional appearance.",
    category: "Healthcare",
    date: "December 28, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
  },
  {
    id: 5,
    title: "Industrial Safety Wear: A Complete Guide",
    excerpt: "Essential guidelines for selecting the right industrial workwear to ensure worker safety and comfort.",
    category: "Industrial",
    date: "December 20, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600",
  },
  {
    id: 6,
    title: "Hotel Uniform Trends for 2024",
    excerpt: "Latest trends in hospitality uniforms that combine elegance with functionality for hotel staff.",
    category: "Hospitality",
    date: "December 15, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
  },
];

const Blogs = () => {
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
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Insights & <span className="text-secondary">Updates</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Stay informed with our latest articles on garment manufacturing, 
              industry trends, and helpful tips for choosing the right uniforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-xs font-medium text-secondary">
                      <Tag className="w-3 h-3" />
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-secondary text-sm font-medium group/link cursor-pointer">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
