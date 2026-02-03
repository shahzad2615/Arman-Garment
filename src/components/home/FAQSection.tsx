import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum order quantity for bulk orders?",
    answer: "Our minimum order quantity varies by product type. For most uniforms, we require a minimum of 50 pieces per style/size. For larger institutional orders, we offer better pricing and can accommodate specific requirements.",
    category: "Orders",
  },
  {
    question: "How long does it take to deliver a bulk order?",
    answer: "Standard delivery time is 15-30 days depending on the order size and customization requirements. For urgent orders, we offer expedited production at additional cost. We always communicate realistic timelines before confirming orders.",
    category: "Delivery",
  },
  {
    question: "Do you provide customization like logo embroidery?",
    answer: "Yes, we offer full customization services including logo embroidery, screen printing, custom labels, and specific design modifications. Our in-house design team can help you create the perfect uniform for your organization.",
    category: "Customization",
  },
  {
    question: "What quality standards do you follow?",
    answer: "We maintain ISO 9001:2015 quality management standards. Every garment undergoes multiple quality checks including fabric testing, stitching inspection, and final finishing review before dispatch.",
    category: "Quality",
  },
  {
    question: "Do you deliver across India?",
    answer: "Yes, we deliver to all major cities and towns across India. We have partnerships with reliable logistics providers to ensure safe and timely delivery. Shipping costs vary based on location and order size.",
    category: "Delivery",
  },
  {
    question: "Can I visit your factory before placing an order?",
    answer: "Absolutely! We welcome clients to visit our manufacturing facility in Mumbai. This helps you understand our production capabilities and quality processes firsthand. Please schedule an appointment in advance.",
    category: "General",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Find answers to common questions about our products and services
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-premium pl-12"
            />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/10 text-secondary">
                    {faq.category}
                  </span>
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
