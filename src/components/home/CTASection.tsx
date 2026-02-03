import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-navy rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-navy/80 text-lg max-w-2xl mx-auto mb-8">
            Get a custom quote for your uniform requirements. We're here to help 
            you create the perfect attire for your organization.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary-custom group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="tel:+919876543210">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-navy/10 text-navy hover:bg-navy/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-navy/70">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-navy transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 98765 43210
            </a>
            <a
              href="mailto:info@armangarments.com"
              className="flex items-center gap-2 hover:text-navy transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@armangarments.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
